<?php

namespace App\Http\Controllers;

use App\Http\Requests\Common\UpdatePublishStatusRequest;
use App\Http\Requests\DepositProduct\StoreDepositProductRequest;
use App\Http\Requests\DepositProduct\UpdateDepositProductRequest;
use App\Http\Resources\DepositProduct\DepositProductCollection;
use App\Http\Resources\DepositProduct\DepositProductResource;
use App\Services\DepositProductService;
use App\Utilities\LinkObject;
use Auth;

class DepositProductController extends Controller
{
    private $_depositProductService;

    public function __construct(DepositProductService $depositProductService)
    {
        $this->middleware('auth:api', ['except' => ['getPublicPosts', 'getPostBySlug', 'show']]);
        $this->_depositProductService = $depositProductService;
    }

    public function index()
    {
        $perPage = request()->filled('per_page') ? request()->query('per_page') : 10;
        $searchText = request()->filled('search_text') ? request()->query('search_text') : '';
        return DepositProductCollection::collection($this->_depositProductService->all($perPage, $searchText))->additional([
            'createNew' => Auth::user()?->role === 'Super Admin' || Auth::user()?->role === 'Admin' || Auth::user()?->role === 'Content Manager' || Auth::user()?->role === 'Content Creator' ? new LinkObject("store", "Create New", route('deposit-products.store'), "POST") : null,
        ]);
    }

    public function store(StoreDepositProductRequest $request)
    {
        return new DepositProductResource($this->_depositProductService->store($request));
    }

    public function show($id)
    {
        return new DepositProductResource($this->_depositProductService->show($id));
    }

    public function update(UpdateDepositProductRequest $request, $id)
    {
        return new DepositProductResource($this->_depositProductService->update($request, $id));
    }

    public function updatePublishStatus(UpdatePublishStatusRequest $request, $id)
    {
        return new DepositProductResource($this->_depositProductService->updatePublishStatus($request, $id));
    }

    public function destroy($id)
    {
        return new DepositProductResource($this->_depositProductService->destroy($id));
    }

    public function getPostBySlug($slug)
    {
        return new DepositProductResource($this->_depositProductService->getPostBySlug($slug));
    }

    public function getPublicPosts()
    {
        return DepositProductCollection::collection($this->_depositProductService->getPublicPosts());
    }
}
