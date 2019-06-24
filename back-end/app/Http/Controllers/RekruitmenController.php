<?php

namespace App\Http\Controllers;

use App\Rekruitmen;
use Illuminate\Http\Request;

class RekruitmenController extends Controller
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
        $rekruitmen = Rekruitmen::all();
        return response()->json([
            'data' => $rekruitmen->toArray()
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
        $rekruitmen = $request->all();
        try{
            Rekruitmen::create($rekruitmen);
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
        $rekruitmen = Rekruitmen::find($id);
        return response()->json(['data' => $rekruitmen->toArray()], 201);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $rekruitmen = Rekruitmen::find($id);
        
        $rekruitmen->umkm_id = $request->post('umkm_id');
        $rekruitmen->posisi = $request->post('posisi');
        $rekruitmen->skill_set_key = $request->post('skill_set_key');
        $rekruitmen->jenjang_minimal = $request->post('jenjang_minimal');
        $rekruitmen->gaji = $request->post('gaji');
        $rekruitmen->kuota = $request->post('kuota');
        $rekruitmen->tanggal_mulai = $request->post('tanggal_mulai');
        $rekruitmen->tanggal_akhir = $request->post('tanggal_akhir');
        $rekruitmen->gaji_maksimal = $request->post('gaji_maksimal');
        $rekruitmen->status = $request->post('status');
        $rekruitmen->deskripsi = $request->post('deskripsi');
        $rekruitmen->save();
        return $rekruitmen;
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
        $rekruitmen = rekruitmen::find($id);
        $rekruitmen->delete();
        return true;
    }
}
