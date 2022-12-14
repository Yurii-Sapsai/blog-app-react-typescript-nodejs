import express from 'express';

import {
    login,
    registration,
} from '../controllers/auth.js';



const router = express.Router();

router.post('/login', login);
router.post('/registration', registration);


export default router;