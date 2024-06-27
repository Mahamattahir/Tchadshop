import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faEnvelope, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from '@inertiajs/inertia-react';

function FooterSection() {

    const Linkpages = [
        { label: "Accueil", to: './' },
        { label: "Produits", to: './detail' },
        { label: "Contact", to: './contact' }
    ];

    const Apropostext = [
        { text: "Livraison partout" },
        { text: "Achat très facile" },
        { text: "Paiements faciles" },
        { text: "Livraison à temps" },
    ];

    return (
        <div className="footer-container">
            <div className="container">
                <div className="footer-row">
                    <div className="footer-col">
                        <h5>Contactez nous</h5>
                        <p>Nous sommes là pour vous aider! Pour toute question ou assistance, n'hésitez pas à nous joindre. Votre satisfaction est notre priorité.</p>
                        <p><FontAwesomeIcon icon={faMapMarker} /> N'Djamena, Tchad</p>
                        <p><FontAwesomeIcon icon={faEnvelope} /> info@example.com</p>
                        <p><FontAwesomeIcon icon={faPhone} /> +235 66 85 03 48</p>
                    </div>
                    <div className="footer-col">
                        <h5>Service</h5>
                        <div className='Apropos_list'>
                            {Linkpages.map((page, index) => (
                                <Link key={index} href={page.to}>
                                    <FontAwesomeIcon icon={faAngleRight} /> {page.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="footer-col">
                        <h5>A Propos</h5>
                        <div className='Apropos_list'>
                            {Apropostext.map((item, index) => (
                                <Link key={index} to="#">
                                    <FontAwesomeIcon icon={faAngleRight} /> {item.text}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="footer-col">
                        <h6>Suivez-nous</h6>
                        <div className="social-icons">
                            <Link to="#"><FontAwesomeIcon icon={faFacebook} /></Link>
                            <Link to="#"><FontAwesomeIcon icon={faInstagram} /></Link>
                            <Link to="#"><FontAwesomeIcon icon={faTwitter} /></Link>
                            <Link to="#"><FontAwesomeIcon icon={faLinkedin} /></Link>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; <Link to="#">ChadShop</Link> | Tous droits réservés</p>
                    <img src="/Paiement.jpg" alt="Mode de paiement" />
                </div>
            </div>
        </div>
    );
}

export default FooterSection;
