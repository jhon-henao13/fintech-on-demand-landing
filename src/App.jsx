// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Features from './components/Features';
import VideoDemo from './components/VideoDemo';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Brands />
        <Features />
        <VideoDemo />
      </main>
      <Footer />
    </div>
  );
}