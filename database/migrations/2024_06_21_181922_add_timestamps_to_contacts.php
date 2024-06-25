<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTimestampsToContacts extends Migration
{
    public function up()
    {
        Schema::table('contacts', function (Blueprint $table) {
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::table('contacts', function (Blueprint $table) {
            $table->dropTimestamps();
        });
    }
}
