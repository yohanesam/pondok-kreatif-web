<?php

namespace App\Http\Controllers;

use App\Keahlian;
use Illuminate\Http\Request;

class KeahlianController extends Controller
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
        $keahlian = Keahlian::all();
        return response()->json([
            'data' => $keahlian->toArray()
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
        $keahlian = $request->all();
        try{
            Keahlian::create($keahlian);
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
        $keahlian = keahlian::find($id);
        return response()->json(['data' => $keahlian->toArray()], 201);
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
        $keahlian = keahlian::find($id);
        
        $keahlian->nama = $request->post('nama');
        $keahlian->bidang_id = $request->post('bidang_id');
        $keahlian->save();
        return $keahlian;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $keahlian = keahlian::find($id);
        $keahlian->delete();
        return true;
    }
}
