<?php

namespace App\Repositories;

use App\Models\OurService;
use App\Repositories\Interfaces\OurServiceRepositoryInterface;
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

class OurServiceRepository implements OurServiceRepositoryInterface
{

    public function all($perPage, $searchText)
    {
        return OurService::where('title', 'like', '%' . $searchText . '%')->orderBy('order', 'ASC')->paginate($perPage);
    }

    public function getPublicPosts()
    {
        $per_page = request()->filled('per_page') ? request()->query('per_page') : 10;
        $posts = OurService::where('publish_status', 'Published')->paginate($per_page);
        return $posts;
    }

    public function show($id)
    {
        $post = OurService::findOrFail($id);
        return $post;
    }

    public function getPostBySlug($slug)
    {
        return OurService::where('slug', $slug)->where('publish_status', 'Published')->get()->firstOrFail();
    }

    public function store($request)
    {
        $post = new OurService();
        $postType = Str::slug(strtolower($request->postType), '_');
        $post->slug = $request->slug;
        $post->icon = $request->icon;
        $post->publish_status = 'Draft';
        $post->title = $request->title;
        $post->content = $request->content;
        $post->short_description = $request->shortDescription;
        if ($request->base64Attachment) {
            $originalFilePath = 'public/images/' . $postType . '/' . $request->slug . '.jpg';
            Storage::disk('local')->put($originalFilePath, base64_decode($request->base64Attachment, false));
            $post->original_attachment_url = Storage::url($originalFilePath);

            $imgFile = Image::make(Storage::path($originalFilePath));

            $thumbnailFilePath = 'storage/images/' . $postType . '/thumbnail_' . $request->slug . '.jpg';
            Image::make(Storage::path($originalFilePath))->crop(640, 640)->save($thumbnailFilePath);
            $post->thumbnail_attachment_url = $thumbnailFilePath;

            $landscapeFilePath = 'storage/images/' . $postType . '/landscape_' . $request->slug . '.jpg';
            Image::make(Storage::path($originalFilePath))->crop(1280, 860)->save($landscapeFilePath);
            $post->landscape_attachment_url = $landscapeFilePath;

            $portraitFilePath = 'storage/images/' . $postType . '/portrait_' . $request->slug . '.jpg';
            Image::make(Storage::path($originalFilePath))->crop(1080, 1350)->save($portraitFilePath);
            $post->portrait_attachment_url = $portraitFilePath;
        } else {
            $post->original_attachment_url = null;
            $post->thumbnail_attachment_url = null;
            $post->landscape_attachment_url = null;
            $post->portrait_attachment_url = null;
        }
        $post->save();
        return $post;
    }

    public function update($request, $id)
    {
        $post = OurService::findOrFail($id);
        $postType = Str::slug(strtolower($request->postType), '_');
        $post->publish_status = 'Draft';
        $post->icon = $request->icon;
        $post->title = $request->title;
        $post->content = $request->content;
        $post->short_description = $request->shortDescription;
        if ($request->base64Attachment) {
            $originalFilePath = 'public/images/' . $postType . '/' . $request->slug . '.jpg';
            Storage::disk('local')->put($originalFilePath, base64_decode($request->base64Attachment, false));
            $post->original_attachment_url = Storage::url($originalFilePath);

            $imgFile = Image::make(Storage::path($originalFilePath));

            $thumbnailFilePath = 'storage/images/' . $postType . '/thumbnail_' . $request->slug . '.jpg';
            Image::make(Storage::path($originalFilePath))->crop(640, 640)->save($thumbnailFilePath);
            $post->thumbnail_attachment_url = $thumbnailFilePath;

            $landscapeFilePath = 'storage/images/' . $postType . '/landscape_' . $request->slug . '.jpg';
            Image::make(Storage::path($originalFilePath))->crop(1280, 860)->save($landscapeFilePath);
            $post->landscape_attachment_url = $landscapeFilePath;

            $portraitFilePath = 'storage/images/' . $postType . '/portrait_' . $request->slug . '.jpg';
            Image::make(Storage::path($originalFilePath))->crop(1080, 1350)->save($portraitFilePath);
            $post->portrait_attachment_url = $portraitFilePath;
        }
        $post->update();
        return $post;
    }

    public function destroy($id)
    {
        $post = OurService::findOrFail($id);
        $post->delete();
        return $post;
    }

    public function updatePublishStatus($request, $id)
    {
        $post = OurService::findOrFail($id);
        $post->publish_status = $request->publishStatus;
        $post->update();
        return $post;
    }
}
