<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\QueryException;
use Inertia\Inertia;

class InscriptionController extends Controller
{
    public function index()
    {
        return Inertia::render('Inscription');
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'max:100'],
            'email' => ['required', 'email', 'max:100', 'unique:users,email'],
            'password' => ['required', 'min:6', 'confirmed']
        ], [
            'name.required' => 'Le champ Nom est requis.',
            'name.max' => 'Le champ Nom ne doit pas dépasser 100 caractères.',
            'email.required' => 'Le champ E-mail est requis.',
            'email.email' => 'L\'adresse e-mail n\'est pas valide.',
            'email.max' => 'Le champ E-mail ne doit pas dépasser 100 caractères.',
            'email.unique' => 'L\'adresse e-mail est déjà prise.',
            'password.required' => 'Le champ Mot de passe est requis.',
            'password.min' => 'Le mot de passe doit comporter au moins 6 caractères.',
            'password.confirmed' => 'La confirmation du mot de passe ne correspond pas.',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        try {
            User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password)
            ]);
        } catch (QueryException $e) {
            if ($e->getCode() == 23000) {
                return redirect()->back()->withErrors(['email' => 'L\'adresse e-mail existe déjà.'])->withInput();
            } else {
                return redirect()->back()->withErrors(['error' => 'Une erreur est survenue. Veuillez réessayer.'])->withInput();
            }
        }

        return redirect()->route('connexion')->with('success', 'Votre compte a été créé. Connectez-vous!');
    }
}
