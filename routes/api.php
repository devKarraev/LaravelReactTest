<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::get("/", "FrontEnd\HomeController@index");
Route::post("/post/{id}", "FrontEnd\PostController@index")->where('id', '[0-9]+');;

Route::group(["namespace" => "FrontEnd", "prefix" => "/category"], function() {
    Route::get("/sport", "SportController@index");
    Route::get("/nature", "NatureController@index");
});
