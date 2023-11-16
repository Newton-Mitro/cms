<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**========================================================================
 * ?                                ABOUT
 * @author         : Newton Mitro
 * @email          : newtonmitro@gmail.com
 * @repo           :
 * @createdOn      : 08 Oct 2023
 * @updatedBy      : Newton Mitro
 * @updatedAt      : 08 Oct 2023
 * @description    :
 *========================================================================**/

return new class extends Migration {

    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('phone')->nullable();
            $table->string('photo')->nullable();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->boolean('status')->default(true);
            $table->enum('role', array('Visitor', 'Super Admin', 'Admin', 'Content Manager', 'Content Creator'));
            $table->rememberToken();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('users');
    }
};
