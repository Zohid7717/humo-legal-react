import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activePage: '',
}

const selectPage = createSlice({
  name: 'activePage',
  initialState,
  reducers: {
    setActivePage(state, action) {
      state.activePage = action.payload;
    }
  }
})

export const { setActivePage } = selectPage.actions

export const selectPageReducer=selectPage.reducer