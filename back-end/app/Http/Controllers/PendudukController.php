<?php

namespace App\Http\Controllers;

use App\Penduduk;
use Illuminate\Http\Request;

class PendudukController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

    public function index()
    {
        $penduduk = Penduduk::all();
        return response()->json([
            'data' => $penduduk->toArray()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $penduduk = $request->all();
        try{
            Penduduk::create($penduduk);
        } catch(Exception $e) {
            return response()->json([
                'error' => true,
                'message' => $e
            ]);
        }

        return response()->json([
            'error' => false,
            'message' =>'Berhasil'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $penduduk = Penduduk::find($id);
        return response()->json(['data' => $penduduk->toArray()], 201);
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $penduduk = Penduduk::find($id);

        $penduduk->nik = $request->post('nik');
        $penduduk->nama = $request->post('nama');
        $penduduk->jumlah_anggota_keluarga = $request->post('jumlah_anggota_keluarga');
        $penduduk->save();
        return $penduduk;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $penduduk = penduduk::find($id);
        $penduduk->delete();
        return true;
    }
}
