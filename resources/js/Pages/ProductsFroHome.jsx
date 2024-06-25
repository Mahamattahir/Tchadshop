// Produits.jsx
import React, { useEffect, useRef } from 'react';
import { Link } from '@inertiajs/react';
import buttonAchetez from './bouttonachat';
// import { handleclick } from './Navbar';

export function generateProductItems(products, search) {
console.log(search)

    const produitsAffiches = products.slice(0, 8);
const filteredProducts = produitsAffiches.filter((product)=>{
    return search.toLowerCase() === '' ? product : product.Name.toLowerCase().includes(search.toLowerCase());

})
   if(filteredProducts.length===0){
    return <div class="col-12 text-center alert alert-warning" role="alert">
  Aucun produits existe
  </div>

   }

   return filteredProducts.map((product) => (

        <div key={product.id} className="col-lg-3 col-md-6 col-sm-3 pb-1">
            <div className="product-item bg-light mb-4" style={{ boxShadow: ' 0 0 10px rgba(0, 0, 0, 0.2)' }}>
                <div className="product-img position-relative overflow-hidden">
                    <img className="img-fluid w-100" src={`/storage/${product.image_url}`} alt={product.Name} />
                    <div className="product-action">
                        <Link className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></Link>
                        <Link className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></Link>
                    </div>
                </div>
                <div className="text-center py-4">
                    <Link className="h6 text-decoration-none text-truncate" href="">{product.Name}</Link>
                    <div className="d-flex align-items-center justify-content-center mt-2">
                        <h5>{product.Price * 0.75}FCFA</h5><h6 className="text-muted ml-2"><del>{product.Price}FCFA</del></h6>
                    </div>
                    < div className="d-flex align-items-center justify-content-center mb-1">
                       {buttonAchetez()}
                    </div>
                </div>
            </div>
        </div>
    ));
}

function Produits({ products, search }) {
    const observer = useRef(null);

    useEffect(() => {
        observer.current = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.animate([
                        { transform: 'translateY(-100px)', opacity: 0 },
                        { transform: 'translateY(0)', opacity: 1 },
                    ], {
                        duration: 700
                    });
                }
            });
        });

        const cards = document.querySelectorAll('.product-item');
        cards.forEach(card => observer.current.observe(card));

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, []);

    return (

        <div>
            <div className="container-fluid pt-5 pb-3">
                <h2 style={{ color: 'rgb(133, 41, 205)' }}
                    className="text-center section-title position-relative text-uppercase mx-xl-5 mb-4"
                >
                    <span className="bg-light pr-3">PRODUITS VEDETTES</span>
                </h2>
                <div className="row px-xl-5">
                    {generateProductItems(products, search)}
                </div>
            </div>
        </div>
    );
}

export default Produits;
