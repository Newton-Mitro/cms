<?php

namespace App\Http\Resources\JobCircular;

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

class JobCircularCollection extends JsonResource
{
    private function getPublishLink()
    {
        if (Auth::user()?->role === 'Super Admin' || Auth::user()?->role === 'Admin' || Auth::user()?->role === 'Content Manager') {
            return new LinkObject("publish", "Publish Page", route('job-circulars.updatePublishStatus', $this->id), "PATCH", 'fa-solid fa-cloud-arrow-up');
        } else {
            return null;
        }
    }

    private function getDraftLink()
    {
        if (Auth::user()?->role === 'Super Admin' || Auth::user()?->role === 'Admin' || Auth::user()?->role === 'Content Manager') {
            return new LinkObject("draft", "Make Draft", route('job-circulars.updatePublishStatus', $this->id), "PATCH", 'fa-solid fa-cloud-arrow-down');
        } else {
            return null;
        }
    }

    public function toArray($request)
    {
        return [
            'slug' => $this->slug,
            'jobPosition' => $this->job_position,
            'totalNumberVacancy' => $this->vacancy,
            'employmentStatus' => $this->employment_status,
            'educationalRequirement' => $this->educational_requirement,
            'experienceRequirements' => $this->experience_requirements,
            'gender' => $this->gender,
            'jobLocation' => $this->job_location,
            'applicationDeadline' => $this->application_deadline,
            'publishedDate' => $this->created_at,
            'publishedOn' => $this->created_at,
            'publishStatus' => $this->publish_status,
            'links' => [
                new LinkObject("show", "View Circular", route('job-circulars.show', $this->id), "GET", 'fa-solid fa-eye'),
                new LinkObject("update", "Edit Circular", route('job-circulars.update', $this->id), "PUT", 'fa-solid fa-pen-to-square'),
                $this->publish_status === 'Draft' ? $this->getPublishLink() : $this->getDraftLink(),
                new LinkObject("destroy", "Delete Circular", route('job-circulars.destroy', $this->id), "DELETE", 'fa-solid fa-trash-can'),
            ],
        ];
    }
}
