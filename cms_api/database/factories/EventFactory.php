<?php

namespace Database\Factories;

use App\Models\Event;
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

class EventFactory extends Factory
{

    protected $model = Event::class;

    public function definition()
    {
        $title = $this->faker->words(4, true);

        $paragraphs = $this->faker->paragraphs(rand(2, 10));
        $event = "<h1>{$title}</h1>";
        foreach ($paragraphs as $para) {
            $event .= "<p>{$para}</p>";
        }

        return [
            'title' => $title,
            'slug' => Str::slug($title, '-'),
            'from_date' => $this->faker->dateTimeBetween('-36 week', '+60 week'),
            'to_date' => $this->faker->dateTimeBetween('-36 week', '+60 week'),
            'venue' => $this->faker->address(),
            'details' => $event,
            'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->faker->randomNumber(),
            'thumbnail_attachment_url' => 'https://source.unsplash.com/random/600x600?sig=' . $this->faker->randomNumber(),
            'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->faker->randomNumber(),
            'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->faker->randomNumber(),
        ];
    }
}
