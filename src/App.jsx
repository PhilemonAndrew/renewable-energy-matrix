// Import React and the useState Hook
import React, { useState } from "react";

// Import the layout components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import all pages
import Home from "./pages/Home";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import Calculators from "./pages/Calculators";
import Inquiries from "./pages/Inquiries";

function App() {
  // Store the current page
  const [currentPage, setCurrentPage] = useState("home");

  // Function to decide which page to display
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;

      case "about":
        return <About />;

      case "solutions":
        return <Solutions />;

      case "calculators":
        return <Calculators />;

      case "inquiries":
        return <Inquiries />;

      default:
        return <Home />;
    }
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {/* Main Page */}
      <main>
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;