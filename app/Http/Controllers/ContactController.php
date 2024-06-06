<?php
namespace App\Http\Controllers;

// use Illuminate\Http\Request;
// use App\Models\Contact;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index()
    {


     return Inertia::render('PageContact');

    }
}
