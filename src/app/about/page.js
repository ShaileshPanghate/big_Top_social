"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../components/Navbar";


export default function About() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100 text-gray-800">
     <Navbar />
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-blue-600 mb-6"
        >
          About BigTopSocial
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-600"
        >
          BigTopSocial is a full-service <span className="font-semibold text-blue-600">digital marketing</span> and 
          <span className="font-semibold text-blue-600"> web solutions agency</span> that helps brands grow, connect, 
          and thrive in the digital world. We combine creativity, data, and technology to deliver measurable results.
        </motion.p>
      </section>

      {/* Mission & Vision Section */}
      <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to empower businesses to reach their full potential online through
            creative storytelling, smart marketing strategies, and cutting-edge technology.
            We focus on delivering digital experiences that not only attract attention but also
            convert visitors into loyal customers.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <Image
            src="/images/mission.jpg"
            alt="Our Mission"
            width={500}
            height={350}
            className="rounded-2xl shadow-lg object-cover"
          />
        </motion.div>
      </section>

      {/* Services Highlight Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-12">
            What We Do Best
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Marketing",
                desc: "Social media campaigns, content creation, SEO, and ads that drive engagement and growth.",
                icon: "💡",
              },
              {
                title: "Web Design & Development",
                desc: "Modern, responsive, and fast websites that deliver great user experience and business results.",
                icon: "🖥️",
              },
              {
                title: "Brand Strategy",
                desc: "Building unique brand identities that connect emotionally with your audience.",
                icon: "🚀",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-8 bg-blue-50 rounded-2xl shadow hover:shadow-lg transition"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Values Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">Why Choose Us</h2>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed mb-12">
          At BigTopSocial, we value creativity, transparency, and measurable success. 
          Our experienced team works closely with clients to craft tailored digital strategies 
          that make brands stand out in a crowded market.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {["Experienced Team", "Creative Solutions", "Proven Results", "Client-Centric Approach"].map(
            (value, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="p-6 bg-white rounded-xl shadow text-blue-600 font-medium"
              >
                {value}
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Brand?</h2>
        <p className="mb-8 text-blue-100">
          Let BigTopSocial help you dominate the digital space.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition"
        >
          Contact Us Today
        </a>
      </section>
    </main>
  );
}
