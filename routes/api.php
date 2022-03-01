<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeControllers;
use  App\Http\Controllers\BookControllers;
use  App\Http\Controllers\OrderControllers;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\UserControllers;
use App\Http\Controllers\AuthController;
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



//book
//book list
Route::resource('/book-list',BookControllers::class);
//book list/ filter by cate
Route::get('/filter-by-cate/{id}',[BookControllers::class,'Filter_by_category']);
//book list/ filter by author
Route::get('/filter-by-author/{id}',[BookControllers::class,'Filter_by_author']);
//book list/ filter by star
Route::get('/filter-by-star/{id}',[BookControllers::class,'Filter_by_star']);
//book list/ sort by on sale
Route::get('/sort-by-onsale',[BookControllers::class,'Sort_by_onsale']);
//book list/ sort by popular
Route::get('/sort-by-popular',[BookControllers::class,'Sort_by_popular']);
//book list/ sort low to high price
Route::get('/sort-low-to-high',[BookControllers::class,'Sort_lowtohigh_price']);
//book list/ sort low to high price
Route::get('/sort-high-to-low',[BookControllers::class,'Sort_hightolow_price']);




//book list/show20
Route::get('/show-20',[BookControllers::class,'show_20_per_page']);
//book list/show30
Route::get('/show-30',[BookControllers::class,'show_30_per_page']);



//Product
//Home top8 recomment
Route::get('/top-8-recomment',[BookControllers::class,'BookRecomment']);
//Book most discount(carousel)
Route::get('/book-most-discount',[BookControllers::class,'Bookmostdiscount']);
Route::get('/all-book-most-discount',[BookControllers::class,'Allbookmostdiscount']);
//Book popular
Route::get('/book-most-popular',[BookControllers::class,'Bookpopular']);


//Comment
//Sort comment newest
Route::get('/sort-comment-newest/{id}',[\App\Http\Controllers\CommentController::class,'Sort_comment_newest']);
//Sort comment oldest
Route::get('/sort-comment-eldest/{id}',[\App\Http\Controllers\CommentController::class,'Sort_comment_oldest']);
//Show comment per page
Route::get('/show-comment-per-page/{id}',[\App\Http\Controllers\CommentController::class,'Comment_paginate']);


//Login
Route::post('/login', [\App\Http\Controllers\AuthController::class,'store']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/users', [\App\Http\Controllers\UserControllers::class,'index']);
});


//Order
Route::resource('/order',OrderControllers::class);










