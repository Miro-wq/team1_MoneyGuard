import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
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
  const transactions = useSelector(selectTransactions);
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
  if (transactions.length === 0) return <p>No transactions found.</p>;

  return (
    <div className={style['transactions-list']}>
      {loading ? (
        <p>Loading...</p>
      ) : transactions.length ? (
        transactions.map(transaction => (
          <TransactionsItem
            key={transaction.id}
            transaction={transaction}
            onDelete={() =>
              handleDelete(transaction.id, transaction.type, transaction.amount)
            }
          />
        ))
      ) : (
        <div className="placeholder">No transactions available</div>
      )}
    </div>
  );
};

TransactionsList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['income', 'expense']).isRequired,
      category: PropTypes.string,
      comment: PropTypes.string,
      amount: PropTypes.number.isRequired,
    })
  ),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default TransactionsList;
