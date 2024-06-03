import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faShippingFast } from '@fortawesome/free-solid-svg-icons'
import Produits from './ProductsFroHome'

function Corp({ products }) {
    /**
     * Genere deux text avec icon a l'entre du corp
     * @param {icon} iconTitle 
     * @param {string} text 
     * @returns  {JSX.Element}
     */
    function generateTopBodyTitle(iconTitle, text) {
        return (
            <div className="col-lg col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center justify-content-center  bg-light mb-4" style={{ padding: '30px' }}>
                    <h1 className="text-primary m-0 mr-3" >
                        <FontAwesomeIcon icon={iconTitle} style={{ color: 'rgb(133, 41, 205)' }} />
                    </h1>
                    <h5 className="font-weight-semi-bold m-0">{text}</h5>
                </div>
            </div >
        )
    }
    return (
        <div  >
            <div className="container-fluid pt-5">
                <div className="row px-xl-5 pb-3">
                    {generateTopBodyTitle(faCheck, "Produits de qualité")};
                    {generateTopBodyTitle(faShippingFast, "Livraison rapide")};

                </div>
            </div>
            <Produits products={products} />
        </div>
    )
}

export default Corp




