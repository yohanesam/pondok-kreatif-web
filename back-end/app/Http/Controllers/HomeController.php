<?php

namespace App\Http\Controllers;

use App\Rekruitmen;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home');
    }

    
    public function rekruitmen($id)
    {
       $count = Rekruitmen::where('umkm_id',$id)->count();
        
       return response()->json([$count]);
    }
}
