<?php

namespace App\Repositories;

use App\Models\GalleryImage;
use App\Repositories\Interfaces\GalleryImageRepositoryInterface;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Image;


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

class GalleryImageRepository implements GalleryImageRepositoryInterface
{

    public function all($perPage, $searchText)
    {
        return GalleryImage::where('title', 'like', '%' . $searchText . '%')->orderBy('order', 'ASC')->paginate($perPage);
    }

    public function store($request)
    {
        $videoPost = new GalleryImage();
        $videoPost->slug = Str::slug($request->slug);
        $videoPost->icon = $request->icon;
        $videoPost->publish_status = 'Draft';
        $videoPost->title = $request->title;
        $videoPost->content = $request->content;
        $videoPost->short_description = $request->shortDescription;
        if ($request->base64Attachment) {
            $originalFilePath = 'public/images/gallery-images/' . $request->slug . '.jpg';
            Storage::disk('local')->put($originalFilePath, base64_decode($request->base64Attachment, false));
            $videoPost->original_attachment_url = Storage::url($originalFilePath);

            $thumbnailFilePath = 'storage/images/gallery-images/thumbnail_' . $request->slug . '.jpg';
            Image::make(Storage::path($originalFilePath))->crop(640, 640)->save($thumbnailFilePath);
            $videoPost->thumbnail_attachment_url = $thumbnailFilePath;

            $landscapeFilePath = 'storage/images/gallery-images/landscape_' . $request->slug . '.jpg';
            Image::make(Storage::path($originalFilePath))->crop(1280, 860)->save($landscapeFilePath);
            $videoPost->landscape_attachment_url = $landscapeFilePath;

            $portraitFilePath = 'storage/images/gallery-images/portrait_' . $request->slug . '.jpg';
            Image::make(Storage::path($originalFilePath))->crop(1080, 1350)->save($portraitFilePath);
            $videoPost->portrait_attachment_url = $portraitFilePath;
        } else {
            $videoPost->original_attachment_url = null;
            $videoPost->thumbnail_attachment_url = null;
            $videoPost->landscape_attachment_url = null;
            $videoPost->portrait_attachment_url = null;
        }
        $videoPost->save();
        return $videoPost;
    }

    public function show($id)
    {
        return GalleryImage::findOrFail($id);
    }

    public function update($request, $id)
    {
        $videoPost = GalleryImage::findOrFail($id);
        $videoPost->publish_status = 'Draft';
        $videoPost->icon = $request->icon;
        $videoPost->title = $request->title;
        $videoPost->content = $request->content;
        $videoPost->short_description = $request->shortDescription;
        if ($request->base64Attachment) {
            $originalFilePath = 'public/images/gallery-images/' . $request->slug . '.jpg';
            Storage::disk('local')->put($originalFilePath, base64_decode($request->base64Attachment, false));
            $videoPost->original_attachment_url = Storage::url($originalFilePath);

            $thumbnailFilePath = 'storage/images/gallery-images/thumbnail_' . $request->slug . '.jpg';
            Image::make(Storage::path($originalFilePath))->crop(640, 640)->save($thumbnailFilePath);
            $videoPost->thumbnail_attachment_url = $thumbnailFilePath;

            $landscapeFilePath = 'storage/images/gallery-images/landscape_' . $request->slug . '.jpg';
            Image::make(Storage::path($originalFilePath))->crop(1280, 860)->save($landscapeFilePath);
            $videoPost->landscape_attachment_url = $landscapeFilePath;

            $portraitFilePath = 'storage/images/gallery-images/portrait_' . $request->slug . '.jpg';
            Image::make(Storage::path($originalFilePath))->crop(1080, 1350)->save($portraitFilePath);
            $videoPost->portrait_attachment_url = $portraitFilePath;
        }
        $videoPost->update();
        return $videoPost;
    }

    public function updatePublishStatus($request, $id)
    {
        $videoPost = GalleryImage::findOrFail($id);
        $videoPost->publish_status = $request->publishStatus;
        $videoPost->update();
        return $videoPost;
    }

    public function destroy($id)
    {
        $videoPost = GalleryImage::findOrFail($id);
        $videoPost->delete();
        return $videoPost;
    }

    public function getPostBySlug($slug)
    {
        return GalleryImage::where('slug', $slug)->get()->firstOrFail();
    }

    public function getPublicPosts()
    {
        $per_page = request()->filled('per_page') ? request()->query('per_page') : 30;
        return GalleryImage::where('publish_status', 'Published')->paginate($per_page);
    }
}
