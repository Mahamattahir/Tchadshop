<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class InscriptionController extends Controller
{
    public function index()
    {
        return Inertia::render('Inscription',[
            'users' => Contact::all()
        ]);
    }

    public function store(Request $request)
    {
      Validator::make($request->all(), [
            'name' => ['required', 'max:100'],
            'email' => ['required', 'email', 'max:100', 'unique:users,email'],
            'password' => ['required', 'min:6', 'confirmed']
        ]);



        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);


    }
}
