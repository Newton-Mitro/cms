<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DepositProductController;
use App\Http\Controllers\DocumentPostController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\GalleryImageController;
use App\Http\Controllers\JobCircularController;
use App\Http\Controllers\LoanProductController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\NoticeController;
use App\Http\Controllers\OurServiceController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\SliderImageController;
use App\Http\Controllers\StaffController;
use App\Http\Controllers\TestimonialController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VisitorLogController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/**========================================================================
 * ?                                ABOUT
 * @author         : Newton Mitro
 * @email          : newtonmitro@gmail.com
 * @repo           :
 * @createdOn      : 08 Oct 2023
 * @updatedBy      : Newton Mitro
 * @updatedAt      : 08 Oct 2023
 * @description    :
 *========================================================================**/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'auth', 'namespace' => 'App\Http\Controllers',], function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
    Route::get('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user']);
    Route::get('/refresh', [AuthController::class, 'refresh']);
});

Route::ApiResource('users', UserController::class);
Route::patch('users/updateUserActiveStatus/{id}', [UserController::class, 'updateUserActiveStatus'])->name('users.updateUserActiveStatus');
Route::put('users/updateProfile/{id}', [UserController::class, 'updateProfile'])->name('users.updateProfile');
Route::put('users/changePassword/{id}', [UserController::class, 'changePassword'])->name('users.changePassword');


Route::ApiResource('menus', MenuController::class);
Route::get('root/public-menus', [MenuController::class, 'publicRootMenus'])->name('menus.publicRootMenus');
Route::get('root/admin-menus', [MenuController::class, 'adminRootMenus'])->name('menus.adminRootMenus');

Route::ApiResource('posts', PostController::class);
Route::get('posts/post-slug/{slug}', [PostController::class, 'getPostBySlug'])->name('posts.getPostBySlug');
Route::get('public/posts', [PostController::class, 'getPublicPosts'])->name('posts.getPublicPosts');
Route::patch('posts/updatePublishStatus/{id}', [PostController::class, 'updatePublishStatus'])->name('posts.updatePublishStatus');


Route::ApiResource('slider-images', SliderImageController::class);
Route::get('slider-images/post-slug/{slug}', [SliderImageController::class, 'getPostBySlug'])->name('slider-images.getPostBySlug');
Route::get('public/slider-images', [SliderImageController::class, 'getPublicPosts'])->name('slider-images.getPublicPosts');
Route::patch('slider-images/updatePublishStatus/{id}', [SliderImageController::class, 'updatePublishStatus'])->name('slider-images.updatePublishStatus');


Route::ApiResource('pages', PageController::class);
Route::get('pages/post-slug/{slug}', [PageController::class, 'getPostBySlug'])->name('pages.getPostBySlug');
Route::get('public/pages', [PageController::class, 'getPublicPosts'])->name('pages.getPublicPosts');
Route::patch('pages/updatePublishStatus/{id}', [PageController::class, 'updatePublishStatus'])->name('pages.updatePublishStatus');


Route::ApiResource('our-services', OurServiceController::class);
Route::get('our-services/post-slug/{slug}', [OurServiceController::class, 'getPostBySlug'])->name('our-services.getPostBySlug');
Route::get('public/our-services', [OurServiceController::class, 'getPublicPosts'])->name('our-services.getPublicPosts');
Route::patch('our-services/updatePublishStatus/{id}', [OurServiceController::class, 'updatePublishStatus'])->name('our-services.updatePublishStatus');


Route::ApiResource('notices', NoticeController::class);
Route::get('notices/post-slug/{slug}', [NoticeController::class, 'getPostBySlug'])->name('notices.getPostBySlug');
Route::get('public/notices', [NoticeController::class, 'getPublicPosts'])->name('notices.getPublicPosts');
Route::patch('notices/updatePublishStatus/{id}', [NoticeController::class, 'updatePublishStatus'])->name('notices.updatePublishStatus');


Route::ApiResource('loan-products', LoanProductController::class);
Route::get('loan-products/post-slug/{slug}', [LoanProductController::class, 'getPostBySlug'])->name('loan-products.getPostBySlug');
Route::get('public/loan-products', [LoanProductController::class, 'getPublicPosts'])->name('loan-products.getPublicPosts');
Route::patch('loan-products/updatePublishStatus/{id}', [LoanProductController::class, 'updatePublishStatus'])->name('loan-products.updatePublishStatus');


Route::ApiResource('deposit-products', DepositProductController::class);
Route::get('deposit-products/post-slug/{slug}', [DepositProductController::class, 'getPostBySlug'])->name('deposit-products.getPostBySlug');
Route::get('public/deposit-products', [DepositProductController::class, 'getPublicPosts'])->name('deposit-products.getPublicPosts');
Route::patch('deposit-products/updatePublishStatus/{id}', [DepositProductController::class, 'updatePublishStatus'])->name('deposit-products.updatePublishStatus');


Route::ApiResource('staffs', StaffController::class);
Route::get('staffs/staff-type/{staffType}', [StaffController::class, 'getStaffsByType'])
    ->name('staffs.getStaffsByType')
    ->whereIn('staffType', array('Office Bearer', 'Board Of Director', 'Credit Committee', 'Supervisory Committee'));
Route::patch('staffs/updatePublishStatus/{id}', [StaffController::class, 'updatePublishStatus'])->name('staffs.updatePublishStatus');

Route::ApiResource('gallery-images', GalleryImageController::class);
Route::get('gallery-images/post-slug/{slug}', [GalleryImageController::class, 'getPostBySlug'])->name('gallery-images.getPostBySlug');
Route::get('public/gallery-images', [GalleryImageController::class, 'getPublicPosts'])->name('gallery-images.getPublicPosts');
Route::patch('gallery-images/updatePublishStatus/{id}', [GalleryImageController::class, 'updatePublishStatus'])->name('gallery-images.updatePublishStatus');


Route::ApiResource('document-posts', DocumentPostController::class);
Route::get('public/document-posts', [DocumentPostController::class, 'getPublicPosts'])->name('document-posts.getPublicPosts');
Route::get('document-posts/post-slug/{slug}', [DocumentPostController::class, 'getPostBySlug'])->name('document-posts.getPostBySlug');
Route::patch('document-posts/updatePublishStatus/{id}', [DocumentPostController::class, 'updatePublishStatus'])->name('document-posts.updatePublishStatus');

Route::ApiResource('job-circulars', JobCircularController::class);
Route::get('public/job-circulars', [JobCircularController::class, 'getPublicPosts'])->name('job-circulars.getPublicPosts');
Route::get('job-circulars/post-slug/{slug}', [JobCircularController::class, 'getPostBySlug'])->name('job-circulars.getPostBySlug');
Route::patch('job-circulars/updatePublishStatus/{id}', [JobCircularController::class, 'updatePublishStatus'])->name('job-circulars.updatePublishStatus');

Route::ApiResource('events', EventController::class);
Route::get('public/events', [EventController::class, 'getPublicPosts'])->name('events.getPublicPosts');
Route::get('events/post-slug/{slug}', [EventController::class, 'getPostBySlug'])->name('events.getPostBySlug');

Route::ApiResource('testimonials', TestimonialController::class);
Route::ApiResource('settings', SettingController::class);
Route::ApiResource('visitor-logs', VisitorLogController::class);
Route::get('visitor-logs/visitors/count', [VisitorLogController::class, 'visitorsCount']);

Route::get('/auth/dashboard', [DashboardController::class, 'index'])->name('dashboard.index');
