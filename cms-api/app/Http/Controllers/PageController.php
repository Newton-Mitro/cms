<?php

namespace App\Http\Controllers;

use App\Http\Requests\Common\UpdatePublishStatusRequest;
use App\Http\Requests\Page\StorePageRequest;
use App\Http\Requests\Page\UpdatePageRequest;
use App\Http\Resources\Page\PageCollection;
use App\Http\Resources\Page\PageResource;
use App\Services\PageService;
use App\Utilities\LinkObject;
use Auth;

class PageController extends Controller
{
    private $_pageService;

    public function __construct(PageService $pageService)
    {
        $this->middleware('auth:api', ['except' => ['getPublicPosts', 'getPostBySlug', 'show']]);
        $this->_pageService = $pageService;
    }

    public function index()
    {
        $perPage = request()->filled('per_page') ? request()->query('per_page') : 10;
        $searchText = request()->filled('search_text') ? request()->query('search_text') : '';
        return PageCollection::collection($this->_pageService->all($perPage, $searchText))->additional([
            'createNew' => Auth::user()?->role === 'Super Admin' ? new LinkObject("store", "Create New", route('pages.store'), "POST") : null,
        ]);
    }

    public function store(StorePageRequest $request)
    {
        return new PageResource($this->_pageService->store($request));
    }

    public function show($id)
    {
        return new PageResource($this->_pageService->show($id));
    }

    public function update(UpdatePageRequest $request, $id)
    {
        return new PageResource($this->_pageService->update($request, $id));
    }

    public function updatePublishStatus(UpdatePublishStatusRequest $request, $id)
    {
        return new PageResource($this->_pageService->updatePublishStatus($request, $id));
    }

    public function destroy($id)
    {
        return new PageResource($this->_pageService->destroy($id));
    }

    public function getPostBySlug($slug)
    {
        return new PageResource($this->_pageService->getPostBySlug($slug));
    }

    public function getPublicPosts()
    {
        return PageCollection::collection($this->_pageService->getPublicPosts());
    }
}
