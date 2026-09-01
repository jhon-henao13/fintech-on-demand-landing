import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: 1,
      title: "Solicita",
      description: "El empleado pide recursos desde la app.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      step: 2,
      title: "Autorizas",
      description: "El administrador aprueba en un clic.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      step: 3,
      title: "Gasta",
      description: "El empleado usa su tarjeta Travex.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      step: 4,
      title: "Comprueba",
      description: "El CFDI se vincula automáticamente.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      step: 5,
      title: "Cierra",
      description: "Reporte listo o integración a ERP, sin trabajo maual",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-bold text-brand-blue tracking-[0.25em] uppercase block">
            CÓMO FUNCIONA
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-violet tracking-tight !leading-[1.2]">
            Del presupuesto a la <br className="hidden sm:inline" />
            comprobación, <span className="text-brand-darkblue">en un solo ciclo.</span>
          </h2>
        </div>

        {/* Timeline Horizontal (Desktop & Mobile) */}
        <div className="relative mt-8">
          
          {/* Reemplazar la barra con motion.div para un llenado fluido */}
          <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-brand-cardBg z-0 overflow-hidden">
            <motion.div 
              className="h-full bg-brand-blue"
              initial={{ width: "0%" }}
              animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-2 relative z-10">
            {steps.map((item, index) => {
              const isFirst = index === 0;
              const isActive = activeStep === index;

              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center group cursor-pointer"
                  onClick={() => setActiveStep(index)}
                >
                  {/* Círculo Principal con Efecto Glow */}
                  <div className="relative mb-8">
                    
                    {/* Botón Círculo */}
                    <motion.button
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      type="button"
                      aria-label={`Paso ${item.step}: ${item.title}`}
                      className={`relative w-24 h-24 sm:w-26 sm:h-26 rounded-full flex flex-col items-center justify-center transition-colors duration-300 ${
                        isActive
                          ? "bg-gradient-to-b from-brand-darkblue to-brand-blue text-white shadow-[0_10px_35px_rgba(24,31,113,0.5)]"
                          : "bg-brand-darkblue text-white shadow-[0_8px_25px_rgba(24,31,113,0.3)] hover:shadow-[0_12px_30px_rgba(24,31,113,0.4)]"
                      }`}
                    >
                      <div className="mb-1">{item.icon}</div>
                      <span className="text-[10px] font-bold tracking-widest uppercase text-slate-200">
                        PASO {item.step}
                      </span>
                    </motion.button>

                    {/* ANIMACIÓN EXCLUSIVA DE MOUSE CLICK PARA PASO 1 */}
                    {isFirst && (
                      <div className="pointer-events-none absolute -bottom-3 -right-2 z-20 flex items-center justify-center">
                        {/* Cursor Mouse SVG Animado */}
                        <div className="animate-bounce transition-transform">
                          <svg
                            className="w-8 h-8 text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] transform -rotate-12"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M3.5 2.5L11 20.5L14.5 13L22 9.5L3.5 2.5Z" stroke="#181f71" strokeWidth="1.5" strokeLinejoin="round"/>
                          </svg>
                        </div>

                        {/* Anillo de Pulso/Clic */}
                        <span className="absolute -top-1 -left-1 w-6 h-6 rounded-full bg-brand-blue/60 animate-ping" />
                      </div>
                    )}
                  </div>

                  {/* Título y Descripción */}
                  <div className="space-y-1 px-2">
                    <h3 className="text-lg font-extrabold text-brand-darkblue tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-[200px] mx-auto">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Nota en Pie de Página */}
        <div className="mt-16 text-center">
          <p className="text-xs sm:text-sm text-slate-400 font-medium italic">
            *Vinculación automática CFDI-transacción: proceso patentado.
          </p>
        </div>

      </div>
    </section>
  );
}