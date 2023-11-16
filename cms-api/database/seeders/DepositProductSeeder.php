<?php

namespace Database\Seeders;

use DB;
use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DepositProductSeeder extends Seeder
{
    public function run()
    {
        $faker = Factory::create();

        // Deposit Products
        DB::table('deposit_products')->insert([
            'slug' => Str::slug('Savings Account', '-'),
            'title' => 'Savings Account',
            'content' => '<div>
            <p>Savings is an important aspect of life for each and everyone and one can never fully prepare for the financial requirement that may arises for any situation.</p>
            <h6>Features</h6>
            <ul>
            <li>Minimum Deposit: 10/- per month.</li>
            <li>Interest Rate: 3% Per Annum.</li>
            <li>Dhaka Credit’s daily accrued half-yearly interest.</li>
            <li>Full membership after 3 months of successful operations.</li>
            <li>Any amount can be deposited or withdrawn at any time.</li>
            </ul>
            <h6>Requirements</h6>
            <ul>
            <li>2 Stamp size color photos, Baptism certificate & Birth certificate or NID.</li>
            <li>Christian individuals of any age, living in Dhaka, Gazipur, Narayanganj and Munshiganj District.</li>
            <li>Saving account is mandatory for other types of accounts also.</li>
            </ul>
            </div>',
            'short_description' => $faker->words(12, true),
            'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
            'thumbnail_attachment_url' => 'https://source.unsplash.com/random/600x600?sig=' . $faker->randomNumber(),
            'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
            'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
        ]);

        DB::table('deposit_products')->insert([
            'slug' => Str::slug('Credit Account', '-'),
            'title' => 'Credit Account',
            'content' => generateHtml('STD Account'),
            'short_description' => $faker->words(12, true),
            'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
            'thumbnail_attachment_url' => 'https://source.unsplash.com/random/600x600?sig=' . $faker->randomNumber(),
            'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
            'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
        ]);


        DB::table('deposit_products')->insert([
            'slug' => Str::slug('Education Savings', '-'),
            'title' => 'Education Savings',
            'content' => generateHtml('Education Savings'),
            'short_description' => $faker->words(12, true),
            'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
            'thumbnail_attachment_url' => 'https://source.unsplash.com/random/600x600?sig=' . $faker->randomNumber(),
            'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
            'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
        ]);

        DB::table('deposit_products')->insert([
            'slug' => Str::slug('LTSD Account', '-'),
            'title' => 'LTSD Account',
            'content' => generateHtml('LTSD Account'),
            'short_description' => $faker->words(12, true),
            'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
            'thumbnail_attachment_url' => 'https://source.unsplash.com/random/600x600?sig=' . $faker->randomNumber(),
            'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
            'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
        ]);

        DB::table('deposit_products')->insert([
            'slug' => Str::slug('Monthly Savings', '-'),
            'title' => 'Monthly Savings',
            'content' => generateHtml('Monthly Savings'),
            'short_description' => $faker->words(12, true),
            'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
            'thumbnail_attachment_url' => 'https://source.unsplash.com/random/600x600?sig=' . $faker->randomNumber(),
            'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
            'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
        ]);

        DB::table('deposit_products')->insert([
            'slug' => Str::slug('Troimashik Savings', '-'),
            'title' => 'Troimashik Savings',
            'content' => generateHtml('Troimashik Savings'),
            'short_description' => $faker->words(12, true),
            'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
            'thumbnail_attachment_url' => 'https://source.unsplash.com/random/600x600?sig=' . $faker->randomNumber(),
            'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
            'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
        ]);

        DB::table('deposit_products')->insert([
            'slug' => Str::slug('Double Deposit', '-'),
            'title' => 'Double Deposit',
            'content' => generateHtml('Double Deposit'),
            'short_description' => $faker->words(12, true),
            'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
            'thumbnail_attachment_url' => 'https://source.unsplash.com/random/600x600?sig=' . $faker->randomNumber(),
            'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
            'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
        ]);
    }
}
