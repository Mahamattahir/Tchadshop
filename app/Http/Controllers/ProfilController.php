<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
class ProfilController extends Controller
{
    public function index() {
        $user = Auth::user();
        return Inertia::render('Profil', [
            'user' => $user,
        ]);
    }

}
