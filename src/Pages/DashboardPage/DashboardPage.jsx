import React, { Suspense } from 'react';
import Balance from '../../components/Balance/Balance';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Currency from '../../components/Currency/Currency';
import { Outlet } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Loader from '../../components/Loader/Loader';
import styles from './DashboardPage.module.css';

const DashboardPage = () => {
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <>
      <Header />
      <div className={styles.deskContainer}>
        <div className={styles.dashBoardContainer}>
          <div className={styles.dashBoardBox}>
            <Navigation />
            <Balance />
          </div>
          {isTablet && <Currency />}
        </div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default DashboardPage;
