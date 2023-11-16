<?php

namespace App\Repositories;

use App\Models\Page;
use App\Repositories\Interfaces\PageRepositoryInterface;
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

class PageRepository implements PageRepositoryInterface
{

    public function all($perPage, $searchText)
    {
        return Page::where('title', 'like', '%' . $searchText . '%')->orderBy('order', 'ASC')->paginate($perPage);
    }

    public function getPublicPosts()
    {
        return Page::where('publish_status', 'Published')->get();
    }

    public function show($id)
    {
        $post = Page::findOrFail($id);
        return $post;
    }

    public function getPostBySlug($slug)
    {
        return Page::where('slug', $slug)->where('publish_status', 'Published')->get()->firstOrFail();
    }

    public function store($request)
    {
        $post = new Page();
        $post->icon = $request->icon;
        $post->publish_status = 'Draft';
        $post->title = $request->title;
        $post->order = $request->order;
        $post->slug = Str::slug($request->slug);
        $post->short_description = $request->shortDescription;
        $post->content = $request->content;
        if ($request->base64Attachment) {
            $originalFilePath = 'public/images/pages/' . $post->slug . '.jpg';
            ;
            Storage::disk('local')->put($originalFilePath, base64_decode($request->base64Attachment, false));
            $post->original_attachment_url = Storage::url($originalFilePath);

            $imgFile = Image::make(Storage::path($originalFilePath));

            $thumbnailFilePath = 'storage/images/pages/thumbnail_' . $post->slug . '.jpg';
            ;
            Image::make(Storage::path($originalFilePath))->crop(640, 640)->save($thumbnailFilePath);
            $post->thumbnail_attachment_url = $thumbnailFilePath;

            $landscapeFilePath = 'storage/images/pages/landscape_' . $post->slug . '.jpg';
            ;
            Image::make(Storage::path($originalFilePath))->crop(1280, 860)->save($landscapeFilePath);
            $post->landscape_attachment_url = $landscapeFilePath;

            $portraitFilePath = 'storage/images/pages/portrait_' . $post->slug . '.jpg';
            ;
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
        $post = Page::findOrFail($id);
        $post->publish_status = 'Draft';
        $post->icon = $request->icon;
        $post->title = $request->title;
        $post->order = $request->order;
        $post->content = $request->content;
        $post->short_description = $request->shortDescription;
        if ($request->base64Attachment) {
            $originalFilePath = 'public/images/pages/' . $post->slug . '.jpg';
            ;
            Storage::disk('local')->put($originalFilePath, base64_decode($request->base64Attachment, false));
            $post->original_attachment_url = Storage::url($originalFilePath);

            $imgFile = Image::make(Storage::path($originalFilePath));

            $thumbnailFilePath = 'storage/images/pages/thumbnail_' . $post->slug . '.jpg';
            ;
            Image::make(Storage::path($originalFilePath))->crop(640, 640)->save($thumbnailFilePath);
            $post->thumbnail_attachment_url = $thumbnailFilePath;

            $landscapeFilePath = 'storage/images/pages/landscape_' . $post->slug . '.jpg';
            ;
            Image::make(Storage::path($originalFilePath))->crop(1280, 860)->save($landscapeFilePath);
            $post->landscape_attachment_url = $landscapeFilePath;

            $portraitFilePath = 'storage/images/pages/portrait_' . $post->slug . '.jpg';
            ;
            Image::make(Storage::path($originalFilePath))->crop(1080, 1350)->save($portraitFilePath);
            $post->portrait_attachment_url = $portraitFilePath;
        } else {
            $post->original_attachment_url = $request->originalAttachmentUrl;
            $post->thumbnail_attachment_url = $request->thumbnailAttachmentUrl;
            $post->landscape_attachment_url = $request->landscapeAttachmentUrl;
            $post->portrait_attachment_url = $request->portraitAttachmentUrl;
        }
        $post->update();
        return $post;
    }

    public function destroy($id)
    {
        $post = Page::findOrFail($id);
        $post->delete();
        return $post;
    }

    public function updatePublishStatus($request, $id)
    {
        $post = Page::findOrFail($id);
        $post->publish_status = $request->publishStatus;
        $post->update();
        return $post;
    }
}
