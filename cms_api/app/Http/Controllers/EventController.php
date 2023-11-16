<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Event\StoreEventRequest;
use App\Http\Requests\Event\UpdateEventRequest;
use App\Http\Resources\Event\EventCollection;
use App\Http\Resources\Event\EventResource;
use App\Services\EventService;
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

class EventController extends Controller
{

    private $_eventService;

    public function __construct(EventService $eventService)
    {
        $this->middleware('auth:api', ['except' => ['getPublicPosts', 'getPostBySlug', 'show']]);
        $this->_eventService = $eventService;
    }

    public function index()
    {
        $perPage = request()->filled('per_page') ? request()->query('per_page') : 10;
        $searchText = request()->filled('search_text') ? request()->query('search_text') : '';
        return EventCollection::collection($this->_eventService->all($perPage, $searchText))->additional([
            'createNew' => Auth::user()?->role === 'Super Admin' || Auth::user()?->role === 'Admin' || Auth::user()?->role === 'Content Manager' || Auth::user()?->role === 'Content Creator' ? new LinkObject("store", "Create New", route('events.store'), "POST") : null,
        ]);
    }

    public function store(StoreEventRequest $request)
    {
        return new EventResource($this->_eventService->store($request));
    }

    public function show($id)
    {
        return new EventResource($this->_eventService->show($id));
    }

    public function update(UpdateEventRequest $request, $id)
    {
        return new EventResource($this->_eventService->update($request, $id));
    }

    public function destroy($id)
    {
        return new EventResource($this->_eventService->destroy($id));
    }

    public function getPostBySlug($slug)
    {
        return new EventResource($this->_eventService->getPostBySlug($slug));
    }

    public function updatePublishStatus($request, $id)
    {
        return new EventResource($this->_eventService->updatePublishStatus($request, $id));
    }

    public function getPublicPosts()
    {
        return EventCollection::collection($this->_eventService->getPublicPosts());
    }
}
