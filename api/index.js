import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './router/user.route.js';
import authRouter from './router/auth.route.js';


const app = express();
dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL)
    .then(() => { console.log("Connected to Database Real Estate"); })
    .catch((err) => { console.log(err); });


app.listen(3000, () => {
    console.log("Server is running on port 3000...");
})

app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
        success: true
    });
});