<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Eloquent;

class Author extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $table = 'author';

    public function Book(){
        return $this->hasMany('App\Models\Book');
    }
}
