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
            $table->string('nama_usaha');
            $table->string('nama_pemilik');
            $table->string('no_izin_usaha');
            $table->integer('bidang_id');
            $table->string('alamat');
            $table->string('koordinat');
            $table->string('no_telp');
            $table->longText('deskripsi');
            $table->integer('kelurahan_id');
            $table->integer('kecamatan_id');
            $table->bigInteger('omzset');
            $table->integer('jumlah_karyawan');
            $table->date('tanggal_berdiri');
            $table->string('status');
            $table->boolean('status_imb');
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
