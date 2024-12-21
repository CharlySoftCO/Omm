import React, { useState } from 'react';

const Sidebar = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  // Función para manejar el colapso del acordeón
  const toggleAccordion = (targetId) => {
    if (activeAccordion === targetId) {
      setActiveAccordion(null); // Si el mismo acordeón está abierto, lo cerramos
    } else {
      setActiveAccordion(targetId); // Si no está abierto, lo abrimos
    }
  };

  // Obtener rutas desde el objeto global `window.routes`
  const routes = window.routes || {};

  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        {/* Tablero */}
        <li className="nav-item">
          <a className="nav-link" href={routes.dashboard || '#'}>
            <i className="bi bi-grid"></i>
            <span>Tablero</span>
          </a>
        </li>

        {/* Usuarios */}
        <li className="nav-item">
          <a
            className={`nav-link ${activeAccordion === 'users-nav' ? '' : 'collapsed'}`}
            data-bs-target="#users-nav"
            onClick={() => toggleAccordion('users-nav')}
            href="#"
          >
            <i className="bi bi-people"></i>
            <span>Usuarios</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="users-nav"
            className={`nav-content collapse ${activeAccordion === 'users-nav' ? 'show' : ''}`}
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href={routes.usersIndex || '#'}>
                <i className="bi bi-circle"></i>
                <span>Lista de Usuarios</span>
              </a>
            </li>
            <li>
              <a href={routes.usersCreate || '#'}>
                <i className="bi bi-circle"></i>
                <span>Crear Usuario</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
