<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {

    public function up()
    {
        Schema::create('settings', function (Blueprint $table) {
            $table->id();
            $table->string('organization_name')->nullable();
            $table->string('organization_short_name')->nullable();
            $table->string('slogan')->nullable();
            $table->string('address')->nullable();
            $table->string('hr_email')->nullable();
            $table->string('customer_support_email')->nullable();
            $table->string('technical_support_email')->nullable();
            $table->string('fax')->nullable();
            $table->string('hr_contact')->nullable();
            $table->string('customer_support_contact')->nullable();
            $table->string('technical_support_contact')->nullable();
            $table->string('website')->nullable();
            $table->string('office_hour')->nullable();
            $table->string('logo_original')->nullable();
            $table->string('logo_white')->nullable();
            $table->string('facebook_page')->nullable();
            $table->string('messenger_link')->nullable();
            $table->string('youtube_url')->nullable();
            $table->string('featured_video_url')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('settings');
    }
};
