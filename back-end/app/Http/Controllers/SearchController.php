<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Penduduk;

class SearchController extends Controller
{
    public function checkPenduduk($nik)
    {

        $penduduk = Penduduk::where('nik', $nik)->count();

        if ($penduduk == 0 || $penduduk == null) {
            return response()->json([
                'message' => "tidak terdaftar",
                'error' => true
            ]);
        } else {
            return response()->json([
                'message' => "terdaftar",
                'error' => false
            ]);
        }
    }
}
