<?php

namespace App\Http\Requests\VisitorLog;

use Illuminate\Foundation\Http\FormRequest;

class UpdateVisitorLogRequest extends FormRequest
{
    public function authorize()
    {
        return false;
    }

    public function rules()
    {
        return [
            'ip' => 'required',
            'url' => 'required',
            'method' => 'required',
        ];
    }
}