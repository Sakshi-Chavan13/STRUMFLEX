<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('mobile');
            $table->string('lesson_for');
            $table->string('goals')->nullable();
            $table->boolean('want_pdf')->nullable();
            $table->string('status')->nullable();
            $table->boolean('guitar_available')->nullable();
            $table->boolean('guitar_played_before')->nullable();
            $table->string('session_availability')->nullable();
            $table->string('days')->nullable();
            $table->string('shift')->nullable();
            $table->string('learning_method')->nullable();
            $table->string('hidden_field')->nullable();
            $table->string('token')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
