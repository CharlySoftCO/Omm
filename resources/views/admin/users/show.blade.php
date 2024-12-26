<!-- Modal para Ver Usuario -->
<div class="modal fade" id="viewUserModal-{{ $user->id }}" tabindex="-1"
    aria-labelledby="viewUserModalLabel-{{ $user->id }}" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-primary text-white">
                <h5 class="modal-title" id="viewUserModalLabel-{{ $user->id }}">Detalles del Usuario</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body bg-light">
                <div class="container-fluid">
                    <div class="row">
                        <!-- Información Básica -->
                        <div class="col-md-6">
                            <div class="card border-0 shadow-sm mb-3">
                                <div class="card-body">
                                    <h6 class="card-title text-primary fw-bold">Información Básica</h6>
                                    <p><i class="bi bi-person-circle"></i> <strong>Nombre Completo:</strong>
                                        {{ $user->full_name }}</p>
                                    <p><i class="bi bi-envelope"></i> <strong>Correo Electrónico:</strong>
                                        {{ $user->email }}</p>
                                    <p><i class="bi bi-phone"></i> <strong>Número de Celular:</strong>
                                        {{ $user->phone_number ?? 'No registrado' }}</p>
                                </div>
                            </div>
                        </div>
                        <!-- Imagen de Perfil -->
                        <div class="col-md-6">
                            <div class="card border-0 shadow-sm mb-3">
                                <div class="card-body d-flex justify-content-center">
                                    <div>
                                        <h6 class="card-title text-primary fw-bold text-center">Imagen de Perfil</h6>
                                        <!-- Imagen de Perfil -->
                                        @if ($user->profile_image)
                                            <img src="{{ strpos($user->profile_image, 'storage') === 0 ? asset($user->profile_image) : asset('storage/' . $user->profile_image) }}"
                                                alt="Imagen de Perfil" class="img-fluid shadow-sm"
                                                style="max-width: 150px; height: auto; border: 1px solid #ddd; padding: 5px;">
                                        @else
                                            <img src="{{ asset('storage/default/user.webp') }}"
                                                alt="Imagen de Perfil Predeterminada" class="img-fluid shadow-sm"
                                                style="max-width: 150px; height: auto; border: 1px solid #ddd; padding: 5px;">
                                        @endif
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <!-- Tiempos -->
                        <div class="col-md-12">
                            <div class="card border-0 shadow-sm">
                                <div class="card-body">
                                    <h6 class="card-title text-primary fw-bold">Tiempos</h6>
                                    <p><i class="bi bi-clock"></i> <strong>Creado en:</strong>
                                        {{ $user->created_at->format('d/m/Y h:i:s A') }}</p>
                                    <p><i class="bi bi-clock-history"></i> <strong>Actualizado en:</strong>
                                        {{ $user->updated_at->format('d/m/Y h:i:s A') }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer bg-light border-top">
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
            </div>
        </div>
    </div>
</div>
