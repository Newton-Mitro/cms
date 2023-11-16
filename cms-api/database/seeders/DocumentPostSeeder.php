<?php

namespace Database\Seeders;

use App\Models\DocumentPost;
use Illuminate\Database\Seeder;

class DocumentPostSeeder extends Seeder
{

    public function run()
    {
        DocumentPost::factory(5)->create();
    }
}
