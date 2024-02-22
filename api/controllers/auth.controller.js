import bcrypt from 'bcrypt';
import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';
const saltRounds = 10;

// SignUp Controller 
export const signup = async (req, res, next) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    try {
        const hash = await bcrypt.hash(password, saltRounds);
        const newUser = new User({
            username: username,
            email: email,
            password: hash
        })
        await newUser.save()
        res.json('Signup successful');
    } catch (error) {
        next(error)
    }
}

// SignIn Controller

export const signin = async (req, res, next) => {

    const email = req.body.email;
    const password = req.body.password;
    try {
        const user = await User.findOne({ email: email });
        if (user === null) {
            // console.log('User not found');
            return next(errorHandler(404, 'User not found'));
        } else {
            const hashValidPassword = await bcrypt.compare(password, user.password);
            if (!hashValidPassword) {
                //console.log('Invalid Password');
                return next(errorHandler(404, 'Invalid Password'));
            }
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
            res.cookie('access_token', token, { httpOnly: true, maxAge: 60 * 60 * 24 * 7 })
                .status(200)
                .json(hashValidPassword);
            // res.json({ token });
            // console.log(token);

        }
    } catch (error) {
        next(error)
    }
}