import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth';
import { postsReducer } from './posts/slice';
import { reviewsReducer } from './reviews/slice';
import { formTypeReducer } from './formType/slice';
import { servicesReducer } from './services/slice';
import { staffReducer } from './staff/slice';
import { requestReducer } from './request/slice';
import { questionReducer } from './question/slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    postsReducer,
    reviewsReducer,
    formTypeReducer,
    servicesReducer,
    requestReducer,
    questionReducer,
    staffReducer
  },
});

export default store;