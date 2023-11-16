<?php

namespace App\Repositories;

use App\Models\Setting;
use App\Repositories\Interfaces\SettingRepositoryInterface;
use Illuminate\Support\Facades\Storage;

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

class SettingRepository implements SettingRepositoryInterface
{

    public function all()
    {
        return Setting::firstOrFail();
    }

    public function update($request, $id)
    {
        $setting = Setting::findOrFail($id);
        $setting->organization_name = $request->organizationName;
        $setting->organization_short_name = $request->organizationShortName;
        $setting->slogan = $request->slogan;
        $setting->address = $request->address;
        $setting->hr_email = $request->hrEmail;
        $setting->customer_support_email = $request->customerSupportEmail;
        $setting->technical_support_email = $request->technicalSupportEmail;
        $setting->fax = $request->fax;
        $setting->hr_contact = $request->hrContact;
        $setting->customer_support_contact = $request->customerSupportContact;
        $setting->technical_support_contact = $request->technicalSupportContact;
        $setting->office_hour = $request->officeHour;
        $setting->facebook_page = $request->facebookPage;
        $setting->messenger_link = $request->messengerLink;
        $setting->youtube_url = $request->youtubeUrl;
        $setting->featured_video_url = $request->featuredVideoUrl;
        if ($request->base64OriginalLogo) {
            $originalFilePath = 'public/images/logo/original_logo.png';
            Storage::disk('local')->put($originalFilePath, base64_decode($request->base64OriginalLogo, false));
            $setting->logo_original = Storage::url($originalFilePath);
        }

        if ($request->base64WhiteLogo) {
            $originalFilePath = 'public/images/logo/white_logo.png';
            Storage::disk('local')->put($originalFilePath, base64_decode($request->base64WhiteLogo, false));
            $setting->logo_white = Storage::url($originalFilePath);
        }
        $setting->update();
        return $setting;
    }

    public function show($id)
    {
        return Setting::findOrFail($id);
    }

    public function getSettingByName($name)
    {
        return Setting::where('name', $name)->first();
    }


}
