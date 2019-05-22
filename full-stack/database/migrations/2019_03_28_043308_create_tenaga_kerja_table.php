<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTenagaKerjaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tenaga_kerja', function (Blueprint $table) {
            $table->increments('id');
            $table->string('foto');
            $table->string('nama');
            $table->string('nik');
            $table->string('alamat');
            $table->string('koordinat_alamat');
            $table->integer('kelurahan_id');
            $table->integer('kecamatan_id');
            $table->string('rt');
            $table->string('rw');
            $table->integer('jenjang_id');
            $table->string('skill_set_key');
            $table->string('pengalaman');
            $table->longText('deskripsi');
            $table->string('tempat_lahir');
            $table->string('kelamin');
            $table->string('email');
            $table->string('no_telp');
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
        Schema::dropIfExists('tenaga_kerja');
    }
}
