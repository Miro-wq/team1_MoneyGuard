import styles from './Statistics.module.css';
import StatisticsDashboard from '../../components/StatisticsDashboard/StatisticsDashboard';

const Statistics = () => {
  return (
    <div className={styles.statisticsSection}>
      <h2>test pt sectiunea Statistics Page</h2>
      <StatisticsDashboard />
    </div>
  );
};

export default Statistics;
