import express from 'express';

import {
    createPost,
    createComment,
    getAllPosts
} from '../controllers/posts.js';

import { verifyToken } from '../services/verifyToken.js'

const router = express.Router();

router.post('/', verifyToken, createPost);
router.patch('/:id', verifyToken, createComment);
router.get('/', getAllPosts);


export default router;