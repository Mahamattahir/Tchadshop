<?php
namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AchatController extends Controller
{
    public function show($id)
    {
        $product = Product::findOrFail($id);
        return Inertia::render('Acheter', ['product' => $product]);
    }
}


