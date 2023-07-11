import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../network/axios'

export const fetchPosts = createAsyncThunk('fetchPosts', async (params) => {
  const { data } = await axios.post('/getCategory', params)
  return data
})
export const fetchPostsAll = createAsyncThunk('fetchPostsAll', async () => {
  const { data } = await axios.get('/getAll')
  return data
})

const initialState = {
  category: 'all',
  posts: [],
  status: 'loading',
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    }
  },
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.posts = [];
      state.status = 'loading';
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.status = 'success';
    },
    [fetchPosts.rejected]: (state) => {
      state.posts = [];
      state.status = 'error';
    },
    [fetchPostsAll.pending]: (state) => {
      state.posts = [];
      state.status = 'loading';
    },
    [fetchPostsAll.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.status = 'success';
    },
    [fetchPostsAll.rejected]: (state) => {
      state.posts = [];
      state.status = 'error';
    }
  }
})

export const { setPosts, setCategory } = postsSlice.actions

export const postsReducer = postsSlice.reducer