<?php
namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index()
    {
        return Inertia::render('PageContact');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => ['required', 'max:100'],
            'email' => ['required', 'max:100'],
            'objet' => ['required', 'max:255'],
            'message' => ['required']
        ]);

        Contact::create($validatedData);
    }
}

