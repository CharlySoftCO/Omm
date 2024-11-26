import React, { useEffect } from 'react';

const Header = () => {
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

  // Hook de efectos para añadir eventos
  useEffect(() => {
    // Añadir evento para el scroll del header
    window.addEventListener('scroll', headerScrolled);
    // Remover evento cuando el componente se desmonte
    return () => {
      window.removeEventListener('scroll', headerScrolled);
    };
  }, []);

  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <div className="d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
          <img className="rounded" src="images/logo.jpg" alt="Logo" />
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
          <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
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
                You have 4 new notifications
                <a href="#">
                  <span className="badge rounded-pill bg-primary p-2 ms-2">View all</span>
                </a>
              </li>
              <li><hr className="dropdown-divider" /></li>
              {/* Lista de notificaciones */}
              <li className="notification-item">
                <i className="bi bi-exclamation-circle text-warning"></i>
                <div>
                  <h4>Lorem Ipsum</h4>
                  <p>Quae dolorem earum veritatis oditseno</p>
                  <p>30 min. ago</p>
                </div>
              </li>
              <li><hr className="dropdown-divider" /></li>
              {/* Más notificaciones */}
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
              <i className="bi bi-chat-left-text"></i>
              <span className="badge bg-success badge-number">3</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
              <li className="dropdown-header">
                You have 3 new messages
                <a href="#">
                  <span className="badge rounded-pill bg-primary p-2 ms-2">View all</span>
                </a>
              </li>
              <li><hr className="dropdown-divider" /></li>
              {/* Lista de mensajes */}
              <li className="message-item">
                <a href="#">
                  <img src="assets/img/messages-1.jpg" alt="" className="rounded-circle" />
                  <div>
                    <h4>Maria Hudson</h4>
                    <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                    <p>4 hrs. ago</p>
                  </div>
                </a>
              </li>
              <li><hr className="dropdown-divider" /></li>
              {/* Más mensajes */}
            </ul>
          </li>

          <li className="nav-item dropdown pe-3">
            <a
              className="nav-link nav-profile d-flex align-items-center pe-0"
              href="#"
              data-bs-toggle="dropdown"
            >
              <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
              <span className="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
              <li className="dropdown-header">
                <h6>Kevin Anderson</h6>
                <span>Web Designer</span>
              </li>
              <li><hr className="dropdown-divider" /></li>

              <li>
                <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                  <i className="bi bi-person"></i>
                  <span>My Profile</span>
                </a>
              </li>
              <li><hr className="dropdown-divider" /></li>

              <li>
                <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                  <i className="bi bi-gear"></i>
                  <span>Account Settings</span>
                </a>
              </li>
              <li><hr className="dropdown-divider" /></li>

              <li>
                <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                  <i className="bi bi-question-circle"></i>
                  <span>Need Help?</span>
                </a>
              </li>
              <li><hr className="dropdown-divider" /></li>

              <li>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <i className="bi bi-box-arrow-right"></i>
                  <span>Sign Out</span>
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
