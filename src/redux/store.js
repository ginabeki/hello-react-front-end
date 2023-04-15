import { configureStore } from '@reduxjs/toolkit';
import { greetingReducer } from './reducer/greetingReducer';

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});

export default store;
