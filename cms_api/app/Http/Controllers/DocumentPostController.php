<?php

namespace App\Http\Controllers;

use App\Http\Requests\Common\UpdatePublishStatusRequest;
use App\Http\Requests\DocumentPost\StoreDocumentPostRequest;
use App\Http\Requests\DocumentPost\UpdateDocumentPostRequest;
use App\Http\Resources\DocumentPost\DocumentPostCollection;
use App\Http\Resources\DocumentPost\DocumentPostResource;
use App\Services\DocumentPostService;
use App\Utilities\LinkObject;
use Auth;


class DocumentPostController extends Controller
{
    private $_documentPostService;

    public function __construct(DocumentPostService $documentPostService)
    {
        $this->middleware('auth:api', ['except' => ['getPublicPosts', 'getPostBySlug', 'show']]);
        $this->_documentPostService = $documentPostService;
    }

    public function index()
    {
        $perPage = request()->filled('per_page') ? request()->query('per_page') : 10;
        $searchText = request()->filled('search_text') ? request()->query('search_text') : '';
        return DocumentPostCollection::collection($this->_documentPostService->all($perPage, $searchText))->additional([
            'createNew' => Auth::user()?->role === 'Super Admin' || Auth::user()?->role === 'Admin' || Auth::user()?->role === 'Content Manager' || Auth::user()?->role === 'Content Creator' ? new LinkObject("store", "Create New", route('document-posts.store'), "POST") : null,
        ]);
    }

    public function store(StoreDocumentPostRequest $request)
    {
        return new DocumentPostResource($this->_documentPostService->store($request));
    }

    public function show($id)
    {
        return new DocumentPostResource($this->_documentPostService->show($id));
    }

    public function update(UpdateDocumentPostRequest $request, $id)
    {
        return new DocumentPostResource($this->_documentPostService->update($request, $id));
    }

    public function destroy($id)
    {
        return new DocumentPostResource($this->_documentPostService->destroy($id));
    }

    public function getPostBySlug($slug)
    {
        return new DocumentPostResource($this->_documentPostService->getPostBySlug($slug));
    }

    public function getPublicPosts()
    {
        return DocumentPostCollection::collection($this->_documentPostService->getPublicPosts());
    }

    public function updatePublishStatus(UpdatePublishStatusRequest $request, $id)
    {
        return new DocumentPostResource($this->_documentPostService->updatePublishStatus($request, $id));
    }
}
