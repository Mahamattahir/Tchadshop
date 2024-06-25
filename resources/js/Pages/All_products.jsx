import React from 'react';
import Layout from './Layout';
import ProductsComponent from './ProductsComponent';

const All_products=({ categories, products, search })=> {

    return (
        <Layout categories={categories} >
            <div style={{ paddingTop: '10%' }}>
                <ProductsComponent products={products} search={search} />
            </div>
        </Layout>
    );
}

export default All_products;
