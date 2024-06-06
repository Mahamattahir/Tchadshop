import React from 'react';



function Contact() {

    return (

<div className="container-fluid" id="contact">
            <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
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
                    <div className="bg-light p-30 mb-30">
                        <iframe style={{ width: '100%', height: '250px' }} src="https://www.openstreetmap.org/#map=12/12.1536/14.9912" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                    </div>

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




