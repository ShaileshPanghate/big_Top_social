"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // Example: send form data to an API endpoint
      // await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });

      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("❌ Something went wrong. Try again later.");
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br flex items-center justify-center p-6">
      <Navbar />
      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl max-w-2xl w-full p-8 mt-18">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-4">
          Contact <span className="text-indigo-600">BigTopSocial</span>
        </h1>
        <p className="text-gray-600 text-center mb-8">
          We’d love to hear from you! Fill out the form below and our team will get back to you soon.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              required
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition duration-200"
          >
            Send Message
          </button>
        </form>

        {status && (
          <p className="mt-4 text-center font-medium text-gray-700">{status}</p>
        )}

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Email: support@bigtopsocial.com</p>
          <p>Phone: 9096076177</p>
        </div>
      </div>
    </section>
  );
}
