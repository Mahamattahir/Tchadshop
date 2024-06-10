import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bouttonLogin from './btnLogin';
function MonCompte() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Dropdown>
            <Dropdown.Toggle
                type="button"
                className="d-flex btn btn-sm bg-transparent border-0 dropdown-toggle mt-2 ml-1"
                onClick={toggleDropdown}
            >
                <FontAwesomeIcon icon={faUser} className='d-none d-lg-inline fa-lg border-0' />
                <div className='d-flex btn btn-md text-dark bg-transparent border-0 gap-2 d-lg-none' style={{ marginTop: '-10px', fontSize: '16px' }}>
                    <FontAwesomeIcon icon={faUser} className='d-lg-none fa-md border-0' />
                    <span style={{ marginTop: '-4px', border: 'none' }}>Compte</span>
                </div>
            </Dropdown.Toggle>
            <Dropdown.Menu show={isOpen} className="dropdown-menu-center">
                {bouttonLogin()}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default MonCompte;
