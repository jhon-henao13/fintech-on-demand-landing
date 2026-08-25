import React, { useState } from 'react';
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
import ContactModal from './components/ContactModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInitialEmail, setModalInitialEmail] = useState('');

  const handleOpenModal = (email = '') => {
    setModalInitialEmail(email);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen flex flex-col bg-white overflow-x-hidden"
    >
      <Navbar onOpenModal={() => handleOpenModal()} />
      <main className="flex-grow">
        <Hero onOpenModal={handleOpenModal} />
        <Brands />
        <Features />
        <VideoDemo onOpenModal={() => handleOpenModal()} />
        <FinancialImpact />
        <HowItWorks />
        <FAQ />
        <CTA onOpenModal={() => handleOpenModal()} />
      </main>
      <Footer />

      {/* Modal Global de Captación y Agendamiento */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        initialEmail={modalInitialEmail}
      />
    </motion.div>
  );
}