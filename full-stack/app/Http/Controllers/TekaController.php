<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class TekaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
        // return Teka::create([
        //     'foto' => $request['foto'],
        //     'nama' => $request['nama'],
        //     'nik' => $request['nik'],
        //     'alamat' => $request['alamat'],
        //     // 'jenjang_id' => $request['jenjang_id'],
        //     // 'skill_set_key' => $request['skill_set_key'],
        //     'pengalaman' => $request['pengalaman'],
        //     'deskripsi' => $request['deskripsi'],
        //     'tempat_lahir' => $request['tempat_lahir'],
        //     'kelamin' => $request['kelamin'],
        //     'email' => $request['email'],
        //     'no_telp' => $request['no_telp'],
        // ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $teka = $this->validate(request(), [
            'foto' => 'required',
            'nama' => 'required',
            'nik' => 'required|numeric',
            // 'jenjang_id' => $request['jenjang_id'],
            // 'skill_set_key' => $request['skill_set_key'],
            'kelamin' => 'required',
            'email' => 'required',
            'no_telp' => 'required|numeric'
        ]);

        return Teka::create($teka);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
        //
    }
}
