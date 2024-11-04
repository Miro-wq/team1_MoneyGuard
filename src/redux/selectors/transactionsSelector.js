const selectAllTransactions = state => state.transactions.items;
const selectTotalBalance = state => state.transactions.totalBalance;
const selectError = state => state.transactions.error;
const selectTrasactionIdForDelete = state =>
  state.transactions.trasactionIdForDelete;

const selectTransactionForUpdate = state =>
  state.transactions.transactionForUpdate;

export {
  selectAllTransactions,
  selectTotalBalance,
  selectError,
  selectTransactionForUpdate,
  selectTrasactionIdForDelete,
};
