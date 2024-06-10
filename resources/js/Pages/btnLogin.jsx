import React from 'react'
import { Link } from '@inertiajs/react';
import { Dropdown } from 'react-bootstrap';

function bouttonLogin() {


    return (
        <div>
            <Dropdown.Item  href="/inscription" as={Link}  className="dropdown-item"> S'inscrire </Dropdown.Item>
            <Dropdown.Item href="/connexion" as={Link} className="dropdown-item"> Connexion </Dropdown.Item>

        </div>
    )
}

export default bouttonLogin;

