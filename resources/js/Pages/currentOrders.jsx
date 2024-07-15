import React, { useState, useEffect } from 'react';

function CurrentOrders({ userId }) {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`/api/orders/${userId}`)
            .then(response => response.json())
            .then(data => setOrders(data))
            .catch(error => console.error('Error fetching orders:', error));
    }, [userId]);

    return (
        <div>
            <h3>Commandes en cours</h3>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>
                        Produit: {order.product_name} - Quantité: {order.quantity} - Date de réception: {new Date(order.reception_date).toLocaleString()}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CurrentOrders;
