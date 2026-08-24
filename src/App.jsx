// src/App.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Features from './components/Features';
import VideoDemo from './components/VideoDemo';
import FinancialImpact from './components/FinancialImpact';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen flex flex-col bg-white overflow-x-hidden"
    >
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Brands />
        <Features />
        <VideoDemo />
        <FinancialImpact />
        <HowItWorks />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </motion.div>
  );
}