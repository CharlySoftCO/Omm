@extends('layouts.auth')

@section('content')
<div class="container-fluid min-vh-100 d-flex align-items-center justify-content-center" style="background: url('{{ asset('images/back_auth.webp') }}') no-repeat center center; background-size: cover;">
    <div class="card shadow-lg p-4" style="max-width: 450px; width: 100%; background: rgba(255, 255, 255, 0.9); border-radius: 15px;">
        <div class="card-body">
            <div class="text-center mb-4">
                <!-- Centrando el Logo -->
                <div class="d-flex justify-content-center">
                    <img src="{{ asset('images/logo.jpg') }}" alt="Logo de la Empresa" width="100" class="rounded mb-3">
                </div>
                <h3 class="fw-bold text-primary mt-3">Restablecer Contraseña</h3>
            </div>

            <form method="POST" action="{{ route('password.update') }}">
                @csrf

                <input type="hidden" name="token" value="{{ $token }}">

                <div class="mb-3">
                    <label for="email" class="form-label">Correo Electrónico</label>
                    <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ $email ?? old('email') }}" autofocus>
                    @error('email')
                        <div class="invalid-feedback">
                            {{ $message }}
                        </div>
                    @enderror
                </div>

                <div class="mb-3">
                    <label for="password" class="form-label">Nueva Contraseña</label>
                    <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" autocomplete="new-password">
                    @error('password')
                        <div class="invalid-feedback">
                            {{ $message }}
                        </div>
                    @enderror
                </div>

                <div class="mb-3">
                    <label for="password-confirm" class="form-label">Confirmar Contraseña</label>
                    <input id="password-confirm" type="password" class="form-control" name="password_confirmation" autocomplete="new-password">
                </div>

                <div class="d-grid gap-2">
                    <button type="submit" class="btn btn-primary">Restablecer Contraseña</button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection
