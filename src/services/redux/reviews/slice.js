import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../network/axios'

export const fetchReviewCreate = createAsyncThunk('fetchReviewCreate', async (params) => {
  const { data } = await axios.post('/createReview', params);
  return data;
})

export const fetchReviewsAll = createAsyncThunk('fetchReviewsAll', async () => {
  const { data } = await axios.get('allReviews')
  return data
})

export const fetchReviewRemove = createAsyncThunk('fetchReviewRemove', async (id) => {
  await axios.delete(`/removeReview/${id}`)
})

const initialState = {
  reviews: [],
  status: 'loading',
}

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    setReviews(state, action) {
      state.posts = action.payload;
    },
  },
  extraReducers: {
    [fetchReviewsAll.pending]: (state) => {
      state.reviews = [];
      state.status = 'loading';
    },
    [fetchReviewsAll.fulfilled]: (state, action) => {
      state.reviews = action.payload;
      state.status = 'success';
    },
    [fetchReviewsAll.rejected]: (state) => {
      state.reviews = [];
      state.status = 'error';
    },
  }
})

export const { setReviews } = reviewsSlice.actions

export const reviewsReducer = reviewsSlice.reducer