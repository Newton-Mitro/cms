<?php

namespace App\Http\Controllers;

use App\Http\Requests\Common\UpdatePublishStatusRequest;
use App\Http\Requests\OurService\StoreOurServiceRequest;
use App\Http\Requests\OurService\UpdateOurServiceRequest;
use App\Http\Resources\OurService\OurServiceCollection;
use App\Http\Resources\OurService\OurServiceResource;
use App\Services\OurServiceService;
use App\Utilities\LinkObject;
use Auth;



class OurServiceController extends Controller
{
    private $_ourServiceService;

    public function __construct(OurServiceService $ourServiceService)
    {
        $this->middleware('auth:api', ['except' => ['getPublicPosts', 'getPostBySlug', 'show']]);
        $this->_ourServiceService = $ourServiceService;
    }

    public function index()
    {
        $perPage = request()->filled('per_page') ? request()->query('per_page') : 10;
        $searchText = request()->filled('search_text') ? request()->query('search_text') : '';
        return OurServiceCollection::collection($this->_ourServiceService->all($perPage, $searchText))->additional([
            'createNew' => Auth::user()?->role === 'Super Admin' || Auth::user()?->role === 'Admin' || Auth::user()?->role === 'Content Manager' || Auth::user()?->role === 'Content Creator' ? new LinkObject("store", "Create New", route('our-services.store'), "POST") : null,
        ]);
    }

    public function store(StoreOurServiceRequest $request)
    {
        return new OurServiceResource($this->_ourServiceService->store($request));
    }

    public function show($id)
    {
        return new OurServiceResource($this->_ourServiceService->show($id));
    }

    public function update(UpdateOurServiceRequest $request, $id)
    {
        return new OurServiceResource($this->_ourServiceService->update($request, $id));
    }

    public function updatePublishStatus(UpdatePublishStatusRequest $request, $id)
    {
        return new OurServiceResource($this->_ourServiceService->updatePublishStatus($request, $id));
    }

    public function destroy($id)
    {
        return new OurServiceResource($this->_ourServiceService->destroy($id));
    }

    public function getPostBySlug($slug)
    {
        return new OurServiceResource($this->_ourServiceService->getPostBySlug($slug));
    }

    public function getPublicPosts()
    {
        return OurServiceCollection::collection($this->_ourServiceService->getPublicPosts());
    }
}
