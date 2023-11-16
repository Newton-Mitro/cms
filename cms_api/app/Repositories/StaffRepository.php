<?php

namespace App\Repositories;

use App\Models\Staff;
use App\Repositories\Interfaces\StaffRepositoryInterface;
use Illuminate\Support\Facades\Storage;
use Image;

/**------------------------------------------------------------------------
 * ?                                ABOUT
 * @author         :  Newton Mitro
 * @email          :  newtonmitro@gmail.com
 * @createdOn      :  08 Oct 2023
 * @updatedBy      :  Newton Mitro
 * @updatedAt      :  08 Oct 2023
 * @description     :
 *------------------------------------------------------------------------**/

class StaffRepository implements StaffRepositoryInterface
{

    public function all($perPage, $searchText)
    {
        return Staff::where('name', 'like', '%' . $searchText . '%')->orderBy('name', 'ASC')->paginate($perPage);
    }

    public function getStaffsByType($staffType)
    {
        $per_page = request()->filled('per_page') ? request()->query('per_page') : 10;
        return Staff::where('staff_type', $staffType)->paginate($per_page);
    }

    public function store($request)
    {
        $staff = new Staff();
        $staff->slug = $request->slug;
        $staff->name = $request->name;
        $staff->position = $request->position;
        $staff->short_introduction = $request->shortIntroduction;
        $staff->bio = $request->bio;
        $staff->publish_status = 'Draft';
        $staff->staff_type = $request->staffType;
        $staff->facebook_profile = $request->facebookProfile;
        $staff->linkedin_profile = $request->linkedinProfile;
        $staff->skype_user_name = $request->skypeUserName;
        $staff->mobile = $request->mobile;
        $staff->email = $request->email;

        if ($request->base64Attachment) {
            $originalFilePath = 'public/images/staff/original_' . $request->slug . '.jpg';
            Storage::disk('local')->put($originalFilePath, base64_decode($request->base64Attachment, false));
            $staff->original_attachment_url = Storage::url($originalFilePath);

            $thumbnailFilePath = 'storage/images/staff/thumbnail_' . $request->slug . '.jpg';
            Image::make(Storage::path($originalFilePath))->crop(640, 640)->save($thumbnailFilePath);
            $staff->thumbnail_attachment_url = $thumbnailFilePath;

            $landscapeFilePath = 'storage/images/staff/landscape_' . $request->slug . '.jpg';
            Image::make(Storage::path($originalFilePath))->crop(1280, 860)->save($landscapeFilePath);
            $staff->landscape_attachment_url = $landscapeFilePath;

            $portraitFilePath = 'storage/images/staff/portrait_' . $request->slug . '.jpg';
            Image::make(Storage::path($originalFilePath))->crop(1080, 1350)->save($portraitFilePath);
            $staff->portrait_attachment_url = $portraitFilePath;
        }
        $staff->save();
        return $staff;
    }

    public function show($id)
    {
        return Staff::findOrFail($id);
    }

    public function update($request, $id)
    {
        $staff = Staff::findOrFail($id);
        $staff->name = $request->name;
        $staff->position = $request->position;
        $staff->short_introduction = $request->shortIntroduction;
        $staff->bio = $request->bio;
        $staff->publish_status = 'Draft';
        $staff->staff_type = $request->staffType;
        $staff->facebook_profile = $request->facebookProfile;
        $staff->linkedin_profile = $request->linkedinProfile;
        $staff->skype_user_name = $request->skypeUserName;
        $staff->mobile = $request->mobile;
        $staff->email = $request->email;

        if ($request->base64Attachment) {
            $originalFilePath = 'public/images/staff/original_' . $request->slug . '.jpg';
            Storage::disk('local')->put($originalFilePath, base64_decode($request->base64Attachment, false));
            $staff->original_attachment_url = Storage::url($originalFilePath);

            $thumbnailFilePath = 'storage/images/staff/thumbnail_' . $request->slug . '.jpg';
            Image::make(Storage::path($originalFilePath))->crop(640, 640)->save($thumbnailFilePath);
            $staff->thumbnail_attachment_url = $thumbnailFilePath;

            $landscapeFilePath = 'storage/images/staff/landscape_' . $request->slug . '.jpg';
            Image::make(Storage::path($originalFilePath))->crop(1280, 860)->save($landscapeFilePath);
            $staff->landscape_attachment_url = $landscapeFilePath;

            $portraitFilePath = 'storage/images/staff/portrait_' . $request->slug . '.jpg';
            Image::make(Storage::path($originalFilePath))->crop(1080, 1350)->save($portraitFilePath);
            $staff->portrait_attachment_url = $portraitFilePath;
        }
        $staff->update();
        return $staff;
    }

    public function destroy($id)
    {
        $staff = Staff::findOrFail($id);
        $staff->delete();
        return $staff;
    }

    public function updatePublishStatus($request, $id)
    {
        $post = Staff::findOrFail($id);
        $post->publish_status = $request->publishStatus;
        $post->update();
        return $post;
    }

    public function getPostBySlug($slug)
    {
        return Staff::where('slug', $slug)->get()->firstOrFail();
    }
}
