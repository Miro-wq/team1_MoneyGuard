import React, { useState } from 'react';
import styles from './StatisticsDashboard.module.css';
import Chart from '../Chart/Chart';

const StatisticsDashboard = () => {
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

    return (
        <>
            <div className={styles.statisticsDashboard}>
                <h2>Graficul Cheltuielilor</h2>
                <div>
                    <label htmlFor="month">Luna:</label>
                    <select id="month" value={selectedMonth} onChange={(e) => setSelectedMonth(Number(e.target.value))}>
                        {[...Array(12).keys()].map((month) => (
                            <option key={month} value={month + 1}>{month + 1}</option>
                        ))}
                    </select>
                    <label htmlFor="year">Anul:</label>
                    <select id="year" value={selectedYear} onChange={(e) => setSelectedYear(Number(e.target.value))}>
                        {[2020, 2021, 2022, 2023, 2024].map((year) => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                </div>
                <Chart selectedMonth={selectedMonth} selectedYear={selectedYear} />
            </div>
        </>
    );
};

export default StatisticsDashboard;
