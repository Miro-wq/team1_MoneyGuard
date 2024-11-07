import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomDropdown from '../CustomDropdown/CustomDropdown';
import { getTransactionsSummaryByPeriod } from '../../redux/Statistics/operations';
import {
  setSelectedMonth,
  setSelectedYear,
} from '../../redux/Statistics/slice';
import styles from './StatisticsDashboard.module.css';

const StatisticsDashboard = () => {
  const dispatch = useDispatch();
  const selectedMonth = useSelector(state => state.statistics.selectedMonth);
  const selectedYear = useSelector(state => state.statistics.selectedYear);

  const months = [
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
    { value: 11, label: 'November' },
    { value: 12, label: 'December' },
  ];

  const years = [
    { value: 2020, label: '2020' },
    { value: 2021, label: '2021' },
    { value: 2022, label: '2022' },
    { value: 2023, label: '2023' },
    { value: 2024, label: '2024' },
  ];

  useEffect(() => {
    dispatch(
      getTransactionsSummaryByPeriod({
        month: selectedMonth,
        year: selectedYear,
      })
    );
  }, [dispatch, selectedMonth, selectedYear]);

  const handleMonthChange = month => {
    dispatch(setSelectedMonth(month));
  };

  const handleYearChange = year => {
    dispatch(setSelectedYear(year));
  };

  return (
    <div className={styles.statisticsDashboard}>
      <CustomDropdown
        options={months}
        selectedValue={selectedMonth}
        onSelect={handleMonthChange}
      />
      <CustomDropdown
        options={years}
        selectedValue={selectedYear}
        onSelect={handleYearChange}
      />
    </div>
  );
};

export default StatisticsDashboard;
