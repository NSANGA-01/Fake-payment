<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\AuthController;

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::inertia('/', 'Home');

// Authentication routes
Route::get('/register', [AuthController::class, 'showRegistrationForm'])->name('register');
Route::post('/register', [AuthController::class, 'register'])->name('register.submit');
Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login');
Route::post('/login', [AuthController::class, 'login'])->name('login.submit');
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');


// bussiness logic
Route::Resource('products', ProductController::class)->only('index', 'show', 'create', 'store', 'edit', 'update', 'destroy');
Route::Resource('payments', PaymentController::class)->only('index', 'show', 'create', 'store', 'edit', 'update', 'destroy');
