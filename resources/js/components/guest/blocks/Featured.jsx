// Featured.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Featured = () => {
  return (
    <section id="featured-services" className="featured-services section light-background">
      <div className="container">
        <div className="row gy-4">
          <div className="col-xl-4 col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item d-flex">
              <div className="icon flex-shrink-0">
                <i className="bi bi-briefcase"></i>
              </div>
              <div>
                <h4 className="title">
                  <a href="#" className="stretched-link">Soluciones CRM</a>
                </h4>
                <p className="description">
                  Gestiona las relaciones con los clientes, optimiza las interacciones y mejora la satisfacción del cliente.
                </p>
              </div>
            </div>
          </div>
          {/* End Service Item */}

          <div className="col-xl-4 col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div className="service-item d-flex">
              <div className="icon flex-shrink-0">
                <i className="bi bi-card-checklist"></i>
              </div>
              <div>
                <h4 className="title">
                  <a href="#" className="stretched-link">Gestión ERP</a>
                </h4>
                <p className="description">
                  Optimiza tus procesos internos, incluyendo inventarios, ventas y operaciones con nuestro sistema ERP.
                </p>
              </div>
            </div>
          </div>
          {/* End Service Item */}

          <div className="col-xl-4 col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <div className="service-item d-flex">
              <div className="icon flex-shrink-0">
                <i className="bi bi-bar-chart"></i>
              </div>
              <div>
                <h4 className="title">
                  <a href="#" className="stretched-link">Integración POS</a>
                </h4>
                <p className="description">
                  Gestiona las operaciones de punto de venta en tiempo real desde cualquier ubicación de manera sencilla.
                </p>
              </div>
            </div>
          </div>
          {/* End Service Item */}

          <div className="col-xl-4 col-lg-6" data-aos="fade-up" data-aos-delay="400">
            <div className="service-item d-flex">
              <div className="icon flex-shrink-0">
                <i className="bi bi-chat-dots"></i>
              </div>
              <div>
                <h4 className="title">
                  <a href="#" className="stretched-link">Comunicación Omnicanal</a>
                </h4>
                <p className="description">
                  Conecta con tus clientes a través de múltiples canales como WhatsApp, redes sociales y correo electrónico de manera fluida.
                </p>
              </div>
            </div>
          </div>
          {/* End Service Item */}

          <div className="col-xl-4 col-lg-6" data-aos="fade-up" data-aos-delay="500">
            <div className="service-item d-flex">
              <div className="icon flex-shrink-0">
                <i className="bi bi-headset"></i>
              </div>
              <div>
                <h4 className="title">
                  <a href="#" className="stretched-link">Soporte al Cliente</a>
                </h4>
                <p className="description">
                  Proporciona soporte 24/7 a tus clientes con sistemas integrados de helpdesk y ticketing de soporte.
                </p>
              </div>
            </div>
          </div>
          {/* End Service Item */}

          <div className="col-xl-4 col-lg-6" data-aos="fade-up" data-aos-delay="600">
            <div className="service-item d-flex">
              <div className="icon flex-shrink-0">
                <i className="bi bi-gear"></i>
              </div>
              <div>
                <h4 className="title">
                  <a href="#" className="stretched-link">Integraciones Personalizadas</a>
                </h4>
                <p className="description">
                  Adapta la plataforma para satisfacer las necesidades únicas de tu negocio con nuestras opciones de integración personalizada.
                </p>
              </div>
            </div>
          </div>
          {/* End Service Item */}
        </div>
      </div>
    </section>
  );
};

export default Featured;
