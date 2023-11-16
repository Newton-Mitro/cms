<?php

namespace App\Repositories;

use App\Models\Menu;
use App\Repositories\Interfaces\MenuRepositoryInterface;

/**========================================================================
 * ?                                ABOUT
 * @author         : Newton Mitro
 * @email          : newtonmitro@gmail.com
 * @repo           :
 * @createdOn      : 08 Oct 2023
 * @updatedBy      : Newton Mitro
 * @updatedAt      : 08 Oct 2023
 * @description    :
 *========================================================================**/

class MenuRepository implements MenuRepositoryInterface
{

    public function all()
    {
        $per_page = request()->filled('per_page') ? request()->query('per_page') : 10;
        return Menu::paginate($per_page);
    }

    public function publicRootMenus()
    {
        return Menu::where([['parent_id', '=', 0], ['active', '=', true], ['admin_menu', '=', false]])->get();
    }

    public function adminRootMenus()
    {
        return Menu::where([['parent_id', '=', 0], ['active', '=', true], ['admin_menu', '=', true]])->get();
    }

    public function store($request)
    {
        $menu = new Menu();
        $menu->menu_name = $request->menuTitle;
        $menu->link_to = $request->url;
        $menu->icon = $request->icon;
        $menu->parent_id = $request->parentId;
        $menu->save();
        return $menu;
    }

    public function update($request, $id)
    {
        $menu = Menu::findOrFail($id);
        $menu->menu_name = $request->menuTitle;
        $menu->link_to = $request->url;
        $menu->icon = $request->icon;
        $menu->parent_id = $request->parentId;
        $menu->update();
        return $menu;
    }

    public function show($id)
    {
        return Menu::findOrFail($id);
    }

    public function destroy($id)
    {
        $menu = Menu::findOrFail($id);
        $menu->delete();
        return $menu;
    }
}
