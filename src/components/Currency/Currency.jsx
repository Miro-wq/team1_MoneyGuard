// src/components/Currency/Currency.jsx
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from './Currency.module.css';

const Currency = () => {
  const [exchangeRates, setExchangeRates] = useState([]);
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  // Fetch data for currency exchange rates from an API endpoint (placeholder)
  useEffect(() => {
    // Exemplu de API - de înlocuit cu API-ul real
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
      .then(response => response.json())
      .then(data => {
        // Extragem doar câteva cursuri valutare importante
        setExchangeRates([
          { currency: 'EUR', rate: data.rates.EUR },
          { currency: 'GBP', rate: data.rates.GBP },
          { currency: 'RON', rate: data.rates.RON },
        ]);
      })
      .catch(error => console.error('Eroare la fetch:', error));
  }, []);

  return (
    <div
      className={
        styles[`currency-container ${isTabletOrDesktop ? 'desktop' : 'mobile'}`]
      }
    >
      <h2 className={styles['currency-title']}>Currency Rates</h2>
      <div className={styles['currency-rates']}>
        {exchangeRates.map(rate => (
          <div key={rate.currency} className={styles['currency-item']}>
            <span className={styles['currency-code']}>{rate.currency}</span>
            <span className={styles['currency-rate']}>
              {rate.rate.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Currency;
