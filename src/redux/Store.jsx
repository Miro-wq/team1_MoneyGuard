import { configureStore } from '@reduxjs/toolkit';
import transactionsReducer from './transactions/transactionsSlice';

const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
  },
});

export default store;