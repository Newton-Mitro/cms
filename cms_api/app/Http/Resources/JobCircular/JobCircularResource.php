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

class JobCircularResource extends JsonResource
{
    private function getPublishLink()
    {
        if (Auth::user()?->role === 'Super Admin' || Auth::user()?->role === 'Admin' || Auth::user()?->role === 'Content Manager') {
            return new LinkObject("publish", "Publish Job Circular", route('job-circulars.updatePublishStatus', $this->id), "PATCH", 'fa-solid fa-cloud-arrow-up');
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
            'jobContext' => $this->job_context,
            'jobResponsibility' => $this->job_responsibility,
            'employmentStatus' => $this->employment_status,
            'educationalRequirement' => $this->educational_requirement,
            'experienceRequirements' => $this->experience_requirements,
            'additionalRequirements' => $this->additional_requirements,
            'religion' => $this->religion,
            'age' => $this->age,
            'gender' => $this->gender,
            'jobLocation' => $this->job_location,
            'salary' => $this->salary,
            'compensationAndOtherBenefits' => $this->compensation_and_benefits,
            'applicationDeadline' => $this->application_deadline,
            'publishedDate' => $this->created_at,
            'applicationInstruction' => $this->application_instruction,
            'publishStatus' => $this->publish_status,
            'links' => [
                new LinkObject("index", "Job Circulars", route('job-circulars.index'), "GET", 'fa-solid fa-list-ul'),
                new LinkObject("update", "Edit Circular", route('job-circulars.update', $this->id), "PUT", 'fa-solid fa-pen-to-square'),
                $this->publish_status === 'Draft' ? $this->getPublishLink() : $this->getDraftLink(),
                new LinkObject("destroy", "Delete Circular", route('job-circulars.destroy', $this->id), "DELETE", 'fa-solid fa-trash-can'),
            ],
        ];
    }
}
