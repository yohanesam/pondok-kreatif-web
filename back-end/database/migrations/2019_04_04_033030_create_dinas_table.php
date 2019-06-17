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
            $table->string('nama_dinas');
            $table->string('no_telp');
            $table->string('nama_ketua_dinas');
            $table->string('alamat');
            $table->string('koordinat');
            $table->longText('deskripsi');
            $table->string('tahun_berdiri');
            $table->integer('kelurahan_id');
            $table->integer('kecamatan_id');
            $table->integer('data_id');
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
