// Import React and useState
import React, { useState } from "react";

function Inquiries() {

  // Store form data
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  // Store success message
  const [submitted, setSubmitted] = useState(false);

  // Update form values
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  // Submit form
  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      formData.fullName === "" ||
      formData.email === "" ||
      formData.phone === "" ||
      formData.service === "" ||
      formData.message === ""
    ) {

      alert("Please complete all fields.");

      return;

    }

    if (!formData.email.includes("@")) {

      alert("Please enter a valid email address.");

      return;

    }

    if (formData.message.length < 15) {

      alert("Your message is too short.");

      return;

    }

    setSubmitted(true);

  };

  return (

    <section className="page-container">

      <h2 className="section-title">

        Contact Our Energy Experts

      </h2>

      <p className="subtitle">

        We'd love to help you choose the best renewable energy
        solution for your home or business.

      </p>

      <form onSubmit={handleSubmit}>

        <label>

          Full Name

        </label>

        <input
          type="text"
          name="fullName"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleChange}
        />

        <label>

          Email Address

        </label>

        <input
          type="email"
          name="email"
          placeholder="example@email.com"
          value={formData.email}
          onChange={handleChange}
        />

        <label>

          Phone Number

        </label>

        <input
          type="tel"
          name="phone"
          placeholder="+234..."
          value={formData.phone}
          onChange={handleChange}
        />

        <label>

          Select Service

        </label>

        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
        >

          <option value="">Choose a Service</option>

          <option>Solar Installation</option>

          <option>Wind Energy</option>

          <option>Battery Storage</option>

          <option>Hydroelectric Power</option>

          <option>Commercial Energy Solutions</option>

        </select>

        <label>

          Your Message

        </label>

        <textarea
          rows="6"
          name="message"
          placeholder="Tell us about your project..."
          value={formData.message}
          onChange={handleChange}
        />

        <button
          className="btn-primary"
          type="submit"
        >

          Submit Inquiry

        </button>

      </form>

      {/* Success Message */}

      {submitted && (

        <div
          style={{
            marginTop: "30px",
            background: "#DCFCE7",
            padding: "25px",
            borderRadius: "10px",
            borderLeft: "5px solid #10B981"
          }}
        >

          <h2
            style={{
              color: "#10B981"
            }}
          >

            ✅ Inquiry Submitted Successfully!

          </h2>

          <p
            style={{
              marginTop: "10px"
            }}
          >

            Thank you,
            <strong> {formData.fullName}</strong>.

            Our renewable energy team will contact you shortly using

            <strong> {formData.email}</strong>.

          </p>

        </div>

      )}

    </section>

  );

}

export default Inquiries;