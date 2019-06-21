<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDinasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dinas', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nama_dinas')->nullable();
            $table->string('no_telp')->nullable();
            $table->string('nama_ketua_dinas')->nullable();
            $table->string('alamat')->nullable();
            $table->string('koordinat')->nullable();
            $table->longText('deskripsi')->nullable();
            $table->string('tahun_berdiri')->nullable();
            $table->integer('kelurahan_id')->nullable();
            $table->integer('kecamatan_id')->nullable();
            $table->integer('data_id')->nullable();
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
        Schema::dropIfExists('dinas');
    }
}
