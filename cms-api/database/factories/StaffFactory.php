<?php

namespace Database\Factories;

use App\Models\Staff;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

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

class StaffFactory extends Factory
{

    protected $model = Staff::class;

    public function definition()
    {
        $arr = array('Office Bearer', 'Board Of Director', 'Credit Committee', 'Supervisory Committee');
        $randomIndex = array_rand($arr);

        $slug = $this->faker->name();
        $jobTitle = $this->faker->jobTitle();

        $paragraphs = $this->faker->paragraphs(rand(2, 10));
        $about = "<h1>{$slug}</h1>";
        foreach ($paragraphs as $para) {
            $about .= "<p>{$para}</p>";
        }

        return [
            'slug' => Str::slug($slug . $jobTitle, '-'),
            'name' => $slug,
            'position' => $jobTitle,
            'about' => $about,
            'staff_type' => $arr[$randomIndex],
            'facebook_profile' => $this->faker->url(),
            'linkedin_profile' => $this->faker->url(),
            'skype_user_name' => $this->faker->userName(),
            'mobile' => $this->faker->phoneNumber(),
            'email' => $this->faker->email(),
            'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->faker->randomNumber(),
            'thumbnail_attachment_url' => 'https://source.unsplash.com/random/600x600?sig=' . $this->faker->randomNumber(),
            'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->faker->randomNumber(),
            'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->faker->randomNumber(),
        ];
    }
}