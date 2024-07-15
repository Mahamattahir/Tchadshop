<?php
use App\Http\Controllers\AchatController;
use App\Http\Controllers\AllProductsController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\ConnexionController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\FilterCategory;
use App\Http\Controllers\InscriptionController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProfilController;
use App\Http\Controllers\UserProfileController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;


Route::get('/', [CategorieController::class, 'index'])->name('home');
Route::get('/contact', [ContactController::class, 'index'])->name('contact');
Route::post('/contactPost', [ContactController::class, 'store']);

Route::get('/detail', [AllProductsController::class, 'index'])->name('All_products');

Route::get('/inscription', [InscriptionController::class, 'index'])->name('inscription');
Route::post('/inscriptionPost', [InscriptionController::class, 'store']);
Route::get('/connexion',[ConnexionController::class,'index'])->name('connexion');
Route::post('/connexionPost', [ConnexionController::class, 'login']);
Route::get('/panier',[CartController::class,'index']);
Route::post('/logout', [ConnexionController::class, 'logout'])->name('logout');

Route::get('/acheter/{id}', [AchatController::class, 'show'])->name('product.show');

Route::middleware(['auth', 'web'])->group(function () {
    Route::get('/profil',[ProfilController::class,'index'])->name('profil')->middleware('auth');
    Route::post('/profile/update-photo', [UserProfileController::class, 'updatePhoto'])->name('profile.update-photo');
    Route::post('/profile/update-info', [UserProfileController::class, 'updateInfo'])->name('profile.update-info');
    Route::post('/logout', [ConnexionController::class, 'logout'])->name('logout');
});

Route::get('/{id}', [FilterCategory::class, 'showByCategory']);


Route::get('/api/check-auth', function () {
    return response()->json(['authenticated' => Auth::check()]);
});

Route::post('/place', [OrderController::class, 'index'])->name('order');
