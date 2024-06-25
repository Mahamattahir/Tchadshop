import React, { useState } from 'react';
import Navbar from './Navbar';
import FooterSection from './Footer';

const Layout = ({ children, categories }) => {
    const [search, setSearch] = useState('');

    // Cloner l'enfant et lui ajouter le prop `search`
    const childrenWithProps = React.Children.map(children, child => {
        return React.cloneElement(child, { search });
    });

    return (
        <div>
            <Navbar categories={categories} search={search} setSearch={setSearch} />
            <div className="content">
                {childrenWithProps}
            </div>
            <FooterSection />
        </div>
    );
};

export default Layout;
