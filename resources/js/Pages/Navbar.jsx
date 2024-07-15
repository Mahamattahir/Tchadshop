import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faSearch, faHome, faBox, faBars } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from 'react-bootstrap';
import { Link } from '@inertiajs/react';
import Logo from './Logo';
import MonCompte from './MonCompte';
import {useSelector} from 'react-redux'
function Navbar({ categories = [], search, setSearch }) {
    const cart = useSelector((state) => state.cart.items);

    const Linkpages = [
        { label: "Accueil", to: '/', icon: faHome },
        { label: "Produits", to: '/detail', icon: faBox },
        { label: "Contact", to: '/contact', icon: faEnvelope },
    ];

    function generateNavLink(iconClass, badgeCount) {
        return (
            <Link href="/panier" className="gap btn px-0 ml-2 pt-3" style={{ border: 'none' }}>
                <i className={iconClass + " text-dark"}></i>
                <span className="badge text-dark border ml-2 border-dark rounded-circle">{badgeCount}</span>
            </Link>
        );
    }

    function generatePages(pages) {
        return pages.map((page, index) => (
            <div key={index} className='d-flex'>
                <Link key={index} href={page.to} className="HomeNav nav-item nav-link text-dark active">
                    <FontAwesomeIcon icon={page.icon} className="d-lg-none ml-4" /> {page.label}
                </Link>
            </div>
        ));
    }
    function generateDropdownCategorie(categories) {
        return categories.map((categorie) => (
            <Dropdown.Item key={categorie.id} as="div" className="d-flex align-items-center nav-link dropdown-toggle text-dark">
                <Link href={`/${categorie.id}`} className="text-dark w-100" style={{ textDecoration: 'none' }}>
                    {categorie.Name}
                </Link>
            </Dropdown.Item>
        ));
    }

    function DropdownCategorie() {
        const [showDropdown, setShowDropdown] = useState(false);
        const handleMouseEnter = () => {
            setShowDropdown(true);
        };
        const handleMouseLeave = () => {
            setShowDropdown(false);
        };
        return (
            <div className="col-lg-3 d-none d-lg-block">
                <Dropdown.Item
                    className="btn d-flex align-items-center justify-content-between border-0 w-100"
                    data-toggle="collapse"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{ height: '65px', padding: '0 30px' }}
                >
                    <h6 className="text-dark m-0">
                        <FontAwesomeIcon icon={faBars} className="mr-2" style={{ color: '#8529cd' }} />
                        Categories
                    </h6>
                </Dropdown.Item>
                <nav
                    className={`collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light ${showDropdown ? 'show' : ''}`}
                    style={{ width: 'calc(100% - 30px)', zIndex: '999' }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="navbar-nav w-100">
                        <Dropdown as="div" className="nav-item bg-light dropdown-menu-left position-absolute rounded-0 border-0 m-0">
                            {generateDropdownCategorie(categories)}
                        </Dropdown>
                    </div>
                </nav>
            </div>
        );
    }

    function SearchBar() {


        return (
            <div className="d-lg-none d-block">
                {generateNavLink("fas fa-shopping-cart", cart.length)}
                <FontAwesomeIcon
                    className='gap btn px-0 ml-2 pt-3 border-0'
                    icon={faSearch}
                    onClick={toggleSearch}
                />
                {isSearchVisible && (
                    <form onClick={(e) => e.stopPropagation()}> {/* Empêche la propagation de l'événement */}
                        <input
                        autoFocus
                            style={{
                                padding: "10px",
                                width: "100%",
                                height: "99%",
                                background: "linear-gradient(135deg, rgb(218, 232, 247) 0%, rgb(214, 229, 247) 100%)",
                                border: "none",
                                fontSize: "20px",
                                borderRadius: "50px"
                            }}
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                            type="text"
                            className="input form-control mx-auto mb-1"
                            placeholder="Rechercher des produits"
                            onClick={(e) => e.stopPropagation()} // Ajouté pour empêcher la propagation lors du clic sur l'input
                        />
                    </form>
             )}
            </div>
        );
    }


    const [isSearchVisible, setSearchVisible] = useState(false);

    const toggleSearch = (e) => {
        e.stopPropagation(); // Empêche la propagation de l'événement
        setSearchVisible(!isSearchVisible);
    };
    const MobileNavbar = () => {
        const [collapseOpen, setCollapseOpen] = useState(false);
        const toggleCollapse = () => {
            setCollapseOpen(!collapseOpen);
        };

        return (
            <nav className="navbar navbar-expand-lg navbar-dark py-3 py-lg-0 px-0">
                <div className='d-block d-lg-none'>
                    <Logo />
                </div>
                <button
                    type="button"
                    className="navbar-toggler"
                    style={{ backgroundColor: '#bc9fea' }}
                    onClick={toggleCollapse}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse justify-content-between ${collapseOpen ? 'show' : ''}`}>
                    <div className="navbar-nav mx-auto py-0 ml-2">
                        {generatePages(Linkpages)}
                    </div>
                    <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                        {generateNavLink("fas fa-shopping-cart", cart.length)}
                    </div>
                    <MonCompte />
                </div>
            </nav>
        );
    }

    return (
        <div className='BardeNavtigation fixed-top'>
            <div className="LabardeNavtop container-fluid">
                <div style={{ backgroundColor: '#bc9fea' }} className="shadow-bottom row py-1 px-xl-5 d-block d-lg-none">
                    <div className="col-lg-6 text-center text-lg-right">
                        <div className="d-inline-flex align-items-center d-block d-lg-none">
                            <SearchBar />
                        </div>
                    </div>
                </div>
                <div className="row align-items-center py-1 px-xl-5 d-none d-lg-flex">
                    <div className="col-lg-4">
                        <Logo />
                    </div>
                    <div className="col-lg-4 col-6 text-left">
                        <form action="">
                            <div className="input-group">
                                <div
                                    style={{
                                        position: "relative",
                                        borderRadius: "1000px",
                                        padding: "10px",
                                        display: "grid",
                                        placeContent: "center",
                                        zIndex: "0",
                                        maxWidth: "500px",
                                        margin: "0 10px"
                                    }}
                                    className='containerInput'>
                                    <div
                                        style={{
                                            position: "relative",
                                            width: "100%",
                                            borderRadius: "50px",
                                            background: "linear-gradient(135deg, rgb(218, 232, 247) 0%, rgb(214, 229, 247) 100%)",
                                            padding: "5px",
                                            display: "flex",
                                            alignItems: "center",
                                            maxHeight: "45px",
                                        }}
                                        className='search-containerInput'>
                                        <input style={{
                                            padding: "10px",
                                            width: "100%",
                                            height: "99%",
                                            background: "linear-gradient(135deg, rgb(218, 232, 247) 0%, rgb(214, 229, 247) 100%)",
                                            border: "none",
                                            fontSize: "20px",
                                            borderRadius: "50px"
                                        }}
                                            onChange={(e) => setSearch(e.target.value)}
                                            value={search}
                                            type="text" className="input form-control mx-auto" placeholder="Rechercher des produits" />
                                        <div className="input-group-append">
                                            <span style={{
                                                width: "50px",
                                                aspectRatio: "1",
                                                borderLeft: "2px solid white",
                                                borderTop: "3px solid transparent",
                                                borderBottom: "3px solid transparent",
                                                borderRadius: "50%",
                                                paddingLeft: "12px",
                                                marginRight: "10px",
                                            }} className="input-group-text bg-transparent text-primary">
                                                <FontAwesomeIcon
                                                    className='search__icon' icon={faSearch} />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-4 col-6 text-right">
                        <p className="m-0">Service client</p>
                        <h5 className="m-0">+235 66 85 03 48</h5>
                    </div>
                </div>
            </div>
            <div className="LabardeNavbottom mb-0">
                <div className="row px-xl-5">
                    <DropdownCategorie />
                    <div className="col-lg-9">
                        <MobileNavbar />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
