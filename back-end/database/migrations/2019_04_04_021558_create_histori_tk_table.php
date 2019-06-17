<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHistoriTkTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('histori_tk', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('tk_id');
            $table->string('target_data_id');
            $table->string('aktifitas');
            $table->timestamp('waktu');
            $table->integer('target_object_id');
            $table->longText('deskripsi');+
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
        Schema::dropIfExists('histori_tk');
    }
}
