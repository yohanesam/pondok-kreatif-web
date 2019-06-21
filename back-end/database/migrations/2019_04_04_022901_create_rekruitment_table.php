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
            $table->integer('umkm_id')->nullable();
            $table->string('posisi')->nullable();
            $table->string('skill_set_key')->nullable();
            $table->integer('jenjang_minimal')->nullable();
            $table->string('gaji_minimal')->nullable();
            $table->integer('kuota')->nullable();
            $table->date('tanggal_mulai')->nullable();
            $table->date('tanggal_akhir')->nullable();
            $table->integer('gaji_maksimal')->nullable();
            $table->boolean('status')->nullable();
            $table->longText('deskripsi')->nullable();
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
