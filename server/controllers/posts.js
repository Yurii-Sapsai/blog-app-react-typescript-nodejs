import PostSchema from '../models/Post.js';



export const createPost = async (req, res) => {

    const userId = req.userId;

    try {
        const post = new PostSchema({
            title: req.body.title,
            text: req.body.text,
            category: req.body.category,
            user: req.userId,
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

