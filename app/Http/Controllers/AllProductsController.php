<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Categorie;

class AllProductsController extends Controller
{
    public function index()
    {
        $categories = Categorie::all();
        $products = Product::all();
        return Inertia::render('All_products', [
            'products' => $products,
            'categories'=>$categories

        ]);
    }
}

