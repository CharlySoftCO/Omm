@extends('layouts.admin')

@section('title', 'Categorías')

@section('content')

    <div class="pagetitle d-flex justify-content-between align-items-center">
        <div>
            <h1>Categorías</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">Inicio</a></li>
                    <li class="breadcrumb-item active">Listado de Categorías</li>
                </ol>
            </nav>
        </div>
        <div>
            <a href="{{ route('categories.create') }}" class="btn btn-success">
                <i class="bi bi-plus-circle"></i> Crear Categoría
            </a>
        </div>
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
                                        <th>Nombre</th>
                                        <th>Fecha de Actualización</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @php $counter = $categories->count(); @endphp
                                    @foreach ($categories as $category)
                                        <tr>
                                            <td>{{ $counter-- }}</td>
                                            <td>{{ $category->name }}</td>
                                            <td>{{ $category->updated_at->format('d/m/Y g:i A') }}</td>
                                            <td>
                                                <a href="{{ route('categories.edit', $category->id) }}" class="btn btn-sm btn-warning">
                                                    <i class="bi bi-pencil"></i>
                                                </a>
                                                <form action="{{ route('categories.destroy', $category->id) }}" method="POST" class="d-inline"
                                                    onsubmit="return confirm('¿Estás seguro de eliminar esta categoría?')">
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="submit" class="btn btn-sm btn-danger">
                                                        <i class="bi bi-trash"></i>
                                                    </button>
                                                </form>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                        @if ($categories->isEmpty())
                            <p class="text-center mt-3">No hay categorías registradas.</p>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
