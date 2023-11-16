<?php

namespace App\Http\Controllers;

use App\Http\Requests\Common\UpdatePublishStatusRequest;
use App\Http\Requests\GalleryImage\StoreGalleryImageRequest;
use App\Http\Requests\GalleryImage\UpdateGalleryImageRequest;
use App\Http\Resources\GalleryImage\GalleryImageCollection;
use App\Http\Resources\GalleryImage\GalleryImageResource;
use App\Services\GalleryImageService;
use App\Utilities\LinkObject;
use Auth;

class GalleryImageController extends Controller
{
    private $_galleryImageService;

    public function __construct(GalleryImageService $galleryImageService)
    {
        $this->middleware('auth:api', ['except' => ['getPublicPosts', 'getPostBySlug', 'show']]);
        $this->_galleryImageService = $galleryImageService;
    }

    public function index()
    {
        $perPage = request()->filled('per_page') ? request()->query('per_page') : 10;
        $searchText = request()->filled('search_text') ? request()->query('search_text') : '';
        return GalleryImageCollection::collection($this->_galleryImageService->all($perPage, $searchText))->additional([
            'createNew' => Auth::user()?->role === 'Super Admin' || Auth::user()?->role === 'Admin' || Auth::user()?->role === 'Content Manager' || Auth::user()?->role === 'Content Creator' ? new LinkObject("store", "Create New", route('gallery-images.store'), "POST") : null,
        ]);
    }

    public function store(StoreGalleryImageRequest $request)
    {
        return new GalleryImageResource($this->_galleryImageService->store($request));
    }

    public function show($id)
    {
        return new GalleryImageResource($this->_galleryImageService->show($id));
    }

    public function update(UpdateGalleryImageRequest $request, $id)
    {
        return new GalleryImageResource($this->_galleryImageService->update($request, $id));
    }

    public function destroy($id)
    {
        return new GalleryImageResource($this->_galleryImageService->destroy($id));
    }

    public function getPostBySlug($slug)
    {
        return new GalleryImageResource($this->_galleryImageService->getPostBySlug($slug));
    }

    public function updatePublishStatus(UpdatePublishStatusRequest $request, $id)
    {
        return new GalleryImageResource($this->_galleryImageService->updatePublishStatus($request, $id));
    }

    public function getPublicPosts()
    {
        return GalleryImageCollection::collection($this->_galleryImageService->getPublicPosts());
    }
}
