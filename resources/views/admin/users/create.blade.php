@extends('layouts.admin')

@section('title', 'Crear usuario')

@section('content')
    <div class="pagetitle">
        <h1>Crear usuario</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('users.index') }}">Usuarios</a></li>
                <li class="breadcrumb-item active">Crear usuario</li>
            </ol>
        </nav>
    </div>

    <section class="section dashboard">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">

                        <!-- Formulario -->
                        <form action="{{ route('users.store') }}" method="POST" enctype="multipart/form-data">
                            @csrf
                            <div class="row">
                                <!-- Primera columna -->
                                <div class="col-md-6">
                                    <!-- Nombre completo -->
                                    <div class="mb-3">
                                        <label for="full_name" class="form-label">Nombre Completo</label>
                                        <input 
                                            type="text" 
                                            name="full_name" 
                                            id="full_name" 
                                            class="form-control" 
                                            placeholder="Ejemplo: Juan Pérez" 
                                            value="{{ old('full_name') }}">
                                        @error('full_name')
                                            <div class="text-danger">{{ $message }}</div>
                                        @enderror
                                    </div>

                                    <!-- Correo electrónico -->
                                    <div class="mb-3">
                                        <label for="email" class="form-label">Correo Electrónico</label>
                                        <input 
                                            type="email" 
                                            name="email" 
                                            id="email" 
                                            class="form-control" 
                                            placeholder="Ejemplo: juan.perez@email.com" 
                                            value="{{ old('email') }}">
                                        @error('email')
                                            <div class="text-danger">{{ $message }}</div>
                                        @enderror
                                    </div>

                                    <!-- Número de celular -->
                                    <div class="mb-3">
                                        <label for="phone_number" class="form-label">Número de Celular (Opcional)</label>
                                        <input 
                                            type="text" 
                                            name="phone_number" 
                                            id="phone_number" 
                                            class="form-control" 
                                            placeholder="Ejemplo: +573001234567" 
                                            value="{{ old('phone_number') }}">
                                        @error('phone_number')
                                            <div class="text-danger">{{ $message }}</div>
                                        @enderror
                                    </div>
                                </div>

                                <!-- Segunda columna -->
                                <div class="col-md-6">
                                    <!-- Contraseña -->
                                    <div class="mb-3">
                                        <label for="password" class="form-label">Contraseña</label>
                                        <input 
                                            type="password" 
                                            name="password" 
                                            id="password" 
                                            class="form-control" 
                                            placeholder="Ejemplo: Contraseña123">
                                        @error('password')
                                            <div class="text-danger">{{ $message }}</div>
                                        @enderror
                                    </div>

                                    <!-- Confirmar contraseña -->
                                    <div class="mb-3">
                                        <label for="password_confirmation" class="form-label">Confirmar Contraseña</label>
                                        <input 
                                            type="password" 
                                            name="password_confirmation" 
                                            id="password_confirmation" 
                                            class="form-control" 
                                            placeholder="Repite tu contraseña">
                                        @error('password_confirmation')
                                            <div class="text-danger">{{ $message }}</div>
                                        @enderror
                                    </div>

                                    <!-- Imagen de perfil -->
                                    <div class="mb-3">
                                        <label for="profile_image" class="form-label">Imagen de Perfil (Opcional)</label>
                                        <input 
                                            type="file" 
                                            name="profile_image" 
                                            id="profile_image" 
                                            class="form-control" 
                                            accept="image/*">
                                        <div class="mt-2">
                                            <img id="profileImagePreview" src="#" alt="Vista previa" style="display: none; max-width: 150px; border: 1px solid #ddd; padding: 5px; border-radius: 5px;">
                                        </div>
                                        @error('profile_image')
                                            <div class="text-danger">{{ $message }}</div>
                                        @enderror
                                    </div>
                                </div>
                            </div>

                            <!-- Botones -->
                            <div class="d-flex justify-content-end">
                                <button type="submit" class="btn btn-primary me-2">
                                    <i class="bi bi-save"></i> Guardar
                                </button>
                                <a href="{{ route('users.index') }}" class="btn btn-secondary">
                                    <i class="bi bi-x-circle"></i> Cancelar
                                </a>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </section>

    <script>
        document.getElementById('profile_image').addEventListener('change', function(event) {
            const file = event.target.files[0];
            const preview = document.getElementById('profileImagePreview');

            if (file) {
                const reader = new FileReader();

                reader.onload = function(e) {
                    preview.src = e.target.result;
                    preview.style.display = 'block';
                };

                reader.readAsDataURL(file);
            } else {
                preview.style.display = 'none';
            }
        });
    </script>
@endsection
