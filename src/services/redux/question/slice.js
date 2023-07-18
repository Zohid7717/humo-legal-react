import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../network/axios'

export const fetchQuestionAll = createAsyncThunk('fetchQuestionAll', async () => {
  const { data } = await axios.get('allQuestion')
  return data
})

export const fetchQuestionLimit = createAsyncThunk('fetchQuestionLimit', async () => {
  const { data } = await axios.get('getLimit')
  return data
})

const initialState = {
  question: [],
  status: 'loading',
}

const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    setQuestion(state, action) {
      state.question = action.payload;
    },
  },
  extraReducers: {
    [fetchQuestionAll.pending]: (state) => {
      state.question = [];
      state.status = 'loading';
    },
    [fetchQuestionAll.fulfilled]: (state, action) => {
      state.question = action.payload;
      state.status = 'success';
    },
    [fetchQuestionAll.rejected]: (state) => {
      state.question = [];
      state.status = 'error';
    },
    [fetchQuestionLimit.pending]: (state) => {
      state.question = [];
      state.status = 'loading';
    },
    [fetchQuestionLimit.fulfilled]: (state, action) => {
      state.question = action.payload;
      state.status = 'success';
    },
    [fetchQuestionLimit.rejected]: (state) => {
      state.question = [];
      state.status = 'error';
    },
  }
})

export const { setQuestion } = questionSlice.actions

export const questionReducer = questionSlice.reducer