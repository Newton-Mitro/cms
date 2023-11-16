<?php

namespace Database\Seeders;

use DB;
use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class OurServiceSeeder extends Seeder
{

    public function run()
    {
        $faker = Factory::create();


        // Services

        DB::table('our_services')->insert([
            'slug' => Str::slug('Cultural Academy', '-'),
            'title' => 'Cultural Academy',
            'content' => generateHtml('Cultural Academy'),
            'short_description' => $faker->words(12, true),
            'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
            'thumbnail_attachment_url' => 'https://source.unsplash.com/random/600x600?sig=' . $faker->randomNumber(),
            'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
            'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
        ]);

        DB::table('our_services')->insert([
            'slug' => Str::slug('Library', '-'),
            'title' => 'Library',
            'content' => generateHtml('Library'),
            'short_description' => $faker->words(12, true),
            'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
            'thumbnail_attachment_url' => 'https://source.unsplash.com/random/600x600?sig=' . $faker->randomNumber(),
            'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
            'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
        ]);

        DB::table('our_services')->insert([
            'slug' => Str::slug('School', '-'),
            'title' => 'School',
            'content' => generateHtml('School'),
            'short_description' => $faker->words(12, true),
            'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
            'thumbnail_attachment_url' => 'https://source.unsplash.com/random/600x600?sig=' . $faker->randomNumber(),
            'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
            'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
        ]);
    }
}
