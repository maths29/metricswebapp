import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { flowChart } from '../redux/everykoins/fetchKoin';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(flowChart());
  }, [dispatch]);

  return (
    <div>
      Home
    </div>
  );
};

export default Home;
