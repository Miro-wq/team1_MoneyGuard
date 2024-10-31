export const selectTransactions = state => state.transactions.items;
export const selectTotalBalance = state => state.transactions.totalBalance;
export const selectLoading = state => state.transactions.loading;
export const selectError = state => state.transactions.error;
