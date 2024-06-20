<?php

use App\Http\Controllers\AllProductsController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\CommandeController;
use App\Http\Controllers\ConnexionController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\FilterCategory;
use App\Http\Controllers\InscriptionController;
use App\Http\Controllers\ProfilController;


Route::get('/', [CategorieController::class, 'index'])->name('home');
Route::get('/contact', [ContactController::class, 'index']);
Route::get('/detail', [AllProductsController::class, 'index']);
Route::get('/inscription', [InscriptionController::class, 'index']);
Route::get('/connexion',[ConnexionController::class,'index']);
Route::get('/acheter',[CommandeController::class,'index']);
Route::get('/profil',[ProfilController::class,'index']);
Route::get('/{id}', [FilterCategory::class, 'showByCategory']);


