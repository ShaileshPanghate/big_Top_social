"use client";

import { Megaphone, LineChart, Search, Palette, ShoppingCart, Newspaper, Code, Globe, Layers, Database, Smartphone, Wrench, } from "lucide-react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Megaphone className="w-10 h-10 text-blue-700" />,
    title: "Social Media Marketing",
    desc: "Grow your brand's presence and engagement with strategic campaigns across all social platforms.",
  },
  {
    icon: <LineChart className="w-10 h-10 text-blue-700" />,
    title: "Performance Ads",
    desc: "Get measurable results and ROI-driven advertising on Google, Meta, and beyond.",
  },
  {
    icon: <Search className="w-10 h-10 text-blue-700" />,
    title: "SEO Optimization",
    desc: "Rank higher and reach more with targeted keyword strategies and search engine best practices.",
  },
  {
    icon: <Palette className="w-10 h-10 text-blue-700" />,
    title: "Creative Design",
    desc: "From posts to ads, get scroll-stopping graphics that convert and impress.",
  },
  {
    icon: <ShoppingCart className="w-10 h-10 text-blue-700" />,
    title: "E-Commerce",
    desc: "Boost your online sales with strategic e-commerce marketing solutions.",
  },
  {
    icon: <Newspaper className="w-10 h-10 text-blue-700" />,
    title: "Print Media",
    desc: "Enhance brand visibility through compelling flyers, brochures, and print advertisements.",
  },
];
const Webservices = [
  {
    icon: <Code className="w-10 h-10 text-indigo-700" />,
    title: "Custom Web Development",
    desc: "Build high-performing, scalable websites tailored to your business needs using modern technologies.",
  },
  {
    icon: <Globe className="w-10 h-10 text-indigo-700" />,
    title: "Website Design & Redesign",
    desc: "Create stunning, user-friendly designs or refresh your existing site for better engagement and conversions.",
  },
  {
    icon: <Layers className="w-10 h-10 text-indigo-700" />,
    title: "Frontend Development",
    desc: "Develop visually appealing and responsive interfaces with technologies like React, Next.js, and Tailwind CSS.",
  },
  {
    icon: <Database className="w-10 h-10 text-indigo-700" />,
    title: "Backend Development",
    desc: "Build secure and reliable backends using Node.js, Express, and databases like MongoDB or PostgreSQL.",
  },
  {
    icon: <Smartphone className="w-10 h-10 text-indigo-700" />,
    title: "Responsive & Mobile Optimization",
    desc: "Ensure seamless experiences across all devices with fast-loading, mobile-friendly designs.",
  },
  {
    icon: <Wrench className="w-10 h-10 text-indigo-700" />,
    title: "Website Maintenance & Support",
    desc: "Keep your website updated, secure, and running smoothly with regular maintenance and technical support.",
  },
];
export default function ServicesSection() {
  return (
    <>
      <Navbar />

      <section className="py-24 bg-gray-50" id="services">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Section Header */}
          <div className="mb-12">
            <span className="bg-blue-400 text-white text-sm font-semibold px-4 py-1 rounded-full">
              WHAT WE OFFER
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-medium text-gray-700">
              OUR DIGITAL MARKETING SERVICES
            </h2>
          </div>
          <motion.div
            className=" transition"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.5, // Stagger effect
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            {/* Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div></motion.div>
        </div>
      </section>

      <section className="py-24 bg-gray-50" id="services">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Section Header */}
          <div className="mb-12">
            <span className="bg-blue-400 text-white text-sm font-semibold px-4 py-1 rounded-full">
              WHAT WE BUILD
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-medium text-gray-700">
              OUR WEB DEVELOPMENT SERVICES
            </h2>
          </div>
          <motion.div
            className=" transition"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.5, // Stagger effect
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            {/* Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {Webservices.map((service) => (
                <div
                  key={service.title}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div></motion.div>
        </div>
      </section>
      <motion.div
        className=" p-8 rounded-2xl shadow hover:shadow-lg transition"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay: 1, // Stagger effect
          ease: "easeOut",
        }}
        viewport={{ once: true }}
      >
        <section>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-12  ">
            {/* Card 1 - Digital Marketing */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden max-w-md hover:shadow-lg transition-shadow duration-300">
              <Image
                src="https://www.springboard.com/blog/wp-content/uploads/2022/05/how-to-become-a-digital-marketer.png" // replace with your image path
                alt="Digital Marketing"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-blue-800 mb-2">
                  Boost Your Business with Our Digital Marketing Services!
                </h2>
                <p className="text-gray-700 mb-4">
                  Expand your online reach through strategic campaigns that drive real
                  results. From SEO and social media marketing to Google Ads and
                  branding, we help you connect with your audience and grow your
                  business effectively.
                </p>
                <button className="bg-blue-800 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors">
                  <a href="/contact">  LET’S CONNECT</a>
                </button>
              </div>
            </div>

            {/* Card 2 - Web Development */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden max-w-md hover:shadow-lg transition-shadow duration-300">
              <Image
                src="https://miro.medium.com/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg" // replace with your image path
                alt="Web Development"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-blue-800 mb-2">
                  Build Your Online Presence with Expert Web Development!
                </h2>
                <p className="text-gray-700 mb-4">
                  Get a stunning, high-performance website tailored to your brand.
                  From responsive design to custom web applications, we create
                  seamless digital experiences that attract visitors and drive
                  conversions.
                </p>
                <button className="bg-blue-800 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors">
                  <a href="/contact">  LET’S CONNECT</a>
                </button>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}
