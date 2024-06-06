<?php

namespace App\Http\Controllers;

use App\Models\Categorie;
use App\Models\Product;
use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategorieController extends Controller
{
    public function index()
    {
        $categories = Categorie::all();
        $products = Product::orderBy('id','desc')->take(8)->get();


        return Inertia::render('Home', [
            'categories' => $categories,
            'products' => $products
        ]);
    }

}
