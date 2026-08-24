import React from 'react';
import { motion } from 'framer-motion';
import card1Gray from '../assets/card-1-gray.png';
import card2Gray from '../assets/card-2-gray.png';
import card3Gray from '../assets/card-3-gray.png';

export default function FinancialImpact() {
  const metrics = [
    {
      value: "80%",
      label: "de reducción",
      sublabel: "en tiempo administrativo de cierre mensual"
    },
    {
      value: "100%",
      label: "cumplimiento fiscal",
      sublabel: "Garantizado ante el SAT"
    },
    {
      value: "25%",
      label: "de ahorro,",
      sublabel: "al eliminar gastos no autorizados"
    }
  ];

  const caseStudies = [
    {
      image: card1Gray,
      logoText: "logo",
      text: (
        <>
          Consiguió un <span className="font-extrabold text-brand-darkblue">80% de ahorro</span> en tiempo de cierre contable y <span className="font-extrabold text-brand-darkblue">eliminó 100% los tickets de papel.</span>
        </>
      )
    },
    {
      image: card2Gray,
      logoText: "logo",
      text: (
        <>
          Implementó tarjetas corporativas y control de viáticos para +500 empleados en campo <span className="font-extrabold text-brand-darkblue">sin fugas de dinero.</span>
        </>
      )
    },
    {
      image: card3Gray,
      logoText: "logo",
      text: (
        <>
          Ahorró <span className="font-extrabold text-brand-darkblue">22% del presupuesto anual</span> de viajes validando el 100% de los CFDIs ante el SAT en tiempo real.
        </>
      )
    }
  ];

  return (
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-6">
    
          {/* Encabezado Principal con entrada suave */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-5xl mx-auto mb-16 space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-darkblue tracking-normal">
              Impacto financiero
            </h2>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-medium text-brand-darkblue/90 tracking-tight">
              directo en tu cierre contable
            </p>
            <p className="text-slate-600 text-lg sm:text-xl font-medium max-w-3xl mx-auto pt-2 leading-relaxed">
              La automatización de gastos no es un costo: es el proyecto con mayor retorno de eficiencia operativa para tu departamento de finanzas.
            </p>
          </motion.div>
    
          {/* Métricas / KPIs en Cascada */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mb-16 max-w-5xl mx-auto"
          >
            {metrics.map((metric, idx) => (
              <motion.div 
                key={idx} 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="space-y-1"
              >
                <span className="block text-5xl sm:text-6xl font-extrabold text-brand-muted tracking-tight">
                  {metric.value}
                </span>
                <p className="text-md sm:text-lg text-slate-700 leading-snug !mt-4 text-start mx-4">
                  <strong className="font-bold text-slate-700">{metric.label}</strong> {metric.sublabel}
                </p>
              </motion.div>
            ))}
          </motion.div>
        
          {/* Tarjetas de Casos de Éxito con Hover Interactivo */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {caseStudies.map((card, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="group relative h-[420px] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between p-7 border border-slate-100"
              >
                {/* Imagen de Fondo con Zoom en Hover */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={card.image}
                    alt={`Caso de éxito ${idx + 1}`}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-white/20 group-hover:bg-white/10 transition-colors duration-300" />
                </div>
            
                {/* Contenido Superior */}
                <div className="relative z-10">
                  <span className="text-2xl font-black text-brand-darkblue tracking-tight">
                    {card.logoText}
                  </span>
                </div>
            
                {/* Contenido Inferior */}
                <div className="relative z-10 bg-white/40 backdrop-blur-[2px] p-2 rounded-xl">
                  <p className="text-base sm:text-lg text-brand-darkblue font-medium leading-snug">
                    {card.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        
        </div>
      </section>
    );
}