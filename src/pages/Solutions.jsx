import React from "react";

function Solutions() {
  const solutions = [
    {
      icon: "☀",
      title: "Solar Power Systems",
      description:
        "Efficient solar panels designed for homes, businesses, schools and industries.",
      efficiency: "98%",
    },
    {
      icon: "🌬",
      title: "Wind Energy",
      description:
        "Modern wind turbines that convert wind into clean, renewable electricity.",
      efficiency: "95%",
    },
    {
      icon: "🔋",
      title: "Battery Storage",
      description:
        "Store excess renewable energy safely for uninterrupted power supply.",
      efficiency: "99%",
    },
    {
      icon: "💧",
      title: "Hydroelectric Power",
      description:
        "Generate electricity using flowing water with environmentally friendly technology.",
      efficiency: "94%",
    },
    {
      icon: "⚡",
      title: "Smart Energy Grid",
      description:
        "Monitor and manage electricity usage with intelligent smart-grid technology.",
      efficiency: "97%",
    },
    {
      icon: "🏭",
      title: "Industrial Energy Solutions",
      description:
        "Large-scale renewable energy systems built for factories and manufacturing plants.",
      efficiency: "96%",
    },
  ];

  return (
    <section className="page-container">
      <h2 className="section-title">
        Our Renewable Energy Solutions
      </h2>

      <p className="subtitle">
        We deliver innovative renewable energy technologies that improve
        efficiency while protecting the environment.
      </p>

      <div className="grid">
        {solutions.map((item, index) => (
          <div
            key={index}
            className="card"
            style={{ textAlign: "center" }}
          >
            <div
              style={{
                fontSize: "60px",
                marginBottom: "20px",
              }}
            >
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p style={{ marginTop: "15px" }}>
              {item.description}
            </p>

            <div
              style={{
                marginTop: "25px",
                padding: "15px",
                background: "#ECFDF5",
                borderRadius: "10px",
              }}
            >
              <h4 style={{ color: "#10B981" }}>
                Efficiency
              </h4>

              <h2
                style={{
                  color: "#0F172A",
                  marginTop: "10px",
                }}
              >
                {item.efficiency}
              </h2>
            </div>

            <button
              className="btn-primary"
              style={{ marginTop: "25px" }}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>

      <section
        style={{
          marginTop: "70px",
          background: "#0F172A",
          color: "white",
          padding: "50px",
          borderRadius: "15px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>
          Building a Greener Tomorrow
        </h2>

        <p
          style={{
            maxWidth: "750px",
            margin: "auto",
            color: "#CBD5E1",
            lineHeight: "1.8",
          }}
        >
          Helios Renewable Energy combines cutting-edge technology,
          sustainability, and engineering excellence to create cleaner,
          smarter and more affordable energy solutions for homes,
          businesses, industries and governments.
        </p>

        <button
          className="btn-primary"
          style={{ marginTop: "30px" }}
        >
          Explore All Services
        </button>
      </section>
    </section>
  );
}

export default Solutions;