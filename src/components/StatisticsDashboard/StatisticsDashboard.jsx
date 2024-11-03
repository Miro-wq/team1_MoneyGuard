import React, { useState } from 'react';
import CustomDropdown from '../CustomDropdown/CustomDropdown';

const StatisticsDashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState(11);
  const [selectedYear, setSelectedYear] = useState(2024);

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

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <CustomDropdown
        options={months}
        selectedValue={selectedMonth}
        onSelect={setSelectedMonth}
      />
      <CustomDropdown
        options={years}
        selectedValue={selectedYear}
        onSelect={setSelectedYear}
      />
    </div>
  );
};

export default StatisticsDashboard;
