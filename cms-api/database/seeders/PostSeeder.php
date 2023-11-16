<?php

namespace Database\Seeders;

use App\Models\JobCircular;
use App\Models\Post;
use Faker\Factory;
use Illuminate\Database\Seeder;

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

class PostSeeder extends Seeder
{

    public function run()
    {
        $faker = Factory::create();
        function generateImage()
        {
            $faker = Factory::create();
            $imageUrl = $faker->imageUrl();
            return $imageUrl;
        }

        function getRandomPostType()
        {
            $arr = array('Post', 'News', 'Notice', 'Slider Image');
            $randomIndex = array_rand($arr);
            return $arr[$randomIndex];
        }

        function generateHtml($title)
        {
            $faker = Factory::create();
            $paragraphs = $faker->paragraphs(6);
            $content = "<h1>{$title}</h1>";
            foreach ($paragraphs as $para) {
                $content .= "<p>{$para}</p>";
            }
            return $content;
        }

        function getRandomNumber()
        {
            $faker = Factory::create();
            return $faker->randomNumber();
        }

        Post::factory(5)->create();
        JobCircular::factory(5)->create();
    }
}
