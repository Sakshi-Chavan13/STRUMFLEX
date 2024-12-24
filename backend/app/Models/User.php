<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    protected $fillbale = [
        'name',
        'email',
        "lesson_for",
        "mobile",
        "email",
        "goals",
        "want_pdf",
        "status",
        "guitar_available",
        "guitar_played_before",
        "days",
        "learning_method",
        "hidden_field",
        "token"
    ];

    protected $casts=[
        'guitar_available' => 'boolean',
        'guitar_played_before' => 'boolean',
        'want_pdf'=> 'boolean'
    ];
}
