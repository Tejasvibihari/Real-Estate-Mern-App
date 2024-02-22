import express from 'express';
import bcrypt from 'bcrypt';
import { signup, signin } from '../controllers/auth.controller.js';


const router = express.Router();

router.post('/sign-up', signup);
router.post('/sign-in', signin);

export default router;