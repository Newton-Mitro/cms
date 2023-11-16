<?php

namespace App\Http\Controllers;


use App\Http\Controllers\Controller;
use App\Http\Requests\Post\StorePostRequest;
use App\Http\Requests\Post\UpdatePostRequest;
use App\Http\Resources\Post\PostCollection;
use App\Http\Resources\Post\PostResource;
use App\Services\PostService;
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
 * @description    :
 *========================================================================**/

class PostController extends Controller
{

    private $_postService;

    public function __construct(PostService $postService)
    {
        $this->middleware('auth:api', ['except' => ['getPublicPosts', 'getPostBySlug', 'show']]);
        $this->_postService = $postService;
    }

    public function index()
    {
        $perPage = request()->filled('per_page') ? request()->query('per_page') : 10;
        $searchText = request()->filled('search_text') ? request()->query('search_text') : '';
        return PostCollection::collection($this->_postService->all($perPage, $searchText))->additional([
            'createNew' => Auth::user()?->role === 'Super Admin' || Auth::user()?->role === 'Admin' || Auth::user()?->role === 'Content Manager' || Auth::user()?->role === 'Content Creator' ? new LinkObject("store", "Create New", route('posts.store'), "POST") : null,
        ]);
    }

    public function store(StorePostRequest $request)
    {
        return new PostResource($this->_postService->store($request));
    }

    public function show($id)
    {
        return new PostResource($this->_postService->show($id));
    }

    public function update(UpdatePostRequest $request, $id)
    {
        return new PostResource($this->_postService->update($request, $id));
    }

    public function updatePublishStatus($request, $id)
    {
        return new PostResource($this->_postService->updatePublishStatus($request, $id));
    }

    public function destroy($id)
    {
        return new PostResource($this->_postService->destroy($id));
    }

    public function getPostBySlug($slug)
    {
        return new PostResource($this->_postService->getPostBySlug($slug));
    }

    public function getPublicPosts()
    {
        return PostCollection::collection($this->_postService->getPublicPosts());
    }
}
