<?php

namespace App\Http\Requests\VisitorLog;

use Illuminate\Foundation\Http\FormRequest;

class StoreVisitorLogRequest extends FormRequest
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