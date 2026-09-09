// src/components/GraciasPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

export default function GraciasPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar onOpenModal={() => (window.location.href = '/')} />
      
      <main className="flex-grow flex items-center justify-center py-16 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-xl bg-white rounded-3xl shadow-xl border border-slate-100 p-8 sm:p-12 text-center space-y-8"
        >
          <div className="space-y-4">
            <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 font-extrabold text-4xl shadow-sm">
              ✓
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-darkblue tracking-tight">
              ¡Gracias por registrarte!
            </h1>
            <p className="text-slate-600 font-medium text-base sm:text-lg leading-relaxed">
              Hemos recibido la información de tu registro correctamente.
            </p>
            <p className="text-slate-600 font-medium text-base sm:text-lg leading-relaxed">
              Nuestro equipo comercial se pondrá en contacto contigo a la brevedad tras evaluar las necesidades específicas de tu empresa.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <a
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-brand-darkblue transition-colors shadow-md"
            >
              ← Volver al inicio
            </a>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}