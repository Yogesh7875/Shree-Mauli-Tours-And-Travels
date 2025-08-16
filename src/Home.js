import { useState, useEffect, useRef } from "react";
import Places from "./Places";
import { 
  FiArrowLeft, 
  FiArrowRight, 
  FiClock, 
  FiDollarSign,
  FiStar
} from "react-icons/fi";
import busImage from "./img/bus.jpg";
import greenBusImage from "./img/greenBus.jpg";
import { motion } from "framer-motion";

// Custom hook for responsive design
const useResponsive = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowSize.width < 768;
  const isTablet = windowSize.width >= 768 && windowSize.width < 1024;
  const isDesktop = windowSize.width >= 1024;

  return { isMobile, isTablet, isDesktop, windowSize };
};

const Home = () => {
  const { isMobile, isTablet } = useResponsive();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = {
    packages: useRef(null),
    outstation: useRef(null),
    special: useRef(null)
  };

  // Animation variants (unchanged)
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

  // Responsive slides text
  const slides = [
    { 
      image: busImage, 
      title: "Premium Coach Service", 
      text: isMobile ? "Luxury travel with premium amenities" : "Experience luxury travel with reclining seats, AC, and entertainment" 
    },
    { 
      image: greenBusImage, 
      title: "Eco-Friendly Journeys", 
      text: isMobile ? "Environmentally conscious travel" : "Hybrid buses reducing carbon emissions by 40%" 
    }
  ];

  // Packages data (unchanged)
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
  
  // Testimonials data (unchanged)
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

  // useEffect (unchanged)
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

  // Responsive styles
  const styles = {
    carousel: {
      position: "relative",
      width: "100%",
      height: isMobile ? "50vh" : isTablet ? "60vh" : "70vh",
      minHeight: isMobile ? "300px" : "500px",
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
      left: isMobile ? "5%" : "10%",
      transform: "translateY(-50%)",
      color: "white",
      maxWidth: isMobile ? "90%" : isTablet ? "500px" : "600px",
      padding: isMobile ? "0 10px" : "0",
    },
    captionTitle: {
      fontSize: isMobile ? "1.8rem" : isTablet ? "2rem" : "2.5rem",
      margin: "0 0 1rem",
      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
    },
    captionText: {
      fontSize: isMobile ? "1rem" : isTablet ? "1.1rem" : "1.2rem",
      margin: "0 0 2rem",
    },
    ctaButton: {
      padding: isMobile ? "8px 25px" : isTablet ? "10px 30px" : "12px 35px",
      fontSize: isMobile ? "0.9rem" : isTablet ? "1rem" : "1.1rem",
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
      padding: isMobile ? "10px" : "15px",
      borderRadius: "50%",
      cursor: "pointer",
      fontSize: isMobile ? "1.1rem" : "1.5rem",
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
      padding: isMobile ? "10px" : "15px",
      borderRadius: "50%",
      cursor: "pointer",
      fontSize: isMobile ? "1.1rem" : "1.5rem",
      backdropFilter: "blur(5px)",
      zIndex: 10,
    },
    tourPackages: {
      padding: isMobile ? "2rem 1rem" : isTablet ? "3rem 1.5rem" : "4rem 2rem",
      backgroundColor: "#f9f9f9",
    },
    sectionTitle: {
      textAlign: "center",
      fontSize: isMobile ? "1.8rem" : isTablet ? "2rem" : "2.2rem",
      marginBottom: isMobile ? "2rem" : isTablet ? "2.5rem" : "3rem",
      color: "#333",
      position: "relative",
      paddingBottom: "15px",
    },
    packageGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(300px, 1fr))",
      gap: isMobile ? "1rem" : "2rem",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    packageCard: {
      backgroundColor: "white",
      borderRadius: "10px",
      padding: isMobile ? "1rem" : "2rem",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    packageTitle: {
      fontSize: isMobile ? "1.3rem" : "1.5rem",
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
      margin: isMobile ? "1rem 0" : "1.5rem 0",
    },
    highlightItem: {
      padding: "0.5rem 0",
      borderBottom: "1px solid #eee",
    },
    packageButton: {
      padding: isMobile ? "8px 20px" : "10px 25px",
      fontSize: isMobile ? "0.9rem" : "1rem",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      borderRadius: "30px",
      cursor: "pointer",
      width: "100%",
      transition: "all 0.3s ease",
    },
    testimonialSection: {
      padding: isMobile ? "2rem 1rem" : isTablet ? "3rem 1.5rem" : "4rem 2rem",
      backgroundColor: "#f0f8ff",
    },
    testimonialGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(280px, 1fr))",
      gap: isMobile ? "1rem" : "2rem",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    testimonialCard: {
      backgroundColor: "white",
      borderRadius: "10px",
      padding: isMobile ? "1.5rem" : "2rem",
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
      fontSize: isMobile ? "0.9rem" : "1rem",
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

  return (
    <div>
      {/* Carousel Section */}
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

      {/* Tour Packages Section */}
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

      <Places/>
    </div>
  );
};

export default Home;