const Chart = () => {};
export default Chart;

// import React, { useEffect, useState } from 'react';
// import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS, registerables } from 'chart.js';
// import { useSelector } from 'react-redux';
// import styles from './Chart.module.css';

// ChartJS.register(...registerables);

// const Chart = ({ selectedMonth, selectedYear }) => {
//     const [chartData, setChartData] = useState({});
//     const expenses = useSelector((state) => state.expenses);

//     useEffect(() => {
//         const fetchData = () => {
//             if (!Array.isArray(expenses)) {
//                 console.error('Expenses is not an array or is undefined:', expenses);
//                 return;
//             }

//             const filteredExpenses = expenses.filter(expense => {
//                 const expenseDate = new Date(expense.date);
//                 return expenseDate.getMonth() + 1 === selectedMonth && expenseDate.getFullYear() === selectedYear;
//             });

//             const labels = filteredExpenses.map(expense => expense.category);
//             const data = filteredExpenses.map(expense => expense.amount);

//             setChartData({
//                 labels: labels,
//                 datasets: [
//                     {
//                         label: 'Cheltuieli',
//                         data: data,
//                         borderColor: 'rgba(75,192,192,1)',
//                         backgroundColor: 'rgba(75,192,192,0.2)',
//                         fill: true,
//                     },
//                 ],
//             });
//         };

//         fetchData();
//     }, [selectedMonth, selectedYear, expenses]);

//     return (
//         <div className={styles.chartContainer}>
//             <h2 className={styles.chartTitle}>Cheltuieli Lunare</h2>
//             <Line data={chartData} />
//         </div>
//     );
// };

// export default Chart;
