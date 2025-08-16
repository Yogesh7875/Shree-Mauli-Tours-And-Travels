
import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import logo from "./img/Shree Mauli Tours And Travels.webp";
import { useMediaQuery } from "react-responsive";
import { FaInstagram, FaFacebook, FaWhatsapp, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 769px) and (max-width: 1024px)" });
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <Router>
      <div style={styles.pageContainer}>
        {/* Navbar */}
        <nav style={{
          ...styles.navbar,
          padding: isMobile ? "10px 15px" : "10px 20px"
        }}>
          <div style={styles.navContent}>
            {/* Left Side: Logo & Business Name */}
            <div style={styles.logoContainer}>
              <img
                src={logo}
                alt="Logo"
                style={{
                  ...styles.logo,
                  width: isMobile ? "60px" : "70px",
                  height: isMobile ? "60px" : "70px",
                  marginRight: isMobile ? "10px" : "20px"
                }}
              />
              <h1 style={{
                ...styles.businessName,
                fontSize: isMobile ? "16px" : "18px"
              }}>
                Shri Mauli Tours & Travels
              </h1>
            </div>

            {/* Right Side Content */}
            <div style={styles.rightSection}>
              {/* Hamburger Menu (Mobile Only) */}
              {isMobile && (
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  style={styles.hamburger}
                >
                  ☰
                </button>
              )}

              {/* Desktop/Tablet Navigation */}
              {!isMobile && (
                <div style={styles.navGroup}>
                  <div style={{
                    ...styles.navLinks,
                    gap: isTablet ? "15px" : "25px"
                  }}>
                    <Link to="/" style={styles.navLink}>
                      Home
                    </Link>
                    <Link to="/services" style={styles.navLink}>
                      Services
                    </Link>
                    <Link to="/about" style={styles.navLink}>
                      About Us
                    </Link>
                    <Link to="/contact" style={styles.navLink}>
                      Contact
                    </Link>
                  </div>

                  {/* Social Media Icons */}
                  <div style={{
                    ...styles.socialIcons,
                    gap: isTablet ? "10px" : "15px"
                  }}>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.socialIcon}
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.socialIcon}
                    >
                      <FaFacebook />
                    </a>
                    <a
                      href="https://wa.me/yourwhatsappnumber"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.socialIcon}
                    >
                      <FaWhatsapp />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobile && isMenuOpen && (
            <div ref={menuRef} style={styles.mobileMenu}>
              <div style={styles.mobileMenu}>
                <div style={styles.mobileLinks}>
                  <Link
                    to="/"
                    style={styles.mobileLink}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    to="/services"
                    style={styles.mobileLink}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Services
                  </Link>
                  <Link
                    to="/about"
                    style={styles.mobileLink}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    to="/contact"
                    style={styles.mobileLink}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </div>

                <div style={styles.socialIconsMobile}>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.socialIcon}
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.socialIcon}
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://wa.me/yourwhatsappnumber"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.socialIcon}
                  >
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* Page Routes */}
        <div style={styles.contentWrap}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer style={styles.footer}>
          <div style={{
            ...styles.footerContent,
            padding: isMobile ? "20px 15px" : "40px 20px"
          }}>
            {/* Quick Links */}
            <div style={styles.footerSection}>
              <h4 style={styles.footerHeading}>Quick Links</h4>
              <Link to="/" style={styles.footerLink}>Home</Link>
              <Link to="/services" style={styles.footerLink}>Services</Link>
              <Link to="/about" style={styles.footerLink}>About Us</Link>
              <Link to="/contact" style={styles.footerLink}>Contact</Link>
            </div>

            {/* Address */}
            <div style={styles.footerSection}>
              <h4 style={styles.footerHeading}>Address</h4>
              <a
                href="https://goo.gl/maps/your-google-maps-link"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.contactItem}
              >
                <FaMapMarkerAlt style={styles.contactIcon} />
                <p style={styles.footerText}>
                  Shri Mauli Tours & Travels<br />
                  123 Travel Street<br />
                  Pune, Maharashtra 411001<br />
                  India
                </p>
              </a>
            </div>

            {/* Contact Details */}
            <div style={styles.footerSectionForContact}>
              <h4 style={styles.footerHeading}>Contact Persons</h4>
              <div style={{
                ...styles.contactDetails,
                flexDirection: isMobile ? "column" : "row",
                gap: isMobile ? "15px" : "20px"
              }}>
                {/* Gajanan Kawle Patil */}
                <div style={styles.contactPerson}>
                  <h5 style={styles.personName}>Gajanan Kawle Patil</h5>
                  <a href="tel:+919860768415" style={styles.contactItem}>
                    <FaPhone style={styles.contactIcon} />
                    <span style={styles.footerText}>+91 98607 68415</span>
                  </a>

                  <a
                    href="https://wa.me/919860768415"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.contactItem}
                  >
                    <FaWhatsapp style={styles.contactIcon} />
                    <span style={styles.footerText}>+91 9860768415</span>
                  </a>

                  <a href="mailto:gajanan@shrimauli.com" style={styles.contactItem}>
                    <FaEnvelope style={styles.contactIcon} />
                    <span style={styles.footerText}>gajanan@shrimauli.com</span>
                  </a>
                </div>

                {/* Arjun Kawle Patil */}
                <div style={styles.contactPerson}>
                  <h5 style={styles.personName}>Arjun Kawle Patil</h5>
                  <a href="tel:+917263891749" style={styles.contactItem}>
                    <FaPhone style={styles.contactIcon} />
                    <span style={styles.footerText}>+91 72638 91749</span>
                  </a>

                  <a
                    href="https://wa.me/917263891749"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.contactItem}
                  >
                    <FaWhatsapp style={styles.contactIcon} />
                    <span style={styles.footerText}>+91 7263891749</span>
                  </a>

                  <a href="mailto:arjunkawle98@gmail.com" style={styles.contactItem}>
                    <FaEnvelope style={styles.contactIcon} />
                    <span style={styles.footerText}>arjunkawle98@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div style={styles.footerSection}>
              <h4 style={styles.footerHeading}>Follow Us</h4>
              <div style={{
                ...styles.footerSocial,
                justifyContent: isMobile ? "flex-start" : "flex-start"
              }}>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.socialIcon}
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.socialIcon}
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.socialIcon}
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div style={{
            ...styles.copyright,
            padding: isMobile ? "15px 0" : "20px 0",
            fontSize: isMobile ? "12px" : "14px"
          }}>
            © {new Date().getFullYear()} Shri Mauli Tours & Travels. All rights reserved.
          </div>
        </footer>
      </div>
    </Router>
  );
}

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  navbar: {
    background: "linear-gradient(90deg,rgb(244, 195, 161), #e67e22, #f39c12)",
    color: "white",
    position: "relative",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
  },
  navContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // padding: "10px 20px",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: "80px",
    height: "80px",
    marginRight: "20px",
  },
  businessName: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  rightSection: {
    display: "flex",
    alignItems: "center",
  },
  navGroup: {
    display: "flex",
    alignItems: "center",
  },
  navLinks: {
    display: "flex",
    marginRight: "20px",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
    transition: "color 0.3s ease",
    ":hover": {
      color: "#2c3e50",
    },
  },
  socialIcons: {
    display: "flex",
  },
  socialIcon: {
    color: 'white',
    fontSize: '20px',
    transition: "color 0.3s ease",
    ":hover": {
      color: '#2c3e50',
    },
  },
  hamburger: {
    background: "none",
    border: "none",
    color: "white",
    fontSize: "24px",
    cursor: "pointer",
    padding: "5px",
  },
  mobileMenu: {
    display: "flex",
    flexDirection: "column",
    background: "rgb(245, 158, 95)",
    position: "absolute",
    width: "100%",
    left: 0,
    zIndex: 100,
  },
  mobileLinks: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginBottom: "15px",
  },
  mobileLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    textAlign: "right",
    padding: "5px 10px",
    ":hover": {
      color: "#2c3e50",
    },
  },
  socialIconsMobile: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "15px",
    padding: "10px",
  },
  contentWrap: {
    flex: 1,
    padding: "20px 0",
  },
  footer: {
    backgroundColor: '#2c3e50',
    color: 'white',
  },
  footerContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '30px',
  },
  footerSection: {
    flex: '1 1 250px',
    minWidth: '200px',
  },
  footerSectionForContact: {
    flex: '1 1 350px',
    minWidth: '200px',
  },
  footerHeading: {
    fontSize: '18px',
    marginBottom: '15px',
    borderBottom: '2px solid #e67e22',
    paddingBottom: '5px',
  },
  footerLink: {
    display: 'block',
    color: 'white',
    textDecoration: 'none',
    marginBottom: '10px',
    fontSize: '14px',
    transition: "color 0.3s ease",
    ":hover": {
      color: '#e67e22',
    },
  },
  footerText: {
    fontSize: '14px',
    lineHeight: '1.6',
    margin: '0',
  },
  footerSocial: {
    display: 'flex',
    gap: '15px',
    marginTop: '15px',
  },
  copyright: {
    textAlign: 'center',
    borderTop: '1px solid #34495e',
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
  },
  contactDetails: {
    display: 'flex',
  },
  contactPerson: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  personName: {
    margin: '0 0 5px 0',
    fontSize: '15px',
    fontWeight: '600',
    color: '#e67e22',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    color: 'white',
    textDecoration: 'none',
    transition: "color 0.3s ease",
    ":hover": {
      color: '#e67e22',
    },
  },
  contactIcon: {
    fontSize: '16px',
    marginTop: '3px',
  },
};

export default App;