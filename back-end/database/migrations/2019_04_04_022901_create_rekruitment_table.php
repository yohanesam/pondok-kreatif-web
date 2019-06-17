<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRekruitmentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rekruitment', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('umkm_id');
            $table->string('posisi');
            $table->string('skill_set_key');
            $table->integer('jenjang_minimal');
            $table->string('gaji_minimal');
            $table->integer('kuota');
            $table->date('tanggal_mulai');
            $table->date('tanggal_akhir');
            $table->integer('gaji_maksimal');
            $table->boolean('status');
            $table->longText('deskripsi');
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
        Schema::dropIfExists('rekruitment');
    }
}
