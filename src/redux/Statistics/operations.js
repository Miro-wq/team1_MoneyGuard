/*Temporar*/
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  userTransactionsApi,
  setToken,
} from '../../config/userTransactionsApi';

export const getTransactionsSummaryByPeriod = createAsyncThunk(
  'statistics/getTransactionsSummaryByPeriod',
  async ({ month, year }, thunkApi) => {
    const savedToken = thunkApi.getState().auth.token;
    if (savedToken) {
      setToken(savedToken);
    }
    try {
      const { data } = await userTransactionsApi.get(
        `/api/transactions-summary?month=${month}&year=${year}`
      );
      console.log('Răspuns de la API pentru period summary:', data);
      return data;
    } catch (error) {
      console.error('Eroare la obținerea datelor:', error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getTransactionsCategories = createAsyncThunk(
  '/api/transaction-categories',
  async (_, thunkApi) => {
    try {
      console.log('am intrat la categories');
      const response = await userTransactionsApi.get(
        '/api/transaction-categories'
      );
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
