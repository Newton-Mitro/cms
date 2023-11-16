<?php

namespace Database\Seeders;

use Database\Seeders\MenuSeeder;
use Database\Seeders\SettingSeeder;
use Database\Seeders\UserSeeder;
use Illuminate\Database\Seeder;

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

class DatabaseSeeder extends Seeder
{

    public function run()
    {
        $this->call([
            UserSeeder::class,
            MenuSeeder::class,
            PostSeeder::class,
            PageSeeder::class,
            DepositProductSeeder::class,
            LoanProductSeeder::class,
            OurServiceSeeder::class,
            NoticeSeeder::class,
            SliderImageSeeder::class,
            DocumentPostSeeder::class,
            GalleryImageSeeder::class,
            EventSeeder::class,
            StaffSeeder::class,
            SettingSeeder::class,
        ]);
    }
}
