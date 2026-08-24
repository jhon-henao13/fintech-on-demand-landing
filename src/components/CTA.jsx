import React from 'react';
import { motion } from 'framer-motion';
import handImg from '../assets/hand-violet.jpeg';

export default function CTA() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-brand-cardBg text-white py-16 sm:py-24 relative overflow-hidden"
    >
      
      {/* Resplandor decorativo de fondo */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Columna Izquierda: Título y Botón */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight !leading-[1.3] text-white">
              ¿Listo para tomar control <br className="hidden sm:inline" />
              de los gastos de tu empresa?
            </h2>

            <div className="!mt-16">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center px-8 py-5 rounded-xl font-bold text-white bg-brand-blue hover:bg-brand-darkblue shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 active:scale-95 border border-white/10 group"
              >
                <span>Agenda tu demo</span>
                <svg
                  className="w-5 h-5 ml-2.5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Columna Derecha: Ilustración de la mano con animación */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">

            <motion.div 
              animate={{ y: [0, -10, 0], rotate: [0, 1.5, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="relative group"
            >
              {/* Sombra de resplandor bajo la mano */}
              <div className="absolute inset-0 rounded-full bg-brand-violet/20 blur-2xl transform group-hover:scale-110 transition-transform duration-500" />
            
              {/* Imagen de la mano */}
              <img
                src={handImg}
                alt="Chasquido de dedos - Control instantáneo de gastos"
                className="relative z-10 w-64 sm:w-80 lg:w-96 h-auto object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}