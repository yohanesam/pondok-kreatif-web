<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')
    ->get('/user', function (Request $request) {
        return $request->user();
    });

Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout');

Route::apiResources(
    [
        'berita' => 'BeritaController',
        'bidang' => 'BidangController',
        'home' => 'HomeController',
        'jenjang' => 'JenjangController',
        'keahlian' => 'KeahlianController',
        'pelatihan' => 'PelatihanController',
        'penduduk' => 'PendudukController',
        'rekruitmen' => 'RekruitmenController',
        'teka' => 'TekaController',
        'umkm' => 'UmkmController'
    ]
);


Route: get('checking/{nik}', 'SearchController@checkPenduduk');
