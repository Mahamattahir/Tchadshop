import React from 'react';
import Map from './Maps';
function Contact() {

    return (

<div style={{ paddingTop: '10%' }}  className="container-fluid" id="contact">
            <h2  style={{ textAlign:'center' }} className="section-title position-relative text-uppercase mx-xl-5 mb-4">
                <span className="bg-light pr-3" style={{ color: 'rgb(133, 41, 205)' }}>Contactez Nous</span>
            </h2>
            <div className="row px-xl-5">
                <div className="col-lg-7 mb-5">
                    <div className="contact-form bg-light p-30">
                        <div id="success"></div>
                        {ContactForm()}
                    </div>
                </div>
                <div className="col-lg-5 mb-5">
                  <Map/>

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
    return (
        <form name="sentMessage" id="contactForm">
            <div className="control-group">
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Votre nom"
                    name="name"


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


                    required
                ></textarea>
                <p className="help-block text-danger"></p>
            </div>
            <div className='BtnContact'>
                <button
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseLeave}
                    style={{ transition: 'transform 0.3s ease' }}
                    className="btn py-2 px-4"
                    type="submit"
                    id="sendMessageButton"
                >
                    Envoyez
                </button>
            </div>
        </form>
    );
}
export default Contact;




