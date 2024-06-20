import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import Layout from './Layout';
import buttonAchetez from './bouttonachat';

function GenerAllProduct(products) {
    if (!products || products.length === 0) {
        return <p>No products available</p>;
    }

    return products.map((product) => (
        <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 pb-1">
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
                        <h5>{product.Price * 0.75} FCFA</h5>
                        <h6 className="text-muted ml-2"><del>{product.Price} FCFA</del></h6>
                    </div>
                    <div className="d-flex align-items-center justify-content-center mb-1">
                      {buttonAchetez()}
                    </div>
                </div>
            </div>
        </div>
    ));
}

const ColorNumber = [
    { number: '650', color: '500-6 000 FCFA' },
    { number: '200', color: '6 000-15 000 FCFA' },
    { number: '666', color: '15 000-50 000' },
    { number: '30', color: '50 000-250 000' },
    { number: '21', color: '250 000-1M' },
    { number: '10', color: '1M-5M' }
];

function ProductDetailbody({ products }) {
    return (
        <div>
            <div className="container-fluid">
                <div className='row px-xl-5'>
                    <FilterPrice />
                    <ProductForAll products={products} />
                    <div className='col-12'>

                       <ul className="pagination justify-content-center">
                                <li className="page-item disabled"><Link className="page-link" href="#"><span>Pages</span></Link></li>
                                <li className="page-item  active"><Link className="page-link" href="#">1</Link></li>
                                <li className="page-item "><Link className="page-link" href="#">2</Link></li>
                                <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                                <li className="page-item"><Link className="page-link" href="#">Suivant</Link></li>
                            </ul>

                    </div>
                </div>
            </div>
        </div>
    );
}

function FilterPrice() {
    return (
        <div className='col-lg-3 col-md-4'>
            <h5 style={{ backgroundColor: 'rgb(133, 41, 205)', color: '#fff' }} className="section-title position-relative text-uppercase mb-3">
                <span className="pr-3">Filtrer par prix</span>
            </h5>
            <div className="bg-light p-4 mb-30">
                <form>
                    <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                        <input type="checkbox" className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="price-all">Tous les prix</label>
                    </div>
                    {GenerateColor(ColorNumber)}
                </form>
            </div>
        </div>
    );
}

function GenerateColor(colors) {
    return colors.map((items, index) => (
        <div key={index} className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input type="checkbox" className="custom-control-input" id={`color-${index}`} />
            <label className="custom-control-label" htmlFor={`color-${index}`}>{items.color}</label>
            <span style={{ backgroundColor: '#fff', color: '#000' }} className="badge border font-weight-normal">{items.number}</span>
        </div>
    ));
}

function ProductForAll({ products }) {
    return (
        <div className="col-lg-9 col-md-8">
            <div className="row pb-3">
                {GenerAllProduct(products)}
            </div>
        </div>
    );
}


function All_products({categories, products }) {
    return (
        <Layout categories={categories}>
            <div style={{ paddingTop: '10%' }}>
                <ProductDetailbody products={products} />
            </div>
        </Layout>
    );
}

export default All_products;
