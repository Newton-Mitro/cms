<?php

namespace App\Repositories;

use App\Models\Event;
use App\Repositories\Interfaces\EventRepositoryInterface;
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

class EventRepository implements EventRepositoryInterface
{

    public function all($perPage, $searchText)
    {
        return Event::where('title', 'like', '%' . $searchText . '%')->orderBy('order', 'ASC')->paginate($perPage);
    }

    public function store($request)
    {
        $event = new Event();
        $event->slug = $request->slug;
        $event->title = $request->title;
        $event->from_date = $request->fromDate;
        $event->details = $request->details;
        if ($request->base64Image) {
            $originalFilePath = 'public/images/event/original_' . $request->slug . '.jpg';
            Storage::disk('local')->put($originalFilePath, base64_decode($request->base64Image, false));
            $event->original_attachment_url = Storage::url($originalFilePath);

            $imgFile = Image::make(Storage::path($originalFilePath));

            $thumbnailFilePath = 'storage/images/event/thumbnail_' . $request->slug . '.jpg';
            Image::make(Storage::path($originalFilePath))->crop(640, 640)->save($thumbnailFilePath);
            $event->thumbnail_attachment_url = $thumbnailFilePath;

            $landscapeFilePath = 'storage/images/event/landscape_' . $request->slug . '.jpg';
            Image::make(Storage::path($originalFilePath))->crop(1280, 860)->save($landscapeFilePath);
            $event->landscape_attachment_url = $landscapeFilePath;

            $portraitFilePath = 'storage/images/event/portrait_' . $request->slug . '.jpg';
            Image::make(Storage::path($originalFilePath))->crop(1080, 1350)->save($portraitFilePath);
            $event->portrait_attachment_url = $portraitFilePath;
        }
        $event->save();
        return $event;
    }

    public function update($request, $id)
    {
        $event = Event::findOrFail($id);
        $event->title = $request->title;
        $event->from_date = $request->fromDate;
        $event->details = $request->details;
        if ($request->base64Image) {
            $originalFilePath = 'public/images/event/original_' . $request->slug . '.jpg';
            Storage::disk('local')->put($originalFilePath, base64_decode($request->base64Image, false));
            $event->original_attachment_url = Storage::url($originalFilePath);

            $imgFile = Image::make(Storage::path($originalFilePath));

            $thumbnailFilePath = 'storage/images/event/thumbnail_' . $request->slug . '.jpg';
            Image::make(Storage::path($originalFilePath))->crop(640, 640)->save($thumbnailFilePath);
            $event->thumbnail_attachment_url = $thumbnailFilePath;

            $landscapeFilePath = 'storage/images/event/landscape_' . $request->slug . '.jpg';
            Image::make(Storage::path($originalFilePath))->crop(1280, 860)->save($landscapeFilePath);
            $event->landscape_attachment_url = $landscapeFilePath;

            $portraitFilePath = 'storage/images/event/portrait_' . $request->slug . '.jpg';
            Image::make(Storage::path($originalFilePath))->crop(1080, 1350)->save($portraitFilePath);
            $event->portrait_attachment_url = $portraitFilePath;
        }
        $event->update();
        return $event;
    }

    public function show($id)
    {
        return Event::findOrFail($id);
    }

    public function updatePublishStatus($request, $id)
    {
        $post = Event::findOrFail($id);
        $post->publish_status = $request->publishStatus;
        $post->update();
        return $post;
    }

    public function destroy($id)
    {
        $event = Event::findOrFail($id);
        $event->delete();
        return $event;
    }

    public function getPostBySlug($slug)
    {
        return Event::where('slug', $slug)->get()->firstOrFail();
    }
}
