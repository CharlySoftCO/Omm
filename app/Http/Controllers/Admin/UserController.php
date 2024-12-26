<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::orderBy('id', 'desc')->get();
        return view('admin.users.index', compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.users.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validar los datos del formulario
        $validatedData = $request->validate([
            'full_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email',
            'password' => 'required|string|min:8|confirmed',
            'phone_number' => 'nullable|string|max:15', // Validación para número de celular
            'profile_image' => 'nullable|image|max:2048', // Validación para imagen
        ]);

        // Procesar y guardar la imagen si existe
        $profileImagePath = null;
        if ($request->hasFile('profile_image')) {
            $profileImagePath = $request->file('profile_image')->store('users', 'public');
        }

        // Crear el usuario
        User::create([
            'full_name' => $validatedData['full_name'],
            'email' => $validatedData['email'],
            'password' => bcrypt($validatedData['password']),
            'phone_number' => $validatedData['phone_number'],
            'profile_image' => $profileImagePath,
        ]);

        return redirect()->route('users.index')->with('success', 'Usuario creado exitosamente.');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $user = User::findOrFail($id);
        return view('admin.users.edit', compact('user'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validatedData = $request->validate([
            'full_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $id,
            'password' => 'nullable|string|min:8|confirmed',
            'phone_number' => 'nullable|string|max:15',
            'profile_image' => 'nullable|image|max:2048',
        ]);

        $user = User::findOrFail($id);

        if ($request->hasFile('profile_image')) {
            if ($user->profile_image && Storage::disk('public')->exists($user->profile_image)) {
                Storage::disk('public')->delete($user->profile_image);
            }

            $user->profile_image = $request->file('profile_image')->store('users', 'public');
        }

        $user->full_name = $validatedData['full_name'];
        $user->email = $validatedData['email'];
        $user->phone_number = $validatedData['phone_number'] ?? null;

        if (!empty($validatedData['password'])) {
            $user->password = bcrypt($validatedData['password']);
        }

        $user->save();

        return redirect()->route('users.index')->with('success', 'Usuario actualizado exitosamente.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = User::findOrFail($id);

        // Ruta completa al archivo en el sistema de archivos
        $imagePath = public_path('storage/' . $user->profile_image);

        // Verificar si la imagen existe y eliminarla
        if ($user->profile_image && file_exists($imagePath)) {
            unlink($imagePath); // Eliminar el archivo
        }

        // Eliminar el registro del usuario
        $user->delete();

        return redirect()->route('users.index')->with('success', 'Usuario eliminado exitosamente.');
    }
}
