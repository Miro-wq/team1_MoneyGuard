import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../src/components/App/App';
import store from './redux/Store';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter basename="/team1_MoneyGuard">
      <App />
    </BrowserRouter>
  </Provider>
);
