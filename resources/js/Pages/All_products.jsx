import React from 'react';
import Layout from './Layout';
import ProductsComponent from './ProductsComponent';

const All_products=({ categories, products, search })=> {
    console.log(search)

    return (
        <Layout categories={categories} >
            <div  className='AllProducts' >
                <ProductsComponent products={products} search={search} />
            </div>
        </Layout>
    );
}

export default All_products;
