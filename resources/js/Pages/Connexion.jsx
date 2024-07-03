import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import Layout from './Layout';
import { Link, useForm } from '@inertiajs/inertia-react';

function Connexion() {
    return (
        <Layout>
            <div>
                <SigninForm />
            </div>
        </Layout>
    );
}

export default Connexion;

export function SigninForm() {
    const { data, setData, post, reset, errors } = useForm({
        email: '',
        password: ''
    });
    const [successMessage, setSuccessMessage] = useState('');

    function submit(e) {
        e.preventDefault();
        post('/connexionPost', {
            onSuccess: () => {
                setSuccessMessage('');
                reset();
            },
            onError: () => {
                setSuccessMessage('');
            }
        });
    }

    return (
        <div style={{ paddingTop: '10%', paddingBottom: '2%' }} className="d-flex justify-content-center">
            <form onSubmit={submit} className="form_main">
                <p className="heading">Connexion</p>
                <div className="inputContainer">
                    <input
                        type="email"
                        className="inputField"
                        id="email"
                        placeholder="E-mail"
                        value={data.email}
                        onChange={e => setData('email', e.target.value)}
                        name='email'
                        required
                    />
                </div>
                {errors.email && <div style={{ fontSize: '10px' }} className="inputContainer help-block text-danger">{errors.email}</div>}

                <div className="inputContainer">
                    <input
                        type="password"
                        className="inputField"
                        id="password"
                        placeholder="Mot de passe"
                        value={data.password}
                        onChange={e => setData('password', e.target.value)}
                        name='password'
                        required
                    />
                </div>
                {errors.password && <div style={{ fontSize: '10px' }} className="inputContainer help-block text-danger">{errors.password}</div>}

                <button type="submit" id="button">Se connecter</button>
                <Link className="forgotLink" href="#">Mot de passe oublié?</Link>
                <Link className="forgotLink" href="/inscription">Cree un compte</Link>
            </form>
        </div>
    );
}
