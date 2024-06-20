<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Categorie;

class FilterCategory extends Controller
{
    public function showByCategory($categoryId)
    {
        $products = Product::where('category_id', $categoryId)->get();
        $categories = Categorie::all();
        return Inertia::render('CategoryVue', [
            'products' => $products,
            'categoryId' => $categoryId,
            'categories' => $categories
        ]);
    }
}
