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
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('title');
            $table->dateTime('from_date');
            $table->dateTime('to_date')->nullable();
            $table->string('venue');
            $table->text('short_description')->nullable();
            $table->text('details')->nullable();
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
        Schema::dropIfExists('events');
    }
};
