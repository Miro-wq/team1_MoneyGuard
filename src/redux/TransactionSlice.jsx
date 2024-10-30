import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTransactions = createAsyncThunk('transactions/fetch', async () => {
  const response = await axios.get('/api/transactions'); // pt api, inca nu e implementat!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  return response.data;
});

export const fetchCategories = createAsyncThunk('categories/fetch', async () => {
  const response = await axios.get('/api/categories'); // pt api, inca nu e implementat!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  return response.data;
});

const transactionSlice = createSlice({
  name: 'transactions',
  initialState: {
    items: [],
    categories: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      });
  },
});

export default transactionSlice.reducer;
