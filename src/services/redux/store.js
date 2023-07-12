import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth';
import { postsReducer } from './posts/slice';
import { reviewsReducer } from './reviews/slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    postsReducer,
    reviewsReducer,
  },
});

export default store;