@extends('layouts.errors')

@section('content')
    <div class="error-container">
        <h1 class="error-title">404</h1>
        <p class="error-subtitle">La página que buscas no está disponible.</p>
        <a href="/" class="btn btn-light btn-lg error-button">
            <i class="bi bi-arrow-left-circle"></i> Volver al inicio
        </a>
    </div>

    <!-- Iconos flotantes para decoración -->
    <i class="bi bi-cloud-floating icon-1 floating-icon"></i>
    <i class="bi bi-star icon-2 floating-icon"></i>
    <i class="bi bi-lightning icon-3 floating-icon"></i>
@endsection
