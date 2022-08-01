import PostSchema from '../models/Post.js';
import UserSchema from '../models/User.js'

import { v4 as uuidv4 } from 'uuid';

export const createPost = async (req, res) => {

    const userId = req.userId;

    try {
        const post = new PostSchema({
            title: req.body.title,
            text: req.body.text,
            category: req.body.category,
            user: userId,
            imageUrl: req.body.imageUrl,
        })

        const savedPost = await post.save();
        res.json(savedPost);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Failed to create post',
        })
    }
}


export const getAllPosts = async (req, res) => {
    try {
        const posts = await PostSchema.find().populate('user').exec();
        console.log(posts)
        res.json(posts);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Failed to read posts',
        })
    }
}


export const createComment = async (req, res) => {

    try {
        const postId = req.params.id;
        const userId = req.userId;

        const post = await PostSchema.findById(postId)
        const user = await UserSchema.findById(userId)

        post.comments.push({
            id: uuidv4(),
            user: user.fullName,
            avatar: user.avatar,
            comment: req.body.comment
        })

        const updatedPost = await PostSchema.findByIdAndUpdate(postId, post, { new: true })

        res.json(updatedPost)

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Failed to update post',
        })
    }
}
