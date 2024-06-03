import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faEnvelope, faMapMarker, faPhone, } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { Link } from '@inertiajs/inertia-react';
function FooterSection() {
    /**
     *  une fonction qui vas generer les icons et text de chaque elememt
     *  au niveau du pied de la page sur section  contactez Nous
     * @param {icon} icons 
     * @param {string} texts 
     * @returns 
     */
    function contactezNous() {
        return (
            <div className=" col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
                <h5 className="text-dark text-uppercase mb-4">Contactez nous</h5>
                <p className="mb-4">Nous sommes là pour vous aider! Pour toute question ou assistance, n'hésitez pas à nous joindre. Votre satisfaction est notre priorité.</p>
                <p className="mb-2"><FontAwesomeIcon icon={faMapMarker} className=" mr-3"></FontAwesomeIcon>N'Djamena,Tchad</p>
                <p className="mb-2"><FontAwesomeIcon icon={faEnvelope} className=" mr-3"></FontAwesomeIcon>info@example.com</p>
                <p className="mb-0"><FontAwesomeIcon icon={faPhone} className=" mr-3"></FontAwesomeIcon>+235 66 85 03 48</p>
            </div>
        )

    }

    /**
     * variable qui stock les information du section footer du service
     *   @type {Array}
     *  @returns {Array}
     */
    const Linkpages = [
        { label: "Accueil", to: './Home.jsx' },
        { label: "Produits", to: './Produits.jsx' },
        { label: "Contact", to: './contact.jsx' }
    ]
    /**
     * Function qui genere les lien vers les pages principaux au niveau du footer section service
     * @param {string} pages 
     * @returns  {JSX.Element}
     */
    function servicefooter(pages) {
        return pages.map((page, index) => (
            <Link key={index} to={page.to}
                className="text-dark mb-2" href="#">
                <FontAwesomeIcon icon={faAngleRight}
                    className="mr-2">
                </FontAwesomeIcon>{page.label}
            </Link>

        ))
    }
    /**
     * @type {Array}
     * Une vaiable qui stock les donnees du section apropos du pied 
     *  @returns {Array}
     * 
     */
    const Apropostext = [
        { text: "Livraison partout" },
        { text: "Achat tres facile" },
        { text: "paiements faciles" },
        { text: "Livraison a temps" },
    ]
    /**
     * une fonction qui genere les elements du section aprpos du pied 
     * @param {string} texts 
     * @returns {JSX.Element}
     */
    function Apropos(texts) {
        return texts.map((text, index) => (
            <Link key={index}
                className="text-dark  mb-2" href="#">
                <FontAwesomeIcon icon={faAngleRight}
                    className="mr-2">
                </FontAwesomeIcon>{text.text}
            </Link>

        ))
    }

    function generateSociauxIcon() {
        return (
            <div className="d-flex justify-content-center">
                <Link className="btn t  btn-square mr-2" href="#"><FontAwesomeIcon icon={faFacebook} /></Link>
                <Link className="btn  btn-square mr-2" href="#"><FontAwesomeIcon icon={faInstagram} /></Link>
                <Link className="btn  btn-square mr-2" href="#"><FontAwesomeIcon icon={faTwitter} /></Link>
                <Link className="btn  btn-square" href="#"><FontAwesomeIcon icon={faLinkedin} /></Link>
            </div>
        )
    }
    return (
        <div>
            <div className="container-fluid  text-dark mt-5 pt-5" style={{ backgroundColor: '#e4e0fc' }}>
                <div className="row px-xl-5 pt-5">
                    {contactezNous()}
                    <div className="col-lg-8 col-md-12">
                        <div className="row">
                            <div className="col-md-4 mb-5">
                                <h5 className="text-dark text-uppercase mb-4">Service</h5>
                                <div className="d-flex flex-column justify-content-start">
                                    {servicefooter(Linkpages)}
                                </div>
                            </div>
                            <div className="col-md-4 mb-5">
                                <h5 className="text-dark text-uppercase mb-4">A Propos</h5>
                                <div className="d-flex flex-column justify-content-start">
                                    {Apropos(Apropostext)}
                                </div>
                            </div>
                            <div className="col-md-4 mb-5">
                                <h6 className="text-dark text-uppercase mt-4 mb-3">Suivez-nous</h6>

                                {generateSociauxIcon()}

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row border-top mx-xl-5 py-4" style={{ borderCcolor: 'red !important' }}>
                    <div className="col-md-6 px-xl-0">
                        <p className="mb-md-0 text-center text-md-left text-dark">
                            &copy; <Link className="" href="#">ChadShop</Link> |Tous droits réservés
                        </p>
                    </div>
                    <div className="col-md-6 px-xl-0 text-center    text-md-right">
                        <img className="img-fluid" src="/image/Paiement.jpg" alt="Mode de paiement" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FooterSection
