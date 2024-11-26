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
                <h3 class="fw-bold text-primary mt-3">Verifica tu Dirección de Correo</h3>
            </div>
            @if (session('resent'))
                <div class="alert alert-success" role="alert">
                    Se ha enviado un nuevo enlace de verificación a tu dirección de correo electrónico.
                </div>
            @endif

            <p class="mb-3">
                Antes de continuar, por favor revisa tu correo electrónico para el enlace de verificación.
                Si no recibiste el correo, puedes solicitar otro.
            </p>

            <form class="d-grid gap-2" method="POST" action="{{ route('verification.resend') }}">
                @csrf
                <button type="submit" class="btn btn-primary">Solicitar otro enlace</button>
            </form>
        </div>
    </div>
</div>
@endsection
