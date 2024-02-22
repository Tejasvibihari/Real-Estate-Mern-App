import express from 'express';
import bcrypt from 'bcrypt';
import { signup } from '../controllers/auth.controller.js';


const router = express.Router();

router.post('/sign-up', signup);

export default router;