<?php

namespace App\Http\Controllers;

use App\Http\Requests\Setting\UpdateSettingRequest;
use App\Http\Resources\Setting\SettingResource;
use App\Services\SettingService;

class SettingController extends Controller
{
    private $_settingService;

    public function __construct(SettingService $settingService)
    {
        $this->middleware('auth:api', ['except' => ['index', 'show']]);
        $this->_settingService = $settingService;
    }

    public function index()
    {
        return new SettingResource($this->_settingService->all());
    }

    public function show($id)
    {
        return new SettingResource($this->_settingService->show($id));
    }

    public function update(UpdateSettingRequest $request, $id)
    {
        return new SettingResource($this->_settingService->update($request, $id));
    }

}
