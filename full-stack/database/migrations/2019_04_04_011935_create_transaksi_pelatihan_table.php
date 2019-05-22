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
            $table->integer('pelatihan_id');
            $table->string('status');
            $table->string('transaksi_key');
            $table->string('tk_set_key');
            $table->timestamp('waktu');
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
