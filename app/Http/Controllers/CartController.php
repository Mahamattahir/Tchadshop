<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

use function Termwind\render;

class CartController extends Controller
{
    public function index(){
        return Inertia:: render('Panier');
    }
}
