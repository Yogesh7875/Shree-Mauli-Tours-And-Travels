import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import logo from "./img/Shree Mauli Tours And Travels.webp";
import { useMediaQuery } from "react-responsive";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav style={styles.navbar}>
          <div style={styles.navContent}>
            {/* Left Side: Logo & Business Name */}
            <div style={styles.logoContainer}>
              <img src={logo} alt="Logo" style={styles.logo} />
              <h1 style={styles.businessName}>Shri Mauli Tours & Travels</h1>
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

              {/* Desktop Navigation */}
              {!isMobile && (
                <div style={styles.navGroup}>
                  <div style={styles.navLinks}>
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
                  <div style={styles.socialIcons}>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.socialIcon}
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.socialIcon}
                    >
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a
                      href="https://wa.me/yourwhatsappnumber"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.socialIcon}
                    >
                      <i className="fa-brands fa-whatsapp"></i>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobile && isMenuOpen && (
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
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.socialIcon}
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a
                  href="https://wa.me/yourwhatsappnumber"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.socialIcon}
                >
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
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
          <div style={styles.footerContent}>
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
                <i className="fas fa-map-marker-alt" style={styles.contactIcon}></i>
                <p style={styles.footerText}>
                  Shri Mauli Tours & Travels<br />
                  123 Travel Street<br />
                  Pune, Maharashtra 411001<br />
                  India
                </p>
              </a>
            </div>

            {/* Contact Details */}
            <div style={styles.footerSection}>
              <h4 style={styles.footerHeading}>Contact Persons</h4>
              <div style={styles.contactDetails}>
                {/* Gajanan Kawle Patil */}
                <div style={styles.contactPerson}>
                  <h5 style={styles.personName}>Gajanan Kawle Patil</h5>
                  <a href="tel:+919860768415" style={styles.contactItem}>
                    <i className="fas fa-phone" style={styles.contactIcon}></i>
                    <span style={styles.footerText}>+91 98607 68415</span>
                  </a>

                  <a
                    href="https://wa.me/919860768415"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.contactItem}
                  >
                    <i className="fab fa-whatsapp" style={styles.contactIcon}></i>
                    <span style={styles.footerText}>+91 9860768415</span>
                  </a>

                  <a href="mailto:gajanan@shrimauli.com" style={styles.contactItem}>
                    <i className="fas fa-envelope" style={styles.contactIcon}></i>
                    <span style={styles.footerText}>gajanan@shrimauli.com</span>
                  </a>
                </div>

                {/* Arjun Kawle Patil */}
                <div style={styles.contactPerson}>
                  <h5 style={styles.personName}>Arjun Kawle Patil</h5>
                  <a href="tel:+917263891749" style={styles.contactItem}>
                    <i className="fas fa-phone" style={styles.contactIcon}></i>
                    <span style={styles.footerText}>+91 72638 91749</span>
                  </a>

                  <a
                    href="https://wa.me/917263891749"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.contactItem}
                  >
                    <i className="fab fa-whatsapp" style={styles.contactIcon}></i>
                    <span style={styles.footerText}>+91 7263891749</span>
                  </a>

                  <a href="mailto:arjunkawle98@gmail.com" style={styles.contactItem}>
                    <i className="fas fa-envelope" style={styles.contactIcon}></i>
                    <span style={styles.footerText}>arjunkawle98@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div style={styles.footerSection}>
              <h4 style={styles.footerHeading}>Follow Us</h4>
              <div style={styles.footerSocial}>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.socialIcon}
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.socialIcon}
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.socialIcon}
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div style={styles.copyright}>
            © {new Date().getFullYear()} Shri Mauli Tours & Travels. All rights reserved.
          </div>
        </footer>
      </div>
    </Router>
  );
}

const styles = {
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
    padding: "10px 20px",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: "70px",
    height: "70px",
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
    gap: "30px",
  },
  navLinks: {
    display: "flex",
    gap: "25px",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
  },
  socialIcons: {
    display: "flex",
    gap: "15px",
  },
  socialIcon: {
    fontSize: '24px',
    color: 'white',
    textDecoration: 'none',
    '&:hover': {
      color: '#e67e22',
    },
  },
  hamburger: {
    background: "none",
    border: "none",
    color: "white",
    fontSize: "24px",
    cursor: "pointer",
  },
  mobileMenu: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    background: "rgb(245, 158, 95)",
  },
  mobileLinks: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginBottom: "20px",
  },
  mobileLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    textAlign: "right",
  },
  socialIconsMobile: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "15px",
    paddingRight: "10px",
  },
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  contentWrap: {
    flex: 1,
  },
  footer: {
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '40px 20px 20px',
    marginTop: 'auto',
  },
  footerContent: {
    maxWidth: '100%',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '20px',
  },
  footerSection: {
    flex: '1 1 250px',
    marginBottom: '20px',
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
    marginBottom: '8px',
    fontSize: '14px',
    '&:hover': {
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
    marginTop: '10px',
  },
  copyright: {
    textAlign: 'center',
    paddingTop: '20px',
    borderTop: '1px solid #34495e',
    fontSize: '14px',
  },
  contactDetails: {
    display: 'flex',
    gap: '20px',
    '@media (max-width: 480px)': {
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '20px',
    }
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
    alignItems: 'center',
    gap: '10px',
    color: 'white',
    textDecoration: 'none',
    '&:hover': {
      color: '#e67e22',
    },
  },
  contactIcon: {
    fontSize: '16px',
    width: '20px',
    textAlign: 'center',
  },
};

export default App;