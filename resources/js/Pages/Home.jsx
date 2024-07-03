import React from 'react';
import Layout from './Layout';
import Hero from './Hero';
import Corp from './BodyForHome';
import Contact from './Contact';

const Home = ({ categories, products,search}) => {


    return (
        <Layout  categories={categories} >
            <Hero />
            <Corp products={products} search={search} />

            <Contact/>
        </Layout>
    );
};

export default Home;
