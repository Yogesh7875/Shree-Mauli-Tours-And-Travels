import { useState, useEffect } from "react";
import Places from "./Places";
import { 
  FiArrowLeft, 
  FiArrowRight, 
  FiClock, 
  FiMapPin, 
  FiDollarSign,
  FiNavigation2, // Airplane alternative
  FiTruck,       // Car alternative
  FiGift
} from "react-icons/fi";
import busImage from "./img/bus.jpg";
import greenBusImage from "./img/greenBus.jpg";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    { 
      image: busImage, 
      title: "Premium Coach Service", 
      text: "Experience luxury travel with reclining seats, AC, and entertainment" 
    },
    { 
      image: greenBusImage, 
      title: "Eco-Friendly Journeys", 
      text: "Hybrid buses reducing carbon emissions by 40%" 
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const packages = [
    { 
      name: "Coastal Explorer", 
      duration: "3 Days", 
      price: "₹7999", 
      highlights: ["Beach Resorts", "Water Sports", "5 Star Meals"] 
    },
    { 
      name: "Mountain Trek", 
      duration: "5 Days", 
      price: "₹12,999", 
      highlights: ["Camping", "Hiking", "Local Cuisine"] 
    }
  ];

  return (
    <div>
      {/* Carousel Section */}
      <div style={styles.carousel}>
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              ...styles.carouselItem,
              transform: `translateX(${(index - activeIndex) * 100}%)`
            }}
          >
            <div style={styles.imageContainer}>
              <img src={slide.image} alt={slide.title} style={styles.carouselImage} />
              <div style={styles.overlay}></div>
            </div>
            
            <div style={styles.carouselCaption}>
              <h2 style={styles.captionTitle}>{slide.title}</h2>
              <p style={styles.captionText}>{slide.text}</p>
              <button style={styles.ctaButton}>Book Now</button>
            </div>
          </div>
        ))}

        <button 
          style={styles.prevButton} 
          onClick={() => setActiveIndex(prev => prev === 0 ? slides.length - 1 : prev - 1)}
        >
          <FiArrowLeft />
        </button>
        <button 
          style={styles.nextButton} 
          onClick={() => setActiveIndex(prev => (prev + 1) % slides.length)}
        >
          <FiArrowRight />
        </button>
      </div>

      {/* Tour Packages Section */}
      <div style={styles.tourPackages}>
        <h2 style={styles.sectionTitle}>Popular Packages</h2>
        <div style={styles.packageGrid}>
          {packages.map((pkg, index) => (
            <div key={index} style={styles.packageCard}>
              <h3 style={styles.packageTitle}>{pkg.name}</h3>
              <div style={styles.packageInfo}>
                <span><FiClock /> {pkg.duration}</span>
                <span><FiDollarSign /> {pkg.price}</span>
              </div>
              <ul style={styles.highlights}>
                {pkg.highlights.map((h, i) => (
                  <li key={i} style={styles.highlightItem}>{h}</li>
                ))}
              </ul>
              <button style={styles.packageButton}>View Details</button>
            </div>
          ))}
        </div>
      </div>

      {/* Outstation Tours Section */}
      <div style={styles.outstationSection}>
        <h2 style={styles.sectionTitle}>Outstation Tours</h2>
        <div style={styles.destinationGrid}>
          <div style={styles.destinationColumn}>
            {['MANABALE SHWAR', 'LONAVALA', 'GOA'].map((dest, index) => (
              <div key={index} style={styles.destinationCard}>
                <FiMapPin style={styles.destinationIcon} />
                <h3 style={styles.destinationTitle}>{dest}</h3>
                <div style={styles.destinationInfo}>
                  <span><FiClock /> 12hrs</span>
                  <span><FiDollarSign /> ₹1999</span>
                </div>
                <button style={styles.destinationButton}>
                  Book Now <FiArrowRight />
                </button>
              </div>
            ))}
          </div>

          <div style={styles.destinationColumn}>
            {['AIRPORT TRANSFER', 'OUTSTATION', 'MUMBAI'].map((service, index) => (
              <div key={index} style={styles.serviceCard}>
                <div style={styles.serviceHeader}>
                  {index % 2 === 0 ? <FiNavigation2 /> : <FiTruck />}
                  <h3 style={styles.serviceTitle}>{service}</h3>
                </div>
                <button style={styles.serviceButton}>
                  View Rates <FiArrowRight />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.specialOffer}>
          <div style={styles.offerContent}>
            <h2 style={styles.offerTitle}>Special Offer</h2>
            <p style={styles.offerText}>Free Roar Juice on all bookings!</p>
            <button style={styles.offerButton}>
              Claim Now <FiGift />
            </button>
          </div>
        </div>
      </div>
      <Places/>
    </div>
    
  );
};
// All styles
const styles = {
  carousel: {
    position: "relative",
    width: "100%",
    height: "70vh",
    minHeight: "500px",
    overflow: "hidden",
  },
  carouselItem: {
    position: "absolute",
    width: "100%",
    height: "100%",
    transition: "transform 0.5s ease",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  carouselImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "brightness(0.7)",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3))",
  },
  carouselCaption: {
    position: "absolute",
    top: "50%",
    left: "10%",
    transform: "translateY(-50%)",
    color: "white",
    maxWidth: "600px",
  },
  captionTitle: {
    fontSize: "2.5rem",
    margin: "0 0 1rem",
    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
  },
  captionText: {
    fontSize: "1.2rem",
    margin: "0 0 2rem",
  },
  ctaButton: {
    padding: "12px 35px",
    fontSize: "1.1rem",
    backgroundColor: "#FF6B6B",
    color: "white",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    ":hover": {
      backgroundColor: "#FF5252",
    },
  },
  prevButton: {
    position: "absolute",
    top: "50%",
    left: "20px",
    transform: "translateY(-50%)",
    background: "rgba(255,255,255,0.2)",
    border: "none",
    color: "white",
    padding: "15px",
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: "1.5rem",
    backdropFilter: "blur(5px)",
  },
  nextButton: {
    position: "absolute",
    top: "50%",
    right: "20px",
    transform: "translateY(-50%)",
    background: "rgba(255,255,255,0.2)",
    border: "none",
    color: "white",
    padding: "15px",
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: "1.5rem",
    backdropFilter: "blur(5px)",
  },
  tourPackages: {
    padding: "4rem 2rem",
    backgroundColor: "#f9f9f9",
  },
  sectionTitle: {
    textAlign: "center",
    fontSize: "2.2rem",
    marginBottom: "3rem",
    color: "#333",
  },
  packageGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  packageCard: {
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "2rem",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease",
    ":hover": {
      transform: "translateY(-5px)",
    },
  },
  packageTitle: {
    fontSize: "1.5rem",
    margin: "0 0 1rem",
  },
  packageInfo: {
    display: "flex",
    justifyContent: "space-between",
    margin: "1rem 0",
    color: "#666",
  },
  highlights: {
    listStyle: "none",
    padding: 0,
    margin: "1.5rem 0",
  },
  highlightItem: {
    padding: "0.5rem 0",
    borderBottom: "1px solid #eee",
  },
  packageButton: {
    padding: "10px 25px",
    fontSize: "1rem",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    width: "100%",
    transition: "all 0.3s ease",
    ":hover": {
      backgroundColor: "#45a049",
    },
  },
  outstationSection: {
    padding: "4rem 2rem",
    backgroundColor: "white",
  },
  destinationGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },
  destinationColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  destinationCard: {
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "1.5rem",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    borderLeft: "4px solid #FF6B6B",
  },
  destinationIcon: {
    fontSize: "1.8rem",
    color: "#FF6B6B",
    marginBottom: "1rem",
  },
  destinationTitle: {
    fontSize: "1.3rem",
    margin: "0 0 1rem",
  },
  destinationInfo: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1rem",
    color: "#666",
  },
  destinationButton: {
    padding: "8px 20px",
    fontSize: "0.9rem",
    backgroundColor: "#FF6B6B",
    color: "white",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  serviceCard: {
    backgroundColor: "#f8f9fa",
    borderRadius: "10px",
    padding: "1.5rem",
    border: "2px solid #eee",
  },
  serviceHeader: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    marginBottom: "1rem",
  },
  serviceTitle: {
    fontSize: "1.2rem",
    margin: 0,
  },
  serviceButton: {
    padding: "8px 20px",
    fontSize: "0.9rem",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
  },
  specialOffer: {
    marginTop: "4rem",
    backgroundColor: "#FF6B6B",
    borderRadius: "15px",
    padding: "2rem",
    textAlign: "center",
    color: "white",
  },
  offerTitle: {
    fontSize: "2rem",
    margin: "0 0 1rem",
  },
  offerText: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
  },
  offerButton: {
    padding: "12px 40px",
    fontSize: "1.1rem",
    backgroundColor: "white",
    color: "#FF6B6B",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    margin: "0 auto",
    ":hover": {
      backgroundColor: "#f0f0f0",
    },
  },
};

export default Home;