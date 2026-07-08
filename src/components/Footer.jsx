// Import React
import React from "react";

function Footer() {
  // Internal Object Styles

  const footerStyle = {
    backgroundColor: "#0F172A",
    color: "#FFFFFF",
    padding: "50px 60px 20px",
    marginTop: "60px"
  };

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "40px",
    marginBottom: "30px"
  };

  const headingStyle = {
    color: "#10B981",
    marginBottom: "15px",
    fontSize: "22px"
  };

  const textStyle = {
    color: "#CBD5E1",
    lineHeight: "1.8"
  };

  const socialStyle = {
    display: "flex",
    gap: "15px",
    marginTop: "15px",
    fontSize: "24px"
  };

  return (
    <footer style={footerStyle}>

      {/* Footer Sections */}

      <div style={containerStyle}>

        {/* Company Information */}

        <div>

          <h2 style={headingStyle}>Helios Energy</h2>

          <p style={textStyle}>
            Helios Renewable Energy Grid is committed to delivering
            sustainable solar, wind, hydro and battery energy
            solutions across Africa and beyond.
          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h2 style={headingStyle}>Quick Links</h2>

          <p style={textStyle}>Home</p>
          <p style={textStyle}>About</p>
          <p style={textStyle}>Solutions</p>
          <p style={textStyle}>Calculators</p>
          <p style={textStyle}>Inquiries</p>

        </div>

        {/* Contact Information */}

        <div>

          <h2 style={headingStyle}>Contact Us</h2>

          <p style={textStyle}>
            📍 Abuja, Nigeria
          </p>

          <p style={textStyle}>
            ☎ +234 800 123 4567
          </p>

          <p style={textStyle}>
            ✉ info@heliosenergy.com
          </p>

        </div>

        {/* Social Media */}

        <div>

          <h2 style={headingStyle}>Follow Us</h2>

          <div style={socialStyle}>

            <span>🌐</span>

            <span>📘</span>

            <span>📸</span>

            <span>▶</span>

            <span>💼</span>

          </div>

        </div>

      </div>

      {/* Bottom Copyright */}

      <hr style={{ border: "1px solid #334155" }} />

      <p
        style={{
          textAlign: "center",
          marginTop: "20px",
          color: "#94A3B8",
          fontSize: "15px"
        }}
      >
        © 2026 Helios Renewable Energy Grid. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;