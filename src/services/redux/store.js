import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth';
import { postsReducer } from './posts/slice';
import { reviewsReducer } from './reviews/slice';
import { formTypeReducer } from './formType/slice';
import { servicesReducer } from './services/slice';
import { staffReducer } from './staff/slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    postsReducer,
    reviewsReducer,
    formTypeReducer,
    servicesReducer,
    staffReducer
  },
});

export default store;