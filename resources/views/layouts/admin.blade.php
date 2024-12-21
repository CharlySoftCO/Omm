<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="" name="description">
    <meta content="" name="keywords">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('title') - {{ config('app.name') }}</title>

    <link href="{{ asset('favicon.ico') }}" rel="icon">
    <link href="{{ asset('favicon.ico') }}" rel="apple-touch-icon">

    @viteReactRefresh
    @vite(['resources/sass/admin.scss', 'resources/js/admin.jsx'])
</head>

<body>
    <!-- Contenedor para Header -->
    <div id="header-container"></div>

    <!-- Contenedor para Sidebar -->
    <div id="sidebar-container"></div>

    <main id="main" class="main">
        @yield('content')
    </main>

    <!-- Contenedor para Footer -->
    <div id="footer-container"></div>

    <script>
        window.routes = {
            baseUrl: "{{ url('/') }}",
            dashboard: "{{ route('dashboard') }}",
            usersIndex: "{{ route('users.index') }}",
            usersCreate: "{{ route('users.create') }}",
        };
    </script>
</body>

</html>
