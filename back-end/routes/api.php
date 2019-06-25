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
Route::post('umkm/gambar', 'UmkmController@up_gambar');

Route::apiResource(
    ['berita' => 'BeritaController'],
    ['bidang' => 'BidangController'],
    ['home' => 'HomeController'],
    ['jenjang' => 'JenjangController'],
    ['keahlian' => 'KeahlianController'],
    ['pelatihan' => 'PelatihanController'],
    ['penduduk' => 'PendudukController'],
    ['rekruitmen' => 'RekruitmenController'],
    ['teka' => 'TekaController'],
    ['umkm' => 'UmkmController']
);