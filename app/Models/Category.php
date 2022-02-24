<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Eloquent;

class Category extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = 'category';

    public function Book(){
        return $this->hasMany('App\Models\Book');
    }
}
