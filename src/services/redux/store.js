import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth';
import {postsReducer} from './posts/slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    postsReducer,
  },
});

export default store;