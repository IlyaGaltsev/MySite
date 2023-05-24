import { configureStore } from '@reduxjs/toolkit';
import screenReducer from './screenSlice';

const store = configureStore({
  reducer: {
    screen: screenReducer,
    // Другие редьюсеры вашего приложения, если есть
  },
});

export default store;