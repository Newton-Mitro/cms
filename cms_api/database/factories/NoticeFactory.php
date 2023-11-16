<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class NoticeFactory extends Factory
{
    public function definition()
    {
        $slug = $this->faker->words(4, true);
        $paragraphs = $this->faker->paragraphs(rand(2, 10));
        $post = "<h1>{$slug}</h1>";
        foreach ($paragraphs as $para) {
            $post .= "<p>{$para}</p>";
        }

        return [
            'slug' => Str::slug($slug, '-'),
            'title' => $slug,
            'content' => $post,
            'short_description' => $this->faker->words(12, true),
            'original_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->faker->randomNumber(),
            'thumbnail_attachment_url' => 'https://source.unsplash.com/random/600x600?sig=' . $this->faker->randomNumber(),
            'landscape_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->faker->randomNumber(),
            'portrait_attachment_url' => 'https://source.unsplash.com/random/1200x760?sig=' . $this->faker->randomNumber(),
        ];
    }
}
