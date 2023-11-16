<?php

namespace Database\Seeders;

use DB;
use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class LoanProductSeeder extends Seeder
{
    public function run()
    {
        $faker = Factory::create();

        // Loan Products
        DB::table('loan_products')->insert([
            'slug' => Str::slug('General Loan', '-'),
            'title' => 'General Loan',
            'content' => generateHtml('General Loan'),
            'short_description' => $faker->words(12, true),
            'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
            'thumbnail_attachment_url' => 'https://source.unsplash.com/random/600x600?sig=' . $faker->randomNumber(),
            'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
            'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
        ]);

        DB::table('loan_products')->insert([
            'slug' => Str::slug('Business Loan', '-'),
            'title' => 'Business Loan',
            'content' => generateHtml('Business Loan'),
            'short_description' => $faker->words(12, true),
            'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
            'thumbnail_attachment_url' => 'https://source.unsplash.com/random/600x600?sig=' . $faker->randomNumber(),
            'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
            'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
        ]);

        DB::table('loan_products')->insert([
            'slug' => Str::slug('SMB Loan', '-'),
            'title' => 'SMB Loan',
            'content' => generateHtml('SMB Loan'),
            'short_description' => $faker->words(12, true),
            'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
            'thumbnail_attachment_url' => 'https://source.unsplash.com/random/600x600?sig=' . $faker->randomNumber(),
            'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
            'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
        ]);

        DB::table('loan_products')->insert([
            'slug' => Str::slug('House Building Loan', '-'),
            'title' => 'House Building Loan',
            'content' => generateHtml('House Building Loan'),
            'short_description' => $faker->words(12, true),
            'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
            'thumbnail_attachment_url' => 'https://source.unsplash.com/random/600x600?sig=' . $faker->randomNumber(),
            'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
            'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
        ]);

        DB::table('loan_products')->insert([
            'slug' => Str::slug('Product Loan', '-'),
            'title' => 'Product Loan',
            'content' => generateHtml('Product Loan'),
            'short_description' => $faker->words(12, true),
            'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
            'thumbnail_attachment_url' => 'https://source.unsplash.com/random/600x600?sig=' . $faker->randomNumber(),
            'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
            'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
        ]);

    }
}
