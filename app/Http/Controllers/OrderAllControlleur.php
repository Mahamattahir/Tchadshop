<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log; // Assurez-vous que Log est correctement importé
use Illuminate\Support\Str;

class OrderAllControlleur extends Controller
{
    public function index(Request $request)
    {
        if (Auth::check()) {
            $userId = Auth::id();
            $items = $request->input('items');
            $email = $request->input('email');

            Log::info('Email:', ['email' => $email]);

            if (!$email) {
                return redirect()->back()->with('error', 'Email is required.');
            }

            foreach ($items as $item) {
                $ref = 'order_' . Str::random(10);

                Order::create([
                    'product_id' => $item['id'],
                    'quantity' => 1,
                    'name' => $item['Name'],
                    'email' => $email,
                    'phone' => $request->input('phone'),
                    'Delivery_adress' => $request->input('Delivery_adress'),
                    'Ref' => $ref,
                    'client_id' => $userId,
                ]);
            }

            return redirect('/encours')->with('success', 'Commande passée avec succès');
        } else {
            return redirect()->route('connexion')->with('error', 'Veuillez vous connecter pour passer une commande.');
        }
    }
}
