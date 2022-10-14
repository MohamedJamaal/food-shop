import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import EmptyCart from '../../components/Cart/EmptyCart';
import Footer from '../../components/common/Footer';
import Logo from '../../components/common/Logo';
import Menu from '../../components/common/Menu';
import MenuItem from '../../components/common/Menu/MenuItem';
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
} from '../../redux/cart/cartSelector';
import './styles.css';

const Cart = ({ cartCount, cartList, cartTotal }) => {
  // const Cart = ({ list }) => {
  return (
    <>
      <div className="cart-header">
        <Logo />
      </div>
      {cartCount === 0 ? (
        <EmptyCart />
      ) : (
        <div className="orders">
          <h1 className="orders-heading">Your Orders</h1>
          <div className="orders-menu">
            <Menu list={cartList} />
            {/* <hr /> */}
            {/* <Menu list={menuItemsData} /> */}
          </div>
          {/* <hr /> */}
          <h3 className="orders-total">Your Total ${cartTotal}</h3>
        </div>
      )}
      <Footer />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
  cartTotal: selectCartTotal,
});

// export default Cart;
export default connect(mapStateToProps)(Cart);
