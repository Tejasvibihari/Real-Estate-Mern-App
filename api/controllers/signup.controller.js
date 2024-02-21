import bcrypt from 'bcrypt';
import User from '../models/user.model.js';
const saltRounds = 10;
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