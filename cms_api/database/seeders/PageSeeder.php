<?php

namespace Database\Seeders;

use DB;
use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class PageSeeder extends Seeder
{
    public function run()
    {
        $faker = Factory::create();


        DB::table('pages')->insert([
            'slug' => Str::slug('About', '-'),
            'title' => 'About',
            'content' => '<div><h6>About Bangle Credit</h6><p>Nagori Christain Co-operative Credit Union Limited was established in 1962. This Credit Union is only</p>' . $faker->paragraphs(6, true) . '</div>',
            'short_description' => $faker->words(50, true),
            'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
            'thumbnail_attachment_url' => 'https://source.unsplash.com/random/600x600?sig=' . $faker->randomNumber(),
            'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
            'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
        ]);

        DB::table('pages')->insert([
            'slug' => Str::slug('About Us', '-'),
            'title' => 'About Us',
            'content' => generateHtml('About Us'),
            'short_description' => $faker->words(12, true),
            'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
            'thumbnail_attachment_url' => 'https://source.unsplash.com/random/600x600?sig=' . $faker->randomNumber(),
            'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
            'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
        ]);

        DB::table('pages')->insert([
            'slug' => Str::slug('The pioneer of the Credit Union', '-'),
            'title' => 'The pioneer of the Credit Union',
            'content' => '<div>
            <p>Rev. Fr. Charles J. Young CSC</p>
            <p>(Founder)</p>
            <p>The pioneer of the Credit Union Movement in Bangladesh, Fr. Charles J. Young CSC was born in May 3rd 1904, in New York, USA. His full name is Fr. Charles Joseph Young CSC. He was the founder of The Christian Co-Operative Credit Union Ltd. Dhaka, the largest Credit Union in Bangladesh and South Asia. Fr. Charles joined the seminary of the Holy Cross on September in 1923, and joined in the first verse in 1925 & accepted his blessing in 1928.</p>
            <p>In 1929, he obtained his BA degree from Notre Dame University of America. Later in 1933, after studying the theory of Theism at the Foreign Mission seminary in Washington, he was promoted as a Priest at Indiana Notre Dame University chapel. And in the same year he came to Bangladesh as a foreign missionary and did various pastoral and social activities in Dhaka and Mymensingh.</p>
            <p>In 1953, Lawrence L. Grenar CSC, Archbishop of Dhaka sent him to the Coady Institute of St. Francis Xavier University in Canada to acquire knowledge on Co-operatives. In 1955, coming back to Dhaka, he established The Christian Co-Operative Credit Union Ltd. Dhaka (Dhaka Credit) in order to bring the socio-economic development of the Christian community of the country. His philosophy in credit movement has been widely spread throughout the country.</p>
            <p>This theory brings radical changes in people’s lives. Later, using this theory, the non-governmental organization Grameen Bank won the Nobel Peace Prize. Many organizations of the country are working in the light of this theory. The Christian Co-Operative Credit Union Ltd. Dhaka is now the largest Credit Union of its kind in South Asia. The name of Fr. Charles J. Young CSC will be written in the history of Credit Movement of this region.</p>
            <p>He died on 14 November 1988 in a tragic road accident. He was buried in Tejgaon Holy Rosary Church in Dhaka. His death anniversary is celebrated every year with due honor.</p>
            </div>',
            'short_description' => $faker->words(60, true),
            'original_attachment_url' => url('') . '/storage/images/logo/index_founder.png',
            'thumbnail_attachment_url' => url('') . '/storage/images/logo/index_founder.png',
            'landscape_attachment_url' => url('') . '/storage/images/logo/index_founder.png',
            'portrait_attachment_url' => url('') . '/storage/images/logo/index_founder.png',
        ]);

        DB::table('pages')->insert([
            'slug' => Str::slug('Founder of Bangle Credit', '-'),
            'title' => 'Founder of Bangle Credit',
            'content' => '<div>
            <p>Night Vincent Rodrics</p>
            <p>(Founder)</p>' . $faker->paragraphs(6, true) . '</div>',
            'short_description' => $faker->words(60, true),
            'original_attachment_url' => url('') . '/storage/images/logo/nagori_founder.png',
            'thumbnail_attachment_url' => url('') . '/storage/images/logo/nagori_founder.png',
            'landscape_attachment_url' => url('') . '/storage/images/logo/nagori_founder.png',
            'portrait_attachment_url' => url('') . '/storage/images/logo/nagori_founder.png',
        ]);

        DB::table('pages')->insert([
            'slug' => Str::slug('President Message', '-'),
            'title' => 'President Message',
            'content' => '<div>' . $faker->paragraphs(6, true) . '</div>',
            'short_description' => $faker->words(12, true),
            'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
            'thumbnail_attachment_url' => 'https://source.unsplash.com/random/600x600?sig=' . $faker->randomNumber(),
            'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
            'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
        ]);

        DB::table('pages')->insert([
            'slug' => Str::slug('Our Story', '-'),
            'title' => 'Our Story',
            'content' => '<div>' . $faker->paragraphs(6, true) . '</div>',
            'short_description' => $faker->words(12, true),
            'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
            'thumbnail_attachment_url' => 'https://source.unsplash.com/random/600x600?sig=' . $faker->randomNumber(),
            'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
            'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
        ]);

        DB::table('pages')->insert([
            'slug' => Str::slug('Mission & Vision', '-'),
            'title' => 'Mission & Vision',
            'content' => '<div>
            <h6>Mission</h6>' . $faker->paragraphs(6, true) . '</div>',
            'short_description' => $faker->words(12, true),
            'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
            'thumbnail_attachment_url' => 'https://source.unsplash.com/random/600x600?sig=' . $faker->randomNumber(),
            'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
            'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
        ]);

        DB::table('pages')->insert([
            'slug' => Str::slug('Core Values', '-'),
            'title' => 'Core Values',
            'content' => '<div>' . $faker->paragraphs(6, true) . '</div>',
            'short_description' => $faker->words(12, true),
            'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
            'thumbnail_attachment_url' => 'https://source.unsplash.com/random/600x600?sig=' . $faker->randomNumber(),
            'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
            'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $faker->randomNumber(),
        ]);
    }
}
