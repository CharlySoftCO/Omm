import React, { useState } from 'react';

const Hero = () => {
    const [showVideo, setShowVideo] = useState(false);

    // Función para abrir el modal de video
    const handleOpenVideo = () => {
        setShowVideo(true);
    };

    // Función para cerrar el modal de video
    const handleCloseVideo = () => {
        setShowVideo(false);
    };

    return (
        <>
            <style jsx>{`
                /* Modal de video */
                .video-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.7);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1100;
                }

                .video-modal-content {
                    position: relative;
                    width: 80%;
                    max-width: 800px;
                    background: #000;
                    padding: 1rem;
                    border-radius: 10px;
                }

                .video-modal-close {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: #000;
                    border: none;
                    font-size: 2rem;
                    color: #fff;
                    cursor: pointer;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1200;
                }

                .video-modal-close:hover {
                    background: #007BFF;
                    color: #fff;
                }

                .video-modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: transparent;
                    z-index: 1000;
                }

                /* Estilo del botón Empieza Gratis */
                .btn-get-started {
                    background-color: #007BFF;
                    color: #fff;
                    padding: 0.75rem 1.5rem;
                    border-radius: 30px;
                    font-size: 1rem;
                    text-decoration: none;
                    transition: background-color 0.3s;
                    border: none;
                    cursor: pointer;
                }

                .btn-get-started:hover {
                    background-color: #0056b3;
                }

                /* Estilo del botón de ver video */
                .btn-watch-video {
                    margin-left: 1rem;
                    text-decoration: none;
                    color: #fff;
                    background: none;
                    border: none;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    font-size: 1rem;
                }

                .btn-watch-video i {
                    font-size: 2rem;
                    color: #fff;
                }

                .btn-watch-video:hover i {
                    color: #007BFF;
                }

                /* Estilo para la palabra OmmSuite */
                .highlight-ommsuite {
                    color: #77B6CA;
                }
            `}</style>

            <section id="hero" className="hero section">
                <div className="hero-bg">
                    <img
                        src="/images/guest/hero-bg.webp"
                        alt="Hero Background"
                    />
                </div>
                <div className="container text-center">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <h1>
                            Transforma la Gestión de tu Negocio con <span className="highlight-ommsuite">OmmSuite</span>
                        </h1>
                        <p>
                            OmmSuite te ofrece una solución todo-en-uno para gestionar clientes, ventas y soporte.
                            Empieza hoy mismo y lleva tu empresa al siguiente nivel con una experiencia integrada y
                            sin complicaciones.
                        </p>
                        <div className="d-flex">
                            <button
                                className="btn-get-started"
                                onClick={() => window.location.href = '#about'}
                            >
                                Empieza Gratis
                            </button>
                            <button
                                className="btn-watch-video d-flex align-items-center"
                                onClick={handleOpenVideo}
                            >
                                <i className="bi bi-play-circle"></i>
                                <span style={{ marginLeft: '0.5rem' }}>Ver Video</span>
                            </button>
                        </div>
                        <img
                            src="/images/guest/hero.webp"
                            className="img-fluid hero-img"
                            alt="OmmSuite Services"
                        />
                    </div>
                </div>

                {/* Modal de video */}
                {showVideo && (
                    <>
                        <div className="video-modal-overlay" onClick={handleCloseVideo}></div>
                        <div className="video-modal">
                            <button className="video-modal-close" onClick={handleCloseVideo}>
                                &times;
                            </button>
                            <div className="video-modal-content">
                                <div className="video-container">
                                    <iframe
                                        width="100%"
                                        height="450px"
                                        src="https://www.youtube.com/embed/Y7f98aduVJ8"
                                        title="OmmSuite Video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </section>
        </>
    );
};

export default Hero;
