<?php

namespace App\Http\Controllers;

use App\Http\Requests\VisitorLog\StoreVisitorLogRequest;
use App\Http\Resources\VisitorLog\VisitorLogCollection;
use App\Http\Resources\VisitorLog\VisitorLogResource;
use App\Services\VisitorLogService;
use App\Utilities\LinkObject;
use Auth;

class VisitorLogController extends Controller
{
    private $_visitorLogService;

    public function __construct(VisitorLogService $visitorLogService)
    {
        $this->middleware('auth:api', ['except' => ['show', 'visitorsCount']]);
        $this->_visitorLogService = $visitorLogService;
    }

    public function index()
    {
        return VisitorLogCollection::collection($this->_visitorLogService->all())->additional([
            'createNew' => Auth::user()?->role === 'Super Admin' || Auth::user()?->role === 'Admin' || Auth::user()?->role === 'Content Manager' || Auth::user()?->role === 'Content Creator' ? new LinkObject("store", "Create New", route('posts.store'), "POST") : null,
        ]);
    }

    public function store(StoreVisitorLogRequest $request)
    {
        return new VisitorLogResource($this->_visitorLogService->store($request));
    }

    public function show($id)
    {
        return new VisitorLogResource($this->_visitorLogService->show($id));
    }

    public function visitorsCount()
    {

        return response()->json([
            'todaysVisitorCount' => $this->_visitorLogService->todaysVisitorCount(),
            'totalVisitorCount' => $this->_visitorLogService->totalVisitorCount(),
        ]);
    }

}
