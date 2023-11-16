<?php

namespace App\Http\Resources\Setting;

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

class SettingResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'organizationName' => $this->organization_name,
            'organizationShortName' => $this->organization_short_name,
            'slogan' => $this->slogan,
            'address' => $this->address,
            'hrEmail' => $this->hr_email,
            'customerSupportEmail' => $this->customer_support_email,
            'technicalSupportEmail' => $this->technical_support_email,
            'fax' => $this->fax,
            'hrContact' => $this->hr_contact,
            'customerSupportContact' => $this->customer_support_contact,
            'technicalSupportContact' => $this->technical_support_contact,
            'website' => $this->website,
            'officeHour' => $this->office_hour,
            'originalLogo' => $this->logo_original ? asset($this->logo_original) : null,
            'whiteLogo' => $this->logo_white ? asset($this->logo_white) : null,
            'facebookPage' => $this->facebook_page,
            'messengerLink' => $this->messenger_link,
            'youtubeUrl' => $this->youtube_url,
            'featuredVideoUrl' => $this->featured_video_url,
            'links' => [
                new LinkObject("update", "Update Setting", route('settings.update', $this->id), "PUT", 'fa-solid fa-pen-to-square'),
            ],
        ];
    }
}
