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

//book list/ sort by cate
Route::get('/sort-by-cate/{id}',[BookControllers::class,'Sort_by_category']);

//book list/ sort by author
Route::get('/sort-by-author/{id}',[BookControllers::class,'Sort_by_author']);

//book list/ sort by star
Route::get('/sort-by-star/{id}',[BookControllers::class,'Sort_by_star']);



//book list/show20
Route::get('/show-20',[BookControllers::class,'show_20_per_page']);
//book list/show30
Route::get('/show-30',[BookControllers::class,'show_30_per_page']);


//Home top8 recomment
Route::get('/top-8-recomment',[BookControllers::class,'BookRecomment']);

//Book most discount(carousel)
Route::get('/book-most-discount',[BookControllers::class,'Bookmostdiscount']);
Route::get('/all-book-most-discount',[BookControllers::class,'Allbookmostdiscount']);

//Book popular
Route::get('/book-most-popular',[BookControllers::class,'Bookpopular']);


//Order
Route::resource('/order',OrderControllers::class);










