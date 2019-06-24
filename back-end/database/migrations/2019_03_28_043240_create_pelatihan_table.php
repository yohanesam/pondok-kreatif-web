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
            $table->string('foto')->nullable();
            $table->string('nama')->nullable();
            $table->integer('bidang_id')->nullable();
            $table->integer('dinas_id')->nullable();
            $table->longText('deskripsi')->nullable();
            $table->string('skill_set_key')->nullable();
            $table->string('umkm_set_key')->nullable();
            $table->string('email')->nullable();
            $table->string('lokasi')->nullable();
            $table->string('koordinat')->nullable();
            $table->integer('tanggal')->nullable();
            $table->integer('tanggal_buat')->nullable();
            $table->integer('tanggal_akhir')->nullable();
            $table->integer('tanggal_acara')->nullable();
            $table->longText('pengisi_acara')->nullable();
            $table->integer('status_pelatihan')->nullable();
            $table->integer('tipe_pelatihan')->nullable();
            $table->string('no_telp_cp')->nullable();
            $table->string('kuota_pelatihan')->nullable();
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
