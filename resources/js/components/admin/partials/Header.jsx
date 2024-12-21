import React, { useEffect } from 'react';

const Header = () => {
  // Obtener la base URL desde el objeto global `window.routes`
  const baseUrl = window.routes?.baseUrl || '/';

  // Función para manejar el clic en el botón del menú
  const toggleSidebar = () => {
    const body = document.body;
    if (body) {
      body.classList.toggle('toggle-sidebar');
    }
  };

  // Función para manejar el estado del header en el scroll
  const headerScrolled = () => {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  };

  // Función para alternar la barra de búsqueda
  const toggleSearchBar = () => {
    const searchBar = document.querySelector('.search-bar');
    if (searchBar) {
      searchBar.classList.toggle('search-bar-show');
    }
  };

  // Función para manejar el cierre de sesión
  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

      const response = await fetch('/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': csrfToken,
          'X-Requested-With': 'XMLHttpRequest',
        },
        credentials: 'include', // Para enviar cookies junto con la solicitud
      });

      if (response.ok) {
        window.location.href = '/';
      } else {
        console.error('Error al cerrar sesión:', response.statusText);
      }
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  // Hook de efectos para añadir eventos
  useEffect(() => {
    window.addEventListener('scroll', headerScrolled);

    return () => {
      window.removeEventListener('scroll', headerScrolled);
    };
  }, []);

  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <div className="d-flex align-items-center justify-content-between">
        <a href={`${baseUrl}`} className="logo d-flex align-items-center text-decoration-none">
          <img className="rounded" src={`${baseUrl}/images/logo.jpg`} alt="Logo" />
          <span className="d-none d-lg-block">OmmSuite</span>
        </a>

        {/* Botón para abrir/cerrar el sidebar */}
        <i
          className="bi bi-list toggle-sidebar-btn"
          onClick={toggleSidebar}
          role="button"
          aria-expanded="false"
        ></i>
      </div>

      <div className="search-bar">
        <form className="search-form d-flex align-items-center" method="POST" action="#">
          <input type="text" name="query" placeholder="Encuéntralo fácil" title="Enter search keyword" />
          <button type="submit" title="Search">
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>

      <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">
          <li className="nav-item d-block d-lg-none">
            <a className="nav-link nav-icon search-bar-toggle" href="#" onClick={toggleSearchBar}>
              <i className="bi bi-search"></i>
            </a>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
              <i className="bi bi-bell"></i>
              <span className="badge bg-primary badge-number">4</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
              <li className="dropdown-header">
                Tienes 4 notificaciones nuevas
                <a href="#">
                  <span className="badge rounded-pill bg-primary p-2 ms-2">Ver todas</span>
                </a>
              </li>
              <li><hr className="dropdown-divider" /></li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
              <i className="bi bi-chat-left-text"></i>
              <span className="badge bg-success badge-number">3</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
              <li className="dropdown-header">
                Tienes 3 mensajes nuevos
                <a href="#">
                  <span className="badge rounded-pill bg-primary p-2 ms-2">Ver todos</span>
                </a>
              </li>
              <li><hr className="dropdown-divider" /></li>
            </ul>
          </li>

          <li className="nav-item dropdown pe-3">
            <a
              className="nav-link nav-profile d-flex align-items-center pe-0"
              href="#"
              data-bs-toggle="dropdown"
            >
              <img src={`${baseUrl}/images/admin/profile-img.jpg`} alt="Perfil" className="rounded-circle" />
              <span className="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
              <li className="dropdown-header">
                <h6>Kevin Anderson</h6>
                <span>Diseñador Web</span>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li>
                <a className="dropdown-item d-flex align-items-center text-danger" href="#" onClick={handleLogout}>
                  <i className="bi bi-box-arrow-right"></i>
                  <span>Cerrar Sesión</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
