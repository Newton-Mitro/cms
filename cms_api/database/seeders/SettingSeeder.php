<?php

namespace Database\Seeders;

use DB;
use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    public function run()
    {

        DB::table('settings')->insert([
            'organization_name' => 'Bangle Cooperative Credit Union Ltd.',
            'organization_short_name' => 'Bangle Credit',
            'slogan' => 'Unity and Growth',
            'address' => 'Night Vincent Bhaban, Nagori Mission Road , Kaliganj, Bangladesh',
            'hr_email' => 'bangle.credit@email.com',
            'customer_support_email' => 'bangle.credit@email.com',
            'technical_support_email' => 'bangle.credit@email.com',
            'fax' => '555-5321468',
            'hr_contact' => '+880-1716-1700000000',
            'customer_support_contact' => '+880-1716-1700000000',
            'technical_support_contact' => '+880-1716-1700000000',
            'website' => 'www.bangle-credit.com',
            'office_hour' => 'Sun - Thu: 10:00 - 19:00',
            'logo_original' => url('') . '/storage/images/logo/logo_original.png',
            'logo_white' => url('') . '/storage/images/logo/logo_white.png',
            'facebook_page' => 'https://www.facebook.com/bangle-credit/',
            'messenger_link' => 'https://www.facebook.com/messages/t/000000',
            'youtube_url' => 'https://www.youtube.com/embed/RUNFvZOELTk?si=JsffRtqf5IlB3UUZ',
            'featured_video_url' => 'https://www.youtube.com/embed/RUNFvZOELTk?si=JsffRtqf5IlB3UUZ',
        ]);
    }
}
