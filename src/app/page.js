"use client";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, BarChart, Megaphone, Globe } from "lucide-react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroMediaGrid from "./components/HeroMediaGrid";
import SMMSection from "./components/SMMSection";
import ScrollStepper from "./components/ScrollStepper";

// for Hero section
const media = [
  // Important: files in public/ should be referenced from root (no /public prefix)
  { id: 1, type: "image", src: "/images/h1.png", alt: "Sketch pad", caption: "Creative process" },
  { id: 2, type: "video", src: "/videos/Web_dev.mp4", alt: "Web dev demo", caption: "Web development" },
  { id: 3, type: "gif", src: "/gifs/thumb.gif", alt: "Animated UI", caption: "Micro-interactions" },
  { id: 4, type: "image", src: "/images/h3.png", alt: "Agency award", caption: "Award winning agency" },
];

// for horizontal hover imgs 
const imgs = [
  {
    src: "/images/h1.png",   // public/images/1.jpg
    alt: "Social Media Marketing",
    caption: "Build strong presence on platforms like Instagram, LinkedIn & Facebook.",
  },
  {
    src: "/images/h1.png",
    alt: "City Skyline",
    caption: "Modern architecture at sunset",
  },
  {
    src: "/images/h1.png",
    alt: "Website Development",
    caption: "We design fast, responsive, and SEO-friendly websites that convert visitors into customers.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen ">
        {/* Hero Section */}
        <section className="relative w-full pt-14 z-10 overflow-hidden bg-gray-400 rounded-3xl  ">
          {/* Bottom-left blur */}
          {/* <div className="absolute  -bottom-30 -left-24 w-96 h-96 bg-white z-1 opacity-80 rounded-full filter blur-3xl pointer-events-none"></div> */}

          {/* Bottom-right blur */}
          {/* <div className="absolute -bottom-30 -right-24 w-96 h-96 bg-white z-1 opacity-80 rounded-full filter blur-3xl pointer-events-none"></div> */}
          <HeroMediaGrid media={media} />

        </section>



        {/* Services Section */}
        <section id="services" className="py-20 px-6 bg-gray-50 ">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-medium mb-12">OUR SERVICES</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 md:gap-10 gap-2">
              {[
                { icon: <Megaphone className="w-10 h-10 text-indigo-600" />, title: "Social Media Marketing", desc: "Build strong presence on platforms like Instagram, LinkedIn & Facebook." },
                { icon: <BarChart className="w-10 h-10 text-indigo-600" />, title: "SEO Optimization", desc: "Rank higher and reach the right audience with powerful SEO strategies." },
                { icon: <Rocket className="w-10 h-10 text-indigo-600" />, title: "PPC Advertising", desc: "Drive instant traffic and leads through targeted ad campaigns." },
                { icon: <Globe className="w-10 h-10 text-indigo-600" />, title: "Website Development", desc: "We design fast, responsive, and SEO-friendly websites that convert visitors into customers." }
              ].map((service, i) => (

                <motion.div
                  key={i}
                  className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition"
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.1, // Stagger effect
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  <div className="mb-4 flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* <section className="w-full">
          <HoverExpand_Horizontal images={imgs} className="max-w-6xl mx-auto" />
        </section> */}

        {/* About Section */}
        <section id="about" className="py-20 px-6 bg-white">

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl mb-4 font-medium">ABOUT US</h2>
              <p className="text-gray-700 mb-4">
                We’re a team of passionate marketers, designers, and strategists dedicated to helping
                businesses scale in the digital world. Our mission is to bring measurable results through creativity and technology.
              </p>
              <a
                href="#contact"
                className="bg-indigo-600 text-white px-5 py-3 rounded-full font-semibold hover:bg-indigo-500 transition"
              >
                Learn More
              </a>
            </div>
            <motion.img
              src="/hero-bg.jpg"
              alt="About"
              className="rounded-2xl shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </section>

        <section>
          <SMMSection />
        </section>

        <section>
          <ScrollStepper />
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-medium mb-12">WHAT CLIENTS SAY</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Rahul Sharma", text: "Fantastic team! Our website traffic grew by 120% in just 3 months." },
                { name: "Sneha Patel", text: "Highly professional and data-driven. Loved their SEO strategy!" },
                { name: "Amit Verma", text: "They transformed our social media — great ROI from ads!" },
              ].map((t, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                  <p className="text-gray-700 mb-4 italic">“{t.text}”</p>
                  <h4 className="font-semibold text-indigo-600">{t.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-20 px-6 bg-indigo-600 text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="mb-8 text-lg">Let’s create a winning digital strategy for your brand today.</p>
          <a
            href="mailto:info@youragency.com"
            className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
          >
            Contact Us
          </a>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-6 text-center">
          <p>© {new Date().getFullYear()} BigTopSocial Digital Marketing Agency. All rights reserved.</p>

        </footer>
      </main>
    </>
  );
}
