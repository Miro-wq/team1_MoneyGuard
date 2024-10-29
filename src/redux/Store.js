import { configureStore } from '@reduxjs/toolkit';
import authReducer from './AuthSlice';
import transactionReducer from './TransactionSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    transactions: transactionReducer,
  },
});

export default store;