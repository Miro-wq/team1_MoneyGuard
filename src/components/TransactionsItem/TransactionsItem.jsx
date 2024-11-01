import React from 'react';
import PropTypes from 'prop-types';

const TransactionsItem = ({ transaction, onDelete }) => {
  const { date, type, category, comment, amount } = transaction;

  return (
    <div
      className={`transaction-item ${type === 'income' ? 'income' : 'expense'}`}
    >
      <p>Date: {new Date(date).toLocaleDateString()}</p>
      <p>Type: {type}</p>
      <p>Category: {category}</p>
      <p>Comment: {comment}</p>
      <p>Amount: {type === 'income' ? `+${amount}` : `-${amount}`}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

TransactionsItem.propTypes = {
  transaction: PropTypes.shape({
    date: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['income', 'expense']).isRequired,
    category: PropTypes.string,
    comment: PropTypes.string,
    amount: PropTypes.number.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TransactionsItem;
