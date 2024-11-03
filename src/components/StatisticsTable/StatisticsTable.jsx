import React from 'react';
import styles from './StatisticsTable.module.css';

const StatisticsTable = () => {
  const expenses = [
    { label: 'Main expenses', amount: 8700.00, color: '#fed057'},
    { label: 'Products', amount: 3800.74, color: '#ffd8d0'},
    { label: 'Car', amount: 1500.00, color: '#FFADAD' },
    { label: 'Self care', amount: 800.00, color: '#D0A8FF' },
    { label: 'Child care', amount: 2208.50, color: '#8F9BFF' },
    { label: 'Household products', amount: 300.00, color: '#6E7FFF' },
    { label: 'Education', amount: 3400.00, color: '#65E2FF' },
    { label: 'Leisure', amount: 1230.00, color: '#47D5A4' },
    { label: 'Other expenses', amount: 610.00, color: '#28B491' },
  ];

  // ce este mai sus este doar pentru proba, trebuie modificat cu ce se introduce in modal

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0).toFixed(2);
  const income = 27350.00;

  return (
    <div className={styles.expenseListContainer}>
      {expenses.map((expense, index) => (
        <div key={index} className={styles.expenseItem}>
          <span className={styles.colorBox} style={{ backgroundColor: expense.color }}></span>
          <span className={styles.label}>{expense.label}</span>
          <span className={styles.amount}>{expense.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        </div>
      ))}
      <div className={styles.summary}>
        <div className={styles.summaryItem}>
          <span>Expenses:</span>
          <span className={styles.expensesAmount}>{totalExpenses}</span>
        </div>
        <div className={styles.summaryItem}>
          <span>Income:</span>
          <span className={styles.incomeAmount}>{income.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        </div>
      </div>
    </div>
  );
};

export default StatisticsTable;
