<?php

use App\Http\Controllers\AllProductsController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\ContactController;


Route::get('/', [CategorieController::class, 'index'])->name('home');
Route::get('/contact', [ContactController::class, 'index']);
Route::get('/detail', [AllProductsController::class, 'index']);


