<?php

namespace Database\Seeders;

use App\Models\User;
use DB;
use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

/**========================================================================
 * ?                                ABOUT
 * @author         : Newton Mitro
 * @email          : newtonmitro@gmail.com
 * @repo           :
 * @createdOn      :  08 Oct 2023
 * @updatedBy      : Newton Mitro
 * @updatedAt      :  08 Oct 2023
 * @description     :
 *========================================================================**/

class UserSeeder extends Seeder
{
    function getRandomNumber()
    {
        $faker = Factory::create();
        return $faker->randomNumber();
    }

    public function run()
    {
        DB::table('users')->insert([
            'name' => 'John Doe',
            'email' => 'super.admin@email.com',
            'email_verified_at' => now(),
            'photo' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'role' => 'Super Admin',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
            'remember_token' => Str::random(10),
        ]);

        DB::table('users')->insert([
            'name' => 'Jane Doe',
            'email' => 'admin@email.com',
            'email_verified_at' => now(),
            'photo' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'role' => 'Admin',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
            'remember_token' => Str::random(10),
        ]);

        DB::table('users')->insert([
            'name' => 'Crystina Baker',
            'email' => 'content.manager@email.com',
            'email_verified_at' => now(),
            'photo' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'role' => 'Content Manager',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
            'remember_token' => Str::random(10),
        ]);

        DB::table('users')->insert([
            'name' => 'Jane Smith',
            'email' => 'content.creator@email.com',
            'email_verified_at' => now(),
            'photo' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'role' => 'Content Creator',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
            'remember_token' => Str::random(10),
        ]);

        DB::table('users')->insert([
            'name' => 'John Smith',
            'email' => 'visitor@email.com',
            'email_verified_at' => now(),
            'photo' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'role' => 'Visitor',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
            'remember_token' => Str::random(10),
        ]);

        User::factory(5)->create();
    }
}
