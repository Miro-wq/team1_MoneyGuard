import React from 'react';
import { useSelector } from 'react-redux';
import styles from './StatisticsTable.module.css';
import { selectSummaryByPeriod } from '../../redux/selectors/transactionsSelector';

const StatisticsTable = () => {
  const summaryByPeriod = useSelector(selectSummaryByPeriod);
  console.log('Summary by period:', summaryByPeriod);

  const totalIncome = summaryByPeriod?.incomeSummary || 0;
  const totalExpenses = summaryByPeriod?.expenseSummary || 0;
  const expensesByCategory = summaryByPeriod?.categoriesSummary || [];

  const categories = [
    { label: 'Main expenses', color: '#fed057' },
    { label: 'Products', color: '#ffd8d0' },
    { label: 'Car', color: '#FFADAD' },
    { label: 'Self care', color: '#D0A8FF' },
    { label: 'Child care', color: '#8F9BFF' },
    { label: 'Household products', color: '#6E7FFF' },
    { label: 'Education', color: '#65E2FF' },
    { label: 'Other expenses', color: '#28B491' },
  ];

  return (
    <table className={styles.statisticsTable}>
      <thead className={styles.tableHead}>
        <tr>
          <th>Category</th>
          <th className={styles.end}>Sum</th>
        </tr>
      </thead>
      <tbody>
        {categories.map(({ label, color }) => {
          const categoryData = expensesByCategory.find(
            category => category.name.toLowerCase() === label.toLowerCase()
          );
          const amount = categoryData ? Math.abs(categoryData.total) : 0;

          return (
            <tr key={label} className={styles.tableRow}>
              <td>
                <span
                  className={styles.colorBox}
                  style={{ backgroundColor: color }}
                ></span>
                {label}
              </td>
              <td className={styles.end}>
                {amount.toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </td>
            </tr>
          );
        })}
        <tr className={styles.totalRow}>
          <td>Expenses:</td>
          <td className={`${styles.end} ${styles.expensesTotal}`}>
            {totalExpenses.toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </td>
        </tr>
        <tr className={styles.incomeRow}>
          <td>Income:</td>
          <td className={`${styles.end} ${styles.incomeTotal}`}>
            {totalIncome.toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default StatisticsTable;
