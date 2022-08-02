import axios from 'axios';
import { AppDispatch } from '../store';
import { postSlice } from '../postSlice/postSlice'
import { IPost } from '../../interfaces/IPost';

import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchPostAPI = createAsyncThunk(
    'posts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IPost[]>('http://localhost:4444/posts')
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('error message')
        }
    }
)

/* export const createPost = (newPost: IPost) => {
    try {
        axios.post('http://localhost:4444/posts', newPost)
    } catch (error) {

    }
} */