import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

function Contact() {
    return (
        <div className="container-fluid" id="contact">
            <h2 className="text-center section-title position-relative text-uppercase mx-xl-5 mb-4">
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
                    <div className="bg-light p-30 mb-30">
                        <iframe style={{ width: '100%', height: '250px' }} src="https://www.openstreetmap.org/#map=12/12.1536/14.9912" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;

function ContactForm() {
    const handleHover = (event) => {
        event.target.style.transform = 'translateY(-3px)';
    };

    const handleMouseLeave = (event) => {
        event.target.style.transform = 'translateY(0)';
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        Inertia.post(route('contact.store'), formData, {
            onSuccess: () => {
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
                alert('Votre message a été envoyé avec succès !');
            },
            onError: (errors) => {
                console.error('Erreur lors de l\'envoi des données :', errors);
                alert('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer plus tard.');
            }
        });
    };

    return (
        <form method="POST" name="sentMessage" id="contactForm" noValidate onSubmit={handleSubmit}>
            <div className="control-group">
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Votre nom"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                />
                <p className="help-block text-danger"></p>
            </div>
            <div className="control-group">
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Votre mail"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
                <p className="help-block text-danger"></p>
            </div>
            <div className="control-group">
                <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Sujet"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                />
                <p className="help-block text-danger"></p>
            </div>
            <div className="control-group">
                <textarea
                    className="form-control"
                    rows="8"
                    id="message"
                    placeholder="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                ></textarea>
                <p className="help-block text-danger"></p>
            </div>
            <div className='BtnContact   '>
                <button
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseLeave}
                    style={{ transition: 'transform 0.3s ease' }}
                    className="btn py-2 px-4 "
                    type="submit"
                    id="sendMessageButton"
                >
                    Envoyez
                </button>
            </div>
        </form>
    );
}
