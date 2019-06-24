<?php

namespace App\Http\Controllers;

use App\Jenjang;
use Illuminate\Http\Request;

class JenjangController extends Controller
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
        $jenjang = Jenjang::all();
        return response()->json([
            'data' => $jenjang->toArray()
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
        $jenjang = $request->all();
        try{
            Jenjang::create($jenjang);
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
        $jenjang = Jenjang::find($id);
        return response()->json(['data' => $jenjang->toArray()], 201);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $jenjang = Jenjang::find($id);
        
        $jenjang->nama = $request->post('nama');
        $jenjang->tingkat = $request->post('tingkat');
        $jenjang->save();
        return $jenjang;
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
        $jenjang = Jenjang::find($id);
        $jenjang->delete();
        return true;
    }
}
