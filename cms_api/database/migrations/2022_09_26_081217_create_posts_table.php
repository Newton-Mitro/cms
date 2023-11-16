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
 * @description    :
 *========================================================================**/

return new class extends Migration {

    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('title');
            $table->string('icon')->nullable();
            $table->text('short_description')->nullable();
            $table->text('content')->nullable();
            $table->integer('order')->default(0);
            $table->string('original_attachment_url')->nullable();
            $table->string('thumbnail_attachment_url')->nullable();
            $table->string('landscape_attachment_url')->nullable();
            $table->string('portrait_attachment_url')->nullable();
            $table->enum('publish_status', array('Draft', 'Published'))->default('Published');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('posts');
    }
};
