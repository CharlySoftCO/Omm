import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/guest/Home';
import Header from './components/guest/partials/Header';
import Footer from './components/guest/partials/Footer';

// Obtén los contenedores donde se montará React
const headerContainer = document.getElementById('header-container');
const homeContainer = document.getElementById('home-root'); // Cambiado para coincidir con el HTML
const footerContainer = document.getElementById('footer-container');

// Asegúrate de que los datos se pasen correctamente desde el backend al contenedor HTML
if (headerContainer) {
    const user = JSON.parse(headerContainer.getAttribute('data-user') || 'null');
    const authRoutes = JSON.parse(headerContainer.getAttribute('data-auth-routes') || '{}');

    const root = ReactDOM.createRoot(headerContainer);
    root.render(
        <React.StrictMode>
            <Header user={user} authRoutes={authRoutes} />
        </React.StrictMode>
    );
}

if (homeContainer) {
    const user = JSON.parse(headerContainer.getAttribute('data-user') || 'null');
    const authRoutes = JSON.parse(headerContainer.getAttribute('data-auth-routes') || '{}');

    const root = ReactDOM.createRoot(homeContainer);
    root.render(
        <React.StrictMode>
            <Home user={user} authRoutes={authRoutes} />
        </React.StrictMode>
    );
}

if (footerContainer) {
    const root = ReactDOM.createRoot(footerContainer);
    root.render(
        <React.StrictMode>
            <Footer />
        </React.StrictMode>
    );
}
