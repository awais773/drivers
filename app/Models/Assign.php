<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Assign extends Model
{

    protected $guarded = [];

    public function kitchen() {
        return $this->hasOne(User::class, 'id', 'kitchen_id');  
    }

    public function rider() {
        return $this->hasOne(User::class, 'id', 'rider_id');  
    }

    use HasFactory;
}
