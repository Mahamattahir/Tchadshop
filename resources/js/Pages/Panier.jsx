import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, resetCart } from './features/cart/cartSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.user);

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleOrder = () => {
    Inertia.visit(`/acheter/${product.id}`);
    dispatch(resetCart());
  };

  const handleOrderItem = (itemId) => {
    alert(`Commande pour l'article ${itemId} passée!`);
    dispatch(removeFromCart(itemId));
  };

  return (
    <div className="container mt-5">

      <h2 style={{ textAlign: 'center' }} className="section-title position-relative text-uppercase mx-xl-5 mb-4">
                <span className="bg-light pr-3" style={{ color: 'rgb(133, 41, 205)' }}>Mon panier</span>
            </h2>
      {cartItems.length === 0 ? (
        <p>Votre panier est vide</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Nom</th>
              <th scope="col">Prix</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={`/storage/${item.image_url}`} alt={item.Name} className="img-thumbnail" style={{ width: '50px', height: '50px' }} />
                </td>
                <td>{item.Name}</td>
                <td>{item.Price} FCFA</td>
                <td>
                  <button className="btn btn-danger btn-sm me-2" onClick={() => handleRemoveItem(item.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <button className="btn btn-success btn-sm" onClick={() => handleOrderItem(item.id)}>

                    <FontAwesomeIcon icon={faShoppingBag} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {/* {cartItems.length > 0 && (


        <button className="btnCommander btn  mt-3" onClick={handleOrder}>
          Commander tout
        </button>


      )} */}
    </div>
  );
};

export default Cart;
