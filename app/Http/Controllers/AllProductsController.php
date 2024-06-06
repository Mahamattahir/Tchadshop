<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AllProductsController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return Inertia::render('AllProducts', ['products' => $products]);
    }
}


