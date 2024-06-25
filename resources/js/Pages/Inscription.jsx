import React, { useState } from 'react';
import { useForm } from '@inertiajs/inertia-react';
import Layout from './Layout';

function Inscription() {
    return (
       <Layout>
           <div id="success"></div>
            <LoginForm/>
       </Layout>
    )
}

export default Inscription;


function LoginForm() {
    const { data, setData, post, reset, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    function submit(e) {
        e.preventDefault();
        post('/inscriptionPost', {
            preserveScroll: true,
            onSuccess: () => {
                setSuccessMessage('Votre message a été envoyé avec succès.');
                setErrorMessage('');
                reset();
            },
            onError: () => {
                setErrorMessage('Une erreur est survenue. Veuillez réessayer.');
                setSuccessMessage('');
            }
        });
    }

    return (
        <div style={{ paddingTop: "10%", paddingBottom: "2%" }} className='d-flex justify-content-center'>

            <form onSubmit={submit} className="form_main">
            {successMessage && <div className="alert alert-success">{successMessage}</div>}
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                <p className="heading">S'inscrire</p>
                <div className="inputContainer">
                    <input
                        type="text"
                        className="inputField"
                        id="name"
                        placeholder="Votre Nom"
                        value={data.name}
                        onChange={e => setData('name', e.target.value)}
                        name='name'
                        required
                    />
                    <p className="help-block text-danger">{errors.name}</p>
                </div>
                <div className='inputContainer'>
                    <input
                        type="email"
                        className='inputField'
                        id='email'
                        placeholder='Votre e-mail'
                        value={data.email}
                        onChange={e => setData('email', e.target.value)}
                        name='email'
                        required
                    />
                    <p className="help-block text-danger">{errors.email}</p>
                </div>
                <div className="inputContainer">
                    <input
                        type="password"
                        className="inputField"
                        id="password"
                        placeholder="Mot de passe"
                        value={data.password}
                        onChange={e => setData('password', e.target.value)}
                        name="password"
                        required
                    />
                    <p className="help-block text-danger">{errors.password}</p>
                </div>
                <div className="inputContainer">
                    <input
                        type="password"
                        className="inputField"
                        id="password_confirmation"
                        placeholder="Confirmez le mot de passe"
                        value={data.password_confirmation}
                        onChange={e => setData('password_confirmation', e.target.value)}
                        name="password_confirmation"
                        required
                    />
                    <p className="help-block text-danger">{errors.password_confirmation}</p>
                </div>
                <button
                type="submit"
                id="button"
                >
                    Créer un compte
                </button>
            </form>
        </div>
    );
}

