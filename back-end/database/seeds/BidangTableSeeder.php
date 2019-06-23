<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BidangTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $bidang = [
            'pangan',
            'tekstil',
            'desain',
            'kerajinan',
            'kesehatan',
            'teknologi',
            'mesin',
            'musik'
        ];

        for ($i = 0; $i < count($bidang); $i++) {
            DB::table('bidang ')->insert([
                'nik' => $bidang[$i][2],
                'nama' => $bidang[$i][1],
                'jumlah_anggota_keluarga' => $bidang[$i][0]
            ]);
        }
    }
}
