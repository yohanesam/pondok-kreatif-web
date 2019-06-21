<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTransaksiRekruitmenTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transaksi_rekruitmen', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('rekruitmen_id')->nullable();
            $table->string('tk_id')->nullable();
            $table->string('status')->nullable();
            $table->string('transaksi_key')->nullable();
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
        Schema::dropIfExists('transaksi_rekruitmen');
    }
}
