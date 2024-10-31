import axios from '../axiosConfig';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://wallet.b.goit.study/api';

// Fetch Transactions
export const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async (_, { rejectWithValue }) => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get(`${BASE_URL}/transactions`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data; // Returnează datele obținute de la API
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

// Add Transaction
export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async (transactionData, { rejectWithValue }) => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post('/transactions', transactionData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data; // Returnează datele tranzacției adăugate
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message); // Trimite eroarea în Redux
    }
  }
);

// Edit Transaction
export const editTransaction = createAsyncThunk(
  'transactions/editTransaction',
  async ({ id, transactionData }, { rejectWithValue }) => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.put(`/transactions/${id}`, transactionData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data; // Returnează datele tranzacției editate
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message); // Trimite eroarea în Redux
    }
  }
);

// Delete Transaction
export const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransaction',
  async (id, { rejectWithValue }) => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete(`/transactions/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return id; // Returnează ID-ul tranzacției pentru a-l elimina din state-ul Redux
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message); // Trimite eroarea în Redux
    }
  }
);

export const fetchCategories = createAsyncThunk(
  'categories/fetch',
  async () => {
    const response = await axios.get('/api/categories'); // pt api, inca nu e implementat!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    return response.data;
  }
);
