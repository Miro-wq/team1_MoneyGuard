import { createSlice } from '@reduxjs/toolkit';
import {
  fetchTransactions,
  addTransaction,
  editTransaction,
  deleteTransaction,
  fetchCategories,
} from '../operations/transactionsOperations.js';

const initialState = {
  items: [],
  categories: [],
  totalBalance: 0,
  loading: false,
  error: null,
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTransactions.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.items = action.payload.transactions;
        state.totalBalance = action.payload.balance;
        state.loading = false;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        const transaction = action.payload;
        const { type, amount } = transaction;

        state.items.push(transaction);
        state.totalBalance += type === 'income' ? amount : -amount;
      })
      .addCase(editTransaction.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          item => item.id === action.payload.id
        );
        if (index !== -1) {
          const oldTransaction = state.items[index];
          const newTransaction = action.payload;
          const { amount: oldAmount, type: oldType } = oldTransaction;
          const { amount: newAmount, type: newType } = newTransaction;

          if (oldType === 'income') {
            state.totalBalance -= oldAmount;
          } else {
            state.totalBalance += oldAmount;
          }

          if (newType === 'income') {
            state.totalBalance += newAmount;
          } else {
            state.totalBalance -= newAmount;
          }

          state.items[index] = newTransaction;
        }
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        const { id, type, amount } = action.payload;

        const index = state.items.findIndex(item => item.id === id);
        if (index !== -1) {
          state.totalBalance += type === 'income' ? -amount : amount;

          state.items.splice(index, 1);
        }
      })
      .addCase(fetchCategories.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload.categories;
        state.loading = false;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default transactionsSlice.reducer;
