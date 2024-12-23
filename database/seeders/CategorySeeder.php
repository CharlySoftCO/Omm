<?php

namespace Database\Seeders;

use App\Models\Admin\Category as AdminCategory;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Crear 100 categorías ficticias
        for ($i = 1; $i <= 100; $i++) {
            AdminCategory::create([
                'name' => 'Categoría ' . $i,
            ]);
        }
    }
}
