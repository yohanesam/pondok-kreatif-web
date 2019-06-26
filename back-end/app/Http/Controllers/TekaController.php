<?php

namespace App\Http\Controllers;

use App\User;
use App\Teka;
use App\Role;
use Illuminate\Http\Request;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;

class TekaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $teka = Teka::all();
        return response()->json([
            'data' => $teka->toArray()
        ]);
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
     * Store a newly
     *  created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = $request->all();

        $id_user = User::create([
            'email' => $user['email'],
            'password' => Hash::make($user['password'])
        ]);

        $teka = $request->except('password','password_confirmation');
        $id_teka = Teka::create($teka);

        Role::create([
            'role_id' => 1,
            'user_id' => $id_user->id,
            'role_user_id' => $id_teka->id
        ]);

        return response()->json($teka);

        // $this->guard()->login($user);

        // And finally this is the hook that we want. If there is no
        // registered() method or it returns null, redirect him to
        // some other URL. In our case, we just need to implement
        // that method to return the correct response.
        // return $this->registered($request, $user)
        //                 ?: redirect($this->redirectPath());
    }

    protected function registered(Request $request, $user)
    {
        $user->generateToken();

        return response()->json(['data' => $user->toArray()], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        $teka = Teka::find($id);
        return response()->json(['data' => $teka->toArray()], 201);
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
        $teka = Teka::find($id);

        $teka->nama = $request->post('nama');
        $teka->nim = $request->post('nik');
        $teka->email = $request->post('email');
        $teka->alamat = $request->post('alamat');
        $teka->no_telp = $request->post('no_telp');
        $teka->deskripsi = $request->post('deskripsi');
        $teka->tempat_lahir = $request->post('tempat_lahir');
        $teka->kelamin = $request->post('kelamin');
        $teka->pengalaman = $request->post('pengalaman');
        $teka->save();
        return $teka;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $teka = Teka::find($id);
        $teka->delete();
        return true;
    }
}
