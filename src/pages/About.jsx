// Import React
import React from "react";

function About() {
  return (
    <section className="page-container">

      {/* Page Heading */}

      <h2 className="section-title">
        About Helios Renewable Energy
      </h2>

      <p className="subtitle">
        Driving Africa's clean energy future through innovation,
        sustainability, and world-class renewable energy solutions.
      </p>

      {/* Company Story */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px,1fr))",
          gap: "30px",
          marginBottom: "60px"
        }}
      >

        <div className="card">

          <h3>🌍 Our Mission</h3>

          <p>
            Our mission is to provide reliable, affordable,
            and environmentally friendly energy solutions
            that improve lives while protecting our planet.
          </p>

        </div>

        <div className="card">

          <h3>🚀 Our Vision</h3>

          <p>
            To become Africa's leading renewable energy
            provider by delivering innovative solar,
            wind, hydro and battery technologies.
          </p>

        </div>

        <div className="card">

          <h3>🤝 Our Values</h3>

          <p>
            Integrity, innovation, teamwork,
            customer satisfaction and environmental
            responsibility guide every project we deliver.
          </p>

        </div>

      </div>

      {/* Company Milestones */}

      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#0F172A"
        }}
      >
        Company Milestones
      </h2>

      <table>

        <thead>

          <tr>

            <th>Year</th>

            <th>Achievement</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>2016</td>

            <td>Helios Renewable Energy was established.</td>

          </tr>

          <tr>

            <td>2018</td>

            <td>Installed over 100 solar power systems.</td>

          </tr>

          <tr>

            <td>2020</td>

            <td>Expanded into wind energy projects.</td>

          </tr>

          <tr>

            <td>2022</td>

            <td>Launched smart battery storage solutions.</td>

          </tr>

          <tr>

            <td>2025</td>

            <td>Completed 500+ renewable energy installations across Africa.</td>

          </tr>

        </tbody>

      </table>

      {/* Statistics */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "25px",
          marginTop: "60px"
        }}
      >

        <div className="card">

          <h2
            style={{
              color: "#10B981",
              fontSize: "40px"
            }}
          >
            500+
          </h2>

          <p>Projects Completed</p>

        </div>

        <div className="card">

          <h2
            style={{
              color: "#10B981",
              fontSize: "40px"
            }}
          >
            150 MW
          </h2>

          <p>Solar Capacity Installed</p>

        </div>

        <div className="card">

          <h2
            style={{
              color: "#10B981",
              fontSize: "40px"
            }}
          >
            25
          </h2>

          <p>Regional Offices</p>

        </div>

        <div className="card">

          <h2
            style={{
              color: "#10B981",
              fontSize: "40px"
            }}
          >
            98%
          </h2>

          <p>Customer Satisfaction</p>

        </div>

      </div>

    </section>
  );
}

export default About;