<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTransaksiPelatihanTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transaksi_pelatihan', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('pelatihan_id')->nullable();
            $table->string('status')->nullable();
            $table->string('transaksi_key')->nullable();
            $table->string('tk_set_key')->nullable();
            $table->timestamp('waktu')->nullable();
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
        Schema::dropIfExists('transaksi_pelatihan');
    }
}
