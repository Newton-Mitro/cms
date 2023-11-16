<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**========================================================================
 * ?                                ABOUT
 * @author         :  Newton Mitro
 * @email          :  newtonmitro@gmail.com
 * @repo           :
 * @createdOn      :  08 Oct 2023
 * @updatedBy      :  Newton Mitro
 * @updatedAt      :  08 Oct 2023
 * @description     :
 *========================================================================**/

return new class extends Migration {

    public function up()
    {
        Schema::create('staffs', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('name');
            $table->string('position')->nullable();
            $table->text('bio')->nullable();
            $table->text('short_introduction')->nullable();
            $table->enum('staff_type', array('Office Bearer', 'Board Of Director', 'Credit Committee', 'Supervisory Committee'));
            $table->string('facebook_profile')->nullable();
            $table->string('linkedin_profile')->nullable();
            $table->string('skype_user_name')->nullable();
            $table->string('mobile')->nullable();
            $table->string('email')->nullable();
            $table->string('original_attachment_url')->nullable();
            $table->string('thumbnail_attachment_url')->nullable();
            $table->string('landscape_attachment_url')->nullable();
            $table->string('portrait_attachment_url')->nullable();
            $table->integer('order')->default(0);
            $table->enum('publish_status', array('Draft', 'Published'))->default('Published');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('staffs');
    }
};
