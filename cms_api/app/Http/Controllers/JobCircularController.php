<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Common\UpdatePublishStatusRequest;
use App\Http\Requests\JobCircular\StoreJobCircularRequest;
use App\Http\Requests\JobCircular\UpdateJobCircularRequest;
use App\Http\Resources\JobCircular\JobCircularCollection;
use App\Http\Resources\JobCircular\JobCircularResource;
use App\Services\JobCircularService;
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

class JobCircularController extends Controller
{

    private $_jobCircularService;

    public function __construct(JobCircularService $jobCircularService)
    {
        $this->middleware('auth:api', ['except' => ['getPublicPosts', 'getPostBySlug', 'show']]);
        $this->_jobCircularService = $jobCircularService;
    }

    public function index()
    {
        $perPage = request()->filled('per_page') ? request()->query('per_page') : 10;
        $searchText = request()->filled('search_text') ? request()->query('search_text') : '';
        return JobCircularCollection::collection($this->_jobCircularService->all($perPage, $searchText))->additional([
            'createNew' => Auth::user()?->role === 'Super Admin' || Auth::user()?->role === 'Admin' || Auth::user()?->role === 'Content Manager' || Auth::user()?->role === 'Content Creator' ? new LinkObject("store", "Create New", route('job-circulars.store'), "POST") : null,
        ]);
    }

    public function store(StoreJobCircularRequest $request)
    {
        return new JobCircularResource($this->_jobCircularService->store($request));
    }

    public function show($id)
    {
        return new JobCircularResource($this->_jobCircularService->show($id));
    }

    public function update(UpdateJobCircularRequest $request, $id)
    {
        return new JobCircularResource($this->_jobCircularService->update($request, $id));
    }

    public function destroy($id)
    {
        return new JobCircularResource($this->_jobCircularService->destroy($id));
    }

    public function getPostBySlug($slug)
    {
        return new JobCircularResource($this->_jobCircularService->getPostBySlug($slug));
    }

    public function updatePublishStatus(UpdatePublishStatusRequest $request, $id)
    {
        return new JobCircularResource($this->_jobCircularService->updatePublishStatus($request, $id));
    }

    public function getPublicPosts()
    {
        return JobCircularCollection::collection($this->_jobCircularService->getPublicPosts());
    }
}
