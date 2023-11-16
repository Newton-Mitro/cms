<?php

namespace App\Http\Requests\DocumentPost;

use Illuminate\Foundation\Http\FormRequest;

class UpdateDocumentPostRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'title' => 'required',
        ];
    }
}
