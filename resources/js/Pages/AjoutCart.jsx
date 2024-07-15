// AjoutCart.jsx

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from './features/cart/cartSlice';

const AjoutCart = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.user);

  const cartKey = `cart_${user.id}`;

  const addToCartHandler = () => {
    const itemExists = cart.some((item) => item.id === product.id);

    if (itemExists) {
      dispatch(removeFromCart(product.id));
    } else {
      dispatch(addToCart(product));
    }

    localStorage.setItem(cartKey, JSON.stringify(cart)); // Sauvegarder le panier dans le localStorage
  };

  return (
    <button style={{ border:'1px solid rgb(133, 41, 205)',padding:'0%' }} onClick={addToCartHandler} className="btn btn-outline-dark btn-square">
      <i className="fa fa-shopping-cart fa-xl" style={{ color:'rgb(133,41, 205)' }}></i>
    </button>
  );
};

export default AjoutCart;
