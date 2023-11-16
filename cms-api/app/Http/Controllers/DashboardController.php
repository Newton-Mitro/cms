<?php

namespace App\Http\Controllers;

use App\Models\DepositProduct;
use App\Models\DocumentPost;
use App\Models\GalleryImage;
use App\Models\LoanProduct;
use App\Models\Notice;
use App\Models\OurService;
use App\Models\Page;
use App\Models\SliderImage;
use App\Models\Staff;
use App\Models\User;
use App\Models\VisitorLog;
use Illuminate\Http\Response;

class DashboardController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index()
    {
        $res = array(
            "publishedPages" => Page::where('publish_status', 'Published')->count(),
            "draftPages" => Page::where('publish_status', 'Draft')->count(),

            "publishedNotices" => Notice::where('publish_status', 'Published')->count(),
            "draftNotices" => Notice::where('publish_status', 'Draft')->count(),

            "publishedForms" => DocumentPost::where('publish_status', 'Published')->count(),
            "draftForms" => DocumentPost::where('publish_status', 'Draft')->count(),

            "publishedSavingDeposits" => DepositProduct::where('publish_status', 'Published')->count(),
            "draftSavingDeposits" => DepositProduct::where('publish_status', 'Draft')->count(),

            "publishedLoanProducts" => LoanProduct::where('publish_status', 'Published')->count(),
            "draftLoanProducts" => LoanProduct::where('publish_status', 'Draft')->count(),

            "publishedLeaders" => Staff::where('publish_status', 'Published')->count(),
            "draftLeaders" => Staff::where('publish_status', 'Draft')->count(),

            "publishedGalleryImages" => GalleryImage::where('publish_status', 'Published')->count(),
            "draftGalleryImages" => GalleryImage::where('publish_status', 'Draft')->count(),

            "publishedSliderImages" => SliderImage::where('publish_status', 'Published')->count(),
            "draftSliderImages" => SliderImage::where('publish_status', 'Draft')->count(),

            "publishedServices" => OurService::where('publish_status', 'Published')->count(),
            "draftServices" => OurService::where('publish_status', 'Draft')->count(),

            "publishedUsers" => User::where('status', 1)->count(),
            "draftUsers" => User::where('status', 0)->count(),

            "totalVisitors" => VisitorLog::distinct()->count('ip'),
            "todaysVisitors" => VisitorLog::distinct()->whereDate('created_at', \Carbon\Carbon::today())->count('ip'),
        );


        return response()->json([
            "data" => $res,
            "message" => 'Success',
            'errors' => null,
        ], Response::HTTP_OK);
    }
}
