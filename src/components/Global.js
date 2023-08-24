import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { globalCoinsAction } from '../redux/global/global';

const Global = () => {
  const dispatch = useDispatch();
  const global = useSelector((state) => state.global.global);

  React.useEffect(() => {
    dispatch(globalCoinsAction());
  }, [dispatch]);

  return (
    <div className="slide">
      <img className="main-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzshFs6xY34CsS5V-8Nc32Yl19MiqXSEMNPQ&usqp=CAU" alt="crypto" />

      <div className="active-crypto">
        <h4>In The Markets</h4>
        <p>
          {global}
          {' '}
          currencies
        </p>
      </div>

    </div>
  );
};

export default Global;
