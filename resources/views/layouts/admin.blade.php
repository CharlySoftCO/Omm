<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="" name="description">
    <meta content="" name="keywords">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="base-url" content="{{ url('/') }}">
    <meta name="route-dashboard" content="{{ route('dashboard') }}">
    <meta name="route-users-index" content="{{ route('users.index') }}">
    <meta name="route-users-create" content="{{ route('users.create') }}">
    <meta name="route-clients-index" content="{{ route('clients.index') }}">
    <meta name="route-clients-create" content="{{ route('clients.create') }}">
    <meta name="route-categories-index" content="{{ route('categories.index') }}">
    <meta name="route-categories-create" content="{{ route('categories.create') }}">
    <meta name="route-products-index" content="{{ route('products.index') }}">
    <meta name="route-products-create" content="{{ route('products.create') }}">

    <title>@yield('title') - {{ config('app.name') }}</title>

    <link href="{{ asset('favicon.ico') }}" rel="icon">
    <link href="{{ asset('favicon.ico') }}" rel="apple-touch-icon">

    @viteReactRefresh
    @vite(['resources/sass/admin.scss', 'resources/js/admin.jsx'])
</head>

<body>
    <div id="header-container"></div>
    <div id="sidebar-container"></div>

    <main id="main" class="main">
        @yield('content')
    </main>

    <div id="footer-container"></div>
</body>

</html>
