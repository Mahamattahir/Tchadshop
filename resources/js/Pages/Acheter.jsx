import React, { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import Layout from './Layout';

function Acheter({ product }) {
    const [quantity, setQuantity] = useState(1);
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

    const incrementQuantity = () => {
        if (quantity < product.Stock && isFormValid) {
            setQuantity(prevQuantity => prevQuantity + 1);
        }
    };

    const decrementQuantity = () => {
        if (quantity > 1 && isFormValid) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isFormValid) {
            Inertia.post('/place', {
                product_id: product.id,
                quantity,
                name,
                email,
                phone,
                Delivery_adress: address,
            });
        }
    };

    return (
        <Layout>
            <div className="AchterContainer container-fluid pb-5">
                <div className="row px-xl-5">
                    <GenereImg product={product} />
                    <GenereTx
                        product={product}
                        quantity={quantity}
                        onIncrement={incrementQuantity}
                        onDecrement={decrementQuantity}
                        name={name} setName={setName}
                        email={email} setEmail={setEmail}
                        phone={phone} setPhone={setPhone}
                        address={address} setAddress={setAddress}
                        isFormValid={isFormValid}
                        handleSubmit={handleSubmit}
                    />
                </div>
            </div>
        </Layout>
    );
}

export default Acheter;

function GenereImg({ product }) {
    return (
        <div className="col-lg-5 mb-30">
            <div id="product-carousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner bg-light">
                    <div className="carousel-item active">
                        <img className="w-100 h-100" src={`/storage/${product.image_url}`} alt={product.Name} />
                    </div>
                </div>
            </div>
        </div>
    );
}

function GenereTx({
    product,
    quantity,
    onIncrement,
    onDecrement,
    name, setName,
    email, setEmail,
    phone, setPhone,
    address, setAddress,
    isFormValid,
    handleSubmit
}) {
    const handleHover = (event) => {
        event.target.style.transform = 'translateY(-3px)';
    };

    const handleMouseLeave = (event) => {
        event.target.style.transform = 'translateY(0)';
    };

    const handleIncrementClick = (event) => {
        event.preventDefault();
        onIncrement();
    };

    const handleDecrementClick = (event) => {
        event.preventDefault();
        onDecrement();
    };

    return (
        <div className="col-lg-7 h-auto mb-30">
            <div className="h-100 bg-light p-30">
                <h3>{product.Name}</h3>
                <h3 className="font-weight-semi-bold mb-4">{product.Price} FCFA</h3>
                <p className="mb-4">{product.description}</p>
                <div>
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
                            <img
                                src="/drapeau.png"
                                alt="Tchad Flag"
                                style={{ width: '30px' }}
                            />
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
                        <div className="d-flex pt-2">
                            <strong className="text-dark mr-2">Nombre du produit:</strong>
                        </div>
                        <div className="d-flex align-items-center mb-4 pt-2">
                            <div className="input-group quantity mr-3" style={{ width: "130px" }}>
                                <div className="input-group-btn">
                                    <button className="btn btnCommander btn-minus" onClick={handleDecrementClick} disabled={!isFormValid}>
                                        <i className="fa fa-minus"></i>
                                    </button>
                                </div>
                                <input
                                    type="text"
                                    className="form-control border-0 bg-transparent text-center"
                                    value={quantity}
                                    readOnly
                                />
                                <div className="input-group-btn">
                                    <button className="btn btnCommander btn-plus" onClick={handleIncrementClick} disabled={!isFormValid}>
                                        <i className="fa fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                            <button
                                onMouseEnter={handleHover}
                                onMouseLeave={handleMouseLeave}
                                style={{ transition: 'transform 0.3s ease', backgroundColor: 'rgb(133, 41, 205)', color: 'white', borderRadius: '50px' }}
                                className="btnCommander btn px-3"
                                type="submit"
                                disabled={!isFormValid}
                            >
                                <i className="fa fa-shopping-cart mr-1"></i>
                                Commander
                            </button>
                        </div>
                        {quantity >= product.Stock && (
                            <p className="text-danger">L'stock ne suffit pas</p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}


