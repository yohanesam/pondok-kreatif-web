<?php

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
    return view('index');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::post('/register', 'Auth\RegisterController@register');
Route::post('/login', 'Auth\LoginController@login');


Route::resource('Teka','TekaController');
Route::post('teka/apiRegis','TekaController@store');
Route::get('teka/apiView','TekaController@index');


Route::post('umkm/apiRegis','UmkmController@store');
Route::get('umkm/apiView','UmkmController@index');