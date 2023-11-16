<?php

namespace App\Http\Resources\GalleryImage;

use App\Utilities\LinkObject;
use Auth;
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

class GalleryImageResource extends JsonResource
{

    private function getPublishLink()
    {
        if (Auth::user()?->role === 'Super Admin' || Auth::user()?->role === 'Admin' || Auth::user()?->role === 'Content Manager') {
            return new LinkObject("publish", "Publish Gallery Image", route('gallery-images.updatePublishStatus', $this->id), "PATCH", 'fa-solid fa-cloud-arrow-up');
        } else {
            return null;
        }
    }

    private function getDraftLink()
    {
        if (Auth::user()?->role === 'Super Admin' || Auth::user()?->role === 'Admin' || Auth::user()?->role === 'Content Manager') {
            return new LinkObject("draft", "Make Draft", route('gallery-images.updatePublishStatus', $this->id), "PATCH", 'fa-solid fa-cloud-arrow-down');
        } else {
            return null;
        }
    }

    public function toArray($request)
    {
        return [
            'slug' => $this->slug,
            'title' => $this->title,
            'originalAttachmentUrl' => $this->original_attachment_url ? asset($this->original_attachment_url) : null,
            'thumbnailAttachmentUrl' => $this->thumbnail_attachment_url ? asset($this->thumbnail_attachment_url) : null,
            'landscapeAttachmentUrl' => $this->landscape_attachment_url ? asset($this->landscape_attachment_url) : null,
            'portraitAttachmentUrl' => $this->portrait_attachment_url ? asset($this->portrait_attachment_url) : null,
            'icon' => $this->icon,
            'shortDescription' => $this->short_description,
            'order' => $this->order,
            'publishStatus' => $this->publish_status,
            'links' => [
                new LinkObject("index", "Video Posts", route('gallery-images.index'), "GET", 'fa-solid fa-list-ul'),
                new LinkObject("update", "Update Gallery Image", route('gallery-images.update', $this->id), "PUT", 'fa-solid fa-pen-to-square'),
                $this->publish_status === 'Draft' ? $this->getPublishLink() : $this->getDraftLink(),
                new LinkObject("destroy", "Delete Gallery Image", route('gallery-images.destroy', $this->id), "DELETE", 'fa-solid fa-trash-can'),
            ],
        ];
    }
}
