import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getTransactionsCategories,
  getTransactionsSummaryByPeriod,
} from './operations';

const initialState = {
  summaryByPeriod: [],
  categories: [],
  selectedMonth: new Date().getMonth() + 1,
  selectedYear: new Date().getFullYear(),
  isStatisticsLoading: false,
  isStatisticsError: null,
};

const slice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    setSelectedMonth: (state, action) => {
      state.selectedMonth = action.payload;
    },
    setSelectedYear: (state, action) => {
      state.selectedYear = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getTransactionsCategories.fulfilled, (state, action) => {
        state.isStatisticsLoading = false;
        state.categories = action.payload;
      })
      .addCase(
        getTransactionsSummaryByPeriod.fulfilled,
        (state, { payload }) => {
          state.isStatisticsLoading = false;
          state.summaryByPeriod = payload;
        }
      )
      .addMatcher(
        isAnyOf(
          getTransactionsCategories.rejected,
          getTransactionsSummaryByPeriod.rejected
        ),
        (state, { payload }) => {
          state.isStatisticsLoading = false;
          state.isStatisticsError = payload;
        }
      )
      .addMatcher(
        isAnyOf(
          getTransactionsCategories.pending,
          getTransactionsSummaryByPeriod.pending
        ),
        state => {
          state.isStatisticsLoading = true;
          state.isStatisticsError = null;
        }
      );
  },
});

export const { setSelectedMonth, setSelectedYear } = slice.actions;
export const statisticsReducer = slice.reducer;
