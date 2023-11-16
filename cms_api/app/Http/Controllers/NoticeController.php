<?php

namespace App\Http\Controllers;

use App\Http\Requests\Common\UpdatePublishStatusRequest;
use App\Http\Requests\Notice\StoreNoticeRequest;
use App\Http\Requests\Notice\UpdateNoticeRequest;
use App\Http\Resources\Notice\NoticeCollection;
use App\Http\Resources\Notice\NoticeResource;
use App\Services\NoticeService;
use App\Utilities\LinkObject;
use Auth;



class NoticeController extends Controller
{
    private $_noticeService;

    public function __construct(NoticeService $noticeService)
    {
        $this->middleware('auth:api', ['except' => ['getPublicPosts', 'getPostBySlug', 'show']]);
        $this->_noticeService = $noticeService;
    }

    public function index()
    {
        $perPage = request()->filled('per_page') ? request()->query('per_page') : 10;
        $searchText = request()->filled('search_text') ? request()->query('search_text') : '';
        return NoticeCollection::collection($this->_noticeService->all($perPage, $searchText))->additional([
            'createNew' => Auth::user()?->role === 'Super Admin' || Auth::user()?->role === 'Admin' || Auth::user()?->role === 'Content Manager' || Auth::user()?->role === 'Content Creator' ? new LinkObject("store", "Create New", route('notices.store'), "POST") : null,
        ]);
    }

    public function store(StoreNoticeRequest $request)
    {
        return new NoticeResource($this->_noticeService->store($request));
    }

    public function show($id)
    {
        return new NoticeResource($this->_noticeService->show($id));
    }

    public function update(UpdateNoticeRequest $request, $id)
    {
        return new NoticeResource($this->_noticeService->update($request, $id));
    }

    public function updatePublishStatus(UpdatePublishStatusRequest $request, $id)
    {
        return new NoticeResource($this->_noticeService->updatePublishStatus($request, $id));
    }

    public function destroy($id)
    {
        return new NoticeResource($this->_noticeService->destroy($id));
    }

    public function getPostBySlug($slug)
    {
        return new NoticeResource($this->_noticeService->getPostBySlug($slug));
    }

    public function getPublicPosts()
    {
        return NoticeCollection::collection($this->_noticeService->getPublicPosts());
    }
}
