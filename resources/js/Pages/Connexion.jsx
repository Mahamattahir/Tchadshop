import React from 'react'
import Layout from './Layout'

import { useState } from 'react';
import { Link } from '@inertiajs/react';

function Connexion() {
    return (
      <Layout>
            <SigninForm/>
      </Layout>
    );
}

export default Connexion
export function SigninForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Insérer ici la logique de soumission du formulaire
    };

    return (
        <div style={{ paddingTop: "10%",paddingBottom:"2%" }}  className='d-flex justify-content-center'>
            <form onSubmit={handleSubmit} className="form_main  ">
                <p className="heading">Connexion</p>
                <div className="inputContainer">

                    <input type="text" className="inputField" id="username" placeholder="Nom d'utilisateur" value={username} onChange={handleUsernameChange} />
                </div>
                <div className="inputContainer">
                    <svg className="inputIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2e2e2e" viewBox="0 0 16 16">
                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
                    </svg>
                    <input type="password" className="inputField" id="password" placeholder="Mot de passe" value={password} onChange={handlePasswordChange} />
                </div>
                <button type="submit" id="button">Se connecter</button>
                <Link className="forgotLink" href="#">Mot de passe oublié?</Link>
            </form>
        </div>

    );
}
