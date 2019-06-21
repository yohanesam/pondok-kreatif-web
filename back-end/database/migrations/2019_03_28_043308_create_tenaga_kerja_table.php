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
            $table->string('foto')->nullable();
            $table->string('nama')->nullable();
            $table->string('nik')->nullable();
            $table->string('alamat')->nullable();
            $table->string('koordinat_alamat')->nullable();
            $table->integer('kelurahan_id')->nullable();
            $table->integer('kecamatan_id')->nullable();
            $table->string('rt')->nullable();
            $table->string('rw')->nullable();
            $table->integer('jenjang_id')->nullable();
            $table->string('skill_set_key')->nullable();
            $table->string('pengalaman')->nullable();
            $table->longText('deskripsi')->nullable();
            $table->string('tempat_lahir')->nullable();
            $table->string('kelamin')->nullable();
            $table->string('email')->nullable();
            $table->string('no_telp')->nullable();
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
