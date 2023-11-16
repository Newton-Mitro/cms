<?php

namespace App\Http\Resources\Staff;

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

class StaffCollection extends JsonResource
{
    private function getPublishLink()
    {
        if (Auth::user()?->role === 'Super Admin' || Auth::user()?->role === 'Admin' || Auth::user()?->role === 'Content Manager') {
            return new LinkObject("publish", "Publish Leader", route('staffs.updatePublishStatus', $this->id), "PATCH", 'fa-solid fa-cloud-arrow-up');
        } else {
            return null;
        }
    }

    private function getDraftLink()
    {
        if (Auth::user()?->role === 'Super Admin' || Auth::user()?->role === 'Admin' || Auth::user()?->role === 'Content Manager') {
            return new LinkObject("draft", "Make Draft", route('staffs.updatePublishStatus', $this->id), "PATCH", 'fa-solid fa-cloud-arrow-down');
        } else {
            return null;
        }
    }

    public function toArray($request)
    {
        return [
            'slug' => $this->slug,
            'name' => $this->name,
            'originalAttachmentUrl' => $this->original_attachment_url ? asset($this->original_attachment_url) : null,
            'thumbnailAttachmentUrl' => $this->thumbnail_attachment_url ? asset($this->thumbnail_attachment_url) : null,
            'landscapeAttachmentUrl' => $this->landscape_attachment_url ? asset($this->landscape_attachment_url) : null,
            'portraitAttachmentUrl' => $this->portrait_attachment_url ? asset($this->portrait_attachment_url) : null,
            'position' => $this->position,
            'staffType' => $this->staff_type,
            'shortIntroduction' => $this->short_introduction,
            'facebookProfile' => $this->facebook_profile,
            'linkedinProfile' => $this->linkedin_profile,
            'skypeUserName' => $this->skype_user_name,
            'mobile' => $this->mobile,
            'email' => $this->email,
            'order' => $this->order,
            'publishStatus' => $this->publish_status,
            'links' => [
                new LinkObject("show", "View Leader", route('staffs.show', $this->id), "GET", 'fa-solid fa-eye'),
                new LinkObject("update", "Update Leader", route('staffs.update', $this->id), "PUT", 'fa-solid fa-pen-to-square'),
                $this->publish_status === 'Draft' ? $this->getPublishLink() : $this->getDraftLink(),
                new LinkObject("destroy", "Delete Leader", route('staffs.destroy', $this->id), "DELETE", 'fa-solid fa-trash-can'),
            ],
        ];
    }
}
