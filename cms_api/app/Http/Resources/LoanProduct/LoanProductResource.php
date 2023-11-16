<?php

namespace App\Http\Resources\LoanProduct;

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

class LoanProductResource extends JsonResource
{

    private function getPublishLink()
    {
        if (Auth::user()?->role === 'Super Admin' || Auth::user()?->role === 'Admin' || Auth::user()?->role === 'Content Manager') {
            return new LinkObject("publish", "Publish Loan", route('loan-products.updatePublishStatus', $this->id), "PATCH", 'fa-solid fa-cloud-arrow-up');
        } else {
            return null;
        }
    }

    private function getDraftLink()
    {
        if (Auth::user()?->role === 'Super Admin' || Auth::user()?->role === 'Admin' || Auth::user()?->role === 'Content Manager') {
            return new LinkObject("draft", "Make Draft", route('loan-products.updatePublishStatus', $this->id), "PATCH", 'fa-solid fa-cloud-arrow-down');
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
            'content' => $this->content,
            'publishStatus' => $this->publish_status,
            'order' => $this->order,
            'links' => [
                new LinkObject("index", "Posts", route('loan-products.index'), "GET", 'fa-solid fa-list-ul'),
                Auth::user()?->role === 'Super Admin' || Auth::user()?->role === 'Admin' || Auth::user()?->role === 'Content Manager' || Auth::user()?->role === 'Content Creator' ? new LinkObject("update", "Edit Loan", route('loan-products.update', $this->id), "PUT", 'fa-solid fa-pen-to-square') : null,
                $this->publish_status === 'Draft' ? $this->getPublishLink() : $this->getDraftLink(),
                Auth::user()?->role === 'Super Admin' || Auth::user()?->role === 'Admin' ? new LinkObject("destroy", "Delete Loan", route('loan-products.destroy', $this->id), "DELETE", 'fa-solid fa-trash-can') : null,
            ],
        ];
    }
}
