import React from 'react';
import Layout from './Layout';

function Acheter() {
    return (
        <Layout>
            <div style={{ paddingTop: '10%' }}  className="container-fluid pb-5">
                <div className="row px-xl-5">
                  <GenereImg/>
                  <GenereTx/>
                </div>
            </div>
        </Layout>
    );
}

export default Acheter;

function GenereImg() {
    return (
        <div className="col-lg-5 mb-30">
            <div id="product-carousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner bg-light">
                    <div className="carousel-item active">
                        <img className="w-100 h-100" src="" alt="Image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

function GenereTx() {
    const handleHover = (event) => {
        event.target.style.transform = 'translateY(-3px)';
    }
    const handleMouseLeave = (event) => {
        event.target.style.transform = 'translateY(0)';
    }
    return (
        <div className="col-lg-7 h-auto mb-30">
            <div className="h-100 bg-light p-30">
                <h3>Drone</h3>
                <h3 className="font-weight-semi-bold mb-4">150 000 FCFA</h3>
                <p className="mb-4">Explorez de nouveaux horizons avec ce drone de filmage haute performance. Capturez des images aériennes spectaculaires et des vidéos fluides grâce à ses fonctionnalités avancées et à sa facilité d'utilisation.</p>
                <div>
                    <form action="">
                        <div className="inputContainer">
                            <input type="text" className="inputField" id="Name" placeholder="Votre Nom" />
                        </div>
                        <div className='inputContainer'>
                            <svg className="inputIcon" xmlns="http://www.w3.org/2000/svg" width="34" height="16" fill="#2e2e2e" viewBox="0 0 16 16">
                                <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
                            </svg>
                            <input type="email" className='inputField' id='e-amil' placeholder='Votre e-mail' />
                        </div>
                        <div className="inputContainer">
                            <input type="number" className="inputField" id="numero" placeholder="Votre numero" />
                        </div>
                        <div className="inputContainer">
                            <input type="text" className="inputField" id="Name" placeholder="Adresse De Livraison" />
                        </div>
                    </form>
                </div>
                <div className="d-flex pt-2">
                    <strong className="text-dark mr-2">Nombre du produit:</strong>
                </div>
                <div className="d-flex align-items-center mb-4 pt-2">
                    <div className="input-group quantity mr-3" style={{ width: "130px" }}>
                        <div className="input-group-btn">
                            <button className="btn btnCommander btn-minus">
                                <i className="fa fa-minus"></i>
                            </button>
                        </div>
                        <input type="text" className="form-control border-0 text-center"  />
                        <div className="input-group-btn">
                            <button className="btn btnCommander btn-plus">
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                    <button
                        onMouseEnter={handleHover}
                        onMouseLeave={handleMouseLeave}
                        style={{ transition: 'transform 0.3s ease' }}
                        className="btnCommander btn px-3">
                        <i className="fa fa-shopping-cart mr-1"></i>
                        Commander
                    </button>
                </div>
            </div>
        </div>
    );
}
