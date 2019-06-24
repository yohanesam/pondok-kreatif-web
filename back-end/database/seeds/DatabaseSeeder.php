<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         $this->call(BidangTableSeeder::class);
         $this->call(PenduduksTableSeeder::class);
         $this->call(BeritasTableSeeder::class);
         $this->call(UmkmsTableSeeder::class);
         $this->call(PelatihanTableSeeder::class);
    }
}
