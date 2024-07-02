<?php

use App\Http\Controllers\AchatController;
use App\Http\Controllers\AllProductsController;
use App\Http\Controllers\CartController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\CommandeController;
use App\Http\Controllers\ConnexionController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\FilterCategory;
use App\Http\Controllers\InscriptionController;
use App\Http\Controllers\ProfilController;


Route::get('/', [CategorieController::class, 'index'])->name('home');
Route::get('/contact', [ContactController::class, 'index'])->name('contact');
Route::post('/contactPost', [ContactController::class, 'store']);
Route::get('/detail', [AllProductsController::class, 'index']);
Route::get('/inscription', [InscriptionController::class, 'index'])->name('inscription');
Route::post('/inscriptionPost', [InscriptionController::class, 'store']);
Route::get('/connexion',[ConnexionController::class,'index'])->name(('connexion'));
Route::get('/profil',[ProfilController::class,'index'])->name('profil')->middleware('auth');
Route::get('/{id}', [FilterCategory::class, 'showByCategory']);

Route::post('/connexionPost', [ConnexionController::class, 'login']);
Route::get('/acheter/{id}', [AchatController::class, 'show'])->name('product.show');

Route::get('/panier',[CartController::class,'index']);

