// Import React
import React from "react";

// Import the Hero Slider
import HeroSlider from "../components/HeroSlider";

function Home() {
  return (
    <>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Main Content */}
      <div className="page-container">

        {/* Services Section */}
        <h2 className="section-title">
          Our Renewable Energy Solutions
        </h2>

        <p className="subtitle">
          We provide sustainable energy solutions that power homes,
          businesses, industries and entire communities.
        </p>

        <div className="grid">

          {/* Card 1 */}

          <div className="card">

            <h3>☀ Solar Energy</h3>

            <p>
              High-efficiency solar farms designed to provide
              clean, affordable and reliable electricity while
              reducing carbon emissions.
            </p>

          </div>

          {/* Card 2 */}

          <div className="card">

            <h3>🌬 Wind Energy</h3>

            <p>
              Intelligent wind turbines producing renewable
              electricity using advanced monitoring systems
              for maximum efficiency.
            </p>

          </div>

          {/* Card 3 */}

          <div className="card">

            <h3>🔋 Battery Storage</h3>

            <p>
              Store renewable energy safely using our
              next-generation lithium battery systems,
              ensuring uninterrupted power supply.
            </p>

          </div>

        </div>

        {/* Why Choose Us */}

        <div
          style={{
            marginTop: "80px",
            textAlign: "center"
          }}
        >

          <h2 className="section-title">
            Why Choose Helios Energy?
          </h2>

          <p className="subtitle">
            Delivering clean energy through innovation,
            sustainability and advanced technology.
          </p>

          <div className="grid">

            <div className="card">

              <h3>🌍 Eco Friendly</h3>

              <p>
                We help reduce greenhouse gas emissions by
                replacing fossil fuels with renewable energy.
              </p>

            </div>

            <div className="card">

              <h3>⚡ Reliable Power</h3>

              <p>
                Our smart energy grid ensures consistent
                electricity supply for homes and industries.
              </p>

            </div>

            <div className="card">

              <h3>💰 Cost Effective</h3>

              <p>
                Reduce electricity costs through efficient
                renewable energy technologies.
              </p>

            </div>

          </div>

        </div>

        {/* Call To Action */}

        <div
          style={{
            background:
              "linear-gradient(135deg,#0F172A,#1E293B)",
            color: "white",
            padding: "60px",
            borderRadius: "15px",
            marginTop: "80px",
            textAlign: "center"
          }}
        >

          <h2
            style={{
              fontSize: "40px",
              marginBottom: "20px"
            }}
          >
            Let's Build A Greener Future Together
          </h2>

          <p
            style={{
              maxWidth: "700px",
              margin: "auto",
              lineHeight: "1.8",
              color: "#CBD5E1"
            }}
          >
            Join thousands of customers who trust Helios
            Renewable Energy Grid for clean, reliable and
            sustainable energy solutions.
          </p>

          <button
            className="btn-primary"
            style={{
              marginTop: "30px"
            }}
          >
            Get Started Today
          </button>

        </div>

      </div>
    </>
  );
}

export default Home;