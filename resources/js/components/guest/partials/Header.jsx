import React, { useEffect, useState } from 'react';

const Header = ({ user, authRoutes }) => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    useEffect(() => {
        // Manejo del menú móvil
        const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
        function mobileNavToogle() {
            document.querySelector('body').classList.toggle('mobile-nav-active');
            mobileNavToggleBtn?.classList.toggle('bi-list');
            mobileNavToggleBtn?.classList.toggle('bi-x');
        }
        mobileNavToggleBtn?.addEventListener('click', mobileNavToogle);

        return () => {
            mobileNavToggleBtn?.removeEventListener('click', mobileNavToogle);
        };
    }, []);

    const handleLogout = async (e) => {
        e.preventDefault();

        try {
            const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

            const response = await fetch(authRoutes.logout, {
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

    // Estilo para los botones de autenticación
    const authButtonStyle = {
        color: '#ffffff',
        borderRadius: '30px',
        padding: '0.5rem 1.5rem',
        fontSize: '0.875rem',
        border: 'none',
        transition: 'background-color 0.3s',
        textDecoration: 'none',
        display: 'inline-block',
    };

    return (
        <header id="header" className="header d-flex align-items-center fixed-top" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #ddd' }}>
            <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                {/* Logo */}
                <a href="/" className="logo d-flex align-items-center text-decoration-none">
                    <img src="images/guest/logo.jpg" className="rounded" alt="Logo" />
                    <h1 className="sitename ms-2 mb-0" style={{ fontSize: '1.5rem', color: '#333' }}>OmmSuite</h1>
                </a>

                {/* Botones de Autenticación */}
                <div className="d-flex align-items-center">
                    {user ? (
                        <>
                            {/* Dropdown para usuarios autenticados en desktop */}
                            <div className="dropdown d-none d-md-block">
                                <a
                                    className="btn btn-sm dropdown-toggle"
                                    id="dropdownMenuButton"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{ ...authButtonStyle, backgroundColor: '#007bff' }}
                                >
                                    <i className="bi bi-person-circle me-2"></i> {user.full_name}
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end shadow-lg border-0 rounded" aria-labelledby="dropdownMenuButton">
                                    <li>
                                        <a className="dropdown-item" href={authRoutes.dashboard}>
                                            Tablero
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Perfil
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Configuraciones
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item text-danger" href="#" onClick={handleLogout}>
                                            Cerrar Sesión
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Offcanvas para usuarios autenticados en mobile */}
                            <button
                                className="btn btn-sm d-md-none"
                                onClick={() => setShowOffcanvas(true)}
                                style={{ ...authButtonStyle, backgroundColor: '#007bff' }}
                            >
                                <i className="bi bi-list fs-4"></i>
                            </button>
                            {showOffcanvas && (
                                <div
                                    className="offcanvas offcanvas-start show"
                                    tabIndex="-1"
                                    style={{
                                        visibility: 'visible',
                                        width: '50%',
                                        maxWidth: 'none',
                                    }}
                                >
                                    <div className="offcanvas-header">
                                        <h5 className="offcanvas-title">Menú</h5>
                                        <button
                                            type="button"
                                            className="btn-close text-reset"
                                            onClick={() => setShowOffcanvas(false)}
                                            aria-label="Close"
                                        ></button>
                                    </div>
                                    <div className="offcanvas-body">
                                        <ul className="list-unstyled">
                                            <li className="mb-3">
                                                <a className="text-decoration-none text-dark" href={authRoutes.dashboard}>
                                                    <i className="bi bi-grid me-2 text-primary"></i>Tablero
                                                </a>
                                            </li>
                                            <li className="mb-3">
                                                <a className="text-decoration-none text-dark" href="#">
                                                    <i className="bi bi-person-circle me-2 text-success"></i>Perfil
                                                </a>
                                            </li>
                                            <li className="mb-3">
                                                <a className="text-decoration-none text-dark" href="#">
                                                    <i className="bi bi-gear me-2 text-warning"></i>Configuraciones
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="text-decoration-none text-danger"
                                                    href="#"
                                                    onClick={handleLogout}
                                                >
                                                    <i className="bi bi-box-arrow-right me-2"></i>Cerrar Sesión
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        <>
                            <a href={authRoutes.login} className="btn btn-sm me-2" style={{ ...authButtonStyle, backgroundColor: '#007bff' }}>
                                Iniciar Sesión
                            </a>
                            <a href={authRoutes.register} className="btn btn-sm" style={{ ...authButtonStyle, backgroundColor: '#17a2b8' }}>
                                Registrarse
                            </a>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
