<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateUserRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required',
            'email' => 'required',
            'password' => 'confirmed|min:6',
            'role' => [
                'required',
                Rule::in(['Super Admin', 'Admin', 'Content Manager', 'Visitor'])
            ],
        ];
    }
}
