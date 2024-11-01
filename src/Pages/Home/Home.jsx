import ButtonAddTransactions from '../../components/ButtonAddTransactions/ButtonAddTransactions';
import TransactionsList from '../../components/TransactionsList/TransactionsList';
import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeTabContainer}>
      <TransactionsList />
      <ButtonAddTransactions />
    </div>
  );
};

export default Home;
