import ButtonAddTransactions from '../../components/ButtonAddTransactions/ButtonAddTransactions';
import TransactionsList from '../../components/TransactionsList/TransactionsList';
import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeTabContainer}>
      <TransactionsList />
      <ButtonAddTransactions />
      <div className={styles.homeSection}>
        <h2>test pt sectiunea HOME</h2>
      </div>
    </div>
  );
};

export default Home;
