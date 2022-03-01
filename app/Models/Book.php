<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Eloquent;

class Book extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $table = 'book';

    public function Author(){
        return $this->belongsTo('App\Models\Author');
    }
    public function Category(){
        return $this->belongsTo('App\Models\Category');
    }
    public function Review(){
        return $this->hasMany('App\Models\Review');
    }
}
