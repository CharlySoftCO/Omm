<?php

namespace Database\Seeders;

use App\Models\Admin\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File; // Para manejo de archivos
use Illuminate\Support\Facades\Hash;
use Faker\Factory as Faker;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        // Eliminar y recrear la carpeta users
        $usersPath = storage_path('app/public/users');
        if (File::exists($usersPath)) {
            File::deleteDirectory($usersPath);
        }
        File::makeDirectory($usersPath, 0755, true);

        // Limpiar la tabla de usuarios
        User::truncate();

        // Crear usuario por defecto: Carlos
        User::create([
            'full_name' => 'Carlos Alberto Ramirez Ruiz',
            'email' => 'cramirezruiz30@gmail.com',
            'phone_number' => '573223672315',
            'profile_image' => null,
            'password' => Hash::make('12345678'),
        ]);

        // Crear usuario por defecto: Manuel
        User::create([
            'full_name' => 'Manuel Antonio Falla Carvajal',
            'email' => 'manuelfalla1234@gmail.com',
            'phone_number' => '573197988740',
            'profile_image' => null,
            'password' => Hash::make('12345678'),
        ]);

        // Crear 98 usuarios adicionales con datos generados
        for ($i = 0; $i < 28; $i++) {
            User::create([
                'full_name' => $faker->name,
                'email' => $faker->unique()->safeEmail,
                'phone_number' => $faker->unique()->phoneNumber,
                'profile_image' => null,
                'password' => Hash::make('password'), // Contraseña genérica para usuarios generados
            ]);
        }
    }
}
