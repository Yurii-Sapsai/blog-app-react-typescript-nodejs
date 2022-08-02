import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        require: true,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    viewsCount: {
        type: Number,
        default: 0
    },
    imageUrl: {
        type: String,
    },
    comments: {
        type: Array,
        default: []
    }
}, {
    timestamps: true,
})

export default mongoose.model('Post', PostSchema);