<?php

namespace App\Http\Controllers;

use App\Http\Requests\Common\UpdatePublishStatusRequest;
use App\Http\Requests\LoanProduct\StoreLoanProductRequest;
use App\Http\Requests\LoanProduct\UpdateLoanProductRequest;
use App\Http\Resources\LoanProduct\LoanProductCollection;
use App\Http\Resources\LoanProduct\LoanProductResource;
use App\Services\LoanProductService;
use App\Utilities\LinkObject;
use Auth;



class LoanProductController extends Controller
{
    private $_loanProductService;

    public function __construct(LoanProductService $loanProductService)
    {
        $this->middleware('auth:api', ['except' => ['getPublicPosts', 'getPostBySlug', 'show']]);
        $this->_loanProductService = $loanProductService;
    }

    public function index()
    {
        $perPage = request()->filled('per_page') ? request()->query('per_page') : 10;
        $searchText = request()->filled('search_text') ? request()->query('search_text') : '';
        return LoanProductCollection::collection($this->_loanProductService->all($perPage, $searchText))->additional([
            'createNew' => Auth::user()?->role === 'Super Admin' || Auth::user()?->role === 'Admin' || Auth::user()?->role === 'Content Manager' || Auth::user()?->role === 'Content Creator' ? new LinkObject("store", "Create New", route('loan-products.store'), "POST") : null,
        ]);
    }

    public function store(StoreLoanProductRequest $request)
    {
        return new LoanProductResource($this->_loanProductService->store($request));
    }

    public function show($id)
    {
        return new LoanProductResource($this->_loanProductService->show($id));
    }

    public function update(UpdateLoanProductRequest $request, $id)
    {
        return new LoanProductResource($this->_loanProductService->update($request, $id));
    }

    public function updatePublishStatus(UpdatePublishStatusRequest $request, $id)
    {
        return new LoanProductResource($this->_loanProductService->updatePublishStatus($request, $id));
    }

    public function destroy($id)
    {
        return new LoanProductResource($this->_loanProductService->destroy($id));
    }

    public function getPostBySlug($slug)
    {
        return new LoanProductResource($this->_loanProductService->getPostBySlug($slug));
    }

    public function getPublicPosts()
    {
        return LoanProductCollection::collection($this->_loanProductService->getPublicPosts());
    }
}
