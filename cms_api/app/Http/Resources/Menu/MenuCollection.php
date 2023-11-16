<?php

namespace App\Http\Resources\Menu;

use Illuminate\Http\Resources\Json\JsonResource;

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

class MenuCollection extends JsonResource
{

    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'menuName' => $this->menu_name,
            'url' => $this->link_to,
            'icon' => $this->icon,
            'submenus' => MenuCollection::collection($this->children),
        ];
    }
}
