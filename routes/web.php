<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ClientController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Guest\HomeController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/', HomeController::class)->name('home');

Auth::routes();
Route::post('/logout', [LoginController::class, 'logout'])->name('logout');
Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
Route::resource('users', UserController::class)->except('show');
Route::resource('clients', ClientController::class)->except('show');
Route::resource('categories', CategoryController::class)->except('show');
Route::resource('products', ProductController::class)->except('show');
