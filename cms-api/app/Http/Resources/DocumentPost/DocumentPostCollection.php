<?php

namespace App\Http\Resources\DocumentPost;

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

class DocumentPostCollection extends JsonResource
{
    private function getPublishLink()
    {
        if (Auth::user()?->role === 'Super Admin' || Auth::user()?->role === 'Admin' || Auth::user()?->role === 'Content Manager') {
            return new LinkObject("publish", "Publish Document", route('document-posts.updatePublishStatus', $this->id), "PATCH", 'fa-solid fa-cloud-arrow-up');
        } else {
            return null;
        }
    }

    private function getDraftLink()
    {
        if (Auth::user()?->role === 'Super Admin' || Auth::user()?->role === 'Admin' || Auth::user()?->role === 'Content Manager') {
            return new LinkObject("draft", "Make Draft", route('document-posts.updatePublishStatus', $this->id), "PATCH", 'fa-solid fa-cloud-arrow-down');
        } else {
            return null;
        }
    }

    public function toArray($request)
    {
        return [
            'slug' => $this->slug,
            'title' => $this->title,
            'documentUrl' => $this->document_url ? asset($this->document_url) : null,
            'icon' => $this->icon,
            'shortDescription' => $this->short_description,
            'order' => $this->order,
            'publishStatus' => $this->publish_status,
            'links' => [
                new LinkObject("show", "View Document", route('document-posts.show', $this->id), "GET", 'fa-solid fa-eye'),
                new LinkObject("update", "Update Document", route('document-posts.update', $this->id), "PUT", 'fa-solid fa-pen-to-square'),
                $this->publish_status === 'Draft' ? $this->getPublishLink() : $this->getDraftLink(),
                new LinkObject("destroy", "Delete Document", route('document-posts.destroy', $this->id), "DELETE", 'fa-solid fa-trash-can'),
            ],
        ];
    }
}
