<?php

namespace App\Http\Controllers;

use App\Pelatihan;
use Illuminate\Http\Request;

class PelatihanController extends Controller
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
        $pelatihan = Pelatihan::all();
        return response()->json([
            'data' => $pelatihan->toArray()
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
        $pelatihan = $request->all();
        try{
            User::create($pelatihan);
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
        $pelatihan = Pelatihan::find($id);
        return response()->json(['data' => $pelatihan->toArray()], 201);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $pelatihan = Pelatihan::find($id);
        
        $pelatihan->foto = $request->post('foto');
        $pelatihan->nama = $request->post('nama');
        $pelatihan->bidang_id = $request->post('bidang_id');
        $pelatihan->dinas_id = $request->post('dinas_id');
        $pelatihan->deskripsi = $request->post('deskripsi');
        $pelatihan->skill_set_key = $request->post('skill_set_key');
        $pelatihan->umkm_set_key = $request->post('umkm_set_key');
        $pelatihan->email = $request->post('email');
        $pelatihan->alamat = $request->post('alamat');
        $pelatihan->koordinat = $request->post('koordinat');
        $pelatihan->tanggal = $request->post('tanggal');
        $pelatihan->tanggal_buat = $request->post('tanggal_buat');
        $pelatihan->tanggal_akhir = $request->post('tanggal_akhir');
        $pelatihan->tanggal_acara = $request->post('tanggal_acara');
        $pelatihan->pengisi_acara = $request->post('pengisi_acara');
        $pelatihan->status_pelatihan = $request->post('status_pelatihan');
        $pelatihan->tipe_pelatihan = $request->post('tipe_pelatihan');
        $pelatihan->no_telp_cp = $request->post('no_telp_cp');
        $pelatihan->kuota_pelatihan = $request->post('kuota_pelatihan');
        $pelatihan->save();
        return $pelatihan;
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
        $pelatihan = pelatihan::find($id);
        $pelatihan->delete();
        return true;
    }
}
