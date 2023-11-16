<?php

namespace App\Http\Requests\Staff;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

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

class StoreStaffsRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required',
            'slug' => 'required|unique:staffs,slug',
            'position' => 'required',
            'staffType' => [
                'required',
                Rule::in(['Office Bearer', 'Board Of Director', 'Credit Committee', 'Supervisory Committee'])
            ],
        ];
    }
}
