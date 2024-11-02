import React, { useState } from 'react';
import styles from './StatisticsDashboard.module.css';
import Chart from '../Chart/Chart';

const StatisticsDashboard = () => {
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return (
        <>
            <div className={styles.statisticsDashboard}>
                <h2>Graficul Cheltuielilor</h2>
                <div>
                    <label htmlFor="month">Luna:</label>
                    <select 
                        id="month" 
                        value={selectedMonth} 
                        onChange={(e) => setSelectedMonth(Number(e.target.value))}
                    >
                        {months.map((month, index) => (
                            <option key={index} value={index + 1}>{month}</option>
                        ))}
                    </select>
                    <label htmlFor="year">Year:</label>
                    <select 
                        id="year" 
                        value={selectedYear} 
                        onChange={(e) => setSelectedYear(Number(e.target.value))}
                    >
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
