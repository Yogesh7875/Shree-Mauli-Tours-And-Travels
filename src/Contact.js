import React, { useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">Shri Mauli Tours & Travels</div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/about">About Us</a></li>
          <li className="active"><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      {/* Header Banner */}
      <div className="contact-banner">
        <h1>Contact Us</h1>
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <a href="/">Home</a> <span>{'>'}</span> <span>Contact Us</span>
      </div>

      {/* Main Content */}
      <div className="contact-content">
        <div className="top-section">
          {/* Left Side - Image */}
          <div className="contact-image">
            <img src="/contact.jpg" alt="Travel" />
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-form">
            <h2>Send Your Query</h2>
            {submitted ? (
              <div className="success-message">
                <p>Thank you for your message! We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name *" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="tel" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone No. *" 
                      required 
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email ID *" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="text" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject" 
                    />
                  </div>
                </div>
                <div className="form-group">
                  <textarea 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter Your Message" 
                    rows="6"
                  ></textarea>
                </div>
                <div className="form-group submit-wrapper">
                  <button type="submit" className="send-btn">
                    <div className="svg-wrapper-1">
                      <div className="svg-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" />
                        </svg>
                      </div>
                    </div>
                    <span>Send </span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom - Contact Information */}
        <div className="contact-info-container">
          <h2>Contact Information</h2>
          <div className="contact-info-content">
            <div className="info-card">
              <h3>Address</h3>
              <div className="info-item">
                <MapPin className="icon" />
                <div>
                  <p>123 Travel Street</p>
                  <p>Pune, Maharashtra 411001</p>
                  <p>India</p>
                </div>
              </div>
            </div>

            <div className="info-card">
              <h3>Contact Persons</h3>
              <div className="contact-person">
                <h4>Gajanan Kawle Patil</h4>
                <div className="info-item">
                  <Phone className="icon" />
                  <p>+91 98607 68415</p>
                </div>
                <div className="info-item">
                  <Mail className="icon" />
                  <p>gajanan@shrimauli.com</p>
                </div>
              </div>
            </div>

            <div className="info-card">
              <div className="contact-person">
                <h4>Arjun Kawle Patil</h4>
                <div className="info-item">
                  <Phone className="icon" />
                  <p>+91 72638 91749</p>
                </div>
                <div className="info-item">
                  <Mail className="icon" />
                  <p>arjunkawle98@gmail.com</p>
                </div>
              </div>
            </div>

         
          </div>
        </div>
      </div>

      {/* WhatsApp Button with Phone Number Display */}
      <div class="action-button-container">
  <a href="https://wa.me/919860768415" class="whatsapp-button" target="_blank" rel="noopener noreferrer">
    <div class="button-content">
      <div class="whatsapp-icon">
        
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </div>
      <span class="button-text">+91 98607 68415</span>
    </div>
  </a>


        {/* Call Button with Phone Number Display */}
        <a href="tel:+919860768415" className="call-button">
          <div className="button-content">
            <div className="call-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <span className="button-text">+91 98607 68415</span>
          </div>
        </a>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Shri Mauli Tours & Travels. All Rights Reserved.</p>
      </footer>

      <style jsx>{`
        /* Global Styles */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        /* Navbar Styles */
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 50px;
          background-color: #fff;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .logo {
          font-size: 24px;
          font-weight: bold;
          color: #FF8C00;
        }

        .nav-links {
          display: flex;
          list-style: none;
        }

        .nav-links li {
          margin: 0 15px;
        }

        .nav-links a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-links a:hover {
          color: #FF8C00;
        }

        .nav-links li.active a {
          color: #FF8C00;
        }

        /* Banner Styles */
        .contact-banner {
          background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/api/placeholder/1200/300');
          background-size: cover;
          background-position: center;
          height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          text-align: center;
        }

        .contact-banner h1 {
          font-size: 40px;
          letter-spacing: 1px;
          animation: fadeIn 1s ease-in-out;
        }

        /* Breadcrumb Styles */
        .breadcrumb {
          padding: 15px 50px;
          background-color: #FF8C00;
          color: white;
        }

        .breadcrumb a {
          color: white;
          text-decoration: none;
        }

        .breadcrumb span {
          margin: 0 10px;
        }

        /* Main Content Styles */
        .contact-container {
          max-width: 100%;
          margin: 0 auto;
        }

        .contact-content {
          display: flex;
          flex-direction: column;
          padding: 50px;
          gap: 30px;
        }

        .top-section {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
        }

        /* Contact Image Styles */
        .contact-image {
          flex: 1;
          min-width: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .contact-image img {
          width: 100%;
          height: auto;
          border-radius: 10px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
          // animation: pulse 2s infinite ease-in-out;
        }

        .contact-image img:hover {
          transform: scale(1.05);
        }

        /* Contact Form Styles */
        .contact-form {
          flex: 1;
          min-width: 300px;
          padding: 30px;
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          animation: slideInRight 0.7s ease-out;
          transform: translateZ(0);
          transition: transform 0.3s ease;
        }

        .contact-form:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }

        .contact-form h2 {
          color: #FF8C00;
          margin-bottom: 25px;
          font-size: 24px;
          text-align: center;
        }

        .form-row {
          display: flex;
          gap: 20px;
          margin-bottom: 15px;
        }

        .form-group {
          flex: 1;
          margin-bottom: 15px;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 15px;
          border: 1px solid #ddd;
          border-radius: 5px;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: #FF8C00;
          outline: none;
          box-shadow: 0 0 8px rgba(255, 140, 0, 0.3);
          transform: translateY(-2px);
        }

        /* Styled Send Button */
        .submit-wrapper {
          display: flex;
          justify-content: center;
        }

        .send-btn {
          font-family: inherit;
          font-size: 16px;
          background: #FF8C00;
          color: white;
          padding: 0.7em 1em;
          padding-left: 0.9em;
          display: flex;
          align-items: center;
          border: none;
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.2s;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(255, 140, 0, 0.3);
        }

        .send-btn span {
          display: block;
          margin-left: 0.3em;
          transition: all 0.3s ease-in-out;
        }

        .send-btn svg {
          display: block;
          transform-origin: center center;
          transition: transform 0.3s ease-in-out;
        }

        .send-btn:hover .svg-wrapper {
          animation: fly-1 0.6s ease-in-out infinite alternate;
        }

        .send-btn:hover svg {
          transform: translateX(1.2em) rotate(45deg) scale(1.1);
        }

        .send-btn:hover span {
          transform: translateX(5em);
        }

        .send-btn:active {
          transform: scale(0.95);
        }

        @keyframes fly-1 {
          from {
            transform: translateY(0.1em);
          }
          to {
            transform: translateY(-0.1em);
          }
        }

        .success-message {
          text-align: center;
          padding: 30px;
          background-color: #e8f5e9;
          border-radius: 5px;
          color: #2e7d32;
          animation: fadeIn 0.5s ease-in-out;
        }

        /* Contact Info Container Styles */
        .contact-info-container {
          background-color: #f9f9f9;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          padding: 30px;
          animation: fadeIn 0.7s ease-out;
        }

        .contact-info-container h2 {
          color: #FF8C00;
          margin-bottom: 25px;
          font-size: 24px;
          text-align: center;
          border-bottom: 2px solid #FF8C00;
          padding-bottom: 10px;
        }

        .contact-info-content {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 20px;
        }

        .info-card {
          flex: 1;
          min-width: 250px;
          padding: 20px;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .info-card h3 {
          color: #333;
          margin-bottom: 15px;
          font-size: 18px;
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 10px;
        }

        .icon {
          color: #FF8C00;
          margin-right: 10px;
          flex-shrink: 0;
        }

        .contact-person {
          margin-bottom: 20px;
        }

        .contact-person h4 {
          color: #555;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .social-icons {
          display: flex;
          gap: 15px;
        }

        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background-color: #FF8C00;
          color: white;
          border-radius: 50%;
          transition: transform 0.3s ease, background-color 0.3s ease;
        }

        .social-icon:hover {
          transform: translateY(-5px);
          background-color: #e67e00;
        }

        /* WhatsApp and Call Button Styles */
        .action-button-container {
          position: fixed;
          right: 30px;
          bottom: 30px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          z-index: 999;
        }

        .whatsapp-button, .call-button {
          display: flex;
          align-items: center;
          border-radius: 30px;
          color: white;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
          text-decoration: none;
          overflow: hidden;
          width: 60px;
        }

        .whatsapp-button:hover, .call-button:hover {
          width: 200px;
        }

        .whatsapp-button {
          background-color: #25D366;
        }

        .call-button {
          background-color: #FF8C00;
        }

        .button-content {
          display: flex;
          align-items: center;
          white-space: nowrap;
        }

        .whatsapp-icon, .call-icon {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .whatsapp-icon svg, .call-icon svg {
          width: 30px;
          height: 30px;
        }

        .button-text {
          padding-right: 20px;
          font-weight: 500;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .whatsapp-button:hover .button-text, 
        .call-button:hover .button-text {
          opacity: 1;
        }

        /* Footer Styles */
        .footer {
          background-color: #333;
          color: white;
          text-align: center;
          padding: 20px 0;
          margin-top: 50px;
        }

        /* Form Input Animations */
        @keyframes inputFocus {
          0% { transform: scale(1); }
          50% { transform: scale(1.03); }
          100% { transform: scale(1); }
        }

        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInLeft {
          from { transform: translateX(-50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes slideInRight {
          from { transform: translateX(50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.02); }
          100% { transform: scale(1); }
        }

        /* Floating Form Animation */
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        /* Responsive Styles */
        @media (max-width: 992px) {
          .top-section {
            flex-direction: column;
          }
          
          .contact-image {
            order: -1;
          }
          
          .contact-info-content {
            flex-direction: column;
          }
        }

        @media (max-width: 768px) {
          .navbar {
            padding: 15px 20px;
            flex-direction: column;
          }

          .logo {
            margin-bottom: 15px;
          }

          .contact-content {
            padding: 20px;
          }

          .form-row {
            flex-direction: column;
            gap: 0;
          }
          
          .action-button-container {
            right: 20px;
            bottom: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;