// src/components/Hero.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import heroRightImg from '../assets/hero-right.webp';
import travexLogo from '../assets/travex-logo.png';
import cnbvLogo from '../assets/cnbv-icon-gray-png.png';
import bancoMexicoLogo from '../assets/bancodemexico-png.png';
import visaLogo from '../assets/visa-png.webp';
import condusefLogo from '../assets/condusef-png.webp';

export default function Hero({ onOpenModal }) {
    
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      onOpenModal(email);
    } else {
      onOpenModal();
    }
  };

  return (
    <section className="relative overflow-hidden bg-slate-50/60 pt-1 lg:pt-2 pb-0">
      <div className="w-full max-w-[1536px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-0">
          
          {/* Columna Izquierda: Texto y Captación */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 px-6 sm:px-12 lg:pl-16 lg:pr-8 space-y-6"
          >
            <div>
              <img src={travexLogo} alt="Travex Logo" className="h-4 w-auto object-contain mb-3" />
            </div>
          
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-brand-darkblue !leading-[1.2] tracking-tight !mt-2">
              El control financiero que <span className="font-semibold text-brand-blue">tu empresa merece</span>
            </h1>
          
            <p className="text-slate-600 text-lg leading-relaxed max-w-lg">
              La forma más fácil de gestionar los gastos de tu empresa.
            </p>
          
            {/* Formulario de Email + CTA */}
            <form onSubmit={handleSubmit} className="pt-2 max-w-md">
              <div className="flex flex-col sm:flex-row gap-2 bg-white p-2 rounded-2xl shadow-sm border border-slate-200 focus-within:border-brand-blue focus-within:ring-2 focus-within:ring-brand-blue/20 transition-all">
                <input
                  type="email"
                  required
                  placeholder="Tu correo empresarial"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-slate-800 placeholder-slate-400 outline-none text-base"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="whitespace-nowrap px-6 py-3.5 rounded-xl font-bold text-white bg-brand-darkblue hover:bg-brand-blue shadow-md transition-all"
                >
                  Agenda tu demo
                </motion.button>
              </div>
            </form>
          
            {/* Entidades reguladoras / Badges */}
            <div className="pt-8 pb-8 lg:pb-12">
              <div className="flex flex-wrap items-center gap-6 sm:gap-8 opacity-75 grayscale hover:grayscale-0 transition-all">
                <img src={cnbvLogo} alt="CNBV" className="h-10 object-contain" />
                <img src={bancoMexicoLogo} alt="Banco de México" className="h-8 object-contain" />
                <img src={visaLogo} alt="VISA" className="h-6 object-contain" />
                <img src={condusefLogo} alt="CONDUSEF" className="h-8 object-contain" />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6 w-full flex justify-end items-end self-end pl-6 lg:pl-0"
          >
            <img
              src={heroRightImg}
              alt="Travex Fintech App and Card Mockup"
              className="w-full h-auto object-cover object-left-bottom max-h-[580px] lg:max-h-none"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}