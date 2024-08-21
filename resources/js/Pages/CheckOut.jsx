import React, { useEffect, useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

function Checkout({ products }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        const validateForm = () => {
            return name !== '' && email !== '' && phone !== '' && address !== '';
        };

        setIsFormValid(validateForm());
    }, [name, email, phone, address]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isFormValid) {
            const orderData = {
                products,
                name,
                email,
                phone,
                Delivery_adress: address,
            };
            Inertia.post('/tout', orderData, {
                preserveState: true,
            });
        }
    };

    return (
        <div className="container">
            <h2 className="mb-4">Vérifiez vos produits et passez la commande</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Prix</th>
                        <th scope="col">Quantité</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>
                                <img src={`/storage/${product.image_url}`} alt={product.Name} className="img-thumbnail" style={{ width: '50px', height: '50px' }} />
                            </td>
                            <td>{product.Name}</td>
                            <td>{product.Price} FCFA</td>
                            <td>{product.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <form onSubmit={handleSubmit}>
                <div className="inputContainer">
                    <input
                        type="text"
                        className="inputField"
                        id="Name"
                        placeholder="Votre Nom"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="inputContainer">
                    <input
                        type="email"
                        className="inputField"
                        id="email"
                        placeholder="Votre e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="inputContainer d-flex align-items-center">
                    <img src="/drapeau.png" alt="Tchad Flag" style={{ width: '30px' }} />
                    <input
                        style={{ marginLeft: '-25px' }}
                        type="tel"
                        pattern="[0-9]{8}"
                        className="inputField"
                        id="numero"
                        placeholder="Votre numero"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="inputContainer">
                    <input
                        type="text"
                        className="inputField"
                        id="adresse"
                        placeholder="Adresse De Livraison"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3" disabled={!isFormValid}>
                    Passer la commande
                </button>
            </form>
        </div>
    );
}

export default Checkout;
