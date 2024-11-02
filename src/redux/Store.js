import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/AuthSlice';
import transactionsReducer from './slices/transactionsSlice';
import globalReducer from './slices/GlobalSlice.jsx';
import expensesReducer from './slices/expensesSlice.jsx';

const store = configureStore({
  reducer: {
    auth: authReducer,
    transactions: transactionsReducer,
    global: globalReducer,
    expenses: expensesReducer,
  },
});

export default store;
