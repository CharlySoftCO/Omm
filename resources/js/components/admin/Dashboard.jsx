import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <div className="pagetitle">
        <h1>Tablero</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Inicio</a></li>
            <li className="breadcrumb-item active">Tablero</li>
          </ol>
        </nav>
      </div>

      <section className="section dashboard">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">

              {/* Tarjeta Ventas */}
              <div className="col-xxl-4 col-md-6">
                <div className="card info-card sales-card">
                  <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filtrar</h6>
                      </li>
                      <li><a className="dropdown-item" href="#">Hoy</a></li>
                      <li><a className="dropdown-item" href="#">Este Mes</a></li>
                      <li><a className="dropdown-item" href="#">Este Año</a></li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Ventas <span>| Hoy</span></h5>
                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-cart"></i>
                      </div>
                      <div className="ps-3">
                        <h6>145</h6>
                        <span className="text-success small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">incremento</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tarjeta Ganancias */}
              <div className="col-xxl-4 col-md-6">
                <div className="card info-card revenue-card">
                  <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filtrar</h6>
                      </li>
                      <li><a className="dropdown-item" href="#">Hoy</a></li>
                      <li><a className="dropdown-item" href="#">Este Mes</a></li>
                      <li><a className="dropdown-item" href="#">Este Año</a></li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Ganancias <span>| Este Mes</span></h5>
                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-currency-dollar"></i>
                      </div>
                      <div className="ps-3">
                        <h6>$3,264</h6>
                        <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">incremento</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tarjeta Clientes */}
              <div className="col-xxl-4 col-xl-12">
                <div className="card info-card customers-card">
                  <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filtrar</h6>
                      </li>
                      <li><a className="dropdown-item" href="#">Hoy</a></li>
                      <li><a className="dropdown-item" href="#">Este Mes</a></li>
                      <li><a className="dropdown-item" href="#">Este Año</a></li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Clientes <span>| Este Año</span></h5>
                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-people"></i>
                      </div>
                      <div className="ps-3">
                        <h6>1244</h6>
                        <span className="text-danger small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">decremento</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Actividad Reciente */}
          <div className="col-lg-4">
            <div className="card">
              <div className="filter">
                <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li className="dropdown-header text-start">
                    <h6>Filtrar</h6>
                  </li>
                  <li><a className="dropdown-item" href="#">Hoy</a></li>
                  <li><a className="dropdown-item" href="#">Este Mes</a></li>
                  <li><a className="dropdown-item" href="#">Este Año</a></li>
                </ul>
              </div>
              <div className="card-body">
                <h5 className="card-title">Actividad Reciente<span> | Hoy</span></h5>
                <div className="activity">
                  <div className="activity-item d-flex">
                    <div className="activite-label">32 min</div>
                    <i className="bi bi-circle-fill activity-badge text-success align-self-start"></i>
                    <div className="activity-content">
                      Quia quae rerum <a href="#" className="fw-bold text-dark">explicabo officiis</a> beatae
                    </div>
                  </div>
                  {/* Más elementos de actividad aquí */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
