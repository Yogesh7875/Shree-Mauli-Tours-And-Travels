import { useState, useEffect, useRef } from "react";
import Places from "./Places";
import { 
  FiArrowLeft, 
  FiArrowRight, 
  FiClock, 
  FiMapPin, 
  FiDollarSign,
  FiNavigation2, // Airplane alternative
  FiTruck,       // Car alternative
  FiGift,
  FiStar        // Added for testimonials
} from "react-icons/fi";
import busImage from "./img/bus.jpg";
import greenBusImage from "./img/greenBus.jpg";
import { motion } from "framer-motion"; // Import for animations

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = {
    packages: useRef(null),
    outstation: useRef(null),
    special: useRef(null)
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.4,
        type: "spring",
        stiffness: 100
      } 
    },
    hover: { 
      y: -10, 
      boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
      transition: { duration: 0.3 }
    }
  };

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
  
  // Testimonials section data
  const testimonials = [
    {
      name: "Rahul Sharma",
      location: "Mumbai",
      text: "The Coastal Explorer package exceeded our expectations. The beach resorts were amazing!"
    },
    {
      name: "Priya Patel",
      location: "Delhi",
      text: "Our Mountain Trek was the highlight of our year. The guides were knowledgeable and friendly."
    },
    {
      name: "Amit Kumar",
      location: "Bangalore",
      text: "The bus service was punctual and comfortable. Will definitely book again for our next trip!"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    const observerOptions = {
      threshold: 0.2
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({...prev, [entry.target.id]: true}));
        }
      });
    }, observerOptions);
    
    // Observe all section refs
    Object.entries(sectionRefs).forEach(([key, ref]) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });
    
    return () => {
      clearInterval(interval);
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [slides.length]);

  return (
    <div>
      {/* Carousel Section with Animation */}
      <div style={styles.carousel}>
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === activeIndex ? 1 : 0,
              x: `${(index - activeIndex) * 100}%`
            }}
            transition={{ duration: 0.7 }}
            style={styles.carouselItem}
          >
            <div style={styles.imageContainer}>
              <img src={slide.image} alt={slide.title} style={styles.carouselImage} />
              <div style={styles.overlay}></div>
            </div>
            
            <motion.div 
              style={styles.carouselCaption}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h2 style={styles.captionTitle}>{slide.title}</h2>
              <p style={styles.captionText}>{slide.text}</p>
              <motion.button 
                style={styles.ctaButton}
                whileHover={{ scale: 1.05, backgroundColor: "#FF5252" }}
                whileTap={{ scale: 0.95 }}
              >
                Book Now
              </motion.button>
            </motion.div>
          </motion.div>
        ))}

        <motion.button 
          style={styles.prevButton} 
          onClick={() => setActiveIndex(prev => prev === 0 ? slides.length - 1 : prev - 1)}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
          whileTap={{ scale: 0.9 }}
        >
          <FiArrowLeft />
        </motion.button>
        <motion.button 
          style={styles.nextButton} 
          onClick={() => setActiveIndex(prev => (prev + 1) % slides.length)}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
          whileTap={{ scale: 0.9 }}
        >
          <FiArrowRight />
        </motion.button>
      </div>

      {/* Tour Packages Section with Animation */}
      <motion.div 
        ref={sectionRefs.packages}
        id="packages-section"
        style={styles.tourPackages}
        initial="hidden"
        animate={isVisible["packages-section"] ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <motion.h2 
          style={styles.sectionTitle}
          variants={slideUp}
        >
          Popular Packages
        </motion.h2>
        <motion.div 
          style={styles.packageGrid}
          variants={staggerChildren}
        >
          {packages.map((pkg, index) => (
            <motion.div 
              key={index} 
              style={styles.packageCard}
              variants={cardVariant}
              whileHover="hover"
            >
              <h3 style={styles.packageTitle}>{pkg.name}</h3>
              <div style={styles.packageInfo}>
                <span><FiClock /> {pkg.duration}</span>
                <span><FiDollarSign /> {pkg.price}</span>
              </div>
              <ul style={styles.highlights}>
                {pkg.highlights.map((h, i) => (
                  <motion.li 
                    key={i} 
                    style={styles.highlightItem}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    {h}
                  </motion.li>
                ))}
              </ul>
              <motion.button 
                style={styles.packageButton}
                whileHover={{ scale: 1.03, backgroundColor: "#45a049" }}
                whileTap={{ scale: 0.97 }}
              >
                View Details
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Outstation Tours Section */}
      <div 
        ref={sectionRefs.outstation}
        id="outstation-section"
        style={styles.outstationSection}
      >
        <motion.h2 
          style={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible["outstation-section"] ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Outstation Tours
        </motion.h2>
        <div style={styles.destinationGrid}>
          <div style={styles.destinationColumn}>
            {['MANABALE SHWAR', 'LONAVALA', 'GOA'].map((dest, index) => (
              <motion.div 
                key={index} 
                style={styles.destinationCard}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible["outstation-section"] ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                  borderLeft: "8px solid #FF6B6B" 
                }}
              >
                <FiMapPin style={styles.destinationIcon} />
                <h3 style={styles.destinationTitle}>{dest}</h3>
                <div style={styles.destinationInfo}>
                  <span><FiClock /> 12hrs</span>
                  <span><FiDollarSign /> ₹1999</span>
                </div>
                <motion.button 
                  style={styles.destinationButton}
                  whileHover={{ scale: 1.05, backgroundColor: "#FF5252" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Now <FiArrowRight />
                </motion.button>
              </motion.div>
            ))}
          </div>

          <div style={styles.destinationColumn}>
            {['AIRPORT TRANSFER', 'OUTSTATION', 'MUMBAI'].map((service, index) => (
              <motion.div 
                key={index} 
                style={styles.serviceCard}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible["outstation-section"] ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + (0.2 * index), duration: 0.5 }}
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                  border: "2px solid #4CAF50" 
                }}
              >
                <div style={styles.serviceHeader}>
                  {index % 2 === 0 ? <FiNavigation2 /> : <FiTruck />}
                  <h3 style={styles.serviceTitle}>{service}</h3>
                </div>
                <motion.button 
                  style={styles.serviceButton}
                  whileHover={{ scale: 1.05, backgroundColor: "#45a049" }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Rates <FiArrowRight />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          ref={sectionRefs.special}
          id="special-section"
          style={styles.specialOffer}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={isVisible["special-section"] ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          whileHover={{ 
            scale: 1.02, 
            boxShadow: "0 15px 30px rgba(0,0,0,0.2)" 
          }}
        >
          <div style={styles.offerContent}>
            <h2 style={styles.offerTitle}>Special Offer</h2>
            <p style={styles.offerText}>Free Roar Juice on all bookings!</p>
            <motion.button 
              style={styles.offerButton}
              whileHover={{ scale: 1.05, backgroundColor: "#f0f0f0" }}
              whileTap={{ scale: 0.95 }}
            >
              Claim Now <FiGift />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* NEW: Testimonials Section */}
      <motion.div 
        style={styles.testimonialSection}
        initial="hidden"
        animate={isVisible["outstation-section"] ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <motion.h2 
          style={styles.sectionTitle}
          variants={slideUp}
        >
          Happy Travelers
        </motion.h2>
        <motion.div 
          style={styles.testimonialGrid}
          variants={staggerChildren}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              style={styles.testimonialCard}
              variants={cardVariant}
              whileHover="hover"
            >
              <FiStar style={styles.testimonialStar} />
              <p style={styles.testimonialText}>"{testimonial.text}"</p>
              <div style={styles.testimonialAuthor}>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.location}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
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
    zIndex: 10,
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
    zIndex: 10,
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
    position: "relative",
    paddingBottom: "15px",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)",
      width: "80px",
      height: "3px",
      backgroundColor: "#FF6B6B",
    }
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
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
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
    transition: "all 0.3s ease",
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
    transition: "all 0.3s ease",
  },
  serviceCard: {
    backgroundColor: "#f8f9fa",
    borderRadius: "10px",
    padding: "1.5rem",
    border: "2px solid #eee",
    transition: "all 0.3s ease",
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
    transition: "all 0.3s ease",
  },
  specialOffer: {
    marginTop: "4rem",
    backgroundColor: "#FF6B6B",
    borderRadius: "15px",
    padding: "2rem",
    textAlign: "center",
    color: "white",
    transition: "all 0.3s ease",
    boxShadow: "0 8px 15px rgba(255,107,107,0.2)",
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
    transition: "all 0.3s ease",
  },
  // New testimonial section styles
  testimonialSection: {
    padding: "4rem 2rem",
    backgroundColor: "#f0f8ff",
  },
  testimonialGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  testimonialCard: {
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "2rem",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
    transition: "all 0.3s ease",
    display: "flex",
    flexDirection: "column",
  },
  testimonialStar: {
    fontSize: "2rem",
    color: "#FFD700",
    marginBottom: "1rem",
  },
  testimonialText: {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#555",
    fontStyle: "italic",
    marginBottom: "1.5rem",
  },
  testimonialAuthor: {
    marginTop: "auto",
    display: "flex",
    flexDirection: "column",
    borderTop: "1px solid #eee",
    paddingTop: "1rem",
  },
};

export default Home;