<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use Illuminate\Support\Facades\Auth; // Importez la classe Auth pour récupérer l'utilisateur authentifié
use Illuminate\Support\Str; // Importez la classe Str pour la génération aléatoire de la référence

class OrderController extends Controller
{
    public function index(Request $request)
    {
        // Vérifiez si l'utilisateur est authentifié
        if (Auth::check()) {
            // Récupérez l'ID de l'utilisateur authentifié
            $userId = Auth::id();

            // Validation des données reçues du formulaire
            $validatedData = $request->validate([
                'product_id' => 'required|integer',
                'quantity' => 'required|integer',
                'name' => 'required|string',
                'email' => 'required|email',
                'phone' => 'required|string',
                'Delivery_adress' => 'required|string', // Assurez-vous que le nom correspond à votre base de données
            ]);

            // Génération de la référence aléatoire
            $ref = 'order_' . Str::random(10); // Vous pouvez ajuster la longueur de la chaîne aléatoire selon vos besoins

            // Ajoutez la référence générée et l'ID de l'utilisateur aux données validées
            $validatedData['Ref'] = $ref;
            $validatedData['client_id'] = $userId;

            // Insertion dans la base de données
            Order::create($validatedData);

            return redirect('/detail');
        } else {
            // Redirection si l'utilisateur n'est pas authentifié
            return redirect()->route('connexion')->with('error', 'Veuillez vous connecter pour passer une commande.');
        }
    }
}
