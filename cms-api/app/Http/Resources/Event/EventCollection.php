<?php

namespace App\Http\Resources\Event;

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

class EventCollection extends JsonResource
{

    public function toArray($request)
    {
        return [
            'slug' => $this->slug,
            'title' => $this->title,
            'fromDate' => $this->from_date,
            'toDate' => $this->to_date,
            'venue' => $this->venue,
            'shortDescription' => $this->short_description,
            'originalAttachmentUrl' => $this->original_attachment_url ? asset($this->original_attachment_url) : null,
            'thumbnailAttachmentUrl' => $this->thumbnail_attachment_url ? asset($this->thumbnail_attachment_url) : null,
            'landscapeAttachmentUrl' => $this->landscape_attachment_url ? asset($this->landscape_attachment_url) : null,
            'portraitAttachmentUrl' => $this->portrait_attachment_url ? asset($this->portrait_attachment_url) : null,
            'links' => [
                new LinkObject("show", "View Event", route('events.show', $this->id), "GET", 'fa-solid fa-eye'),
                new LinkObject("update", "Edit Event", route('events.update', $this->id), "PUT", 'fa-solid fa-pen-to-square'),
                new LinkObject("publish", "Publish Event", route('posts.update', $this->id), "PATCH", 'fa-solid fa-cloud-arrow-up'),
                new LinkObject("destroy", "Delete Event", route('events.destroy', $this->id), "DELETE", 'fa-solid fa-trash-can'),
            ],
        ];
    }
}
