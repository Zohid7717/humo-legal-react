import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../network/axios'

export const fetchRequestAll = createAsyncThunk('fetchRequestAll', async () => {
  const { data } = await axios.get('allRequest')
  return data
})

const initialState = {
  request: [],
  status: 'loading',
}

const requestSlice = createSlice({
  name: 'request',
  initialState,
  reducers: {
    setRequest(state, action) {
      state.request = action.payload;
    },
  },
  extraReducers: {
    [fetchRequestAll.pending]: (state) => {
      state.request = [];
      state.status = 'loading';
    },
    [fetchRequestAll.fulfilled]: (state, action) => {
      state.request = action.payload;
      state.status = 'success';
    },
    [fetchRequestAll.rejected]: (state) => {
      state.request = [];
      state.status = 'error';
    },
  }
})

export const { setRequest } = requestSlice.actions

export const requestReducer = requestSlice.reducer