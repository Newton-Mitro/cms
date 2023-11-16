<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class JobCircularFactory extends Factory
{
    public function definition()
    {
        $title = $this->faker->jobTitle();

        $slug = $this->faker->words(2, true);
        $religions = array('Christian', 'Islam', 'Hindu', 'Buddhist', 'Equal Opportunity For All');
        $religionIndex = array_rand($religions);

        $genders = array('Male', 'Female', 'Others', 'Equal Opportunity For All');
        $genderIndex = array_rand($genders);


        return [
            'slug' => Str::slug($title . $slug, '-'),
            'job_position' => $title,
            'vacancy' => $this->faker->randomDigit(),
            'job_context' => $this->faker->paragraph(3),
            'job_responsibility' => $this->faker->paragraph(3),
            'employment_status' => $this->faker->words(3, true),
            'educational_requirement' => $this->faker->words(5, true),
            'experience_requirements' => $this->faker->words(10, true),
            'additional_requirements' => $this->faker->paragraph(3),
            'religion' => $religions[$religionIndex],
            'age' => 'Age between ' . $this->faker->numberBetween(20, 25) . ' to ' . $this->faker->numberBetween(26, 35) . '.',
            'gender' => $genders[$genderIndex],
            'job_location' => $this->faker->address(),
            'salary' => 'Salary between ' . $this->faker->numberBetween(15000, 20000) . ' tk. to ' . $this->faker->numberBetween(30000, 80000) . ' tk.',
            'compensation_and_benefits' => $this->faker->paragraph(3),
            'application_deadline' => $this->faker->dateTimeBetween('-3 months', '+3 months'),
            'application_instruction' => $this->faker->paragraph(1),
        ];
    }
}
