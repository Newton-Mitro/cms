<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

/**========================================================================
 * ?                                ABOUT
 * @author         :  Newton Mitro
 * @email          :  newtonmitro@gmail.com
 * @repo           :
 * @createdOn      :  08 Oct 2023
 * @updatedBy      :  Newton Mitro
 * @updatedAt      :  08 Oct 2023
 * @description     :
 *========================================================================**/

class MenuSeeder extends Seeder
{

    public function run()
    {
        DB::table('menus')->insert([
            'menu_name' => 'Home',
            'link_to' => '/',
            'icon' => 'fa-solid fa-house-chimney',
            'parent_id' => 0,
            'admin_menu' => false,
            "created_at" => \Carbon\Carbon::now(),
            "updated_at" => \Carbon\Carbon::now(),
        ]);

        DB::table('menus')->insert([
            'menu_name' => 'About',
            'link_to' => null,
            'icon' => 'fa-solid fa-circle-question',
            'parent_id' => 0,
            'admin_menu' => false,
            "created_at" => \Carbon\Carbon::now(),
            "updated_at" => \Carbon\Carbon::now(),
        ]);

        DB::table('menus')->insert([
            'menu_name' => 'About Us',
            'link_to' => 'posts/post-slug/about-us',
            'icon' => 'fa-solid fa-circle-question',
            'parent_id' => 2,
            'admin_menu' => false,
            "created_at" => \Carbon\Carbon::now(),
            "updated_at" => \Carbon\Carbon::now(),
        ]);

        DB::table('menus')->insert([
            'menu_name' => 'Brief Summery',
            'link_to' => 'posts/post-slug/brief-summery',
            'icon' => '',
            'parent_id' => 3,
            'admin_menu' => false,
            "created_at" => \Carbon\Carbon::now(),
            "updated_at" => \Carbon\Carbon::now(),
        ]);

        DB::table('menus')->insert([
            'menu_name' => 'Founder\'s Profile',
            'link_to' => 'posts/post-slug/founders-profile',
            'icon' => 'fa-duotone fa-bullseye-arrow',
            'parent_id' => 3,
            'admin_menu' => false,
            "created_at" => \Carbon\Carbon::now(),
            "updated_at" => \Carbon\Carbon::now(),
        ]);

        DB::table('menus')->insert([
            'menu_name' => 'President Message',
            'link_to' => 'posts/post-slug/president-message',
            'icon' => '',
            'parent_id' => 3,
            'admin_menu' => false,
            "created_at" => \Carbon\Carbon::now(),
            "updated_at" => \Carbon\Carbon::now(),
        ]);

        DB::table('menus')->insert([
            'menu_name' => 'Our Story',
            'link_to' => 'posts/post-slug/our-story',
            'icon' => '',
            'parent_id' => 3,
            'admin_menu' => false,
            "created_at" => \Carbon\Carbon::now(),
            "updated_at" => \Carbon\Carbon::now(),
        ]);

        DB::table('menus')->insert([
            'menu_name' => 'Mission & Vision',
            'link_to' => 'posts/post-slug/mission-vision',
            'icon' => '',
            'parent_id' => 3,
            'admin_menu' => false,
            "created_at" => \Carbon\Carbon::now(),
            "updated_at" => \Carbon\Carbon::now(),
        ]);

        DB::table('menus')->insert([
            'menu_name' => 'Core Values',
            'link_to' => 'posts/post-slug/core-values',
            'icon' => '',
            'parent_id' => 3,
            'admin_menu' => false,
            "created_at" => \Carbon\Carbon::now(),
            "updated_at" => \Carbon\Carbon::now(),
        ]);

        DB::table('menus')->insert([
            'menu_name' => 'Achievements',
            'link_to' => 'posts/post-slug/achievements',
            'icon' => '',
            'parent_id' => 3,
            'admin_menu' => false,
            "created_at" => \Carbon\Carbon::now(),
            "updated_at" => \Carbon\Carbon::now(),
        ]);

        DB::table('menus')->insert([
            'menu_name' => 'Women\'s Activity',
            'link_to' => 'posts/post-slug/womens-activity',
            'icon' => '',
            'parent_id' => 3,
            'admin_menu' => false,
            "created_at" => \Carbon\Carbon::now(),
            "updated_at" => \Carbon\Carbon::now(),
        ]);

        DB::table('menus')->insert([
            'menu_name' => 'Board Members',
            'link_to' => null,
            'icon' => 'fa-solid fa-briefcase',
            'parent_id' => 2,
            'admin_menu' => false,
            "created_at" => \Carbon\Carbon::now(),
            "updated_at" => \Carbon\Carbon::now(),
        ]);

        DB::table('menus')->insert([
            'menu_name' => 'Office Bearer',
            'link_to' => 'staffs/staff-types/Office Bearers',
            'icon' => 'fa-solid fa-briefcase',
            'parent_id' => 12,
            'admin_menu' => false,
            "created_at" => \Carbon\Carbon::now(),
            "updated_at" => \Carbon\Carbon::now(),
        ]);

        DB::table('menus')->insert([
            'menu_name' => 'Board of Directors',
            'link_to' => 'staffs/staff-types/Board Of Directors',
            'icon' => 'fa-solid fa-briefcase',
            'parent_id' => 12,
            'admin_menu' => false,
            "created_at" => \Carbon\Carbon::now(),
            "updated_at" => \Carbon\Carbon::now(),
        ]);

        DB::table('menus')->insert([
            'menu_name' => 'Credit Committee',
            'link_to' => 'staffs/staff-types/Credit Committee',
            'icon' => 'fa-solid fa-briefcase',
            'parent_id' => 12,
            'admin_menu' => false,
            "created_at" => \Carbon\Carbon::now(),
            "updated_at" => \Carbon\Carbon::now(),
        ]);

        DB::table('menus')->insert([
            'menu_name' => 'Supervisory Committee',
            'link_to' => 'staffs/staff-types/Supervisory Committee',
            'icon' => 'fa-solid fa-briefcase',
            'parent_id' => 12,
            'admin_menu' => false,
            "created_at" => \Carbon\Carbon::now(),
            "updated_at" => \Carbon\Carbon::now(),
        ]);

        DB::table('menus')->insert([
            'menu_name' => 'Our Policies',
            'link_to' => 'posts/post-types/Policy',
            'icon' => '',
            'parent_id' => 2,
            'admin_menu' => false,
            "created_at" => \Carbon\Carbon::now(),
            "updated_at" => \Carbon\Carbon::now(),
        ]);

        DB::table('menus')->insert([
            'menu_name' => 'AGM Reports',
            'link_to' => 'posts/post-types/AGM Report',
            'icon' => '',
            'parent_id' => 2,
            'admin_menu' => false,
            "created_at" => \Carbon\Carbon::now(),
            "updated_at" => \Carbon\Carbon::now(),
        ]);

        DB::table('menus')->insert([
            'menu_name' => 'Products',
            'link_to' => null,
            'icon' => 'fa-sharp fa-solid fa-piggy-bank',
            'parent_id' => 0,
            'admin_menu' => false,
            "created_at" => \Carbon\Carbon::now(),
            "updated_at" => \Carbon\Carbon::now(),
        ]);

        DB::table('menus')->insert([
            'menu_name' => 'Deposit Products',
            'link_to' => 'posts/post-types/Deposit Product',
            'icon' => 'fa-sharp fa-solid fa-piggy-bank',
            'parent_id' => 19,
            'admin_menu' => false,
            "created_at" => \Carbon\Carbon::now(),
            "updated_at" => \Carbon\Carbon::now(),
        ]);

        DB::table('menus')->insert([
            'menu_name' => 'Loan Products',
            'link_to' => 'posts/post-types/Loan Product',
            'icon' => 'fa-sharp fa-solid fa-piggy-bank',
            'parent_id' => 19,
            'admin_menu' => false,
            "created_at" => \Carbon\Carbon::now(),
            "updated_at" => \Carbon\Carbon::now(),
        ]);

        DB::table('menus')->insert([
            'menu_name' => 'Projects',
            'link_to' => 'posts/post-types/Project',
            'icon' => 'fa-solid fa-address-book',
            'parent_id' => 0,
            'admin_menu' => false,
            "created_at" => \Carbon\Carbon::now(),
            "updated_at" => \Carbon\Carbon::now(),
        ]);

        DB::table('menus')->insert([
            'menu_name' => 'Service',
            'link_to' => 'posts/post-types/Service',
            'icon' => 'fa-solid fa-briefcase',
            'parent_id' => 0,
            'admin_menu' => false,
            "created_at" => \Carbon\Carbon::now(),
            "updated_at" => \Carbon\Carbon::now(),
        ]);

        DB::table('menus')->insert([
            'menu_name' => 'Career',
            'link_to' => 'job-circulars',
            'icon' => 'fa-solid fa-address-book',
            'parent_id' => 0,
            'admin_menu' => false,
            "created_at" => \Carbon\Carbon::now(),
            "updated_at" => \Carbon\Carbon::now(),
        ]);

        DB::table('menus')->insert([
            'menu_name' => 'Notices',
            'link_to' => 'posts/post-types/Notification',
            'icon' => 'fa-solid fa-address-book',
            'parent_id' => 0,
            'admin_menu' => false,
            "created_at" => \Carbon\Carbon::now(),
            "updated_at" => \Carbon\Carbon::now(),
        ]);

        DB::table('menus')->insert([
            'menu_name' => 'Contact',
            'link_to' => 'service-centers',
            'icon' => 'fa-solid fa-address-book',
            'parent_id' => 0,
            'admin_menu' => false,
            "created_at" => \Carbon\Carbon::now(),
            "updated_at" => \Carbon\Carbon::now(),
        ]);
    }
}