import React from 'react';
import { useNavigate } from 'react-router';
import './styles.css';

const EmptyCart = () => {
  const history = useNavigate();
  return (
    <div className="emptyCart">
      <img
        src="https://aleointernational.com/img/empty-cart-yellow.png"
        alt=""
      />
      <button onClick={() => history('/')}>
        <i className="fas fa-long-arrow-alt-left"></i> Shop Now
      </button>
    </div>
  );
};

export default EmptyCart;
