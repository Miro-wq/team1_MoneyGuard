import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTransactions, fetchCategories } from '../../redux/TransactionSlice';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions());

    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div>
      {/*aici restul paginii*/}
    </div>
  );
};

export default Home;
