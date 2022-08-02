import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { fetchPostAPI } from './asyncAction'

import {IPost} from '../../interfaces/IPost'

type PostsState = {
  posts: IPost[],
  isLoading: Boolean,
  error: String
}

const initialState: PostsState = {
  posts: [],
  isLoading: false,
  error: ''
}

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPostAPI.fulfilled.type]: (state, action: PayloadAction<IPost[]>) => {
      state.isLoading = false
      state.posts = action.payload
      state.error = ''
    },
    [fetchPostAPI.pending.type]: (state) => {
      state.isLoading = true

    },
    [fetchPostAPI.rejected.type]: (state, action: PayloadAction<String>) => {
      state.isLoading = false
      state.error = action.payload
    },
  }
},
)

export const { } = postSlice.actions;

export const selectPost = (state: RootState) => state.posts;

export default postSlice.reducer;


