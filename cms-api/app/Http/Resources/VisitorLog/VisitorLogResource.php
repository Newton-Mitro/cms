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

class VisitorLogResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'ip' => $this->ip,
            'app' => $this->app,
            'device' => $this->device,
            'url' => $this->url,
            'method' => $this->method,
            'locale' => $this->locale,
            'country' => $this->country,
            'city' => $this->city,
            'latitude' => $this->latitude,
            'longitude' => $this->longitude,
            'zipCode' => $this->zipCode,
            'postalCode' => $this->postalCode,
            'links' => [
                new LinkObject("index", "Visitor Logs", route('visitor-logs.index'), "GET", 'fa-solid fa-list-ul'),
                new LinkObject("update", "Update Visitor Log", route('visitor-logs.update', $this->id), "PUT", 'fa-solid fa-pen-to-square'),
                new LinkObject("destroy", "Delete Visitor Log", route('visitor-logs.destroy', $this->id), "DELETE", 'fa-solid fa-trash-can'),
            ],
        ];
    }
}
