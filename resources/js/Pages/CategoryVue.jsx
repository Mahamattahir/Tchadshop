import React from 'react';
import { usePage, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import Layout from './Layout';
import ButtonAchetez from './bouttonachat';



const CategoryVue = ({categories}) => {

    return (
        <Layout categories={categories}  >
            <div
            className='categoryFilterProducts' >
                <ProduitsFilterCategory  />
            </div>
        </Layout>
    );
};

export default CategoryVue;

const ProduitsFilterCategory = () => {

    const { products, categoryId } = usePage().props;
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        if (products && categoryId) {
            const filtered = products.filter(product => product.category_id === parseInt(categoryId));
            setFilteredProducts(filtered);
            // console.log('Products:', products);
            // console.log('Category ID:', categoryId);
            // console.log('Filtered Products:', filtered);
        }
    }, [categoryId, products]);

    // if (filteredProducts.length === 0) {
    //     return <p>Aucun produit trouvé dans cette catégorie.</p>;
    // }
    return (
        <div className="d-flex flex-wrap">
            {filteredProducts.map((product) => (
                <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 pb-1 d-flex">
                    <div className="product-item bg-light mb-4 d-flex flex-column" style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
                        <div className="product-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src={`/storage/${product.image_url}`} alt={product.Name} />
                            <div className="product-action d-flex justify-content-center">
                                <Link className="btn btn-outline-dark btn-square" href="#"><i className="fa fa-shopping-cart"></i></Link>
                                <Link className="btn btn-outline-dark btn-square" href="#"><i className="far fa-heart"></i></Link>
                            </div>
                        </div>
                        <div className="text-center py-4 d-flex flex-column flex-grow-1 justify-content-between">
                            <Link className="h6 text-decoration-none text-truncate" href="#">{product.Name}</Link>
                            <div className="d-flex align-items-center justify-content-center mt-2">
                                <h5>{product.Price * 0.75} FCFA</h5>
                                <h6 className="text-muted ml-2"><del>{product.Price} FCFA</del></h6>
                            </div>
                            <div className="d-flex align-items-center justify-content-center mb-1">
                            <ButtonAchetez key={product.id} product={product} />                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
