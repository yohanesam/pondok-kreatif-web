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
            $table->integer('bidang_id')->nullable();
            $table->string('alamat')->nullable();
            $table->string('koordinat')->nullable();
            $table->string('no_telp')->nullable();
            $table->longText('deskripsi')->nullable();
            $table->integer('kelurahan_id')->nullable();
            $table->integer('kecamatan_id')->nullable();
            $table->bigInteger('omzset')->nullable();
            $table->integer('jumlah_karyawan')->nullable();
            $table->date('tanggal_berdiri')->nullable();
            $table->string('status')->nullable();
            $table->boolean('status_imb')->nullable();
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
