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
        Schema::create('registrations', function (Blueprint $name) {
            $name->id();
            $name->string('full_name');
            $name->string('phone_number');
            $name->string('email');
            $name->enum('gender', ['laki-laki', 'perempuan']);
            $name->integer('age');
            $name->string('origin');
            $name->string('jft_certificate_path')->nullable();
            $name->string('senmonkyu_certificate_path')->nullable();
            $name->string('skill_test_certificate_path')->nullable();
            $name->text('japan_experience')->nullable();
            $name->string('status')->default('pending');
            $name->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('registrations');
    }
};
