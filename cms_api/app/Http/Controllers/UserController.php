<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Common\UpdatePublishStatusRequest;
use App\Http\Requests\User\ChangePasswordRequest;
use App\Http\Requests\User\StoreUserRequest;
use App\Http\Requests\User\UpdateProfileRequest;
use App\Http\Requests\User\UpdateUserRequest;
use App\Http\Resources\User\UserCollection;
use App\Http\Resources\User\UserResource;
use App\Services\UserService;
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

class UserController extends Controller
{

    private $_userService;

    public function __construct(UserService $userService)
    {
        $this->middleware('auth:api');
        $this->_userService = $userService;
    }

    public function index()
    {
        $perPage = request()->filled('per_page') ? request()->query('per_page') : 10;
        $searchText = request()->filled('search_text') ? request()->query('search_text') : '';
        return UserCollection::collection($this->_userService->all($perPage, $searchText))->additional([
            'createNew' => Auth::user()?->role === 'Super Admin' || Auth::user()?->role === 'Admin' ? new LinkObject("store", "Create New", route('users.store'), "POST") : null,
        ]);
    }

    public function store(StoreUserRequest $request)
    {
        return new UserResource($this->_userService->store($request));
    }

    public function show($id)
    {
        return new UserResource($this->_userService->show($id));
    }

    public function update(UpdateUserRequest $request, $id)
    {
        return new UserResource($this->_userService->update($request, $id));
    }

    public function updateProfile(UpdateProfileRequest $request, $id)
    {
        return new UserResource($this->_userService->updateProfile($request, $id));
    }

    public function changePassword(ChangePasswordRequest $request, $id)
    {
        return new UserResource($this->_userService->changePassword($request, $id));
    }

    public function destroy($id)
    {
        return new UserResource($this->_userService->destroy($id));
    }

    public function updateUserActiveStatus(UpdatePublishStatusRequest $request, $id)
    {
        return new UserCollection($this->_userService->updateUserActiveStatus($request, $id));
    }
}
