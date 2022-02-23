<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controller\ProductController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

//layout
Route::get('/home', function () {
    return view('Pages.homepages');
});

Route::get('/shop-pages', function () {
    return view('pages.shoppages');
});

Route::get('/cart-pages', function () {
    return view('pages.cartpages');
});

Route::get('/about-pages', function () {
    return view('pages.aboutpages');
});


