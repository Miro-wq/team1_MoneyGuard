import React from 'react';
import { useDispatch } from 'react-redux';
import ButtonAddTransactions from '../../components/ButtonAddTransactions/ButtonAddTransactions';
import TransactionsList from '../../components/TransactionsList/TransactionsList';
import { addTransaction } from '../../actions pentru test doar/transactionAction';
import styles from './Home.module.css';

const Home = () => {
  const dispatch = useDispatch();

  const handleAddTestTransaction = () => {
    const testTransaction = {
      id: new Date().getTime(),
      description: 'Test Transaction',
      amount: 100,
      date: new Date().toISOString(),
    };
    dispatch(addTransaction(testTransaction));
  };

  return (
    <div className={styles.homeTabContainer}>
      <TransactionsList />
      <ButtonAddTransactions />
      <button onClick={handleAddTestTransaction}>Add Test Transaction</button>
    </div>
  );
};

export default Home;
