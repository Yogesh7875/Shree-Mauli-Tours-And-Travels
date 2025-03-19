import React, { useState, useEffect } from 'react';

const ServicesPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    {
      id: 1,
      title: 'Village Tours',
      description: 'Experience the authentic rural life of Maharashtra with our guided village tours.',
      icon: '🏞️'
    },
    {
      id: 2,
      title: 'Maharashtra Sightseeing',
      description: 'Explore the beautiful landscapes and historical sites across Maharashtra.',
      icon: '🏰'
    },
    {
      id: 3,
      title: 'Picnic Trips',
      description: 'Enjoy memorable picnic outings with family and friends to scenic locations.',
      icon: '🧺'
    },
    {
      id: 4,
      title: 'Educational Tours',
      description: 'Specially designed tours for schools and colleges to enhance learning experiences.',
      icon: '🎓'
    },
    {
      id: 5,
      title: 'Pilgrimages',
      description: 'Visit sacred temples and religious sites with our comfortable travel arrangements.',
      icon: '🛕'
    }
  ];

  const busTypes = [
    { id: 1, seats: 16, description: 'Perfect for small groups and families' },
    { id: 2, seats: 26, description: 'Ideal for medium-sized groups and school trips' },
    { id: 3, seats: 36, description: 'Suitable for large groups and corporate outings' },
    { id: 4, seats: 50, description: 'Best for large pilgrimages and extended tours' }
  ];

  return (
    <div className="services-container">
      <header className={`services-header ${isLoaded ? 'fade-in' : ''}`}>
        <h1>Shree Mauli Yatra Company</h1>
        <p>Your trusted partner for all travel needs in Maharashtra</p>
      </header>

      <section className={`services-section ${isLoaded ? 'slide-in' : ''}`}>
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`service-card ${isLoaded ? 'fade-in' : ''}`}
              style={{ animationDelay: `${service.id * 0.15}s` }}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className={`service-description ${activeService === service.id ? 'show' : ''}`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* <div className="breadcrumb">
        <a href="/">Home</a> <span>{'>'}</span> <span>Contact Us</span>
      </div> */}

      <section className={`bus-types-section ${isLoaded ? 'slide-in' : ''}`} style={{ animationDelay: '0.5s' }}>
        <h2>Available Bus Types</h2>
        <div className="bus-types-grid">
          {busTypes.map((bus) => (
            <div 
              key={bus.id} 
              className={`bus-card ${isLoaded ? 'fade-in' : ''}`}
              style={{ animationDelay: `${bus.id * 0.15 + 0.5}s` }}
            >
              <div className="bus-icon">🚌</div>
              <h3>{bus.seats}-Seater Bus</h3>
              <p>{bus.description}</p>
            </div>
          ))}
        </div>
      </section>

      

      <style jsx>{`
        .services-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
        }

        .services-header {
          text-align: center;
          margin-bottom: 40px;
          opacity: 0;
        }

        .services-header h1 {
          color: #d32f2f;
          font-size: 2.5rem;
          margin-bottom: 10px;
        }

        .services-header p {
          font-size: 1.2rem;
          color: #666;
        }

        .services-section, .bus-types-section, .contact-section {
          margin-bottom: 50px;
          opacity: 0;
          transform: translateY(20px);
        }

        h2 {
          text-align: center;
          color: #d32f2f;
          font-size: 1.8rem;
          margin-bottom: 30px;
          position: relative;
        }

        h2:after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background-color: #d32f2f;
        }

        .services-grid, .bus-types-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .service-card, .bus-card {
          background-color: #fff;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s, box-shadow 0.3s;
          text-align: center;
          opacity: 0;
        }

        .service-card:hover, .bus-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        }

        .service-icon, .bus-icon {
          font-size: 2.5rem;
          margin-bottom: 15px;
        }

        .service-card h3, .bus-card h3 {
          color: #d32f2f;
          margin-bottom: 10px;
        }

        .service-description {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s, opacity 0.3s;
          opacity: 0;
        }

        .service-description.show {
          max-height: 100px;
          opacity: 1;
        }

        .contact-info {
          background-color: #f9f9f9;
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 20px;
        }

        .contact-item {
          margin-bottom: 10px;
          font-size: 1.1rem;
        }

        .cta-button {
          text-align: center;
        }

        .cta-button button {
          background-color: #d32f2f;
          color: white;
          border: none;
          padding: 12px 30px;
          font-size: 1.1rem;
          border-radius: 30px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .cta-button button:hover {
          background-color: #b71c1c;
        }

        /* Animations */
        .fade-in {
          animation: fadeIn 0.8s forwards;
        }

        .slide-in {
          animation: slideIn 0.8s forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .services-grid, .bus-types-grid {
            grid-template-columns: 1fr;
          }
          
          .services-header h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;