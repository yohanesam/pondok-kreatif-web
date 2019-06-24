<?php

namespace App\Http\Controllers;

use App\Berita;
use Illuminate\Http\Request;

class BeritaController extends Controller
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
        $berita = Berita::all();
        return response()->json([
            'data' => $berita->toArray()
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
        $berita = $request->all();
        try{
            Berita::create($berita);
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
        $berita = Berita::find($id);
        return response()->json(['data' => $berita->toArray()], 201);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $berita = Berita::find($id);
        
        $berita->nama_usaha = $request->post('nama_usaha');
        $berita->nama_pemilik = $request->post('nama_pemilik');
        $berita->no_izin_usaha = $request->post('no_izin_usaha');
        $berita->bidang_id = $request->post('bidang_id');
        $berita->alamat = $request->post('alamat');
        $berita->koordinat = $request->post('koordinat');
        $berita->no_telp = $request->post('no_telp');
        $berita->deskripsi = $request->post('deskripsi');
        $berita->kelurahan_id = $request->post('kelurahan_id');
        $berita->kecamatan_id = $request->post('kecamatan_id');
        $berita->omzet = $request->post('omzet');
        $berita->jumlah_karyawan = $request->post('jumlah_karyawan');
        $berita->tanggal_berdiri = $request->post('tanggal_berdiri');
        $berita->status = $request->post('status');
        $berita->status_imb = $request->post('status_imb');
        $berita->save();
        return $berita;
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
        // 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $berita = berita::find($id);
        $berita->delete();
        return true;
    }
}
