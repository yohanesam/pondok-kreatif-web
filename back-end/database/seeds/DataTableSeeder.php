<?php

use Illuminate\Database\Seeder;

class DataTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            "teka",
            "umkm",
            "pelatihan",
            "penduduk",
            "bidang",
            "keahlian",
            "berita",
            "queue"
        ];

        for ($i = 0; $i < count($data); $i++) {
            DB::table('data')->insert([
                'nama' => $data[$i],
            ]);
        }
    }
}
