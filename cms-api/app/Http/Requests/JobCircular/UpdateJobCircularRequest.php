<?php

namespace App\Http\Requests\JobCircular;

use Illuminate\Foundation\Http\FormRequest;

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

class UpdateJobCircularRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'jobPosition' => 'required',
            'jobResponsibility' => 'required',
            'jobContext' => 'required',
            'educationalRequirement' => 'required',
            'experienceRequirements' => 'required',
        ];
    }
}
