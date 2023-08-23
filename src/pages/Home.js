import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { flowChart } from '../redux/everykoins/fetchKoin';

const Home = () => {
  const dispatch = useDispatch();
  const { standardFlow } = useSelector((state) => state.fetchkoin);
  const [search, setSearch] = useState('');

  const searchCoins = standardFlow.filter((item) => (item.name.toLowerCase().includes(search.toLowerCase())));

  useEffect(() => {
    dispatch(flowChart());
  }, [dispatch]);

  return (
    <div>
      <input type="text" value={search} placeholder='search' onChange={(e)=> setSearch(e.target.value)}/>
      <div>
        {searchCoins.map((item)=>(
          <div key={item.id}>
          <span>{item.symbol}</span>
          <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
