<?php

namespace Database\Seeders;

use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

/**========================================================================
 * ?                                bio
 * @author         : Newton Mitro
 * @email          : newtonmitro@gmail.com
 * @repo           :
 * @createdOn      :  08 Oct 2023
 * @updatedBy      : Newton Mitro
 * @updatedAt      :  08 Oct 2023
 * @description     :
 *========================================================================**/

class StaffSeeder extends Seeder
{

    function getStaffType()
    {
        $arr = array('Office Bearer', 'Board Of Director', 'Credit Committee', 'Supervisory Committee');
        $randomIndex = array_rand($arr);
        return $arr[$randomIndex];
    }

    function getName()
    {
        $faker = Factory::create();
        $name = $faker->name();
        return $name;
    }

    function getUrl()
    {
        $faker = Factory::create();

        return $faker->imageUrl();
    }

    function getEmail()
    {
        $faker = Factory::create();
        return $faker->email();
    }

    function getUserName()
    {
        $faker = Factory::create();
        return $faker->userName();
    }

    function getPhone()
    {
        $faker = Factory::create();
        return $faker->phoneNumber();
    }

    function getRandomNumber()
    {
        $faker = Factory::create();
        return $faker->randomNumber();
    }

    public function run()
    {


        // Office Bearers

        // DB::table('staffs')->insert([
        //     'slug' => Str::slug('Mr. Pankaj Gilbert Costa'),
        //     'name' => 'Mr. Pankaj Gilbert Costa',
        //     'position' => 'President',
        //     'staff_type' => 'Office Bearer',
        //     'bio' => generateHtml('Mr. Pankaj Gilbert Costa'),
        //     'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'thumbnail_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'facebook_profile' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'linkedin_profile' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'skype_user_name' => $this->getUserName(),
        //     'mobile' => $this->getPhone(),
        //     'email' => $this->getEmail(),
        // ]);


        DB::table('staffs')->insert([
            'slug' => Str::slug($this->getName()),
            'name' => $this->getName(),
            'position' => 'President',
            'staff_type' => 'Office Bearer',
            'bio' => generateHtml($this->getName()),
            'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'thumbnail_attachment_url' => 'https://source.unsplash.com/random/600x600?sig=' . $this->getRandomNumber(),
            'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'facebook_profile' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'linkedin_profile' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'skype_user_name' => $this->getUserName(),
            'mobile' => $this->getPhone(),
            'email' => $this->getEmail(),
        ]);

        // DB::table('staffs')->insert([
        //     'slug' => Str::slug('Mr. Albert Asish Biswas'),
        //     'name' => 'Mr. Albert Asish Biswas',
        //     'position' => 'Vice-President',
        //     'staff_type' => 'Office Bearer',
        //     'bio' => generateHtml('Mr. Albert Asish Biswas'),
        //     'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'thumbnail_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'facebook_profile' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'linkedin_profile' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'skype_user_name' => $this->getUserName(),
        //     'mobile' => $this->getPhone(),
        //     'email' => $this->getEmail(),
        // ]);

        DB::table('staffs')->insert([
            'slug' => Str::slug($this->getName()),
            'name' => $this->getName(),
            'position' => 'Vice-President',
            'staff_type' => 'Office Bearer',
            'bio' => generateHtml($this->getName()),
            'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'thumbnail_attachment_url' => 'https://source.unsplash.com/random/600x600?sig=' . $this->getRandomNumber(),
            'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'facebook_profile' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'linkedin_profile' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'skype_user_name' => $this->getUserName(),
            'mobile' => $this->getPhone(),
            'email' => $this->getEmail(),
        ]);

        // DB::table('staffs')->insert([
        //     'slug' => Str::slug('Mr. Ignatious Hemanta Corraya'),
        //     'name' => 'Mr. Ignatious Hemanta Corraya',
        //     'position' => 'Secretary',
        //     'staff_type' => 'Office Bearer',
        //     'bio' => generateHtml('Mr. Ignatious Hemanta Corraya'),
        //     'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'thumbnail_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'facebook_profile' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'linkedin_profile' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'skype_user_name' => $this->getUserName(),
        //     'mobile' => $this->getPhone(),
        //     'email' => $this->getEmail(),
        // ]);

        DB::table('staffs')->insert([
            'slug' => Str::slug($this->getName()),
            'name' => $this->getName(),
            'position' => 'Secretary',
            'staff_type' => 'Office Bearer',
            'bio' => generateHtml($this->getName()),
            'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'thumbnail_attachment_url' => 'https://source.unsplash.com/random/600x600?sig=' . $this->getRandomNumber(),
            'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'facebook_profile' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'linkedin_profile' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'skype_user_name' => $this->getUserName(),
            'mobile' => $this->getPhone(),
            'email' => $this->getEmail(),
        ]);

        // DB::table('staffs')->insert([
        //     'slug' => Str::slug('Mr. Peter Ratan Corraya'),
        //     'name' => 'Mr. Peter Ratan Corraya',
        //     'position' => 'Treasurer',
        //     'staff_type' => 'Office Bearer',
        //     'bio' => generateHtml('Mr. Peter Ratan Corraya'),
        //     'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'thumbnail_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'facebook_profile' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'linkedin_profile' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'skype_user_name' => $this->getUserName(),
        //     'mobile' => $this->getPhone(),
        //     'email' => $this->getEmail(),
        // ]);

        DB::table('staffs')->insert([
            'slug' => Str::slug($this->getName()),
            'name' => $this->getName(),
            'position' => 'Treasurer',
            'staff_type' => 'Office Bearer',
            'bio' => generateHtml($this->getName()),
            'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'thumbnail_attachment_url' => 'https://source.unsplash.com/random/600x600?sig=' . $this->getRandomNumber(),
            'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'facebook_profile' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'linkedin_profile' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'skype_user_name' => $this->getUserName(),
            'mobile' => $this->getPhone(),
            'email' => $this->getEmail(),
        ]);

        // Board Of Directors
        // DB::table('staffs')->insert([
        //     'slug' => Str::slug('Ms. Papiya Riberu'),
        //     'name' => 'Ms. Papiya Riberu',
        //     'position' => 'BOARD OF DIRECTOR',
        //     'staff_type' => 'Board Of Director',
        //     'bio' => generateHtml('Ms. Papiya Riberu'),
        //     'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'thumbnail_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'facebook_profile' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'linkedin_profile' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'skype_user_name' => $this->getUserName(),
        //     'mobile' => $this->getPhone(),
        //     'email' => $this->getEmail(),
        // ]);

        DB::table('staffs')->insert([
            'slug' => Str::slug($this->getName()),
            'name' => $this->getName(),
            'position' => 'BOARD OF DIRECTOR',
            'staff_type' => 'Board Of Director',
            'bio' => generateHtml($this->getName()),
            'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'thumbnail_attachment_url' => 'https://source.unsplash.com/random/600x600?sig=' . $this->getRandomNumber(),
            'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'facebook_profile' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'linkedin_profile' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'skype_user_name' => $this->getUserName(),
            'mobile' => $this->getPhone(),
            'email' => $this->getEmail(),
        ]);

        // DB::table('staffs')->insert([
        //     'slug' => Str::slug('Mr. Ananda Philip Palma'),
        //     'name' => 'Mr. Ananda Philip Palma',
        //     'position' => 'BOARD OF DIRECTOR',
        //     'staff_type' => 'Board Of Director',
        //     'bio' => generateHtml('Mr. Ananda Philip Palma'),
        //     'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'thumbnail_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'facebook_profile' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'linkedin_profile' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'skype_user_name' => $this->getUserName(),
        //     'mobile' => $this->getPhone(),
        //     'email' => $this->getEmail(),
        // ]);

        DB::table('staffs')->insert([
            'slug' => Str::slug($this->getName()),
            'name' => $this->getName(),
            'position' => 'BOARD OF DIRECTOR',
            'staff_type' => 'Board Of Director',
            'bio' => generateHtml($this->getName()),
            'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'thumbnail_attachment_url' => 'https://source.unsplash.com/random/600x600?sig=' . $this->getRandomNumber(),
            'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'facebook_profile' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'linkedin_profile' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'skype_user_name' => $this->getUserName(),
            'mobile' => $this->getPhone(),
            'email' => $this->getEmail(),
        ]);

        // DB::table('staffs')->insert([
        //     'slug' => Str::slug('Mr. Solomon I. Rozario'),
        //     'name' => 'Mr. Solomon I. Rozario',
        //     'position' => 'BOARD OF DIRECTOR',
        //     'staff_type' => 'Board Of Director',
        //     'bio' => generateHtml('Mr. Solomon I. Rozario'),
        //     'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'thumbnail_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'facebook_profile' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'linkedin_profile' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'skype_user_name' => $this->getUserName(),
        //     'mobile' => $this->getPhone(),
        //     'email' => $this->getEmail(),
        // ]);

        DB::table('staffs')->insert([
            'slug' => Str::slug($this->getName()),
            'name' => $this->getName(),
            'position' => 'BOARD OF DIRECTOR',
            'staff_type' => 'Board Of Director',
            'bio' => generateHtml($this->getName()),
            'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'thumbnail_attachment_url' => 'https://source.unsplash.com/random/600x600?sig=' . $this->getRandomNumber(),
            'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'facebook_profile' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'linkedin_profile' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'skype_user_name' => $this->getUserName(),
            'mobile' => $this->getPhone(),
            'email' => $this->getEmail(),
        ]);

        // DB::table('staffs')->insert([
        //     'slug' => Str::slug('Mr. Prottesh Rangsa'),
        //     'name' => 'Mr. Prottesh Rangsa',
        //     'position' => 'BOARD OF DIRECTOR',
        //     'staff_type' => 'Board Of Director',
        //     'bio' => generateHtml('Mr. Prottesh Rangsa'),
        //     'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'thumbnail_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'facebook_profile' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'linkedin_profile' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'skype_user_name' => $this->getUserName(),
        //     'mobile' => $this->getPhone(),
        //     'email' => $this->getEmail(),
        // ]);

        DB::table('staffs')->insert([
            'slug' => Str::slug($this->getName()),
            'name' => $this->getName(),
            'position' => 'BOARD OF DIRECTOR',
            'staff_type' => 'Board Of Director',
            'bio' => generateHtml($this->getName()),
            'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'thumbnail_attachment_url' => 'https://source.unsplash.com/random/600x600?sig=' . $this->getRandomNumber(),
            'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'facebook_profile' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'linkedin_profile' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'skype_user_name' => $this->getUserName(),
            'mobile' => $this->getPhone(),
            'email' => $this->getEmail(),
        ]);

        // DB::table('staffs')->insert([
        //     'slug' => Str::slug('Ms. Papri Patricia Areng'),
        //     'name' => 'Ms. Papri Patricia Areng',
        //     'position' => 'BOARD OF DIRECTOR',
        //     'staff_type' => 'Board Of Director',
        //     'bio' => generateHtml('Ms. Papri Patricia Areng'),
        //     'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'thumbnail_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'facebook_profile' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'linkedin_profile' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'skype_user_name' => $this->getUserName(),
        //     'mobile' => $this->getPhone(),
        //     'email' => $this->getEmail(),
        // ]);

        DB::table('staffs')->insert([
            'slug' => Str::slug($this->getName()),
            'name' => $this->getName(),
            'position' => 'BOARD OF DIRECTOR',
            'staff_type' => 'Board Of Director',
            'bio' => generateHtml($this->getName()),
            'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'thumbnail_attachment_url' => 'https://source.unsplash.com/random/600x600?sig=' . $this->getRandomNumber(),
            'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'facebook_profile' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'linkedin_profile' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'skype_user_name' => $this->getUserName(),
            'mobile' => $this->getPhone(),
            'email' => $this->getEmail(),
        ]);

        // DB::table('staffs')->insert([
        //     'slug' => Str::slug('Ms. Monica Gomes'),
        //     'name' => 'Ms. Monica Gomes',
        //     'position' => 'BOARD OF DIRECTOR',
        //     'staff_type' => 'Board Of Director',
        //     'bio' => generateHtml('Ms. Monica Gomes'),
        //     'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'thumbnail_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'facebook_profile' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'linkedin_profile' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'skype_user_name' => $this->getUserName(),
        //     'mobile' => $this->getPhone(),
        //     'email' => $this->getEmail(),
        // ]);

        // DB::table('staffs')->insert([
        //     'slug' => Str::slug('Mr. Sajal Joseph Gomes'),
        //     'name' => 'Mr. Sajal Joseph Gomes',
        //     'position' => 'BOARD OF DIRECTOR',
        //     'staff_type' => 'Board Of Director',
        //     'bio' => generateHtml('Mr. Sajal Joseph Gomes'),
        //     'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'thumbnail_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'facebook_profile' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'linkedin_profile' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'skype_user_name' => $this->getUserName(),
        //     'mobile' => $this->getPhone(),
        //     'email' => $this->getEmail(),
        // ]);

        // DB::table('staffs')->insert([
        //     'slug' => Str::slug('Mr. Pallab Linus D’ Rozario'),
        //     'name' => 'Mr. Pallab Linus D’ Rozario',
        //     'position' => 'BOARD OF DIRECTOR',
        //     'staff_type' => 'Board Of Director',
        //     'bio' => generateHtml('Mr. Pallab Linus D’ Rozario'),
        //     'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'thumbnail_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'facebook_profile' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'linkedin_profile' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'skype_user_name' => $this->getUserName(),
        //     'mobile' => $this->getPhone(),
        //     'email' => $this->getEmail(),
        // ]);

        // Credit Committee
        // DB::table('staffs')->insert([
        //     'slug' => Str::slug('Mr. Sukumar Lenus Cruze'),
        //     'name' => 'Mr. Sukumar Lenus Cruze',
        //     'position' => 'CHAIRMAN',
        //     'staff_type' => 'Credit Committee',
        //     'bio' => generateHtml('Mr. Sukumar Lenus Cruze'),
        //     'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'thumbnail_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'facebook_profile' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'linkedin_profile' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'skype_user_name' => $this->getUserName(),
        //     'mobile' => $this->getPhone(),
        //     'email' => $this->getEmail(),
        // ]);

        DB::table('staffs')->insert([
            'slug' => Str::slug($this->getName()),
            'name' => $this->getName(),
            'position' => 'CHAIRMAN',
            'staff_type' => 'Credit Committee',
            'bio' => generateHtml($this->getName()),
            'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'thumbnail_attachment_url' => 'https://source.unsplash.com/random/600x600?sig=' . $this->getRandomNumber(),
            'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'facebook_profile' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'linkedin_profile' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'skype_user_name' => $this->getUserName(),
            'mobile' => $this->getPhone(),
            'email' => $this->getEmail(),
        ]);

        // DB::table('staffs')->insert([
        //     'slug' => Str::slug('Mr. Subrata Richard Rozario'),
        //     'name' => 'Mr. Subrata Richard Rozario',
        //     'position' => 'SECRETARY',
        //     'staff_type' => 'Credit Committee',
        //     'bio' => generateHtml('Mr. Subrata Richard Rozario'),
        //     'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'thumbnail_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'facebook_profile' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'linkedin_profile' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'skype_user_name' => $this->getUserName(),
        //     'mobile' => $this->getPhone(),
        //     'email' => $this->getEmail(),
        // ]);

        DB::table('staffs')->insert([
            'slug' => Str::slug($this->getName()),
            'name' => $this->getName(),
            'position' => 'SECRETARY',
            'staff_type' => 'Credit Committee',
            'bio' => generateHtml($this->getName()),
            'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'thumbnail_attachment_url' => 'https://source.unsplash.com/random/600x600?sig=' . $this->getRandomNumber(),
            'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'facebook_profile' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'linkedin_profile' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'skype_user_name' => $this->getUserName(),
            'mobile' => $this->getPhone(),
            'email' => $this->getEmail(),
        ]);

        // DB::table('staffs')->insert([
        //     'slug' => Str::slug('Mr. Antor Mankhin'),
        //     'name' => 'Mr. Antor Mankhin',
        //     'position' => 'MEMBER',
        //     'staff_type' => 'Credit Committee',
        //     'bio' => generateHtml('Mr. Antor Mankhin'),
        //     'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'thumbnail_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'facebook_profile' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'linkedin_profile' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'skype_user_name' => $this->getUserName(),
        //     'mobile' => $this->getPhone(),
        //     'email' => $this->getEmail(),
        // ]);

        DB::table('staffs')->insert([
            'slug' => Str::slug($this->getName()),
            'name' => $this->getName(),
            'position' => 'MEMBER',
            'staff_type' => 'Credit Committee',
            'bio' => generateHtml($this->getName()),
            'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'thumbnail_attachment_url' => 'https://source.unsplash.com/random/600x600?sig=' . $this->getRandomNumber(),
            'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'facebook_profile' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'linkedin_profile' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'skype_user_name' => $this->getUserName(),
            'mobile' => $this->getPhone(),
            'email' => $this->getEmail(),
        ]);

        // DB::table('staffs')->insert([
        //     'slug' => Str::slug('Mr. Lawrence Peter Gomes'),
        //     'name' => 'Mr. Lawrence Peter Gomes',
        //     'position' => 'MEMBER',
        //     'staff_type' => 'Credit Committee',
        //     'bio' => generateHtml('Mr. Lawrence Peter Gomes'),
        //     'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'thumbnail_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'facebook_profile' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'linkedin_profile' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'skype_user_name' => $this->getUserName(),
        //     'mobile' => $this->getPhone(),
        //     'email' => $this->getEmail(),
        // ]);

        // DB::table('staffs')->insert([
        //     'slug' => Str::slug('Ms. Uma Magdaline Gomes'),
        //     'name' => 'Ms. Uma Magdaline Gomes',
        //     'position' => 'MEMBER',
        //     'staff_type' => 'Credit Committee',
        //     'bio' => generateHtml('Ms. Uma Magdaline Gomes'),
        //     'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'thumbnail_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'facebook_profile' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'linkedin_profile' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'skype_user_name' => $this->getUserName(),
        //     'mobile' => $this->getPhone(),
        //     'email' => $this->getEmail(),
        // ]);


        // Supervisory Committee
        // DB::table('staffs')->insert([
        //     'slug' => Str::slug('Mr. John Gomes'),
        //     'name' => 'Mr. John Gomes',
        //     'position' => 'CHAIRMAN',
        //     'staff_type' => 'Supervisory Committee',
        //     'bio' => generateHtml('Mr. John Gomes'),
        //     'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'thumbnail_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'facebook_profile' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'linkedin_profile' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'skype_user_name' => $this->getUserName(),
        //     'mobile' => $this->getPhone(),
        //     'email' => $this->getEmail(),
        // ]);

        DB::table('staffs')->insert([
            'slug' => Str::slug($this->getName()),
            'name' => $this->getName(),
            'position' => 'CHAIRMAN',
            'staff_type' => 'Supervisory Committee',
            'bio' => generateHtml($this->getName()),
            'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'thumbnail_attachment_url' => 'https://source.unsplash.com/random/600x600?sig=' . $this->getRandomNumber(),
            'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'facebook_profile' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'linkedin_profile' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'skype_user_name' => $this->getUserName(),
            'mobile' => $this->getPhone(),
            'email' => $this->getEmail(),
        ]);

        // DB::table('staffs')->insert([
        //     'slug' => Str::slug('Mr. Prionto C. Costa'),
        //     'name' => 'Mr. Prionto C. Costa',
        //     'position' => 'SECRETARY',
        //     'staff_type' => 'Supervisory Committee',
        //     'bio' => generateHtml('Mr. Prionto C. Costa'),
        //     'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'thumbnail_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'facebook_profile' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'linkedin_profile' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'skype_user_name' => $this->getUserName(),
        //     'mobile' => $this->getPhone(),
        //     'email' => $this->getEmail(),
        // ]);

        DB::table('staffs')->insert([
            'slug' => Str::slug($this->getName()),
            'name' => $this->getName(),
            'position' => 'SECRETARY',
            'staff_type' => 'Supervisory Committee',
            'bio' => generateHtml($this->getName()),
            'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'thumbnail_attachment_url' => 'https://source.unsplash.com/random/600x600?sig=' . $this->getRandomNumber(),
            'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'facebook_profile' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'linkedin_profile' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->getRandomNumber(),
            'skype_user_name' => $this->getUserName(),
            'mobile' => $this->getPhone(),
            'email' => $this->getEmail(),
        ]);

        // DB::table('staffs')->insert([
        //     'slug' => Str::slug('Ms. Stella Hazra'),
        //     'name' => 'Ms. Stella Hazra',
        //     'position' => 'MEMBER',
        //     'staff_type' => 'Supervisory Committee',
        //     'bio' => generateHtml('Ms. Stella Hazra'),
        //     'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'thumbnail_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'facebook_profile' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'linkedin_profile' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'skype_user_name' => $this->getUserName(),
        //     'mobile' => $this->getPhone(),
        //     'email' => $this->getEmail(),
        // ]);

        // DB::table('staffs')->insert([
        //     'slug' => Str::slug('Mr. Barnard Pankaj D’ Rozario'),
        //     'name' => 'Mr. Barnard Pankaj D’ Rozario',
        //     'position' => 'MEMBER',
        //     'staff_type' => 'Supervisory Committee',
        //     'bio' => generateHtml('Mr. Barnard Pankaj D’ Rozario'),
        //     'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'thumbnail_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'facebook_profile' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'linkedin_profile' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'skype_user_name' => $this->getUserName(),
        //     'mobile' => $this->getPhone(),
        //     'email' => $this->getEmail(),
        // ]);

        // DB::table('staffs')->insert([
        //     'slug' => Str::slug('Ms. Madhabi Anita Gomes'),
        //     'name' => 'Ms. Madhabi Anita Gomes',
        //     'position' => 'MEMBER',
        //     'staff_type' => 'Supervisory Committee',
        //     'bio' => generateHtml('Ms. Madhabi Anita Gomes'),
        //     'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'thumbnail_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'facebook_profile' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'linkedin_profile' => 'https://source.unsplash.com/random/1200x760?sig='. $this->getRandomNumber(),
        //     'skype_user_name' => $this->getUserName(),
        //     'mobile' => $this->getPhone(),
        //     'email' => $this->getEmail(),
        // ]);
    }
}
