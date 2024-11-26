import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import AOS from 'aos';

const Footer = () => {
    useEffect(() => {
        // Inicializa AOS para animaciones al hacer scroll
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
        });

        // Inicializar GLightbox
        GLightbox({
            selector: '.glightbox', // Selecciona los elementos que tendrán el efecto lightbox
        });

        // Inicializar Scroll to Top Button
        const scrollTop = document.querySelector('.scroll-top');
        function toggleScrollTop() {
            if (scrollTop) {
                window.scrollY > 100
                    ? scrollTop.classList.add('active')
                    : scrollTop.classList.remove('active');
            }
        }
        scrollTop?.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        });
        window.addEventListener('load', toggleScrollTop);
        document.addEventListener('scroll', toggleScrollTop);
    }, []);

    return (
        <footer id="footer" className="footer position-relative light-background">
            <div className="container footer-top">
                <div className="row gy-4">
                    {/* About Section */}
                    <div className="col-lg-4 col-md-6 footer-about">
                        <a href="/" className="logo d-flex align-items-center">
                            <span className="sitename">QuickStart</span>
                        </a>
                        <div className="footer-contact pt-3">
                            <p>A108 Adam Street</p>
                            <p>New York, NY 535022</p>
                            <p className="mt-3">
                                <strong>Phone:</strong> <span>+1 5589 55488 55</span>
                            </p>
                            <p>
                                <strong>Email:</strong> <span>info@example.com</span>
                            </p>
                        </div>
                        <div className="social-links d-flex mt-4">
                            <a href="#" className="me-3">
                                <i className="bi bi-twitter"></i>
                            </a>
                            <a href="#" className="me-3">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="#" className="me-3">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="#">
                                <i className="bi bi-linkedin"></i>
                            </a>
                        </div>
                    </div>

                    {/* Useful Links Section */}
                    <div className="col-lg-2 col-md-3 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Terms of service</a></li>
                            <li><a href="#">Privacy policy</a></li>
                        </ul>
                    </div>

                    {/* Services Links Section */}
                    <div className="col-lg-2 col-md-3 footer-links">
                        <h4>Our Services</h4>
                        <ul>
                            <li><a href="#">Web Design</a></li>
                            <li><a href="#">Web Development</a></li>
                            <li><a href="#">Product Management</a></li>
                            <li><a href="#">Marketing</a></li>
                            <li><a href="#">Graphic Design</a></li>
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div className="col-lg-4 col-md-12 footer-newsletter">
                        <h4>Our Newsletter</h4>
                        <p>
                            Subscribe to our newsletter and receive the latest news about our products and services!
                        </p>
                        <form action="forms/newsletter.php" method="post" className="php-email-form">
                            <div className="newsletter-form d-flex">
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control me-2"
                                    placeholder="Enter your email"
                                />
                                <input type="submit" value="Subscribe" className="btn btn-primary" />
                            </div>
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">
                                Your subscription request has been sent. Thank you!
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="container copyright text-center mt-4">
                <p>
                    © <span>Copyright</span> <strong className="px-1 sitename">QuickStart</strong>
                    <span> All Rights Reserved</span>
                </p>
                <div className="credits">
                    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
            </div>

            {/* Scroll Top Button */}
            <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </footer>
    );
};

export default Footer;
