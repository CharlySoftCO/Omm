import React, { useEffect } from 'react';

const Footer = () => {
  // JavaScript para manejar el botón "volver arriba"
  useEffect(() => {
    const handleScroll = () => {
      const backtotop = document.querySelector('.back-to-top');
      if (backtotop) {
        if (window.scrollY > 100) {
          backtotop.classList.add('active');
        } else {
          backtotop.classList.remove('active');
        }
      }
    };

    // Agregar evento para manejar el scroll
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecutar al cargar por primera vez

    // Limpiar el evento cuando el componente se desmonte
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer id="footer" className="footer">
      <div className="copyright">
        &copy; Copyright <strong><span>NiceAdmin</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </footer>
  );
};

export default Footer;
