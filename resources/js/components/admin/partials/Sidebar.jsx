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

  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <a className="nav-link" href="index.html">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeAccordion === 'components-nav' ? '' : 'collapsed'}`}
            data-bs-target="#components-nav"
            onClick={() => toggleAccordion('components-nav')}
            href="#"
          >
            <i className="bi bi-menu-button-wide"></i>
            <span>Components</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="components-nav"
            className={`nav-content collapse ${activeAccordion === 'components-nav' ? 'show' : ''}`}
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="components-alerts.html">
                <i className="bi bi-circle"></i>
                <span>Alerts</span>
              </a>
            </li>
            <li>
              <a href="components-accordion.html">
                <i className="bi bi-circle"></i>
                <span>Accordion</span>
              </a>
            </li>
            <li>
              <a href="components-badges.html">
                <i className="bi bi-circle"></i>
                <span>Badges</span>
              </a>
            </li>
            {/* Más items... */}
          </ul>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeAccordion === 'forms-nav' ? '' : 'collapsed'}`}
            data-bs-target="#forms-nav"
            onClick={() => toggleAccordion('forms-nav')}
            href="#"
          >
            <i className="bi bi-journal-text"></i>
            <span>Forms</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="forms-nav"
            className={`nav-content collapse ${activeAccordion === 'forms-nav' ? 'show' : ''}`}
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="forms-elements.html">
                <i className="bi bi-circle"></i>
                <span>Form Elements</span>
              </a>
            </li>
            <li>
              <a href="forms-layouts.html">
                <i className="bi bi-circle"></i>
                <span>Form Layouts</span>
              </a>
            </li>
            <li>
              <a href="forms-editors.html">
                <i className="bi bi-circle"></i>
                <span>Form Editors</span>
              </a>
            </li>
            <li>
              <a href="forms-validation.html">
                <i className="bi bi-circle"></i>
                <span>Form Validation</span>
              </a>
            </li>
          </ul>
        </li>
        {/* Más elementos del menú... */}
        <li className="nav-heading">Pages</li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="users-profile.html">
            <i className="bi bi-person"></i>
            <span>Profile</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-faq.html">
            <i className="bi bi-question-circle"></i>
            <span>F.A.Q</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-contact.html">
            <i className="bi bi-envelope"></i>
            <span>Contact</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-register.html">
            <i className="bi bi-card-list"></i>
            <span>Register</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-login.html">
            <i className="bi bi-box-arrow-in-right"></i>
            <span>Login</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-error-404.html">
            <i className="bi bi-dash-circle"></i>
            <span>Error 404</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-blank.html">
            <i className="bi bi-file-earmark"></i>
            <span>Blank</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
