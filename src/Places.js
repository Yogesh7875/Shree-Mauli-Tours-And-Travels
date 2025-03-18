import { useState, useEffect } from 'react';
import { FaBriefcase, FaUsers, FaUserPlus, FaMap } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Places = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const destinations = [
    { name: 'MAHABALESHWAR', image: 'https://samtatoursandtravels.com/wp-content/uploads/2024/05/1.jpg' },
    { name: 'LONAVALA', image: 'https://samtatoursandtravels.com/wp-content/uploads/2024/05/2.jpg' },
    { name: 'PANDHARPUR', image: 'https://samtatoursandtravels.com/wp-content/uploads/2024/05/3.jpg' },
    { name: 'GOA', image: 'https://samtatoursandtravels.com/wp-content/uploads/2024/05/goa.webp' },
    { name: 'AJANTHA', image: 'https://samtatoursandtravels.com/wp-content/uploads/2024/05/ajintha-1.jpg' },
    { name: 'AURANGABAD', image: 'https://samtatoursandtravels.com/wp-content/uploads/2024/05/4.jpg' },
    { name: 'AIRPORT', image: 'https://samtatoursandtravels.com/wp-content/uploads/2024/05/11.jpg' },
    { name: 'OUTSTATION', image: 'https://samtatoursandtravels.com/wp-content/uploads/2024/05/6.jpg' },
    { name: 'NAGPUR', image: 'https://samtatoursandtravels.com/wp-content/uploads/2024/05/9.jpg' },
    { name: 'OUTSTATION', image: 'https://samtatoursandtravels.com/wp-content/uploads/2024/05/10.jpg' },
    { name: 'SHIRDI', image: 'https://samtatoursandtravels.com/wp-content/uploads/2024/05/7.jpg' },
    { name: 'MUMBAI', image: 'https://samtatoursandtravels.com/wp-content/uploads/2024/05/8.jpg' },
  ];

  const stats = [
    { icon: <FaBriefcase />, number: '250+', label: 'Corporate Clients' },
    { icon: <FaUsers />, number: '4000+', label: 'Satisfied Clients' },
    { icon: <FaUserPlus />, number: '40+', label: 'Professional Drivers' },
    { icon: <FaMap />, number: '900+', label: 'Monthly Rides' },
  ];

  return (
    <div style={styles.container}>
      {/* Outstation Tours Section */}
      <div style={styles.section}>
        <div style={styles.headingCenter}>
          <h2 style={styles.heading}>Outstation<span style={styles.highlight}>Tour</span></h2>
        </div>
        
        <div data-aos="fade-down" data-aos-duration="1200" style={styles.tourGrid}>
          {destinations.map((dest, index) => (
            <a key={index} href="https://samtatoursandtravels.com/tour/" style={styles.tourCard}>
              <div style={styles.tourImageContainer}>
                <img src={dest.image} alt={dest.name} style={styles.tourImage} />
              </div>
              <p style={styles.tourName}>{dest.name}</p>
            </a>
          ))}
        </div>

        <div style={styles.space}></div>
        
        <a href="https://samtatoursandtravels.com/tour/" style={styles.buttonLink}>
          <button style={styles.readMoreButton}>
            <span style={styles.buttonText}>Read More</span>
          </button>
        </a>
      </div>

      {/* Key Indicators Section */}
      <div style={styles.keyIndicatorsSection}>
        <div style={styles.headingCenter}>
          <h2 style={styles.heading}>Key Indicators</h2>
        </div>
        
        <div style={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-duration="3000"
              style={styles.statCard}
            >
              <div style={styles.statIcon}>{stat.icon}</div>
              <h3 style={styles.statNumber}>{stat.number}</h3>
              <h4 style={styles.statLabel}>{stat.label}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
  },
  section: {
    marginBottom: '60px',
  },
  headingCenter: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#333',
    margin: 0,
  },
  highlight: {
    color: '#FF6B6B',
  },
  tourGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    marginBottom: '30px',
  },
  tourCard: {
    textDecoration: 'none',
    color: '#333',
    transition: 'transform 0.3s ease',
    ':hover': {
      transform: 'translateY(-5px)',
    },
  },
  tourImageContainer: {
    borderRadius: '10px',
    overflow: 'hidden',
    height: '200px',
  },
  tourImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  tourName: {
    textAlign: 'center',
    fontSize: '1.2rem',
    margin: '10px 0',
  },
  space: {
    height: '40px',
  },
  buttonLink: {
    display: 'flex',
    justifyContent: 'center',
    textDecoration: 'none',
  },
  readMoreButton: {
    padding: '12px 30px',
    fontSize: '1.1rem',
    backgroundColor: '#FF6B6B',
    color: 'white',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    ':hover': {
      backgroundColor: '#FF5252',
      transform: 'scale(1.05)',
    },
  },
  buttonText: {
    position: 'relative',
    zIndex: 1,
  },
  keyIndicatorsSection: {
    backgroundColor: '#f9f9f9',
    padding: '40px 20px',
    borderRadius: '15px',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '30px',
    marginTop: '30px',
  },
  statCard: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
  statIcon: {
    fontSize: '2.5rem',
    color: '#FF6B6B',
    marginBottom: '15px',
  },
  statNumber: {
    fontSize: '2rem',
    margin: '10px 0',
    color: '#333',
  },
  statLabel: {
    fontSize: '1.1rem',
    margin: 0,
    color: '#666',
  },
};

export default Places;