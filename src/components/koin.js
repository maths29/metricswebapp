import React from 'react';
import PropTypes from 'prop-types'; 

const koin = () => ({
  name, image, price,
}) => (

<div className="koin">
    <img src={image} alt="crypto" />
    <div className="lastkoin">
      <h3>{name}</h3>
      <p className="koin-price">
        $
        {price}
      </p>
    </div>
  </div>

);

koin.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};


export default koin;
