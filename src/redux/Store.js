import { configureStore } from '@reduxjs/toolkit';
import authReducer from './AuthSlice';
import transactionReducer from './TransactionSlice';
import globalReducer from './GlobalSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    transactions: transactionReducer,
    global: globalReducer,
  },
});

export default store;
