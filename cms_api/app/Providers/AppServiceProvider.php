<?php

namespace App\Providers;

use App\Repositories\DepositProductRepository;
use App\Repositories\DocumentPostRepository;
use App\Repositories\EventRepository;
use App\Repositories\GalleryImageRepository;
use App\Repositories\Interfaces\DepositProductRepositoryInterface;
use App\Repositories\Interfaces\DocumentPostRepositoryInterface;
use App\Repositories\Interfaces\EventRepositoryInterface;
use App\Repositories\Interfaces\GalleryImageRepositoryInterface;
use App\Repositories\Interfaces\JobCircularRepositoryInterface;
use App\Repositories\Interfaces\LoanProductRepositoryInterface;
use App\Repositories\Interfaces\MenuRepositoryInterface;
use App\Repositories\Interfaces\NoticeRepositoryInterface;
use App\Repositories\Interfaces\OurServiceRepositoryInterface;
use App\Repositories\Interfaces\PageRepositoryInterface;
use App\Repositories\Interfaces\PostRepositoryInterface;
use App\Repositories\Interfaces\SettingRepositoryInterface;
use App\Repositories\Interfaces\SliderImageRepositoryInterface;
use App\Repositories\Interfaces\StaffRepositoryInterface;
use App\Repositories\Interfaces\TestimonialRepositoryInterface;
use App\Repositories\Interfaces\UserRepositoryInterface;
use App\Repositories\Interfaces\VisitorLogRepositoryInterface;
use App\Repositories\JobCircularRepository;
use App\Repositories\LoanProductRepository;
use App\Repositories\MenuRepository;
use App\Repositories\NoticeRepository;
use App\Repositories\OurServiceRepository;
use App\Repositories\PageRepository;
use App\Repositories\PostRepository;
use App\Repositories\SettingRepository;
use App\Repositories\SliderImageRepository;
use App\Repositories\StaffRepository;
use App\Repositories\TestimonialRepository;
use App\Repositories\UserRepository;
use App\Repositories\VisitorLogRepository;
use App\Services\DepositProductService;
use App\Services\DocumentPostService;
use App\Services\EventService;
use App\Services\GalleryImageService;
use App\Services\JobCircularService;
use App\Services\LoanProductService;
use App\Services\MenuService;
use App\Services\NoticeService;
use App\Services\OurServiceService;
use App\Services\PageService;
use App\Services\PostService;
use App\Services\SettingService;
use App\Services\SliderImageService;
use App\Services\StaffService;
use App\Services\TestimonialService;
use App\Services\UserService;
use App\Services\VisitorLogService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind(UserRepositoryInterface::class, UserRepository::class);
        $this->app->bind(MenuRepositoryInterface::class, MenuRepository::class);
        $this->app->bind(PostRepositoryInterface::class, PostRepository::class);
        $this->app->bind(SliderImageRepositoryInterface::class, SliderImageRepository::class);
        $this->app->bind(PageRepositoryInterface::class, PageRepository::class);
        $this->app->bind(OurServiceRepositoryInterface::class, OurServiceRepository::class);
        $this->app->bind(NoticeRepositoryInterface::class, NoticeRepository::class);
        $this->app->bind(LoanProductRepositoryInterface::class, LoanProductRepository::class);
        $this->app->bind(DepositProductRepositoryInterface::class, DepositProductRepository::class);
        $this->app->bind(EventRepositoryInterface::class, EventRepository::class);
        $this->app->bind(StaffRepositoryInterface::class, StaffRepository::class);
        $this->app->bind(TestimonialRepositoryInterface::class, TestimonialRepository::class);
        $this->app->bind(JobCircularRepositoryInterface::class, JobCircularRepository::class);
        $this->app->bind(SettingRepositoryInterface::class, SettingRepository::class);
        $this->app->bind(VisitorLogRepositoryInterface::class, VisitorLogRepository::class);
        $this->app->bind(GalleryImageRepositoryInterface::class, GalleryImageRepository::class);
        $this->app->bind(DocumentPostRepositoryInterface::class, DocumentPostRepository::class);

        // Service Register
        $this->app->bind(UserService::class, UserService::class);
        $this->app->bind(MenuService::class, MenuService::class);
        $this->app->bind(PostService::class, PostService::class);
        $this->app->bind(EventService::class, EventService::class);
        $this->app->bind(StaffService::class, StaffService::class);
        $this->app->bind(TestimonialService::class, TestimonialService::class);
        $this->app->bind(JobCircularService::class, JobCircularService::class);
        $this->app->bind(SettingService::class, SettingService::class);
        $this->app->bind(VisitorLogService::class, VisitorLogService::class);
        $this->app->bind(GalleryImageService::class, GalleryImageService::class);
        $this->app->bind(DocumentPostService::class, DocumentPostService::class);
        $this->app->bind(DepositProductService::class, DepositProductService::class);
        $this->app->bind(LoanProductService::class, LoanProductService::class);
        $this->app->bind(NoticeService::class, NoticeService::class);
        $this->app->bind(OurServiceService::class, OurServiceService::class);
        $this->app->bind(PageService::class, PageService::class);
        $this->app->bind(SliderImageService::class, SliderImageService::class);

    }

    public function boot()
    {
        //
    }
}
