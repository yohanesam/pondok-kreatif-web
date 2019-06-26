<?php

namespace App\Http\Controllers;

use App\User;
use App\Umkm;
use App\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UmkmController extends Controller
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
        $umkm = Umkm::all();
        return response()->json([
            'data' => $umkm->toArray()
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
        $user = $request->all();
        $user['password'] = Hash::make($user['password']);
        try{
            $id_user = User::create($user);
            $id_umkm = Umkm::where('id', $id_user->id)->fist();
            
            Role::create([
                'role_id' => 2,
                'user_id' => $id_user->id,
                'role_user_id' => $id_umkm->id
            ]);
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
        $umkm = Umkm::find($id);
        return response()->json($umkm->toArray(), 201);
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
        $umkm = Umkm::find($id);
        
        $umkm->nama_usaha = $request->post('nama_usaha');
        $umkm->nama_pemilik = $request->post('nama_pemilik');
        $umkm->no_izin_usaha = $request->post('no_izin_usaha');
        $umkm->kategori = $request->post('kategori');
        $umkm->jam_operasi = $request->post('jam_operasi');
        $umkm->gambar = $request->post('gambar');
        $umkm->bidang_id = $request->post('bidang_id');
        $umkm->alamat = $request->post('alamat');
        $umkm->koordinat = $request->post('koordinat');
        $umkm->no_telp = $request->post('no_telp');
        $umkm->deskripsi = $request->post('deskripsi');
        $umkm->website = $request->post('website');
        $umkm->jumlah_karyawan = $request->post('jumlah_karyawan');
        $umkm->tanggal_berdiri = $request->post('tanggal_berdiri');
        $umkm->status = $request->post('status');
        $umkm->save();
        return $umkm;
    }

    public function up_gambar(Request $request, $id)
    {
        $umkm = Umkm::find($id);
        
        $umkm->gambar = $request->post('gambar');
        $umkm->save();
        return $umkm;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $umkm = Umkm::find($id);
        $umkm->delete();
        return true;
    }
}
