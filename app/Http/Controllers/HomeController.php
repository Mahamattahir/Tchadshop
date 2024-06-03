<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        // Récupérer les 8 derniers articles
        $articles = Product::orderBy('id', 'desc')->take(8)->get();

        // Retourner la vue Inertia avec les données des articles
        return Inertia::render('Home', [
            'articles' => $articles
        ]);
        return Inertia::render(
            'Home'
        );
    }
}
