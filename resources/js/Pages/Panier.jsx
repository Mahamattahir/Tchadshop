import React, { useState, useEffect } from 'react';

import Layout from './Layout';
const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(storedCartItems);
    }, []);

    const removeFromCart = (id) => {
        const updatedCartItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCartItems);
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    };

    const handleCheckout = () => {
        alert('Commande passée avec succès !');
        setCartItems([]);
        localStorage.removeItem('cart');
    };

    return (
        <div className="container">
            <h1>Votre Panier</h1>

            <table className="table">
                <thead>
                    <tr>
                        <th>Produit</th>
                        <th>Quantité</th>
                        <th>Prix</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={handleCheckout}>Commander</button>
        </div>
    );
};


function Panier({categories,products}) {
    return (
        <Layout categories={categories} >
            <h2>Hello</h2>
            <Cart products={products}/>
        </Layout>


    )
}

export default Panier;



