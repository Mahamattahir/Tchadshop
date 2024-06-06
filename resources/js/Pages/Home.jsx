import React from 'react';
import Layout from './Layout';
import Hero from './Hero';
import Corp from './BodyForHome';
import Contact from './Contact';

const Home = ({ categories, products }) => {
    return (
        <Layout categories={categories} >
            <Hero />
            <Corp products={products} />

<Contact/>
        </Layout>
    );
};

export default Home;
