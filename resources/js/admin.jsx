import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'boxicons/css/boxicons.min.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import 'remixicon/fonts/remixicon.css';

// Importar SweetAlert2
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/admin/partials/Header';
import Sidebar from './components/admin/partials/Sidebar';
import Footer from './components/admin/partials/Footer';
import Dashboard from './components/admin/Dashboard';

// Ejemplo de uso básico de SweetAlert2 para verificar que funcione
document.addEventListener('DOMContentLoaded', () => {
  const deleteButtons = document.querySelectorAll('.btn-delete');

  deleteButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();

      Swal.fire({
        title: '¿Estás seguro?',
        text: 'Esta acción no se puede deshacer.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          const form = button.closest('form');
          if (form) {
            form.submit();
          }
        }
      });
    });
  });
});

// Montar React en el contenedor especificado para el Header
const headerContainer = document.getElementById('header-container');
if (headerContainer) {
  const root = ReactDOM.createRoot(headerContainer);
  root.render(
    <React.StrictMode>
      <Header />
    </React.StrictMode>
  );
}

// Montar React en el contenedor especificado para el Sidebar
const sidebarContainer = document.getElementById('sidebar-container');
if (sidebarContainer) {
  const root = ReactDOM.createRoot(sidebarContainer);
  root.render(
    <React.StrictMode>
      <Sidebar />
    </React.StrictMode>
  );
}

// Montar React en el contenedor especificado para el Footer
const footerContainer = document.getElementById('footer-container');
if (footerContainer) {
  const root = ReactDOM.createRoot(footerContainer);
  root.render(
    <React.StrictMode>
      <Footer />
    </React.StrictMode>
  );
}

// Montar React en el contenedor especificado para el Dashboard
const dashboardContainer = document.getElementById('dashboard-container');
if (dashboardContainer) {
  const root = ReactDOM.createRoot(dashboardContainer);
  root.render(
    <React.StrictMode>
      <Dashboard />
    </React.StrictMode>
  );
}
