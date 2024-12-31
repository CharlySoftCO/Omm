@extends('layouts.admin')

@section('title', 'Usuarios')

@section('content')
    <div id="react-users-list" data-users="{{ $users->toJson() }}" data-success="{{ session('success') }}">
    </div>
@endsection
