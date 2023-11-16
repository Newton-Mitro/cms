<?php

namespace App\Repositories;

use App\Models\JobCircular;
use App\Repositories\Interfaces\JobCircularRepositoryInterface;
use Illuminate\Support\Str;

/**========================================================================
 * ?                                ABOUT
 * @author         :  Newton Mitro
 * @email          :  newtonmitro@gmail.com
 * @repo           :
 * @createdOn      :  08 Oct 2023
 * @updatedBy      :  Newton Mitro
 * @updatedAt      :  08 Oct 2023
 * @description     :
 *========================================================================**/

class JobCircularRepository implements JobCircularRepositoryInterface
{

    public function all($perPage, $searchText)
    {
        return JobCircular::where('job_position', 'like', '%' . $searchText . '%')->orderBy('application_deadline', 'DESC')->paginate($perPage);
    }

    public function getPublicPosts()
    {
        return JobCircular::where('publish_status', 'Published')->where('application_deadline', '>=', today()->format('Y-m-d'))->get();
    }

    public function show($id)
    {
        return JobCircular::findOrFail($id);
    }

    public function store($request)
    {
        $jobCircular = new JobCircular();
        $jobCircular->slug = Str::slug($request->slug);
        $jobCircular->job_position = $request->jobPosition;
        if ($request->totalNumberVacancy) {
            $jobCircular->vacancy = $request->totalNumberVacancy;
        }

        $jobCircular->job_context = $request->jobContext;
        $jobCircular->job_responsibility = $request->jobResponsibility;
        $jobCircular->employment_status = $request->employmentStatus;
        if ($request->educationalRequirement) {
            $jobCircular->educational_requirement = $request->educationalRequirement;
        }

        $jobCircular->experience_requirements = $request->experienceRequirements;
        $jobCircular->additional_requirements = $request->additionalRequirements;
        if ($request->religion) {
            $jobCircular->religion = $request->religion;
        }

        $jobCircular->age = $request->age;
        if ($request->gender) {
            $jobCircular->gender = $request->gender;
        }

        $jobCircular->job_location = $request->jobLocation;
        $jobCircular->salary = $request->salary;
        $jobCircular->compensation_and_benefits = $request->compensationAndOtherBenefits;
        $jobCircular->application_deadline = $request->applicationDeadline;
        $jobCircular->application_instruction = $request->applicationInstruction;
        $jobCircular->save();
        return $jobCircular;
    }

    public function update($request, $id)
    {
        $jobCircular = JobCircular::findOrFail($id);
        $jobCircular->job_position = $request->jobPosition;
        if ($request->totalNumberVacancy) {
            $jobCircular->vacancy = $request->totalNumberVacancy;
        }

        $jobCircular->job_context = $request->jobContext;
        $jobCircular->job_responsibility = $request->jobResponsibility;
        $jobCircular->employment_status = $request->employmentStatus;
        if ($request->educationalRequirement) {
            $jobCircular->educational_requirement = $request->educationalRequirement;
        }

        $jobCircular->experience_requirements = $request->experienceRequirements;
        $jobCircular->additional_requirements = $request->additionalRequirements;
        if ($request->religion) {
            $jobCircular->religion = $request->religion;
        }

        $jobCircular->age = $request->age;
        if ($request->gender) {
            $jobCircular->gender = $request->gender;
        }

        $jobCircular->job_location = $request->jobLocation;
        $jobCircular->salary = $request->salary;
        $jobCircular->compensation_and_benefits = $request->compensationAndOtherBenefits;
        $jobCircular->application_deadline = $request->applicationDeadline;
        $jobCircular->application_instruction = $request->applicationInstruction;
        $jobCircular->update();
        return $jobCircular;
    }

    public function updatePublishStatus($request, $id)
    {
        $post = JobCircular::findOrFail($id);
        $post->publish_status = $request->publishStatus;
        $post->update();
        return $post;
    }

    public function destroy($id)
    {
        $jobCircular = JobCircular::findOrFail($id);
        $jobCircular->delete();
        return $jobCircular;
    }

    public function getPostBySlug($slug)
    {
        return JobCircular::where('slug', $slug)->get()->firstOrFail();
    }
}
