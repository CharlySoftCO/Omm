import React from 'react';
import Hero from './blocks/Hero';

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <Hero />

      {/* Featured Services Section */}
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
                    <a href="#" className="stretched-link">CRM Solutions</a>
                  </h4>
                  <p className="description">
                    Manage customer relationships, streamline interactions, and improve customer satisfaction.
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
                    <a href="#" className="stretched-link">ERP Management</a>
                  </h4>
                  <p className="description">
                    Optimize your internal processes including inventory, sales, and operations with our ERP system.
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
                    <a href="#" className="stretched-link">POS Integration</a>
                  </h4>
                  <p className="description">
                    Seamlessly manage point-of-sale operations in real-time from any location.
                  </p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
          </div>
        </div>
      </section>
      {/* /Featured Services Section */}

      {/* About Section */}
      <section id="about" className="about section">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
              <p className="who-we-are">Who We Are</p>
              <h3>Unleashing Potential with Creative Strategy</h3>
              <p className="fst-italic">
                At OmmSuite, we empower businesses with integrated tools for seamless operations and customer engagement.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check-circle"></i>
                  <span>Streamlined communication across multiple channels including chat, email, and social media.</span>
                </li>
                <li>
                  <i className="bi bi-check-circle"></i>
                  <span>Comprehensive management tools for every aspect of your business, from sales to support.</span>
                </li>
                <li>
                  <i className="bi bi-check-circle"></i>
                  <span>Customizable solutions that grow with your business needs, ensuring long-term success.</span>
                </li>
              </ul>
              <a href="#" className="read-more">
                <span>Read More</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>

            <div className="col-lg-6 about-images" data-aos="fade-up" data-aos-delay="200">
              <div className="row gy-4">
                <div className="col-lg-6">
                  <img src="/assets/img/about-company-1.jpg" className="img-fluid" alt="About Company" />
                </div>
                <div className="col-lg-6">
                  <div className="row gy-4">
                    <div className="col-lg-12">
                      <img src="/assets/img/about-company-2.jpg" className="img-fluid" alt="About Company" />
                    </div>
                    <div className="col-lg-12">
                      <img src="/assets/img/about-company-3.jpg" className="img-fluid" alt="About Company" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /About Section */}

      {/* Clients Section */}
      <section id="clients" className="clients section">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img src="/assets/img/clients/client-1.png" className="img-fluid" alt="Client 1" />
            </div>
            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img src="/assets/img/clients/client-2.png" className="img-fluid" alt="Client 2" />
            </div>
            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img src="/assets/img/clients/client-3.png" className="img-fluid" alt="Client 3" />
            </div>
            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img src="/assets/img/clients/client-4.png" className="img-fluid" alt="Client 4" />
            </div>
            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img src="/assets/img/clients/client-5.png" className="img-fluid" alt="Client 5" />
            </div>
            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img src="/assets/img/clients/client-6.png" className="img-fluid" alt="Client 6" />
            </div>
          </div>
        </div>
      </section>
      {/* /Clients Section */}
    </div>
  );
};

export default Home;
