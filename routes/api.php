<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeControllers;
use  App\Http\Controllers\BookControllers;
use  App\Http\Controllers\OrderControllers;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
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


//book list
Route::resource('/book-list',BookControllers::class);
Route::resource('/order',OrderControllers::class);








