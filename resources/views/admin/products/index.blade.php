@extends('layouts.admin')

@section('title', 'Productos')

@section('content')

    <div class="pagetitle d-flex justify-content-between align-items-center">
        <div>
            <h1>Productos</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">Inicio</a></li>
                    <li class="breadcrumb-item active">Listado de Productos</li>
                </ol>
            </nav>
        </div>
    </div>

    <section class="section dashboard">
        <div class="row">

        </div>
    </section>
@endsection
