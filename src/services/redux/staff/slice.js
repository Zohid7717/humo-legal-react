import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../network/axios'

export const fetchStaffAll = createAsyncThunk('fetchStaffAll', async () => {
  const { data } = await axios.get('allStaff')
  return data
})

const initialState = {
  staff: [],
  status: 'loading',
}

const staffSlice = createSlice({
  name: 'staff',
  initialState,
  reducers: {
    setStaff(state, action) {
      state.staff = action.payload;
    },
  },
  extraReducers: {
    [fetchStaffAll.pending]: (state) => {
      state.staff = [];
      state.status = 'loading';
    },
    [fetchStaffAll.fulfilled]: (state, action) => {
      state.staff = action.payload;
      state.status = 'success';
    },
    [fetchStaffAll.rejected]: (state) => {
      state.staff = [];
      state.status = 'error';
    },
  }
})

export const { setStaff } = staffSlice.actions

export const staffReducer = staffSlice.reducer