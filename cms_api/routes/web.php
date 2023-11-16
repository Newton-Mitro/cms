<?php

use App\Utilities\LinkObject;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return [
        new LinkObject("index", "Document Posts", route('document-posts.index'), "GET", 'fa-solid fa-list-ul'),
        new LinkObject("index", "Events", route('events.index'), "GET", 'fa-solid fa-list-ul'),
        new LinkObject("index", "Job Circulars", route('job-circulars.index'), "GET", 'fa-solid fa-list-ul'),
        new LinkObject("public-menus", "Menus", route('menus.publicRootMenus'), "GET", 'fa-solid fa-list-ul'),
        new LinkObject("admin-menus", "Menus", route('menus.adminRootMenus'), "GET", 'fa-solid fa-list-ul'),
        new LinkObject("index", "Posts", route('posts.index'), "GET", 'fa-solid fa-list-ul'),
        new LinkObject("index", "Pages", route('pages.index'), "GET", 'fa-solid fa-list-ul'),
        new LinkObject("index", "Slider Images", route('slider-images.index'), "GET", 'fa-solid fa-list-ul'),
        new LinkObject("index", "Notices", route('notices.index'), "GET", 'fa-solid fa-list-ul'),
        new LinkObject("index", "Our Services", route('our-services.index'), "GET", 'fa-solid fa-list-ul'),
        new LinkObject("index", "Deposit Products", route('deposit-products.index'), "GET", 'fa-solid fa-list-ul'),
        new LinkObject("index", "Loan Products", route('loan-products.index'), "GET", 'fa-solid fa-list-ul'),
        new LinkObject("index", "Settings", route('settings.index'), "GET", 'fa-solid fa-list-ul'),
        new LinkObject("index", "Staffs", route('staffs.index'), "GET", 'fa-solid fa-list-ul'),
        new LinkObject("index", "Office Bearers", route('staffs.getStaffsByType', 'Office Bearer'), "GET", 'fa-solid fa-list-ul'),
        new LinkObject("index", "Testimonials", route('testimonials.index'), "GET", 'fa-solid fa-list-ul'),
        new LinkObject("index", "Users", route('users.index'), "GET", 'fa-solid fa-list-ul'),
        new LinkObject("index", "Video Posts", route('gallery-images.index'), "GET", 'fa-solid fa-list-ul'),
        new LinkObject("index", "Visitor Logs", route('visitor-logs.index'), "GET", 'fa-solid fa-list-ul'),
    ];
});

Route::get('/home', function () {
    return view('welcome');
})->name('home');



Route::get('/site-setup', function () {
    try {
        $dbMigrate = Artisan::call('migrate:refresh');
        echo "<br>\nMigration Done.<br>\n";
    } catch (\Throwable $th) {
        throw $th;
    }

    try {
        $dbSeed = Artisan::call('db:seed');
        echo "<br>\nDatabase Seeding Done.<br>\n";
    } catch (\Throwable $th) {
        throw $th;
    }


    try {
        $optimize = Artisan::call('optimize:clear');
        echo "<br>\nOptimize For Production Done.<br>\n";
    } catch (\Throwable $th) {
        throw $th;
    }


    try {
        $storageLink = Artisan::call('storage:link');
        echo "<br>\nStorage Link Created.<br>\n";
    } catch (\Throwable $th) {
        throw $th;
    }

});
