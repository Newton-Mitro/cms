<?php

namespace Database\Seeders;

use DB;
use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class SliderImageSeeder extends Seeder
{

    public function run()
    {
        $faker = Factory::create();


        // Slide Post
        DB::table('slider_images')->insert([
            'slug' => Str::slug('We Will Be Always With You', '-'),
            'title' => 'We Will Be Always With You',
            'content' => generateHtml('We Will Be Always With You'),
            'short_description' => $faker->words(12, true),
            'original_attachment_url' => url('') . '/storage/images/slider_image/investment.jpg',
            'thumbnail_attachment_url' => url('') . '/storage/images/slider_image/investment.jpg',
            'landscape_attachment_url' => url('') . '/storage/images/slider_image/investment.jpg',
            'portrait_attachment_url' => url('') . '/storage/images/slider_image/investment.jpg',
        ]);

        DB::table('slider_images')->insert([
            'slug' => Str::slug('When You Are Born', '-'),
            'title' => 'When You Are Born',
            'content' => generateHtml('When You Are Born'),
            'short_description' => $faker->words(12, true),
            'original_attachment_url' => url('') . '/storage/images/slider_image/birth.jpg',
            'thumbnail_attachment_url' => url('') . '/storage/images/slider_image/birth.jpg',
            'landscape_attachment_url' => url('') . '/storage/images/slider_image/birth.jpg',
            'portrait_attachment_url' => url('') . '/storage/images/slider_image/birth.jpg',
        ]);

        DB::table('slider_images')->insert([
            'slug' => Str::slug('When You Learn', '-'),
            'title' => 'When You Learn',
            'content' => generateHtml('When You Learn'),
            'short_description' => $faker->words(12, true),
            'original_attachment_url' => url('') . '/storage/images/slider_image/education.jpg',
            'thumbnail_attachment_url' => url('') . '/storage/images/slider_image/education.jpg',
            'landscape_attachment_url' => url('') . '/storage/images/slider_image/education.jpg',
            'portrait_attachment_url' => url('') . '/storage/images/slider_image/education.jpg',
        ]);

        DB::table('slider_images')->insert([
            'slug' => Str::slug('With Your Happy Moment', '-'),
            'title' => 'With Your Happy Moment',
            'content' => generateHtml('With Your Happy Moment'),
            'short_description' => $faker->words(12, true),
            'original_attachment_url' => url('') . '/storage/images/slider_image/marriage.jpg',
            'thumbnail_attachment_url' => url('') . '/storage/images/slider_image/marriage.jpg',
            'landscape_attachment_url' => url('') . '/storage/images/slider_image/marriage.jpg',
            'portrait_attachment_url' => url('') . '/storage/images/slider_image/marriage.jpg',
        ]);

        DB::table('slider_images')->insert([
            'slug' => Str::slug('Until Your Last Breath', '-'),
            'title' => 'Until Your Last Breath',
            'content' => generateHtml('Until Your Last Breath'),
            'short_description' => $faker->words(12, true),
            'original_attachment_url' => url('') . '/storage/images/slider_image/death.jpg',
            'thumbnail_attachment_url' => url('') . '/storage/images/slider_image/death.jpg',
            'landscape_attachment_url' => url('') . '/storage/images/slider_image/death.jpg',
            'portrait_attachment_url' => url('') . '/storage/images/slider_image/death.jpg',
        ]);
    }
}
