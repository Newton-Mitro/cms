<?php

namespace App\Repositories;

use App\Models\DocumentPost;
use App\Repositories\Interfaces\DocumentPostRepositoryInterface;
use Illuminate\Support\Facades\Storage;
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

class DocumentPostRepository implements DocumentPostRepositoryInterface
{

    public function all($perPage, $searchText)
    {
        return DocumentPost::where('title', 'like', '%' . $searchText . '%')->orderBy('order', 'ASC')->paginate($perPage);
    }

    public function getPublicPosts()
    {
        return DocumentPost::where('publish_status', 'Published')->get();
    }

    public function store($request)
    {
        $documentPost = new DocumentPost();
        $documentPost->slug = Str::slug($request->slug);
        $documentPost->title = $request->title;
        $documentPost->icon = $request->icon;
        $documentPost->publish_status = 'Draft';
        $documentPost->short_description = $request->shortDescription;
        $documentPost->content = $request->content;
        $documentPost->order = $request->order;
        $originalFilePath = 'public/images/document_post/original_' . $request->slug . '.pdf';
        Storage::disk('local')->put($originalFilePath, base64_decode($request->base64Document, false));
        $documentPost->document_url = Storage::url($originalFilePath);
        $documentPost->save();
        return $documentPost;
    }

    public function show($id)
    {
        return DocumentPost::findOrFail($id);
    }

    public function update($request, $id)
    {
        $documentPost = DocumentPost::findOrFail($id);
        $documentPost->title = $request->title;
        $documentPost->icon = $request->icon;
        $documentPost->publish_status = 'Draft';
        $documentPost->short_description = $request->shortDescription;
        $documentPost->content = $request->content;
        $documentPost->order = $request->order;
        if ($request->base64Document) {
            $originalFilePath = 'public/images/document_post/original_' . $documentPost->slug . '.pdf';
            Storage::disk('local')->put($originalFilePath, base64_decode($request->base64Document, false));
            $documentPost->document_url = Storage::url($originalFilePath);
        }
        $documentPost->update();
        return $documentPost;
    }

    public function destroy($id)
    {
        $documentPost = DocumentPost::findOrFail($id);
        $documentPost->delete();
        return $documentPost;
    }

    public function updatePublishStatus($request, $id)
    {
        $post = DocumentPost::findOrFail($id);
        $post->publish_status = $request->publishStatus;
        $post->update();
        return $post;
    }

    public function getPostBySlug($slug)
    {
        return DocumentPost::where('slug', $slug)->get()->firstOrFail();
    }
}
