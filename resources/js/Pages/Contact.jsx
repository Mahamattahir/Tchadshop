import React, { useState } from 'react';
import Map from './Maps';
import { useForm } from '@inertiajs/react';

function Contact() {
    return (
        <div style={{ paddingTop: '10%' }} className="container-fluid" id="contact">
            <h2 style={{ textAlign: 'center' }} className="section-title position-relative text-uppercase mx-xl-5 mb-4">
                <span className="bg-light pr-3" style={{ color: 'rgb(133, 41, 205)' }}>Contactez Nous</span>
            </h2>
            <div className="row px-xl-5">
                <div className="col-lg-7 mb-5">
                    <div className="contact-form bg-light p-30">
                        <div id="success"></div>
                        <ContactForm />
                    </div>
                </div>
                <div className="col-lg-5 mb-5">
                    <Map />
                </div>
            </div>
        </div>
    );
}
/**
 *
 * @returns formulaire de contact
 */

function ContactForm() {
    const handleHover = (event) => {
        event.target.style.transform = 'translateY(-3px)';
    }
    const handleMouseLeave = (event) => {
        event.target.style.transform = 'translateY(0)';
    }

    const { data, setData, post, reset, errors } = useForm({
        name: '',
        email: '',
        objet: '',
        message: ''
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    function submit(e) {
        e.preventDefault();
        post('/contactPost', {
            preserveScroll: true,
            onSuccess: () => {
                setSuccessMessage('Votre message a été envoyé avec succès.');
                setErrorMessage('');
                reset();
            },
            onError: () => {
                setErrorMessage('Une erreur est survenue. Veuillez réessayer.');
                setSuccessMessage('');
            }
        });
    }

    return (
        <form onSubmit={submit}>
            {successMessage && <div className="alert alert-success">{successMessage}</div>}
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            <div className="control-group">
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={data.name}
                    onChange={e => setData('name', e.target.value)}
                    placeholder="Votre nom"
                    name="name"
                    required
                />
                <p className="help-block text-danger">{errors.name}</p>
            </div>
            <div className="control-group">
                <input
                    type="email"
                    className="form-control"
                    placeholder="Votre mail"
                    value={data.email}
                    onChange={e => setData('email', e.target.value)}
                    name='email'
                    required
                />
                <p className="help-block text-danger">{errors.email}</p>
            </div>
            <div className="control-group">
                <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Sujet"
                    name="subject"
                    value={data.objet}
                    onChange={e => setData('objet', e.target.value)}
                    required
                />
                <p className="help-block text-danger">{errors.objet}</p>
            </div>
            <div className="control-group">
                <textarea
                    className="form-control"
                    rows="8"
                    id="message"
                    placeholder="Message"
                    name="message"
                    value={data.message}
                    onChange={e => setData('message', e.target.value)}
                    required
                ></textarea>
                <p className="help-block text-danger">{errors.message}</p>
            </div>
            <div className='BtnContact'>
                <button
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseLeave}
                    style={{ transition: 'transform 0.3s ease' }}
                    className="btn py-2 px-4"
                    type="submit"
                >
                    Envoyez
                </button>
            </div>
        </form>
    );
}

export default Contact;



/**
 *
 * @returns formulaire d'inscription
 */
export function LoginForm() {
    const { data, setData, post, reset, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });

    const [successMessage, setSuccessMessage] = useState('');

    function submit(e) {
        e.preventDefault();
        post('/inscriptionPost', {
            preserveScroll: true,
            onSuccess: () => {
                setSuccessMessage('Votre compte a été créé avec succès.');
                reset(); // Réinitialise tous les champs du formulaire
            },
            onError: () => {
                setSuccessMessage('');
            }
        });
    }

    return (
        <div style={{ paddingTop: "10%", paddingBottom: "2%" }} className='d-flex justify-content-center'>
       {/* <div className='d-flex flex-column'>
       {successMessage && <div className="alert alert-success">{successMessage}</div>}
                {Object.keys(errors).length > 0 && (
                    <div className="alert alert-danger">
                        <ul>
                            {Object.values(errors).map((error, index) => (
                                <li key={index}>{error}</li>
                            ))}
                        </ul>
                    </div>
                )}
       </div> */}
            <form onSubmit={submit} className="form_main">

                <p className="heading">S'inscrire</p>
                <div className="inputContainer">
                    <input
                        type="text"
                        className="inputField"
                        id="name"
                        placeholder="Votre Nom"
                        value={data.name}
                        onChange={e => setData('name', e.target.value)}
                        name='name'
                        required
                    />
                {errors.name && <div style={{ fontSize:'10px' }} className="inputContainer help-block text-danger">{errors.name}</div>}
                </div>
                <div className='inputContainer'>
                    <input
                        type="email"
                        className='inputField'
                        id='email'
                        placeholder='Votre e-mail'
                        value={data.email}
                        onChange={e => setData('email', e.target.value)}
                        name='email'
                        required
                    />
                </div>
                {errors.email && <div  style={{ fontSize:'10px' }} className="inputContainer help-block text-danger">{errors.email}</div>}

                <div className="inputContainer">
                    <input
                        type="password"
                        className="inputField"
                        id="password"
                        placeholder="Mot de passe"
                        value={data.password}
                        onChange={e => setData('password', e.target.value)}
                        name="password"
                        required
                    />
                </div>
                {errors.password && <div  style={{ fontSize:'10px' }} className="inputContainer help-block text-danger">{errors.password}</div>}

                <div className="inputContainer">
                    <input
                        type="password"
                        className="inputField"
                        id="password_confirmation"
                        placeholder="Confirmez le mot de passe"
                        value={data.password_confirmation}
                        onChange={e => setData('password_confirmation', e.target.value)}
                        name="password_confirmation"
                        required
                    />
                </div>
                {errors.password_confirmation && <div  style={{ fontSize:'10px' }} className="inputContainer help-block text-danger">{errors.password_confirmation}</div>}

                <button type="submit" id="button">
                    Créer un compte
                </button>
            </form>
        </div>
    );
}
