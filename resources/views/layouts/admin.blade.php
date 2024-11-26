<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>{{ config('app.name') }}</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <!-- Favicons -->
    <link href="assets/img/favicon.png" rel="icon">
    <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

    <!-- Scripts -->
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
</body>

</html>
