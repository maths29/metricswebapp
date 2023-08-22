import { configureStore } from '@reduxjs/toolkit';
import koinsReducer from './everykoins/fetchKoin';

const store = configureStore({
  reducer: {
    fetchkoin: koinsReducer,
  },
});

export default store;
