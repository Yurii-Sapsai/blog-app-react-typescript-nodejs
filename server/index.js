import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';

import authRoutes from './routes/auth.js';
import postsRoutes from './routes/posts.js'



const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();



app.use('/auth', authRoutes)
app.use('/posts', postsRoutes)





const storage = multer.diskStorage({
    destination: (_, __, cb) => {
        cb(null, 'uploads');
    },
    filename: (_, file, cb) => {
        cb(null, file.originalname);
    },
})

const upload = multer({ storage });

app.post('/upload', upload.single('image'), (req, res) => {
    res.json({
        url: `/uploads/${req.file.originalname}`
    })
})
app.use('/uploads', express.static('uploads'));


























mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('db OK!'))
    .catch((err) => console.log('db ERROR!', err))

app.listen(4444, (error) => {
    if (error) {
        return console.log(error);
    }
    console.log("Server start!");
})