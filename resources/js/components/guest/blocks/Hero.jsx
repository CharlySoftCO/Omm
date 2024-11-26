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
                    border-radius: 10px;
                    overflow: hidden;
                }

                .video-modal-close {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: none;
                    border: none;
                    font-size: 2rem;
                    color: #fff;
                    cursor: pointer;
                    z-index: 1200;
                    transition: transform 0.3s ease;
                }

                .video-modal-close:hover {
                    transform: scale(1.2);
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
                        <h1>Welcome to <span>OmmSuite</span></h1>
                        <p>
                            Quickly manage your business operations and enhance customer engagement with OmmSuite.
                        </p>
                        <div className="d-flex">
                            <a
                                href="#about"
                                className="btn-get-started"
                                style={{
                                    backgroundColor: '#007BFF',
                                    color: '#fff',
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: '30px',
                                    fontSize: '1rem',
                                    textDecoration: 'none',
                                    transition: 'background-color 0.3s',
                                }}
                            >
                                Get Started
                            </a>
                            <button
                                className="btn-watch-video d-flex align-items-center"
                                style={{
                                    marginLeft: '1rem',
                                    textDecoration: 'none',
                                    color: '#007BFF',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                }}
                                onClick={handleOpenVideo}
                            >
                                <i className="bi bi-play-circle"></i>
                                <span style={{ marginLeft: '0.5rem' }}>Watch Video</span>
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
                            <div className="video-modal-content">
                                <div className="video-container" style={{ paddingTop: '56.25%', position: 'relative' }}>
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/Y7f98aduVJ8"
                                        title="OmmSuite Video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        style={{ position: 'absolute', top: 0, left: 0 }}
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                        <button className="video-modal-close" onClick={handleCloseVideo}>
                            &times;
                        </button>
                    </>
                )}
            </section>
        </>
    );
};

export default Hero;
