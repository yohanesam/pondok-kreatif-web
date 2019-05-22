<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePelatihanTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */

    public function up()
    {
        Schema::create('pelatihan', function (Blueprint $table) {
            $table->increments('id');
            $table->string('foto');
            $table->string('nama');
            $table->integer('bidang_id');
            $table->integer('dinas_id');
            $table->longText('deskripsi');
            $table->string('skill_set_key');
            $table->integer('umkm_set_key');
            $table->string('email');
            $table->string('lokasi');
            $table->string('koordinat');
            $table->integer('tanggal');
            $table->integer('tanggal_buat');
            $table->integer('tanggal_akhir');
            $table->integer('tanggal_acara');
            $table->longText('pengisi_acara');
            $table->integer('status_pelatihan');
            $table->integer('tipe_pelatihan');
            $table->string('no_telp_cp');
            $table->integer('kuota_pelatihan');
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
        Schema::dropIfExists('pelatihan');
    }
}
