import React, { useState } from 'react';
import routes from '../../../routes';

const Sidebar = () => {
  const [activeAccordion, setActiveAccordion] = useState(null); // Acordeón principal
  const [activeSubAccordion, setActiveSubAccordion] = useState(null); // Subacordeón
  const [activeLink, setActiveLink] = useState(null);

  // Función para manejar el colapso del acordeón principal
  const toggleAccordion = (targetId) => {
    setActiveAccordion((prev) => (prev === targetId ? null : targetId));
    setActiveSubAccordion(null); // Resetea subdesplegables al cambiar el principal
  };

  // Función para manejar el colapso del subacordeón
  const toggleSubAccordion = (targetId) => {
    setActiveSubAccordion((prev) => (prev === targetId ? null : targetId));
  };

  // Función para establecer el enlace activo
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        {/* Tablero */}
        <li className="nav-item">
          <a
            className={`nav-link ${activeLink === 'dashboard' ? '' : 'collapsed'}`}
            href={routes.dashboard || '#'}
            onClick={() => handleLinkClick('dashboard')}
          >
            <i className="bi bi-grid"></i>
            <span>Tablero</span>
          </a>
        </li>

        {/* Usuarios (Desplegable) */}
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
              <a
                href={routes.usersIndex || '#'}
                className={`d-flex align-items-center ${activeLink === 'usersIndex' ? 'active' : ''}`}
                onClick={() => handleLinkClick('usersIndex')}
              >
                <i className="bi bi-circle"></i>
                <span>Lista de Usuarios</span>
              </a>
            </li>
            <li>
              <a
                href={routes.usersCreate || '#'}
                className={`d-flex align-items-center ${activeLink === 'usersCreate' ? 'active' : ''}`}
                onClick={() => handleLinkClick('usersCreate')}
              >
                <i className="bi bi-circle"></i>
                <span>Crear Usuario</span>
              </a>
            </li>
          </ul>
        </li>

        {/* Clientes (Desplegable) */}
        <li className="nav-item">
          <a
            className={`nav-link ${activeAccordion === 'clients-nav' ? '' : 'collapsed'}`}
            data-bs-target="#clients-nav"
            onClick={() => toggleAccordion('clients-nav')}
            href="#"
          >
            <i className="bi bi-person-check"></i>
            <span>Clientes</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="clients-nav"
            className={`nav-content collapse ${activeAccordion === 'clients-nav' ? 'show' : ''}`}
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a
                href={routes.clientsIndex || '#'}
                className={`d-flex align-items-center ${activeLink === 'clientsIndex' ? 'active' : ''}`}
                onClick={() => handleLinkClick('clientsIndex')}
              >
                <i className="bi bi-circle"></i>
                <span>Lista de Clientes</span>
              </a>
            </li>
            <li>
              <a
                href={routes.clientsCreate || '#'}
                className={`d-flex align-items-center ${activeLink === 'clientsCreate' ? 'active' : ''}`}
                onClick={() => handleLinkClick('clientsCreate')}
              >
                <i className="bi bi-circle"></i>
                <span>Crear Cliente</span>
              </a>
            </li>
          </ul>
        </li>

        {/* Almacén (Desplegable principal) */}
        <li className="nav-item">
          <a
            className={`nav-link ${activeAccordion === 'warehouse-nav' ? '' : 'collapsed'}`}
            onClick={() => toggleAccordion('warehouse-nav')}
            href="#"
          >
            <i className="bi bi-box-seam"></i>
            <span>Almacén</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="warehouse-nav"
            className={`nav-content collapse ${activeAccordion === 'warehouse-nav' ? 'show' : ''}`}
            data-bs-parent="#sidebar-nav"
          >
            {/* Categorías (Subdesplegable) */}
            <li>
              <a
                className={`d-flex align-items-center nav-link ${
                  activeSubAccordion === 'categories-nav' ? '' : 'collapsed'
                }`}
                onClick={() => toggleSubAccordion('categories-nav')}
                href="#"
              >
                <i className="bi bi-folder"></i>
                <span>Categorías</span>
                <i className="bi bi-chevron-down ms-auto"></i>
              </a>
              <ul
                id="categories-nav"
                className={`nav-content collapse ${activeSubAccordion === 'categories-nav' ? 'show' : ''}`}
              >
                <li>
                  <a
                    href={routes.categoriesIndex || '#'}
                    className={`d-flex align-items-center ${activeLink === 'categoriesIndex' ? 'active' : ''}`}
                    onClick={() => handleLinkClick('categoriesIndex')}
                  >
                    <i className="bi bi-circle"></i>
                    <span>Lista de Categorías</span>
                  </a>
                </li>
                <li>
                  <a
                    href={routes.categoriesCreate || '#'}
                    className={`d-flex align-items-center ${activeLink === 'categoriesCreate' ? 'active' : ''}`}
                    onClick={() => handleLinkClick('categoriesCreate')}
                  >
                    <i className="bi bi-circle"></i>
                    <span>Crear Categoría</span>
                  </a>
                </li>
              </ul>
            </li>

            {/* Productos (Subdesplegable) */}
            <li>
              <a
                className={`d-flex align-items-center nav-link ${
                  activeSubAccordion === 'products-nav' ? '' : 'collapsed'
                }`}
                onClick={() => toggleSubAccordion('products-nav')}
                href="#"
              >
                <i className="bi bi-box"></i>
                <span>Productos</span>
                <i className="bi bi-chevron-down ms-auto"></i>
              </a>
              <ul
                id="products-nav"
                className={`nav-content collapse ${activeSubAccordion === 'products-nav' ? 'show' : ''}`}
              >
                <li>
                  <a
                    href={routes.productsIndex || '#'}
                    className={`d-flex align-items-center ${activeLink === 'productsIndex' ? 'active' : ''}`}
                    onClick={() => handleLinkClick('productsIndex')}
                  >
                    <i className="bi bi-circle"></i>
                    <span>Lista de Productos</span>
                  </a>
                </li>
                <li>
                  <a
                    href={routes.productsCreate || '#'}
                    className={`d-flex align-items-center ${activeLink === 'productsCreate' ? 'active' : ''}`}
                    onClick={() => handleLinkClick('productsCreate')}
                  >
                    <i className="bi bi-circle"></i>
                    <span>Crear Producto</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
