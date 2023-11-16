<?php

namespace App\Http\Resources\Testimonial;

use App\Utilities\LinkObject;
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

class TestimonialCollection extends JsonResource
{

    public function toArray($request)
    {
        return [
            'clientName' => $this->client_name,
            'professionOrDesignation' => $this->profession_or_designation,
            'content' => $this->content,
            'rating' => $this->rating,
            'originalAttachmentUrl' => $this->original_attachment_url ? asset($this->original_attachment_url) : null,
            'thumbnailAttachmentUrl' => $this->thumbnail_attachment_url ? asset($this->thumbnail_attachment_url) : null,
            'landscapeAttachmentUrl' => $this->landscape_attachment_url ? asset($this->landscape_attachment_url) : null,
            'portraitAttachmentUrl' => $this->portrait_attachment_url ? asset($this->portrait_attachment_url) : null,
            'links' => [
                new LinkObject("show", "View Testimonial", route('testimonials.show', $this->id), "GET", 'fa-solid fa-eye'),
                new LinkObject("update", "Edit Testimonial", route('testimonials.update', $this->id), "PUT", 'fa-solid fa-pen-to-square'),
                new LinkObject("publish", "Publish Testimonial", route('posts.update', $this->id), "PATCH", 'fa-solid fa-cloud-arrow-up'),
                new LinkObject("destroy", "Delete Testimonial", route('testimonials.destroy', $this->id), "DELETE", 'fa-solid fa-trash-can'),
            ],
        ];
    }
}
