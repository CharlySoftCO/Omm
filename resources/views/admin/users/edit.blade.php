@extends('layouts.admin')

@section('title', 'Editar usuario')

@section('content')
    <div class="pagetitle">
        <h1>Editar Usuario</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('users.index') }}">Usuarios</a></li>
                <li class="breadcrumb-item active">Editar Usuario</li>
            </ol>
        </nav>
    </div>

    <section class="section dashboard">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">

                        <!-- Formulario -->
                        <form action="{{ route('users.update', $user->id) }}" method="POST">
                            @csrf
                            @method('PUT')
                            <div class="row">
                                <!-- Primera columna -->
                                <div class="col-md-6">
                                    <!-- Nombre completo -->
                                    <div class="mb-3">
                                        <label for="full_name" class="form-label">Nombre Completo</label>
                                        <input type="text" name="full_name" id="full_name" class="form-control"
                                            value="{{ old('full_name', $user->full_name) }}" required>
                                        @error('full_name')
                                            <div class="text-danger">{{ $message }}</div>
                                        @enderror
                                    </div>

                                    <!-- Correo electrónico -->
                                    <div class="mb-3">
                                        <label for="email" class="form-label">Correo Electrónico</label>
                                        <input type="email" name="email" id="email" class="form-control"
                                            value="{{ old('email', $user->email) }}" required>
                                        @error('email')
                                            <div class="text-danger">{{ $message }}</div>
                                        @enderror
                                    </div>
                                </div>

                                <!-- Segunda columna -->
                                <div class="col-md-6">
                                    <!-- Switch para actualizar contraseña -->
                                    <div class="form-check form-switch mb-3">
                                        <input class="form-check-input" type="checkbox" id="togglePasswordUpdate">
                                        <label class="form-check-label" for="togglePasswordUpdate">Actualizar Contraseña</label>
                                    </div>

                                    <!-- Campos de contraseña (ocultos por defecto) -->
                                    <div id="passwordFields" style="display: none;">
                                        <div class="mb-3">
                                            <label for="password" class="form-label">Nueva Contraseña</label>
                                            <input type="password" name="password" id="password" class="form-control"
                                                placeholder="Ingrese una nueva contraseña">
                                            @error('password')
                                                <div class="text-danger">{{ $message }}</div>
                                            @enderror
                                        </div>

                                        <div class="mb-3">
                                            <label for="password_confirmation" class="form-label">Confirmar Contraseña</label>
                                            <input type="password" name="password_confirmation" id="password_confirmation"
                                                class="form-control" placeholder="Confirme la contraseña">
                                            @error('password_confirmation')
                                                <div class="text-danger">{{ $message }}</div>
                                            @enderror
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Botones -->
                            <div class="d-flex justify-content-end">
                                <button type="submit" class="btn btn-primary me-2">
                                    <i class="bi bi-save"></i> Guardar Cambios
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

    <!-- JavaScript para manejar el toggle de contraseña -->
    <script>
        document.getElementById('togglePasswordUpdate').addEventListener('change', function() {
            const passwordFields = document.getElementById('passwordFields');
            if (this.checked) {
                passwordFields.style.display = 'block';
            } else {
                passwordFields.style.display = 'none';
            }
        });
    </script>
@endsection
