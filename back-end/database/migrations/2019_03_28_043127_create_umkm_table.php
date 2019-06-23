<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUmkmTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('umkms', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nama_usaha')->nullable();
            $table->string('nama_pemilik')->nullable();
            $table->string('no_izin_usaha')->nullable();
            $table->string('jam_operasi')->nullable();
            $table->longText('gambar')->nullable();
            $table->integer('bidang_id')->nullable();
            $table->string('alamat')->nullable();
            $table->string('koordinat')->nullable();
            $table->string('no_telp')->nullable();
            $table->longText('deskripsi')->nullable();
            $table->string('website')->nullable();
            $table->integer('jumlah_karyawan')->nullable();
            $table->date('tanggal_berdiri')->nullable();
            $table->string('status')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('umkm');
    }
}
