import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../../redux/cart/cartSelector';
import './style.css';

const ButtonCartCount = ({ cartCount }) => {
  // const history = useNavigate();
  const navigate = useNavigate();
  return (
    <div className="btnCartCount" onClick={() => navigate('/cart')}>
      <div className="count">{cartCount >= 100 ? '99+' : cartCount}</div>
      <i className="fas fa-shopping-cart"></i>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(ButtonCartCount);
// export default ButtonCartCount;
