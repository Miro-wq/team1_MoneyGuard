import React from 'react';
import { useSelector } from 'react-redux';
import { selectTotalBalance } from '../../redux/selectors/transactionsSelector';

const Balance = () => {
  const totalBalance = useSelector(selectTotalBalance);
  return (
    <div className="balance">
      <h3>Total balance: {totalBalance}</h3>
    </div>
  );
};

export default Balance;
