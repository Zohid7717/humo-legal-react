import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth';
import { postsReducer } from './posts/slice';
import { reviewsReducer } from './reviews/slice';
import { formTypeReducer } from './formType/slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    postsReducer,
    reviewsReducer,
    formTypeReducer
  },
});

export default store;