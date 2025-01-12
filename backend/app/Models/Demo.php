<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class demo extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        "lesson_for",
        "mobile",
        "email",
        "goals",
    ];
}
