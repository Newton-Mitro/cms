<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class DocumentPostFactory extends Factory
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
            'document_url' => url('') . '/storage/pdfs/sample_file.pdf',
        ];
    }
}
