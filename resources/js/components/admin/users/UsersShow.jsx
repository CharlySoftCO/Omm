import React from "react";

const UsersShow = ({ user }) => {
  // Determinar la ruta de la imagen de perfil
  const profileImage = user.profile_image
    ? user.profile_image.startsWith("storage")
      ? `/${user.profile_image}`
      : `/storage/${user.profile_image}`
    : "/storage/default/user.webp";

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });
  };

  return (
    <div
      className="modal fade"
      id={`viewUserModal-${user.id}`}
      tabIndex="-1"
      aria-labelledby={`viewUserModalLabel-${user.id}`}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content rounded-3 shadow">
          {/* Encabezado del modal */}
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title fw-bold" id={`viewUserModalLabel-${user.id}`}>
              Detalles del Usuario
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          {/* Cuerpo del modal */}
          <div className="modal-body bg-light">
            <div className="container-fluid">
              <div className="row">
                {/* Información Básica */}
                <div className="col-md-6">
                  <div className="card border-0 shadow-sm mb-3">
                    <div className="card-body">
                      <h6 className="card-title text-primary fw-bold">
                        Información Básica
                      </h6>
                      <p>
                        <i className="bi bi-person-circle"></i>{" "}
                        <strong>Nombre Completo:</strong> {user.full_name}
                      </p>
                      <p>
                        <i className="bi bi-envelope"></i>{" "}
                        <strong>Correo Electrónico:</strong> {user.email}
                      </p>
                      <p>
                        <i className="bi bi-phone"></i>{" "}
                        <strong>Número de Celular:</strong>{" "}
                        {user.phone_number || "No registrado"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Imagen de Perfil */}
                <div className="col-md-6">
                  <div className="card border-0 shadow-sm mb-3">
                    <div className="card-body d-flex justify-content-center">
                      <div>
                        <h6 className="card-title text-primary fw-bold text-center">
                          Imagen de Perfil
                        </h6>
                        <img
                          src={profileImage}
                          alt="Imagen de Perfil"
                          className="img-fluid rounded-circle shadow-sm"
                          style={{
                            maxWidth: "150px",
                            height: "auto",
                            border: "2px solid #ddd",
                            padding: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tiempos */}
              <div className="row">
                <div className="col-md-12">
                  <div className="card border-0 shadow-sm">
                    <div className="card-body">
                      <h6 className="card-title text-primary fw-bold">Tiempos</h6>
                      <p>
                        <i className="bi bi-clock"></i> <strong>Creado en:</strong>{" "}
                        {formatDate(user.created_at)}
                      </p>
                      <p>
                        <i className="bi bi-clock-history"></i>{" "}
                        <strong>Actualizado en:</strong>{" "}
                        {formatDate(user.updated_at)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pie del modal */}
          <div className="modal-footer bg-light border-top">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersShow;
