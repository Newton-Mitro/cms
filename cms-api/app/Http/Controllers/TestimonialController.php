<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Testimonial\StoreTestimonialRequest;
use App\Http\Requests\Testimonial\UpdateTestimonialRequest;
use App\Http\Resources\Testimonial\TestimonialCollection;
use App\Http\Resources\Testimonial\TestimonialResource;
use App\Services\TestimonialService;
use App\Utilities\LinkObject;
use Auth;

/**========================================================================
 * ?                                ABOUT
 * @author         : Newton Mitro
 * @email          : newtonmitro@gmail.com
 * @repo           :
 * @createdOn      :  08 Oct 2023
 * @updatedBy      : Newton Mitro
 * @updatedAt      :  08 Oct 2023
 * @description     :
 *========================================================================**/

class TestimonialController extends Controller
{
    private $_testimonialService;

    public function __construct(TestimonialService $testimonialService)
    {
        $this->middleware('auth:api', ['except' => ['getPublicPosts', 'getPostBySlug', 'show']]);
        $this->_testimonialService = $testimonialService;
    }

    public function index()
    {
        $perPage = request()->filled('per_page') ? request()->query('per_page') : 10;
        $searchText = request()->filled('search_text') ? request()->query('search_text') : '';
        return TestimonialCollection::collection($this->_testimonialService->all($perPage, $searchText))->additional([
            'createNew' => Auth::user()?->role === 'Super Admin' || Auth::user()?->role === 'Admin' || Auth::user()?->role === 'Content Manager' || Auth::user()?->role === 'Content Creator' ? new LinkObject("store", "Create New", route('testimonials.store'), "POST") : null,
        ]);
    }

    public function store(StoreTestimonialRequest $request)
    {
        return new TestimonialResource($this->_testimonialService->store($request));
    }

    public function show($id)
    {
        return new TestimonialResource($this->_testimonialService->show($id));
    }

    public function update(UpdateTestimonialRequest $request, $id)
    {
        return new TestimonialResource($this->_testimonialService->update($request, $id));
    }

    public function destroy($id)
    {
        return new TestimonialResource($this->_testimonialService->destroy($id));
    }

    public function getPostBySlug($slug)
    {
        return new TestimonialResource($this->_testimonialService->getPostBySlug($slug));
    }

    public function updatePublishStatus($request, $id)
    {
        return new TestimonialResource($this->_testimonialService->updatePublishStatus($request, $id));
    }

    public function getPublicPosts()
    {
        return TestimonialCollection::collection($this->_testimonialService->getPublicPosts());
    }
}
