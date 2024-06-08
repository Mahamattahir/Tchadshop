<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ConnexionController extends Controller
{
    public function index(){
        return Inertia::render('Connexion');
    }
}
