<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Menu\StoreMenuRequest;
use App\Http\Requests\Menu\UpdateMenuRequest;
use App\Http\Resources\Menu\MenuCollection;
use App\Http\Resources\Menu\MenuResource;
use App\Services\MenuService;
use App\Utilities\LinkObject;

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

class MenuController extends Controller
{

    private $_menuService;

    public function __construct(MenuService $menuService)
    {
        $this->middleware('auth:api', ['except' => ['publicRootMenus']]);
        $this->_menuService = $menuService;
    }

    public function index()
    {
        return MenuResource::collection($this->_menuService->all())->additional([
            'links' => [
                new LinkObject("store", "New Menu", route('menus.store'), "POST"),
            ]
        ]);
    }

    public function publicRootMenus()
    {
        return MenuCollection::collection($this->_menuService->publicRootMenus())->additional([
            'links' => [
                new LinkObject("store", "New Menu", route('menus.store'), "POST"),
            ]
        ]);
    }

    public function adminRootMenus()
    {
        return MenuCollection::collection($this->_menuService->adminRootMenus())->additional([
            'links' => [
                new LinkObject("store", "New Menu", route('menus.store'), "POST"),
            ]
        ]);
    }

    public function store(StoreMenuRequest $request)
    {
        return new MenuResource($this->_menuService->store($request));
    }

    public function update(UpdateMenuRequest $request, $id)
    {
        return new MenuResource($this->_menuService->update($request, $id));
    }

    public function show($id)
    {
        return new MenuResource($this->_menuService->show($id));
    }

    public function destroy($id)
    {
        return new MenuResource($this->_menuService->destroy($id));
    }
}
