@extends('layouts.admin')

@section('title', 'Usuarios')

@section('content')

    <div class="pagetitle d-flex justify-content-between align-items-center">
        <div>
            <h1>Usuarios</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">Inicio</a></li>
                    <li class="breadcrumb-item active">Listado de usuarios</li>
                </ol>
            </nav>
        </div>
        <div>
            <a href="{{ route('users.create') }}" class="btn btn-success">
                <i class="bi bi-plus-circle"></i> Crear Usuario
            </a>
        </div>
    </div>

    @if (session('success'))
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            {{ session('success') }}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    @endif

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
                                        <th>Fecha de Actualización</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @php $count = $users->count(); @endphp
                                    @foreach ($users as $user)
                                        <tr>
                                            <td>{{ $count-- }}</td> <!-- Enumeración descendente -->
                                            <td>{{ $user->full_name }}</td>
                                            <td>{{ $user->email }}</td>
                                            <td>{{ $user->updated_at->format('d/m/Y g:i A') }}</td>
                                            <td>
                                                <button type="button" class="btn btn-sm btn-primary" data-bs-toggle="modal"
                                                    data-bs-target="#viewUserModal-{{ $user->id }}">
                                                    <i class="bi bi-eye"></i>
                                                </button>
                                                <a href="{{ route('users.edit', $user->id) }}" class="btn btn-sm btn-warning">
                                                    <i class="bi bi-pencil"></i>
                                                </a>
                                                <form action="{{ route('users.destroy', $user->id) }}" method="POST" class="d-inline delete-form">
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="button" class="btn btn-sm btn-danger btn-delete">
                                                        <i class="bi bi-trash"></i>
                                                    </button>
                                                </form>
                                            </td>
                                        </tr>

                                        @include('admin.users.show')
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                        @if ($users->isEmpty())
                            <p class="text-center mt-3">No hay usuarios registrados.</p>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </section>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const deleteButtons = document.querySelectorAll('.btn-delete');

            deleteButtons.forEach(button => {
                button.addEventListener('click', function (e) {
                    e.preventDefault();

                    const form = this.closest('form');

                    Swal.fire({
                        title: '¿Estás seguro?',
                        text: "Esta acción no se puede deshacer.",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#d33',
                        cancelButtonColor: '#3085d6',
                        confirmButtonText: 'Sí, eliminar',
                        cancelButtonText: 'Cancelar'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            form.submit();
                        }
                    });
                });
            });
        });
    </script>
@endsection
