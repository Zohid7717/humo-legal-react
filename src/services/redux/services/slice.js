import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../network/axios'

export const fetchServicesAll = createAsyncThunk('fetchServicesAll', async () => {
  const { data } = await axios.get('allServices')
  return data
})

const initialState = {
  services: [],
  status: 'loading',
}

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    setServices(state, action) {
      state.services = action.payload;
    },
  },
  extraReducers: {
    [fetchServicesAll.pending]: (state) => {
      state.services = [];
      state.status = 'loading';
    },
    [fetchServicesAll.fulfilled]: (state, action) => {
      state.services = action.payload;
      state.status = 'success';
    },
    [fetchServicesAll.rejected]: (state) => {
      state.services = [];
      state.status = 'error';
    },
  }
})

export const { setServices } = servicesSlice.actions

export const servicesReducer = servicesSlice.reducer