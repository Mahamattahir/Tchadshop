<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Product;

class AchatController extends Controller
{
    public function show($id, Request $request)
    {
        if (!Auth::check()) {
            $request->session()->put('url.intended', route('product.show', $id));
            return redirect()->route('connexion');
        }

        $product = Product::findOrFail($id);
        return Inertia::render('Acheter', ['product' => $product]);
    }
}
