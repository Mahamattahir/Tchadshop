<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Inertia\Inertia;

class CheckoutController extends Controller
{
    public function checkout(Request $request)
    {
        // $productIds = explode(',', $request->query('ids'));
        // $products = Product::whereIn('id', $productIds)->get();
        return Inertia::render('CartCheckout');
    }
}
