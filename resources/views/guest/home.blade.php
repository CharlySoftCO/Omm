@extends('layouts.guest')

@section('title', 'Inicio')

@section('content')
<div
    id="home"
    data-user="{{ auth()->user() ? json_encode(auth()->user()) : 'null' }}"
    data-auth-routes="{{ json_encode([
        'dashboard' => route('dashboard'),
        'login' => route('login'),
        'register' => route('register'),
        'logout' => route('logout'),
    ]) }}"
></div>
@endsection
