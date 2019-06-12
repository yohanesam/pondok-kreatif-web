<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Teka extends Model
{
    protected $table = 'tenaga_kerja';

    protected $fillable = ['foto','nama','nik','alamat','deskripsi','tempat_lahir','kelamin','pengalaman','no_telp','email'];
}
