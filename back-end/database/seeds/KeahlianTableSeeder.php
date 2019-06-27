<?php

use Illuminate\Database\Seeder;

class KeahlianTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $keahlian = [[1, 'memasak'],
        [1, 'menyajikan makanan'],
        [2, 'mengecat'],
        [2, 'membatik'],
        [3, 'desain baju'],
        [3, 'edit gambar'],
        [3, 'desain poster'],
        [4, 'pahat batu'],
        [4, 'pahat kayu'],
        [3, 'lukis'],
        [4, 'kerajinan bahan bekas'],
        [5, 'programming'],
        [5, 'ahli jaringan'],
        [5, 'ahli keamanan sistem'],
        [6, 'produksi mesin '],
        [4, 'maintenance'],
        [7, 'musisi'],
        [7, 'penyair'],
        [8, 'ahli bedah'],
        [8, 'ahli penyakit anak'],
        [8, 'ahli gigi'],
        [9, 'pengajar'],
        [10, 'administrasi'],
        [11, 'pembina masyarakat'],
        [12, 'promotor'],
        [13, 'pandai lari'],
        [13, 'pandai renang'],
        [13, 'pandai bela diri'],
        [14, 'pendai mengemudi'],
        [13, 'pandai menerbangkan pesawat'],
        [15, 'teknisi'],
        [16, 'pandai bersolek'],
        [17, 'menyapu'],
        [17, 'cukur rambut'],
        [17, 'membersihkan']];

        for ($i = 0; $i < count($keahlian); $i++) {
            DB::table('keahlian')->insert([
                'nama' => $keahlian[$i][1],
                'bidang_id' => $keahlian[$i][0]
            ]);
        }
    }
}
