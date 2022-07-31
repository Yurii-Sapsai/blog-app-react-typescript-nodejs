import express from 'express';

import {
    createPost,
    getAllPosts
} from '../controllers/posts.js';

import { verifyToken } from '../services/verifyToken.js'

const router = express.Router();

router.post('/', verifyToken, createPost);
router.get('/', getAllPosts);


export default router;