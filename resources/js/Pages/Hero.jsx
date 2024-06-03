import { Link } from '@inertiajs/react';


/**
 * Le sloagnt et boutton de hero 
 * @returns {JSX.Element}
 */
const Hero = () => {
    const handleHover = (event) => {
        event.target.style.transform = 'translateY(-3px)';
    }
    const handleMouseLeave = (event) => {
        event.target.style.transform = 'translateY(0)';
    }
    return (
        <section className="slider_section " >
            <div className="slider_container ">
                <div id="carouselExampleIndicators " className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner ">
                        <div className="carousel-item active ">
                            <div className="container-fluid" style={{ marginLeft: '-20px' }}>
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="detail-box">
                                            <h1 style={{ fontSize: 'clamp(24px,4vw,40px' }}>
                                                Bienvenue dans notre <br />
                                                boutique en ligne
                                            </h1>
                                            <p style={{ fontSize: 'clamp(16px,2vw,20px' }}>
                                                Découvrez l'essence du shopping en ligne avec nous : des choix infinis, des prix imbattables et une expérience d'achat sans pareille. Parcourez, choisissez, commandez. Votre satisfaction est notre priorité.
                                            </p>

                                            <Link href=""
                                                onMouseEnter={handleHover}
                                                onMouseLeave={handleMouseLeave}
                                                style={{ transition: 'transform 0.3s ease' }}

                                            >
                                                Parcourir
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="img-box">
                                            <img src="/slider-img.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    );
};

export default Hero;