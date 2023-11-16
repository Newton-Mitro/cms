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
        Schema::create('job_circulars', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('job_position');
            $table->string('vacancy')->default('1');
            $table->text('job_context');
            $table->text('job_responsibility')->nullable();
            $table->string('employment_status')->nullable();
            $table->text('educational_requirement');
            $table->text('experience_requirements')->nullable();
            $table->text('additional_requirements')->nullable();
            $table->enum('religion', ['Christian', 'Islam', 'Hindu', 'Buddhist', 'Equal Opportunity For All'])->default('Christian');
            $table->string('age')->nullable();
            $table->enum('gender', ['Male', 'Female', 'Others', 'Equal Opportunity For All'])->default('Equal Opportunity For All');
            $table->string('job_location')->nullable();
            $table->string('salary')->nullable();
            $table->text('compensation_and_benefits')->nullable();
            $table->date('application_deadline')->nullable();
            $table->text('application_instruction')->nullable();
            $table->enum('publish_status', array('Draft', 'Published'))->default('Published');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('job_circulars');
    }
};
