// Import React and useState
import React, { useState } from "react";

function HeroSlider() {

  // Keep track of the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array containing all slides
  const slides = [
    {
      title: "Powering Africa with Solar Energy",
      description:
        "Our smart solar farms provide clean and affordable electricity for homes, businesses and industries.",
      stat1: "250 MW",
      label1: "Solar Capacity",
      stat2: "120+",
      label2: "Solar Farms",
      background:
        "linear-gradient(rgba(15,23,42,.75), rgba(15,23,42,.75)), url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80') center/cover"
    },

    {
      title: "Clean Wind Energy Solutions",
      description:
        "Our intelligent wind farms generate sustainable electricity while reducing carbon emissions.",
      stat1: "180 MW",
      label1: "Wind Capacity",
      stat2: "95",
      label2: "Wind Turbines",
      background:
        "linear-gradient(rgba(15,23,42,.75), rgba(15,23,42,.75)), url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=80') center/cover"
    },

    {
      title: "Smart Battery Storage Systems",
      description:
        "Store renewable energy safely using our next-generation lithium battery technology.",
      stat1: "500 MWh",
      label1: "Battery Storage",
      stat2: "99%",
      label2: "Efficiency",
      background:
        "linear-gradient(rgba(15,23,42,.75), rgba(15,23,42,.75)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80') center/cover"
    },

    {
      title: "Hydroelectric Power Stations",
      description:
        "Generating reliable renewable electricity from flowing water across Africa.",
      stat1: "420 MW",
      label1: "Hydro Capacity",
      stat2: "35",
      label2: "Hydro Plants",
      background:
        "linear-gradient(rgba(15,23,42,.75), rgba(15,23,42,.75)), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80') center/cover"
    }
  ];

  // Next Slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Previous Slide
  const previousSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section
      className="hero"
      style={{
        background: slides[currentSlide].background,
        transition: "0.6s"
      }}
    >
      <div>

        <h1>{slides[currentSlide].title}</h1>

        <p>

          {slides[currentSlide].description}

        </p>

        <br />

        <button className="btn-primary">
          Explore Solutions
        </button>

        {/* Statistics */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "50px",
            marginTop: "60px",
            flexWrap: "wrap"
          }}
        >

          <div>

            <h2
              style={{
                color: "#10B981",
                fontSize: "40px"
              }}
            >
              {slides[currentSlide].stat1}
            </h2>

            <p>{slides[currentSlide].label1}</p>

          </div>

          <div>

            <h2
              style={{
                color: "#10B981",
                fontSize: "40px"
              }}
            >
              {slides[currentSlide].stat2}
            </h2>

            <p>{slides[currentSlide].label2}</p>

          </div>

        </div>

        {/* Navigation Buttons */}

        <div
          style={{
            marginTop: "60px",
            display: "flex",
            justifyContent: "center",
            gap: "20px"
          }}
        >

          <button
            onClick={previousSlide}
            style={{
              padding: "12px 18px",
              fontSize: "20px",
              border: "none",
              borderRadius: "8px",
              background: "white"
            }}
          >
            ←
          </button>

          <button
            onClick={nextSlide}
            style={{
              padding: "12px 18px",
              fontSize: "20px",
              border: "none",
              borderRadius: "8px",
              background: "#10B981",
              color: "white"
            }}
          >
            →
          </button>

        </div>

      </div>
    </section>
  );
}

export default HeroSlider;