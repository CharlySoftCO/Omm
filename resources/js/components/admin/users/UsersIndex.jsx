import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "animate.css";

const UsersIndex = ({ users }) => {
  const [successMessage, setSuccessMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredUsers, setFilteredUsers] = useState(users);

  const usersPerPage = 10;

  // Filtrar usuarios por búsqueda
  useEffect(() => {
    const filtered = users.filter((user) => {
      return (
        user.full_name.toLowerCase().includes(searchQuery.toLowerCase()) || // Buscar por nombre
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) // Buscar por correo
      );
    });
    setFilteredUsers(filtered);
    setCurrentPage(1); // Reinicia la página al aplicar el filtro
  }, [searchQuery, users]);

  // Obtener usuarios para la página actual
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handleDelete = async (userId) => {
    const deleteUrl = `/users/${userId}`;

    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(deleteUrl, {
            method: "DELETE",
            headers: {
              "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').getAttribute("content"),
              "Content-Type": "application/json",
            },
          });

          if (response.ok) {
            const data = await response.json();
            Swal.fire("¡Eliminado!", data.message, "success");

            // Actualizar la lista de usuarios
            setFilteredUsers((prevUsers) =>
              prevUsers.filter((user) => user.id !== userId)
            );
          } else {
            Swal.fire("Error", "No se pudo eliminar el usuario.", "error");
          }
        } catch (error) {
          Swal.fire("Error", "Ocurrió un error inesperado.", "error");
        }
      }
    });
  };

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
    <div>
      <div className="pagetitle d-flex justify-content-between align-items-center">
        <div>
          <h1>Usuarios</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/dashboard">Inicio</a>
              </li>
              <li className="breadcrumb-item active">Listado de usuarios</li>
            </ol>
          </nav>
        </div>
        <div>
          <a href="/users/create" className="btn btn-success">
            <i className="bi bi-plus-circle"></i> Crear Usuario
          </a>
        </div>
      </div>

      {/* Barra de búsqueda */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar por nombre o correo..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <section className="section dashboard">
        <div className="row">
          {paginatedUsers.length > 0 ? (
            paginatedUsers.map((user) => (
              <div key={user.id} className="col-md-6 mb-3">
                <div className="card h-100">
                  <div className="card-header d-flex align-items-center">
                    <img
                      src={
                        user.profile_image
                          ? `/storage/${user.profile_image}`
                          : "/storage/default/user.webp"
                      }
                      alt="Imagen de perfil"
                      className="rounded-circle me-3"
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                        border: "2px solid #ddd",
                      }}
                    />
                    <div>
                      <strong>{user.full_name}</strong>
                      <br />
                      <small>{user.email}</small>
                    </div>
                  </div>
                  <div className="card-body">
                    <p>
                      <strong>Teléfono:</strong> {user.phone_number || "No registrado"}
                    </p>
                    <p>
                      <strong>Fecha de Creación:</strong> {formatDate(user.created_at)}
                    </p>
                    <p>
                      <strong>Fecha de Actualización:</strong> {formatDate(user.updated_at)}
                    </p>
                  </div>
                  <div className="card-footer d-flex justify-content-between">
                    <a
                      href={`/users/${user.id}/edit`}
                      className="btn btn-warning btn-sm"
                    >
                      Editar
                    </a>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(user.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">No hay usuarios registrados.</div>
          )}
        </div>

        {/* Paginación */}
        <div className="d-flex justify-content-between mt-3">
          <button
            className="btn btn-secondary"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Anterior
          </button>
          <span>
            Página {currentPage} de {totalPages}
          </span>
          <button
            className="btn btn-secondary"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Siguiente
          </button>
        </div>
      </section>
    </div>
  );
};

export default UsersIndex;
