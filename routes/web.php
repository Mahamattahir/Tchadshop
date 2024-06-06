<?php

use App\Http\Controllers\AllProductsController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategorieController;
// use App\Http\Controllers\ContactController;


Route::get('/', [CategorieController::class, 'index'])->name('home');
// Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');
Route::get('/detail', [AllProductsController::class, 'index'])->name('products');



