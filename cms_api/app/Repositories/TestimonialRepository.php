<?php

namespace App\Repositories;

use App\Models\Testimonial;
use App\Repositories\Interfaces\TestimonialRepositoryInterface;
use Illuminate\Support\Facades\Storage;
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

class TestimonialRepository implements TestimonialRepositoryInterface
{

    public function all($perPage, $searchText)
    {
        return Testimonial::where('title', 'like', '%' . $searchText . '%')->orderBy('order', 'ASC')->paginate($perPage);
    }

    public function store($request)
    {
        $testimonial = new Testimonial();
        $testimonial->slug = $request->slug;
        $testimonial->client_name = $request->clientName;
        $testimonial->profession_or_designation = $request->professionOrDesignation;
        $testimonial->content = $request->content;
        $testimonial->rating = $request->rating;
        if ($request->base64Image) {
            $originalFilePath = 'public/images/testimonial/original_' . $request->slug . '.jpg';
            Storage::disk('local')->put($originalFilePath, base64_decode($request->base64Image, false));
            $testimonial->original_attachment_url = Storage::url($originalFilePath);

            $imgFile = Image::make(Storage::path($originalFilePath));

            $thumbnailFilePath = 'storage/images/testimonial/thumbnail_' . $request->slug . '.jpg';
            Image::make(Storage::path($originalFilePath))->crop(640, 640)->save($thumbnailFilePath);
            $testimonial->thumbnail_attachment_url = $thumbnailFilePath;

            $landscapeFilePath = 'storage/images/testimonial/landscape_' . $request->slug . '.jpg';
            Image::make(Storage::path($originalFilePath))->crop(1280, 860)->save($landscapeFilePath);
            $testimonial->landscape_attachment_url = $landscapeFilePath;

            $portraitFilePath = 'storage/images/testimonial/portrait_' . $request->slug . '.jpg';
            Image::make(Storage::path($originalFilePath))->crop(1080, 1350)->save($portraitFilePath);
            $testimonial->portrait_attachment_url = $portraitFilePath;
        }
        $testimonial->save();
        return $testimonial;
    }

    public function show($id)
    {
        return Testimonial::findOrFail($id);
    }

    public function update($request, $id)
    {
        $testimonial = Testimonial::findOrFail($id);
        $testimonial->client_name = $request->clientName;
        $testimonial->profession_or_designation = $request->professionOrDesignation;
        $testimonial->content = $request->content;
        $testimonial->rating = $request->rating;
        if ($request->base64Image) {
            $originalFilePath = 'public/images/testimonial/original_' . $request->slug . '.jpg';
            Storage::disk('local')->put($originalFilePath, base64_decode($request->base64Image, false));
            $testimonial->original_attachment_url = Storage::url($originalFilePath);

            $imgFile = Image::make(Storage::path($originalFilePath));

            $thumbnailFilePath = 'storage/images/testimonial/thumbnail_' . $request->slug . '.jpg';
            Image::make(Storage::path($originalFilePath))->crop(640, 640)->save($thumbnailFilePath);
            $testimonial->thumbnail_attachment_url = $thumbnailFilePath;

            $landscapeFilePath = 'storage/images/testimonial/landscape_' . $request->slug . '.jpg';
            Image::make(Storage::path($originalFilePath))->crop(1280, 860)->save($landscapeFilePath);
            $testimonial->landscape_attachment_url = $landscapeFilePath;

            $portraitFilePath = 'storage/images/testimonial/portrait_' . $request->slug . '.jpg';
            Image::make(Storage::path($originalFilePath))->crop(1080, 1350)->save($portraitFilePath);
            $testimonial->portrait_attachment_url = $portraitFilePath;
        }
        $testimonial->update();
        return $testimonial;
    }

    public function destroy($id)
    {
        $testimonial = Testimonial::findOrFail($id);
        $testimonial->delete();
        return $testimonial;
    }

    public function updatePublishStatus($request, $id)
    {
        $post = Testimonial::findOrFail($id);
        $post->publish_status = $request->publishStatus;
        $post->update();
        return $post;
    }

    public function getPostBySlug($slug)
    {
        return Testimonial::where('slug', $slug)->get()->firstOrFail();
    }
}
