// Import React
import React from "react";

function Navbar({ currentPage, setCurrentPage }) {

  // Internal Object Styles
  const navStyle = {
    backgroundColor: "#0F172A",
    padding: "18px 60px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "sticky",
    top: "0",
    zIndex: "1000",
    boxShadow: "0 3px 12px rgba(0,0,0,0.2)"
  };

  const logoStyle = {
    color: "white",
    fontSize: "30px",
    fontWeight: "bold",
    cursor: "pointer"
  };

  const menuStyle = {
    display: "flex",
    gap: "30px",
    alignItems: "center"
  };

  return (
    <nav style={navStyle}>

      {/* Company Logo */}

      <h2 style={logoStyle}>
        Helios <span style={{ color: "#10B981" }}>Energy</span>
      </h2>

      {/* Navigation Menu */}

      <ul style={menuStyle}>

        <li>
          <button
            onClick={() => setCurrentPage("home")}
            style={{
              background: "none",
              border: "none",
              fontSize: "16px",
              fontWeight: "600",
              color:
                currentPage === "home"
                  ? "#10B981"
                  : "#FFFFFF",
              borderBottom:
                currentPage === "home"
                  ? "3px solid #10B981"
                  : "3px solid transparent",
              paddingBottom: "5px"
            }}
          >
            Home
          </button>
        </li>

        <li>
          <button
            onClick={() => setCurrentPage("about")}
            style={{
              background: "none",
              border: "none",
              fontSize: "16px",
              fontWeight: "600",
              color:
                currentPage === "about"
                  ? "#10B981"
                  : "#FFFFFF",
              borderBottom:
                currentPage === "about"
                  ? "3px solid #10B981"
                  : "3px solid transparent",
              paddingBottom: "5px"
            }}
          >
            About
          </button>
        </li>

        <li>
          <button
            onClick={() => setCurrentPage("solutions")}
            style={{
              background: "none",
              border: "none",
              fontSize: "16px",
              fontWeight: "600",
              color:
                currentPage === "solutions"
                  ? "#10B981"
                  : "#FFFFFF",
              borderBottom:
                currentPage === "solutions"
                  ? "3px solid #10B981"
                  : "3px solid transparent",
              paddingBottom: "5px"
            }}
          >
            Solutions
          </button>
        </li>

        <li>
          <button
            onClick={() => setCurrentPage("calculators")}
            style={{
              background: "none",
              border: "none",
              fontSize: "16px",
              fontWeight: "600",
              color:
                currentPage === "calculators"
                  ? "#10B981"
                  : "#FFFFFF",
              borderBottom:
                currentPage === "calculators"
                  ? "3px solid #10B981"
                  : "3px solid transparent",
              paddingBottom: "5px"
            }}
          >
            Calculators
          </button>
        </li>

        <li>
          <button
            onClick={() => setCurrentPage("inquiries")}
            style={{
              background: "#10B981",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              fontWeight: "600"
            }}
          >
            Inquiries
          </button>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;