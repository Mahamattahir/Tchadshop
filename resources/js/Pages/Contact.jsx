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
