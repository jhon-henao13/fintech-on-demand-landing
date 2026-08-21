// src/components/Navbar.jsx
import React, { useState } from 'react';
import logo from '../assets/fintech-logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <img 
            src={logo} 
            alt="Fintech On Demand Logo" 
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-slate-700">
          <a href="#soluciones" className="relative py-1 transition-colors hover:text-brand-blue after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-blue hover:after:w-full after:transition-all">
            Soluciones
          </a>
          <a href="#beneficios" className="relative py-1 transition-colors hover:text-brand-blue after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-blue hover:after:w-full after:transition-all">
            Beneficios
          </a>
          <a href="#implementacion" className="relative py-1 transition-colors hover:text-brand-blue after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-blue hover:after:w-full after:transition-all">
            Implementación
          </a>
          <a href="#faq" className="relative py-1 transition-colors hover:text-brand-blue after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-blue hover:after:w-full after:transition-all">
            FAQ
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-white bg-brand-darkblue hover:bg-brand-blue shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200"
          >
            Hablar con un asesor
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-slate-100 px-6 py-6 space-y-4 shadow-xl transition-all">
          <a href="#soluciones" onClick={() => setIsOpen(false)} className="block text-slate-700 font-semibold py-1 hover:text-brand-blue">Soluciones</a>
          <a href="#beneficios" onClick={() => setIsOpen(false)} className="block text-slate-700 font-semibold py-1 hover:text-brand-blue">Beneficios</a>
          <a href="#implementacion" onClick={() => setIsOpen(false)} className="block text-slate-700 font-semibold py-1 hover:text-brand-blue">Implementación</a>
          <a href="#faq" onClick={() => setIsOpen(false)} className="block text-slate-700 font-semibold py-1 hover:text-brand-blue">FAQ</a>
          <a
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center mt-4 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-brand-darkblue active:scale-95 transition-all"
          >
            Hablar con un asesor
          </a>
        </div>
      )}
    </header>
  );
}