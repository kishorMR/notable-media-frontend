import { useState } from "react";
import "./Contact.css";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.text();

      alert(result);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        {/* Left Side */}
        <div className="contact-info">
          <span className="section-tag">Get In Touch</span>

          <h2 className="section-title">
            Let's Create Something Amazing
          </h2>

          <p className="section-sub">
            Have an idea, project, or collaboration in mind?
            We'd love to hear from you and help bring your vision to life.
          </p>

          <div className="contact-details">
            <div className="detail-item">
              📧 hello@company.com
            </div>

            <div className="detail-item">
              📞 +91 98765 43210
            </div>

            <div className="detail-item">
              📍 Bangalore, India
            </div>
          </div>
        </div>

        {/* Right Side */}
        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="contact-input"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="contact-input"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="contact-input"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Tell us about your project..."
            className="contact-input contact-textarea"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="contact-submit"
          >
            Send Message →
          </button>

        </form>

      </div>
    </section>
  );
}