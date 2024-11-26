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
                <h3 class="fw-bold text-primary mt-3">Confirmar Contraseña</h3>
            </div>
            <p class="mb-3">
                Por favor confirma tu contraseña antes de continuar.
            </p>
            <form method="POST" action="{{ route('password.confirm') }}">
                @csrf
                <div class="mb-3">
                    <label for="password" class="form-label">Contraseña</label>
                    <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" autocomplete="current-password">
                    @error('password')
                        <div class="invalid-feedback">
                            {{ $message }}
                        </div>
                    @enderror
                </div>

                <div class="d-grid gap-2">
                    <button type="submit" class="btn btn-primary">Confirmar Contraseña</button>
                </div>

                @if (Route::has('password.request'))
                    <div class="text-center mt-3">
                        <a class="text-decoration-none" href="{{ route('password.request') }}">¿Olvidaste tu contraseña?</a>
                    </div>
                @endif
            </form>
        </div>
    </div>
</div>
@endsection
