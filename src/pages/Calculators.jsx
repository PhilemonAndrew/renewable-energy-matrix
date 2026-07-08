import React, { useState } from "react";

function Calculators() {
  const [usage, setUsage] = useState("");
  const [result, setResult] = useState(null);

  const calculateEnergy = () => {
    if (usage === "" || Number(usage) <= 0) {
      alert("Please enter a valid monthly power usage.");
      return;
    }

    let recommendation = "";
    let panels = 0;
    let battery = "";
    let estimatedCost = "";

    if (Number(usage) <= 200) {
      recommendation = "Small Home Package";
      panels = 6;
      battery = "5 kWh Battery";
      estimatedCost = "₦2,500,000";
    } else if (Number(usage) <= 500) {
      recommendation = "Medium Home Package";
      panels = 12;
      battery = "10 kWh Battery";
      estimatedCost = "₦4,800,000";
    } else if (Number(usage) <= 800) {
      recommendation = "Large Business Package";
      panels = 20;
      battery = "20 kWh Battery";
      estimatedCost = "₦8,500,000";
    } else {
      recommendation = "Industrial Energy Package";
      panels = 35;
      battery = "40 kWh Battery";
      estimatedCost = "Contact Us";
    }

    setResult({
      recommendation,
      panels,
      battery,
      estimatedCost,
    });
  };

  return (
    <section className="page-container">
      <h2 className="section-title">Energy Requirement Calculator</h2>

      <p className="subtitle">
        Enter your estimated monthly electricity usage to receive a
        recommended renewable energy solution.
      </p>

      <form onSubmit={(e) => e.preventDefault()}>
        <label>Monthly Electricity Usage (kWh)</label>

        <input
          type="number"
          placeholder="Example: 350"
          value={usage}
          onChange={(e) => setUsage(e.target.value)}
        />

        {/* Dynamic Warning */}
        {Number(usage) > 800 && (
          <div
            className="warning"
            style={{
              borderLeft: "5px solid red",
            }}
          >
            ⚠ High energy consumption detected. Industrial energy
            solutions are recommended.
          </div>
        )}

        <button
          className="btn-primary"
          type="button"
          onClick={calculateEnergy}
        >
          Calculate Recommendation
        </button>
      </form>

      {result && (
        <div className="result">
          <h2
            style={{
              color: "#10B981",
              marginBottom: "20px",
            }}
          >
            Recommended Energy Package
          </h2>

          <p>
            <strong>Package:</strong> {result.recommendation}
          </p>

          <br />

          <p>
            <strong>Solar Panels Required:</strong> {result.panels}
          </p>

          <br />

          <p>
            <strong>Battery System:</strong> {result.battery}
          </p>

          <br />

          <p>
            <strong>Estimated Cost:</strong> {result.estimatedCost}
          </p>
        </div>
      )}
    </section>
  );
}

export default Calculators;