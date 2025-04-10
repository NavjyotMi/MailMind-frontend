import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { Inbox } from "lucide-react";

function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0e0f15] text-white font-sans">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#0e0e0e] text-white px-6 py-32">
        {/* Floating Icons (Rotating Slowly in the Background) */}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 flex items-center justify-center z-0 opacity-10"
        >
          <div className="relative w-[400px] h-[400px]">
            {[...Array(8)].map((_, i) => {
              const angle = (i / 8) * 2 * Math.PI;
              const x = 150 * Math.cos(angle);
              const y = 150 * Math.sin(angle);
              return (
                <Inbox
                  key={i}
                  className="absolute text-white"
                  style={{ top: `${200 + y}px`, left: `${200 + x}px` }}
                  size={28}
                />
              );
            })}
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-4 leading-tight text-white tracking-tight">
            Smarter Inbox. Sharper Focus.
          </h1>
          <p className="text-lg text-gray-400 mb-10">
            AI-Powered Categorization, Summarization, and Natural Search — made
            to save you hours.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-6 py-3 rounded-full font-medium shadow-md hover:bg-gray-200 transition cursor-pointer"
          >
            <Link to="/login">Login/SignUp</Link>
          </motion.button>
        </div>

        {/* Wave Divider */}
        {/* <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#1a1a1a"
            fillOpacity="1"
            d="M0,160L80,149.3C160,139,320,117,480,112C640,107,800,117,960,144C1120,171,1280,213,1360,234.7L1440,256V0H1360C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0H0Z"
          ></path>
        </svg> */}
      </section>
      {/* <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#1a1a1a"
          fillOpacity="1"
          d="M0,160L80,149.3C160,139,320,117,480,112C640,107,800,117,960,144C1120,171,1280,213,1360,234.7L1440,256V0H1360C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0H0Z"
        ></path>
      </svg> */}
      {/* FEATURE SECTIONS */}
      <section className="bg-[#0e0e0e] text-white px-6 py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold mb-3">Smart Categorization</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Automatically sort emails into Work, Personal, Promotions, and
              Spam using intelligent AI.
            </p>
          </motion.div>

          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-xl font-semibold mb-3">Summarization</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Get instant summaries of long email threads. No more scrolling
              through cluttered conversations.
            </p>
          </motion.div>

          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-xl font-semibold mb-3">Supercharged Search</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Find emails fast with natural language queries. It's like ChatGPT
              for your inbox.
            </p>
          </motion.div>

          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-xl font-semibold mb-3">
              Multi-Account Management
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Handle all your inboxes from one place — unified, seamless, and
              efficient.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#1a1a1a] text-white px-6 py-28">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-6 tracking-tight leading-tight"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Us?
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg leading-relaxed mb-4"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            This isn’t just another email app. We blend smart AI with intuitive
            design to declutter your inbox and sharpen your focus.
          </motion.p>
          <motion.p
            className="text-gray-400 text-lg leading-relaxed"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            With us, you get clarity, calm, and complete command over your
            communication — all in one place.
          </motion.p>
        </div>
      </section>
      <footer className="bg-[#0e0e0e] text-gray-400 px-6 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-2">
              MailMaster
            </h3>
            <p className="text-sm">
              Smart. Private. Effortless Inbox Management.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-medium mb-2">Product</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#features" className="hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-medium mb-2">Company</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white font-medium mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                Twitter
              </a>
              <a href="#" className="hover:text-white">
                GitHub
              </a>
              <a href="#" className="hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} MailMaster. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
