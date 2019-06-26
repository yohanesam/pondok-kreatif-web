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
            'Tata Boga',
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
            "Transportasi",
            "Teknik",
            "Tata rias",
            "Jasa"
        ];

        for ($i = 0; $i < count($bidang); $i++) {
            DB::table('bidang')->insert([
                'nama' => $bidang[$i],
            ]);
        }
    }
}
