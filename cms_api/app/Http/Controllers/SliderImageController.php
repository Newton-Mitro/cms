<?php

namespace App\Http\Controllers;

use App\Http\Requests\Common\UpdatePublishStatusRequest;
use App\Http\Requests\SliderImage\StoreSliderImageRequest;
use App\Http\Requests\SliderImage\UpdateSliderImageRequest;
use App\Http\Resources\SliderImage\SliderImageCollection;
use App\Http\Resources\SliderImage\SliderImageResource;
use App\Services\SliderImageService;
use App\Utilities\LinkObject;
use Auth;



class SliderImageController extends Controller
{
    private $_sliderImageService;

    public function __construct(SliderImageService $sliderImageService)
    {
        $this->middleware('auth:api', ['except' => ['getPublicPosts', 'getPostBySlug', 'show']]);
        $this->_sliderImageService = $sliderImageService;
    }

    public function index()
    {
        $perPage = request()->filled('per_page') ? request()->query('per_page') : 10;
        $searchText = request()->filled('search_text') ? request()->query('search_text') : '';
        return SliderImageCollection::collection($this->_sliderImageService->all($perPage, $searchText))->additional([
            'createNew' => Auth::user()?->role === 'Super Admin' || Auth::user()?->role === 'Admin' || Auth::user()?->role === 'Content Manager' || Auth::user()?->role === 'Content Creator' ? new LinkObject("store", "Create New", route('slider-images.store'), "POST") : null,
        ]);
    }

    public function store(StoreSliderImageRequest $request)
    {
        return new SliderImageResource($this->_sliderImageService->store($request));
    }

    public function show($id)
    {
        return new SliderImageResource($this->_sliderImageService->show($id));
    }

    public function update(UpdateSliderImageRequest $request, $id)
    {
        return new SliderImageResource($this->_sliderImageService->update($request, $id));
    }

    public function updatePublishStatus(UpdatePublishStatusRequest $request, $id)
    {
        return new SliderImageResource($this->_sliderImageService->updatePublishStatus($request, $id));
    }

    public function destroy($id)
    {
        return new SliderImageResource($this->_sliderImageService->destroy($id));
    }

    public function getPostBySlug($slug)
    {
        return new SliderImageResource($this->_sliderImageService->getPostBySlug($slug));
    }

    public function getPublicPosts()
    {
        return SliderImageCollection::collection($this->_sliderImageService->getPublicPosts());
    }
}
