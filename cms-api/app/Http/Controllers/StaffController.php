<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Common\UpdatePublishStatusRequest;
use App\Http\Requests\Staff\StoreStaffsRequest;
use App\Http\Requests\Staff\UpdateStaffsRequest;
use App\Http\Resources\Staff\StaffCollection;
use App\Http\Resources\Staff\StaffResource;
use App\Services\StaffService;
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

class StaffController extends Controller
{
    private $_staffService;

    public function __construct(StaffService $staffService)
    {
        $this->middleware('auth:api', ['except' => ['getPublicPosts', 'getPostBySlug', 'show', 'getStaffsByType']]);
        $this->_staffService = $staffService;
    }

    public function index()
    {
        $perPage = request()->filled('per_page') ? request()->query('per_page') : 10;
        $searchText = request()->filled('search_text') ? request()->query('search_text') : '';
        return StaffCollection::collection($this->_staffService->all($perPage, $searchText))->additional([
            'createNew' => Auth::user()?->role === 'Super Admin' || Auth::user()?->role === 'Admin' || Auth::user()?->role === 'Content Manager' || Auth::user()?->role === 'Content Creator' ? new LinkObject("store", "Create New", route('staffs.store'), "POST") : null,
        ]);
    }

    public function getStaffsByType($staffType)
    {
        return StaffCollection::collection($this->_staffService->getStaffsByType($staffType));
    }

    public function store(StoreStaffsRequest $request)
    {
        return new StaffResource($this->_staffService->store($request));
    }

    public function show($id)
    {
        return new StaffResource($this->_staffService->show($id));
    }

    public function update(UpdateStaffsRequest $request, $id)
    {
        return new StaffResource($this->_staffService->update($request, $id));
    }

    public function destroy($id)
    {
        return new StaffResource($this->_staffService->destroy($id));
    }

    public function getPostBySlug($slug)
    {
        return new StaffResource($this->_staffService->getPostBySlug($slug));
    }

    public function updatePublishStatus(UpdatePublishStatusRequest $request, $id)
    {
        return new StaffResource($this->_staffService->updatePublishStatus($request, $id));
    }
}
