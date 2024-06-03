import React from 'react';
import Navbar from './Navbar';
import FooterSection from './Footer';

const Layout = ({ children, categories }) => {
    return (
        <div>
            <Navbar categories={categories} />
            <div className="content">
                {children}
            </div>
            <FooterSection />
        </div>
    );
};

export default Layout;
