@extends('layouts.admin')

@section('title', 'Usuarios')

@section('content')

    <div class="pagetitle">
        <h1>Usuarios</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="index.html">Usuarios</a></li>
                <li class="breadcrumb-item active">Listado de usuarios</li>
            </ol>
        </nav>
    </div>

    <section class="section dashboard">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nombre Completo</th>
                                        <th>Correo Electrónico</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @php
                                        $users = [
                                            ['name' => 'Juan Pérez', 'email' => 'juan.perez@example.com'],
                                            ['name' => 'María López', 'email' => 'maria.lopez@example.com'],
                                            ['name' => 'Pedro García', 'email' => 'pedro.garcia@example.com'],
                                            ['name' => 'Laura Martínez', 'email' => 'laura.martinez@example.com'],
                                            ['name' => 'Carlos Sánchez', 'email' => 'carlos.sanchez@example.com'],
                                        ];
                                        $count = count($users);
                                    @endphp
                                    @foreach ($users as $user)
                                        <tr>
                                            <td>{{ $count-- }}</td> <!-- Enumeración descendente -->
                                            <td>{{ $user['name'] }}</td>
                                            <td>{{ $user['email'] }}</td>
                                            <td>
                                                <a href="#" class="btn btn-sm btn-primary">
                                                    <i class="bi bi-eye"></i> Ver
                                                </a>
                                                <a href="#" class="btn btn-sm btn-warning">
                                                    <i class="bi bi-pencil"></i> Editar
                                                </a>
                                                <button type="button" class="btn btn-sm btn-danger" onclick="alert('¿Estás seguro de eliminar este usuario?')">
                                                    <i class="bi bi-trash"></i> Eliminar
                                                </button>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
