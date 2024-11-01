import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/AuthSlice';
import transactionsReducer from './slices/transactionsSlice';
import globalReducer from './slices/GlobalSlice.jsx';

const store = configureStore({
  reducer: {
    auth: authReducer,
    transactions: transactionsReducer,
    global: globalReducer,
  },
});

export default store;
