import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchTransactions,
  deleteTransaction,
} from '../../redux/operations/transactionsOperations';
import {
  selectTransactions,
  selectLoading,
  selectError,
} from '../../redux/selectors/transactionsSelector';
import style from './TransactionsList.module.css';
import TransactionsItem from '../TransactionsItem/TransactionsItem';

const TransactionsList = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(selectTransactions) || [];
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  const handleDelete = (id, type, amount) => {
    dispatch(deleteTransaction({ id, type, amount }));
  };

  if (loading) return <p>Loading...</p>;
  if (error) {
    const errorMessage =
      typeof error === 'object' && error.message
        ? error.message
        : JSON.stringify(error);
    return <p>Error: {errorMessage}</p>;
  }
  if (Array.isArray(transactions) && transactions.length === 0) {
    return <p>No transactions found.</p>;
  }

  return (
    <div className={style['transactions-list']}>
      {transactions.map(transaction => (
        <TransactionsItem
          key={transaction.id}
          transaction={transaction}
          onDelete={() =>
            handleDelete(transaction.id, transaction.type, transaction.amount)
          }
        />
      ))}
    </div>
  );
};

export default TransactionsList;
