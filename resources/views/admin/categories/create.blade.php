@extends('layouts.admin')

@section('title', 'Crear Categoría')

@section('content')
    <div class="pagetitle">
        <h1>Crear Categoría</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('categories.index') }}">Categorías</a></li>
                <li class="breadcrumb-item active">Crear Categoría</li>
            </ol>
        </nav>
    </div>

    <section class="section dashboard">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <!-- Formulario -->
                        <form action="{{ route('categories.store') }}" method="POST">
                            @csrf
                            <div class="mb-3">
                                <label for="name" class="form-label">Nombre de la Categoría</label>
                                <input type="text" name="name" id="name" class="form-control"
                                    placeholder="Ingrese el nombre de la categoría" value="{{ old('name') }}" required>
                                @error('name')
                                    <div class="text-danger">{{ $message }}</div>
                                @enderror
                            </div>

                            <div class="d-flex justify-content-end">
                                <button type="submit" class="btn btn-primary me-2">
                                    <i class="bi bi-save"></i> Guardar
                                </button>
                                <a href="{{ route('categories.index') }}" class="btn btn-secondary">
                                    <i class="bi bi-x-circle"></i> Cancelar
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
