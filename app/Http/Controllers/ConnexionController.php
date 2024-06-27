<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ConnexionController extends Controller
{
    public function index(){
        return Inertia::render('Connexion');
    }

    public function login(Request $request) {
        $credentials = $request->only('email', 'password',[
            'email.email' => 'L\'adresse e-mail n\'est pas valide.',
            'password.password' => 'Mot de passe incorrect'

        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return redirect()->route('profil');
        }

        return redirect()->back()->withErrors(['email' => 'Les informations d\'identification ne correspondent pas.'])->withInput();
    }
}
