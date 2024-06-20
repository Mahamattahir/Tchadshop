<?php

namespace App\Http\Controllers;

use App\Models\Categorie;
use App\Models\Product;
use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategorieController extends Controller
{
    public function index(Request $request)
    {
        $categories = Categorie::all();
        $products=Product::all();

        return Inertia::render('Home', [
            'categories' => $categories,
            'products' => $products,

        ]);
    }



}
