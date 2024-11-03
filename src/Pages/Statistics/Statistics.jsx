import styles from './Statistics.module.css';
import StatisticsDashboard from '../../components/StatisticsDashboard/StatisticsDashboard';
import Chart from '../../components/Chart/Chart';

const Statistics = () => {
  return (
    <div className={styles.statisticsSection}>
      <h2>Statistics</h2>
      <Chart />
      <StatisticsDashboard />
    </div>
  );
};

export default Statistics;
