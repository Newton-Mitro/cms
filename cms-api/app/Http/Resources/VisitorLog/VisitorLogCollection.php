<?php

namespace App\Http\Resources\VisitorLog;

use App\Utilities\LinkObject;
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

class VisitorLogCollection extends JsonResource
{

    public function toArray($request)
    {
        return [
            'ip' => $this->ip,
            'app' => $this->app,
            'device' => $this->device,
            'url' => $this->url,
            'method' => $this->method,
            'links' => [
                new LinkObject("show", "View Visitor Log", route('visitor-logs.show', $this->id), "GET", 'fa-solid fa-eye'),
                new LinkObject("update", "Update Visitor Log", route('visitor-logs.update', $this->id), "PUT", 'fa-solid fa-pen-to-square'),
                new LinkObject("destroy", "Delete Visitor Log", route('visitor-logs.destroy', $this->id), "DELETE", 'fa-solid fa-trash-can'),
            ],
        ];
    }
}