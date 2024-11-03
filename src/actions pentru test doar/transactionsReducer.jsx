// reducers/transactionsReducer.js

import { ADD_TRANSACTION } from './transactionActions';

const initialState = [];

const transactionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return [...state, action.payload]; // Adaugă tranzacția la lista de tranzacții
    default:
      return state; // Returnează starea actuală
  }
};

export default transactionsReducer;
