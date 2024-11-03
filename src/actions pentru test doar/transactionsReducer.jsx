const initialState = {
  items: [],
  loading: false,
  error: null,
};

const transactionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TRANSACTIONS_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_TRANSACTIONS_SUCCESS':
      return { ...state, loading: false, items: action.payload };
    case 'FETCH_TRANSACTIONS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'ADD_TRANSACTION':
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
};

export default transactionsReducer;
