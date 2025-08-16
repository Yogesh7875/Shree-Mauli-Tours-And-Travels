import React, { useState, useEffect } from 'react';
import chardhamImg from './img/char-dham-yatra.jpg';

const AboutUs = () => {
  const [animate, setAnimate] = useState(false);
  const [scrolledSections, setScrolledSections] = useState({
    about: false,
    services: false,
    fleet: false,
    whyChoose: false,
    features: false
  });
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });

  useEffect(() => {
    // Initial animation
    setAnimate(true);

    // Handle window resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Scroll animation handler
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;

      // Get positions of each section
      const aboutSection = document.getElementById('about-section');
      const servicesSection = document.getElementById('services-section');
      const fleetSection = document.getElementById('fleet-section');
      const whyChooseSection = document.getElementById('why-choose-section');
      const featuresSection = document.getElementById('features-section');

      // Check if sections are in view and update state
      if (aboutSection && scrollPosition > aboutSection.offsetTop + 100) {
        setScrolledSections(prev => ({ ...prev, about: true }));
      }

      if (servicesSection && scrollPosition > servicesSection.offsetTop + 100) {
        setScrolledSections(prev => ({ ...prev, services: true }));
      }

      if (fleetSection && scrollPosition > fleetSection.offsetTop + 100) {
        setScrolledSections(prev => ({ ...prev, fleet: true }));
      }

      if (whyChooseSection && scrollPosition > whyChooseSection.offsetTop + 100) {
        setScrolledSections(prev => ({ ...prev, whyChoose: true }));
      }

      if (featuresSection && scrollPosition > featuresSection.offsetTop + 100) {
        setScrolledSections(prev => ({ ...prev, features: true }));
      }
    };

    // Add event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    // Trigger initial checks
    handleResize();
    handleScroll();

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Helper function to determine device type
  const getDeviceType = () => {
    const { width } = windowSize;
    if (width < 576) return 'mobile';
    if (width >= 576 && width < 992) return 'tablet';
    return 'desktop';
  };

  const deviceType = getDeviceType();

  // Base styles
  const baseStyles = {
    aboutPage: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#333',
      lineHeight: 1.6
    },
    heroSection: {
      height: deviceType === 'mobile' ? '250px' : deviceType === 'tablet' ? '350px' : '400px',
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/road-banner.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: 'white',
      position: 'relative'
    },
    heroContent: {
      opacity: animate ? 1 : 0,
      transform: animate ? 'translateY(0)' : 'translateY(30px)',
      transition: 'opacity 1.5s ease, transform 1.5s ease',
      padding: deviceType === 'mobile' ? '0 20px' : '0'
    },
    heroContentH1: {
      fontSize: deviceType === 'mobile' ? '2rem' : deviceType === 'tablet' ? '3rem' : '3.5rem',
      marginBottom: '1rem',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
    },
    heroContentP: {
      fontSize: deviceType === 'mobile' ? '1.1rem' : deviceType === 'tablet' ? '1.3rem' : '1.5rem',
      fontStyle: 'italic'
    },
    aboutContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: deviceType === 'mobile' ? '1rem' : '2rem'
    },
    header: {
      textAlign: 'center',
      marginBottom: deviceType === 'mobile' ? '2rem' : '3rem',
      paddingBottom: '1rem',
      opacity: animate ? 1 : 0,
      transform: animate ? 'translateY(0)' : 'translateY(-20px)',
      transition: 'opacity 1s ease, transform 1s ease'
    },
    headerH1: {
      color: '#e63946',
      fontSize: deviceType === 'mobile' ? '1.8rem' : deviceType === 'tablet' ? '2.2rem' : '2.5rem',
      marginBottom: '0.5rem'
    },
    tagline: {
      color: '#457b9d',
      fontSize: deviceType === 'mobile' ? '1rem' : '1.2rem',
      fontStyle: 'italic',
      marginBottom: '1rem'
    },
    headerUnderline: {
      height: '3px',
      width: '80px',
      backgroundColor: '#e63946',
      margin: '0 auto',
      position: 'relative'
    },
    headerUnderlineBefore: {
      content: '""',
      position: 'absolute',
      height: '3px',
      width: '120px',
      backgroundColor: '#e63946',
      top: '6px',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    sectionBase: {
      marginBottom: deviceType === 'mobile' ? '2rem' : '4rem',
      padding: deviceType === 'mobile' ? '1rem' : '2rem',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
    },
    sectionVisible: {
      opacity: 1,
      transform: 'translateY(0)'
    },
    sectionHidden: {
      opacity: 0,
      transform: 'translateY(50px)',
      transition: 'opacity 1s ease, transform 1s ease'
    },
    sectionHiddenRight: {
      opacity: 0,
      transform: 'translateX(50px)',
      transition: 'opacity 1s ease, transform 1s ease'
    },
    sectionDelayed: {
      opacity: 0,
      transform: 'translateY(50px)',
      transition: 'opacity 1s ease, transform 1s ease',
      transitionDelay: '0.3s'
    },
    h2: {
      color: '#1d3557',
      fontSize: deviceType === 'mobile' ? '1.5rem' : '2rem',
      marginBottom: deviceType === 'mobile' ? '1rem' : '1.5rem',
      position: 'relative',
      paddingBottom: '0.5rem'
    },
    h2After: {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '60px',
      height: '3px',
      backgroundColor: '#e63946'
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: deviceType === 'mobile' ? '1fr' : deviceType === 'tablet' ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: deviceType === 'mobile' ? '1rem' : '2rem'
    },
    serviceCard: {
      backgroundColor: '#f8f9fa',
      padding: deviceType === 'mobile' ? '1rem' : '1.5rem',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
    },
    serviceCardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
    },
    serviceIcon: {
      fontSize: deviceType === 'mobile' ? '1.5rem' : '1.8rem',
      color: '#e63946',
      marginBottom: '1rem'
    },
    serviceCardH3: {
      color: '#1d3557',
      marginBottom: '0.5rem',
      fontSize: deviceType === 'mobile' ? '1.2rem' : '1.3rem'
    },
    fleetGrid: {
      display: 'grid',
      gridTemplateColumns: deviceType === 'mobile' ? '1fr' : deviceType === 'tablet' ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: deviceType === 'mobile' ? '1rem' : '2rem'
    },
    fleetCard: {
      backgroundColor: '#f8f9fa',
      padding: deviceType === 'mobile' ? '1rem' : '1.5rem',
      borderRadius: '8px',
      textAlign: 'center',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
    },
    fleetCardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
    },
    fleetIcon: {
      fontSize: deviceType === 'mobile' ? '2rem' : '2.5rem',
      marginBottom: '1rem'
    },
    fleetCardH3: {
      color: '#1d3557',
      marginBottom: '0.5rem',
      fontSize: deviceType === 'mobile' ? '1.2rem' : '1.3rem'
    },
    whyChooseContent: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: deviceType === 'mobile' ? '1rem' : '2rem',
      flexDirection: deviceType === 'mobile' ? 'column' : 'row'
    },
    whyChooseImage: {
      flex: deviceType === 'mobile' ? 'none' : 1,
      minWidth: deviceType === 'mobile' ? '100%' : '300px',
      marginBottom: deviceType === 'mobile' ? '1.5rem' : 0
    },
    imageContainer: {
      height: deviceType === 'mobile' ? '250px' : '300px',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
    },
    aboutImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.5s ease'
    },
    aboutImgHover: {
      transform: 'scale(1.05)'
    },
    whyChooseList: {
      flex: deviceType === 'mobile' ? 'none' : 1,
      minWidth: deviceType === 'mobile' ? '100%' : '300px'
    },
    whyChooseListUl: {
      listStyleType: 'none',
      padding: 0
    },
    whyChooseListLi: {
      padding: deviceType === 'mobile' ? '0.6rem 0' : '0.8rem 0',
      position: 'relative',
      paddingLeft: '2rem',
      transition: 'transform 0.3s ease',
      fontSize: deviceType === 'mobile' ? '0.9rem' : '1rem'
    },
    whyChooseListLiHover: {
      transform: 'translateX(5px)'
    },
    whyChooseListLiBefore: {
      content: '"✓"',
      color: '#e63946',
      fontWeight: 'bold',
      position: 'absolute',
      left: 0
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: deviceType === 'mobile' ? '1fr' : deviceType === 'tablet' ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: deviceType === 'mobile' ? '1rem' : '2rem',
      backgroundColor: '#1d3557',
      padding: deviceType === 'mobile' ? '1rem' : '2rem',
      borderRadius: '8px',
      color: 'white'
    },
    featureCard: {
      textAlign: 'center',
      padding: deviceType === 'mobile' ? '1rem' : '1.5rem',
      borderRadius: '8px',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      transition: 'transform 0.3s ease, background-color 0.3s ease'
    },
    featureCardHover: {
      transform: 'translateY(-5px)',
      backgroundColor: 'rgba(255, 255, 255, 0.2)'
    },
    featureIcon: {
      fontSize: deviceType === 'mobile' ? '2rem' : '2.5rem',
      marginBottom: '1rem'
    },
    featureCardH3: {
      marginBottom: '0.5rem',
      color: '#fff',
      fontSize: deviceType === 'mobile' ? '1.2rem' : '1.3rem'
    },
    featureCardP: {
      color: '#f1faee',
      fontSize: deviceType === 'mobile' ? '0.9rem' : '1rem'
    }
  };

  // Enhanced section styles with animation states
  const getSectionStyle = (section) => {
    return {
      ...baseStyles.sectionBase,
      ...(scrolledSections[section] ? baseStyles.sectionVisible : baseStyles.sectionHidden)
    };
  };

  return (
    <div style={baseStyles.aboutPage}>
      {/* Hero Section */}
      <div style={baseStyles.heroSection}>
        <div style={baseStyles.heroContent}>
          <h1 style={baseStyles.heroContentH1}>About Us</h1>
          <p style={baseStyles.heroContentP}>Discover Our Journey</p>
        </div>
      </div>

      {/* Main Content */}
      <div style={baseStyles.aboutContainer}>
        {/* Header */}
        <header style={baseStyles.header}>
          <h1 style={baseStyles.headerH1}>Shree Mauli Tours and Travels</h1>
          <div style={baseStyles.tagline}>Explore Maharashtra with Comfort and Care</div>
          <div style={baseStyles.headerUnderline}>
            <div style={baseStyles.headerUnderlineBefore}></div>
          </div>
        </header>

        {/* About Section */}
        <div id="about-section" style={getSectionStyle('about')}>
          <h2 style={baseStyles.h2}>
            About Our Company
            <span style={baseStyles.h2After}></span>
          </h2>
          <p>
            Established with a passion for travel, Shree Mauli Tours and Travels is dedicated to providing
            exceptional travel experiences throughout Maharashtra. We specialize in pilgrimage tours,
            Maharashtra sightseeing packages, educational trips, and visits to holy sites.
          </p>
          <p>
            It takes enormous efforts and constant devotion to establish such a platform that can perform
            as per the expectations of the clients and provide them with the travel service of their choice.
            At Shree Mauli Tours and Travels, we work 24/7 to establish a platform which can ensure quality
            services for the different parts of Maharashtra. We are established to facilitate the traveling
            needs of the common man as well as corporate clients.
          </p>
        </div>

        {/* Services Section */}
        <div
          id="services-section"
          style={{
            ...baseStyles.sectionBase,
            ...(scrolledSections.services ? baseStyles.sectionVisible : baseStyles.sectionHiddenRight)
          }}
        >
          <h2 style={baseStyles.h2}>
            Our Services
            <span style={baseStyles.h2After}></span>
          </h2>
          <div style={baseStyles.servicesGrid}>
            <div style={baseStyles.serviceCard}>
              <div style={baseStyles.serviceIcon}>✓</div>
              <h3 style={baseStyles.serviceCardH3}>Four Dham Pilgrimages</h3>
              <p>Experience spiritual journeys to the holy sites with our guided tours.</p>
            </div>
            <div style={baseStyles.serviceCard}>
              <div style={baseStyles.serviceIcon}>✓</div>
              <h3 style={baseStyles.serviceCardH3}>Maharashtra Sightseeing</h3>
              <p>Explore the beauty and culture of Maharashtra with our curated packages.</p>
            </div>
            <div style={baseStyles.serviceCard}>
              <div style={baseStyles.serviceIcon}>✓</div>
              <h3 style={baseStyles.serviceCardH3}>Educational Field Trips</h3>
              <p>Organized educational tours for schools and colleges with learning experiences.</p>
            </div>
            <div style={baseStyles.serviceCard}>
              <div style={baseStyles.serviceIcon}>✓</div>
              <h3 style={baseStyles.serviceCardH3}>Holy Site Visits</h3>
              <p>Visit sacred and historical places with knowledgeable guides.</p>
            </div>
          </div>
        </div>

        {/* Fleet Section */}
        <div
          id="fleet-section"
          style={{
            ...baseStyles.sectionBase,
            ...(scrolledSections.fleet ? baseStyles.sectionVisible : baseStyles.sectionHidden),
            transition: 'opacity 1s ease, transform 1s ease'
          }}
        >
          <h2 style={baseStyles.h2}>
            Our Fleet
            <span style={baseStyles.h2After}></span>
          </h2>
          <p>We offer a range of comfortable vehicles to suit your travel needs:</p>
          <div style={baseStyles.fleetGrid}>
            <div style={baseStyles.fleetCard}>
              <div style={baseStyles.fleetIcon}>🚐</div>
              <h3 style={baseStyles.fleetCardH3}>16-Seater Bus</h3>
              <p>Perfect for small groups and family outings</p>
            </div>
            <div style={baseStyles.fleetCard}>
              <div style={baseStyles.fleetIcon}>🚐</div>
              <h3 style={baseStyles.fleetCardH3}>26-Seater Bus</h3>
              <p>Ideal for medium-sized groups and school trips</p>
            </div>
            <div style={baseStyles.fleetCard}>
              <div style={baseStyles.fleetIcon}>🚌</div>
              <h3 style={baseStyles.fleetCardH3}>36-Seater Bus</h3>
              <p>Comfortable travel for larger groups</p>
            </div>
            <div style={baseStyles.fleetCard}>
              <div style={baseStyles.fleetIcon}>🚌</div>
              <h3 style={baseStyles.fleetCardH3}>50-Seater Bus</h3>
              <p>Spacious option for large groups and corporate events</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div
          id="why-choose-section"
          style={{
            ...baseStyles.sectionBase,
            ...(scrolledSections.whyChoose ? baseStyles.sectionVisible : baseStyles.sectionHidden),
            transition: 'opacity 1s ease, transform 1s ease'
          }}
        >
          <h2 style={baseStyles.h2}>
            Why Choose Shree Mauli Tours and Travels?
            <span style={baseStyles.h2After}></span>
          </h2>
          <div style={baseStyles.whyChooseContent}>
            <div style={baseStyles.whyChooseImage}>
              <div style={baseStyles.imageContainer}>
                <img src={chardhamImg} alt="Char Dham Tour with Shree Mauli" style={baseStyles.aboutImg} />
              </div>
            </div>
            <div style={baseStyles.whyChooseList}>
              <ul style={baseStyles.whyChooseListUl}>
                <li style={baseStyles.whyChooseListLi}>
                  <span style={baseStyles.whyChooseListLiBefore}>✓</span>
                  Specialized in Char Dham Yatra with expert Himalayan route drivers
                </li>
                <li style={baseStyles.whyChooseListLi}>
                  <span style={baseStyles.whyChooseListLiBefore}>✓</span>
                  Experienced in organizing safe and educational school trips
                </li>
                <li style={baseStyles.whyChooseListLi}>
                  <span style={baseStyles.whyChooseListLiBefore}>✓</span>
                  Well-maintained, high-clearance vehicles for mountain terrain
                </li>
                <li style={baseStyles.whyChooseListLi}>
                  <span style={baseStyles.whyChooseListLiBefore}>✓</span>
                  Complete pilgrimage packages including accommodation and meals
                </li>
                <li style={baseStyles.whyChooseListLi}>
                  <span style={baseStyles.whyChooseListLiBefore}>✓</span>
                  Customized educational itineraries for student groups
                </li>
                <li style={baseStyles.whyChooseListLi}>
                  <span style={baseStyles.whyChooseListLiBefore}>✓</span>
                  Experienced tour guides for religious and educational tours
                </li>
                <li style={baseStyles.whyChooseListLi}>
                  <span style={baseStyles.whyChooseListLiBefore}>✓</span>
                  Special student discounts and group packages
                </li>
                <li style={baseStyles.whyChooseListLi}>
                  <span style={baseStyles.whyChooseListLiBefore}>✓</span>
                  24/7 support during your pilgrimage or educational tour
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div
          id="features-section"
          style={{
            ...baseStyles.sectionBase,
            ...(scrolledSections.features ? baseStyles.sectionVisible : baseStyles.sectionDelayed),
            transition: 'opacity 1s ease, transform 1s ease',
            transitionDelay: scrolledSections.features ? '0s' : '0.3s'
          }}
        >
          <div style={baseStyles.featuresGrid}>
            <div style={baseStyles.featureCard}>
              <div style={baseStyles.featureIcon}>💰</div>
              <h3 style={baseStyles.featureCardH3}>AFFORDABLE PRICE</h3>
              <p style={baseStyles.featureCardP}>Best in the market competitive pricing for all our services</p>
            </div>
            <div style={baseStyles.featureCard}>
              <div style={baseStyles.featureIcon}>🧭</div>
              <h3 style={baseStyles.featureCardH3}>BEST DESTINATIONS</h3>
              <p style={baseStyles.featureCardP}>Choose from 500+ destinations across Maharashtra</p>
            </div>
            <div style={baseStyles.featureCard}>
              <div style={baseStyles.featureIcon}>👤</div>
              <h3 style={baseStyles.featureCardH3}>PERSONAL SERVICE</h3>
              <p style={baseStyles.featureCardP}>Quality service with well-mannered, professional drivers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;