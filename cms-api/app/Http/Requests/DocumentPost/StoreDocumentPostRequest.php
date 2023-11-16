<?php

namespace App\Http\Requests\DocumentPost;

use Illuminate\Foundation\Http\FormRequest;

class StoreDocumentPostRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'title' => 'required',
            'slug' => 'required|unique:document_posts,slug',
            'base64Document' => 'required'
        ];
    }
}
