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
            'teknologi',
            'mesin',
            'musik',
            "Kesehatan",
            "Pendidikan",
            "Perekonomian",
            "Sosial",
            "Parawisata",
            "Olahraga",
            "Transportasi"
        ];

        for ($i = 0; $i < count($bidang); $i++) {
            DB::table('bidang')->insert([
                'nama' => $bidang[$i],
            ]);
        }
    }
}
