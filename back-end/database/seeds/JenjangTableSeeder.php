<?php

use Illuminate\Database\Seeder;

class JenjangTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $jenjang = [
            "Tidak Pernah Sekolah",
            "Taman Kanak Kanak / PAUD",
            "Sekolah Dasar",
            "Sekolah Menenangah Pertama",
            "Sekolah Menengah Akhir",
            "D1",
            "D2",
            "D3",
            "S1 / D4",
            "S2",
            "S3"
        ];

        for ($i = 0; $i < count($jenjang); $i++) {
            DB::table('jenjang')->insert([
                'nama' => $jenjang[$i],
            ]);
        }
    }
}
