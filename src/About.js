import React, { useState, useEffect } from 'react';

const AboutUs = () => {
  const [animate, setAnimate] = useState(false);
  const [scrolledSections, setScrolledSections] = useState({
    about: false,
    services: false,
    fleet: false,
    whyChoose: false,
    features: false
  });
  
  useEffect(() => {
    // Initial animation
    setAnimate(true);
    
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
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Trigger initial check
    handleScroll();
    
    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define styles object for React
  const styles = {
    aboutPage: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#333',
      lineHeight: 1.6
    },
    heroSection: {
      height: '400px',
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
      transition: 'opacity 1.5s ease, transform 1.5s ease'
    },
    heroContentH1: {
      fontSize: '3.5rem',
      marginBottom: '1rem',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
    },
    heroContentP: {
      fontSize: '1.5rem',
      fontStyle: 'italic'
    },
    aboutContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem'
    },
    header: {
      textAlign: 'center',
      marginBottom: '3rem',
      paddingBottom: '1rem',
      opacity: animate ? 1 : 0,
      transform: animate ? 'translateY(0)' : 'translateY(-20px)',
      transition: 'opacity 1s ease, transform 1s ease'
    },
    headerH1: {
      color: '#e63946',
      fontSize: '2.5rem',
      marginBottom: '0.5rem'
    },
    tagline: {
      color: '#457b9d',
      fontSize: '1.2rem',
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
      marginBottom: '4rem',
      padding: '2rem',
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
      fontSize: '2rem',
      marginBottom: '1.5rem',
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
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem'
    },
    serviceCard: {
      backgroundColor: '#f8f9fa',
      padding: '1.5rem',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
    },
    serviceCardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
    },
    serviceIcon: {
      fontSize: '1.8rem',
      color: '#e63946',
      marginBottom: '1rem'
    },
    serviceCardH3: {
      color: '#1d3557',
      marginBottom: '0.5rem'
    },
    fleetGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '2rem'
    },
    fleetCard: {
      backgroundColor: '#f8f9fa',
      padding: '1.5rem',
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
      fontSize: '2.5rem',
      marginBottom: '1rem'
    },
    fleetCardH3: {
      color: '#1d3557',
      marginBottom: '0.5rem'
    },
    whyChooseContent: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '2rem'
    },
    whyChooseImage: {
      flex: 1,
      minWidth: '300px'
    },
    imageContainer: {
      height: '300px',
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
      flex: 1,
      minWidth: '300px'
    },
    whyChooseListUl: {
      listStyleType: 'none',
      padding: 0
    },
    whyChooseListLi: {
      padding: '0.8rem 0',
      position: 'relative',
      paddingLeft: '2rem',
      transition: 'transform 0.3s ease'
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
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      backgroundColor: '#1d3557',
      padding: '2rem',
      borderRadius: '8px',
      color: 'white'
    },
    featureCard: {
      textAlign: 'center',
      padding: '1.5rem',
      borderRadius: '8px',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      transition: 'transform 0.3s ease, background-color 0.3s ease'
    },
    featureCardHover: {
      transform: 'translateY(-5px)',
      backgroundColor: 'rgba(255, 255, 255, 0.2)'
    },
    featureIcon: {
      fontSize: '2.5rem',
      marginBottom: '1rem'
    },
    featureCardH3: {
      marginBottom: '0.5rem',
      color: '#fff'
    },
    featureCardP: {
      color: '#f1faee'
    },
    // Responsive styles will be handled with conditional rendering
  };

  // Responsive styles
  const getResponsiveStyles = () => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      return {
        heroSection: {
          ...styles.heroSection,
          height: '300px'
        },
        heroContentH1: {
          ...styles.heroContentH1,
          fontSize: '2.5rem'
        },
        aboutContainer: {
          ...styles.aboutContainer,
          padding: '1rem'
        },
        headerH1: {
          ...styles.headerH1,
          fontSize: '2rem'
        },
        servicesGrid: {
          ...styles.servicesGrid,
          gridTemplateColumns: '1fr'
        },
        fleetGrid: {
          ...styles.fleetGrid,
          gridTemplateColumns: '1fr'
        },
        featuresGrid: {
          ...styles.featuresGrid,
          gridTemplateColumns: '1fr'
        },
        whyChooseContent: {
          ...styles.whyChooseContent,
          flexDirection: 'column'
        },
        whyChooseImage: {
          ...styles.whyChooseImage,
          marginBottom: '1.5rem'
        }
      };
    }
    return {};
  };

  // Combine base styles with responsive styles
  const responsiveStyles = getResponsiveStyles();
  const combinedStyles = {
    ...styles,
    ...responsiveStyles
  };

  // Enhanced section styles with animation states
  const getSectionStyle = (section) => {
    return {
      ...styles.sectionBase,
      ...(scrolledSections[section] ? styles.sectionVisible : styles.sectionHidden)
    };
  };

  return (
    <div style={combinedStyles.aboutPage}>
      {/* Hero Section */}
      <div style={combinedStyles.heroSection}>
        <div style={combinedStyles.heroContent}>
          <h1 style={combinedStyles.heroContentH1}>About Us</h1>
          <p style={combinedStyles.heroContentP}>Discover Our Journey</p>
        </div>
      </div>
      
      {/* Main Content */}
      <div style={combinedStyles.aboutContainer}>
        {/* Header */}
        <header style={combinedStyles.header}>
          <h1 style={combinedStyles.headerH1}>Shree Mauli Tours and Travels</h1>
          <div style={combinedStyles.tagline}>Explore Maharashtra with Comfort and Care</div>
          <div style={combinedStyles.headerUnderline}>
            <div style={combinedStyles.headerUnderlineBefore}></div>
          </div>
        </header>
        
        {/* About Section */}
        <div id="about-section" style={getSectionStyle('about')}>
          <h2 style={combinedStyles.h2}>
            About Our Company
            <span style={combinedStyles.h2After}></span>
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
            ...styles.sectionBase,
            ...(scrolledSections.services ? styles.sectionVisible : styles.sectionHiddenRight)
          }}
        >
          <h2 style={combinedStyles.h2}>
            Our Services
            <span style={combinedStyles.h2After}></span>
          </h2>
          <div style={combinedStyles.servicesGrid}>
            <div style={combinedStyles.serviceCard}>
              <div style={combinedStyles.serviceIcon}>✓</div>
              <h3 style={combinedStyles.serviceCardH3}>Four Dham Pilgrimages</h3>
              <p>Experience spiritual journeys to the holy sites with our guided tours.</p>
            </div>
            <div style={combinedStyles.serviceCard}>
              <div style={combinedStyles.serviceIcon}>✓</div>
              <h3 style={combinedStyles.serviceCardH3}>Maharashtra Sightseeing</h3>
              <p>Explore the beauty and culture of Maharashtra with our curated packages.</p>
            </div>
            <div style={combinedStyles.serviceCard}>
              <div style={combinedStyles.serviceIcon}>✓</div>
              <h3 style={combinedStyles.serviceCardH3}>Educational Field Trips</h3>
              <p>Organized educational tours for schools and colleges with learning experiences.</p>
            </div>
            <div style={combinedStyles.serviceCard}>
              <div style={combinedStyles.serviceIcon}>✓</div>
              <h3 style={combinedStyles.serviceCardH3}>Holy Site Visits</h3>
              <p>Visit sacred and historical places with knowledgeable guides.</p>
            </div>
          </div>
        </div>
        
        {/* Fleet Section */}
        <div 
          id="fleet-section" 
          style={{
            ...styles.sectionBase,
            ...(scrolledSections.fleet ? styles.sectionVisible : styles.sectionHidden),
            transition: 'opacity 1s ease, transform 1s ease'
          }}
        >
          <h2 style={combinedStyles.h2}>
            Our Fleet
            <span style={combinedStyles.h2After}></span>
          </h2>
          <p>We offer a range of comfortable vehicles to suit your travel needs:</p>
          <div style={combinedStyles.fleetGrid}>
            <div style={combinedStyles.fleetCard}>
              <div style={combinedStyles.fleetIcon}>🚐</div>
              <h3 style={combinedStyles.fleetCardH3}>16-Seater Bus</h3>
              <p>Perfect for small groups and family outings</p>
            </div>
            <div style={combinedStyles.fleetCard}>
              <div style={combinedStyles.fleetIcon}>🚐</div>
              <h3 style={combinedStyles.fleetCardH3}>26-Seater Bus</h3>
              <p>Ideal for medium-sized groups and school trips</p>
            </div>
            <div style={combinedStyles.fleetCard}>
              <div style={combinedStyles.fleetIcon}>🚌</div>
              <h3 style={combinedStyles.fleetCardH3}>36-Seater Bus</h3>
              <p>Comfortable travel for larger groups</p>
            </div>
            <div style={combinedStyles.fleetCard}>
              <div style={combinedStyles.fleetIcon}>🚌</div>
              <h3 style={combinedStyles.fleetCardH3}>50-Seater Bus</h3>
              <p>Spacious option for large groups and corporate events</p>
            </div>
          </div>
        </div>
        
        {/* Why Choose Us Section */}
        <div 
          id="why-choose-section" 
          style={{
            ...styles.sectionBase,
            ...(scrolledSections.whyChoose ? styles.sectionVisible : styles.sectionHidden),
            transition: 'opacity 1s ease, transform 1s ease'
          }}
        >
          <h2 style={combinedStyles.h2}>
            Why Choose Shree Mauli Tours and Travels?
            <span style={combinedStyles.h2After}></span>
          </h2>
          <div style={combinedStyles.whyChooseContent}>
            <div style={combinedStyles.whyChooseImage}>
              <div style={combinedStyles.imageContainer}>
                <img src="/about.jpg" alt="Shree Mauli Tours and Travels" style={combinedStyles.aboutImg} />
              </div>
            </div>
            <div style={combinedStyles.whyChooseList}>
              <ul style={combinedStyles.whyChooseListUl}>
                <li style={combinedStyles.whyChooseListLi}>
                  <span style={combinedStyles.whyChooseListLiBefore}>✓</span>
                  Customer security and safety is guaranteed
                </li>
                <li style={combinedStyles.whyChooseListLi}>
                  <span style={combinedStyles.whyChooseListLiBefore}>✓</span>
                  Free masks for passengers
                </li>
                <li style={combinedStyles.whyChooseListLi}>
                  <span style={combinedStyles.whyChooseListLiBefore}>✓</span>
                  Fully sanitized vehicles with trained drivers
                </li>
                <li style={combinedStyles.whyChooseListLi}>
                  <span style={combinedStyles.whyChooseListLiBefore}>✓</span>
                  Comfortable seating arrangements
                </li>
                <li style={combinedStyles.whyChooseListLi}>
                  <span style={combinedStyles.whyChooseListLiBefore}>✓</span>
                  Satisfaction of all customers
                </li>
                <li style={combinedStyles.whyChooseListLi}>
                  <span style={combinedStyles.whyChooseListLiBefore}>✓</span>
                  Easy booking with instant confirmation
                </li>
                <li style={combinedStyles.whyChooseListLi}>
                  <span style={combinedStyles.whyChooseListLiBefore}>✓</span>
                  Transparent billing with no hidden fees
                </li>
                <li style={combinedStyles.whyChooseListLi}>
                  <span style={combinedStyles.whyChooseListLiBefore}>✓</span>
                  Door-to-door pickup and drop-off service
                </li>
                <li style={combinedStyles.whyChooseListLi}>
                  <span style={combinedStyles.whyChooseListLiBefore}>✓</span>
                  Customer-friendly cancellation policy
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Features Section */}
        <div 
          id="features-section" 
          style={{
            ...styles.sectionBase,
            ...(scrolledSections.features ? styles.sectionVisible : styles.sectionDelayed),
            transition: 'opacity 1s ease, transform 1s ease',
            transitionDelay: scrolledSections.features ? '0s' : '0.3s'
          }}
        >
          <div style={combinedStyles.featuresGrid}>
            <div style={combinedStyles.featureCard}>
              <div style={combinedStyles.featureIcon}>💰</div>
              <h3 style={combinedStyles.featureCardH3}>AFFORDABLE PRICE</h3>
              <p style={combinedStyles.featureCardP}>Best in the market competitive pricing for all our services</p>
            </div>
            <div style={combinedStyles.featureCard}>
              <div style={combinedStyles.featureIcon}>🧭</div>
              <h3 style={combinedStyles.featureCardH3}>BEST DESTINATIONS</h3>
              <p style={combinedStyles.featureCardP}>Choose from 500+ destinations across Maharashtra</p>
            </div>
            <div style={combinedStyles.featureCard}>
              <div style={combinedStyles.featureIcon}>👤</div>
              <h3 style={combinedStyles.featureCardH3}>PERSONAL SERVICE</h3>
              <p style={combinedStyles.featureCardP}>Quality service with well-mannered, professional drivers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;