"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // ✅ detect current route

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "SERVICES", href: "/services" },
    { name: "ABOUT", href: "/about" },
    // { name: "TESTIMONIALS", href: "/testimonials" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-indigo-600">
         <img src="/images/" alt="" />BigTopSocial
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href; // ✅ check active link
            return (
              <a
                key={link.name}
                href={link.href}
                className={`pb-1 font-normal relative  transition before:absolute before:bottom-0 before:left-0 before:h-[3px] before:bg-indigo-600 before:transition-all before:duration-300
                  ${
                    isActive
                      ? "text-indigo-600 before:w-full"
                      : "text-gray-900 before:w-0 hover:before:w-full hover:text-indigo-600"
                  }`}
              >
                {link.name}
              </a>
            );
          })}
          <a
            href="/contact"
            className="ml-4 bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-500 transition font-semibold"
          >
            Get Quote
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white shadow-lg px-6 py-4 space-y-3"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block font-medium transition ${
                    isActive
                      ? "text-indigo-600 underline underline-offset-4"
                      : "text-gray-700 hover:text-indigo-600"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block bg-indigo-600 text-white text-center py-2 rounded-full font-semibold hover:bg-indigo-500 transition"
            >
              Get Quote
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
