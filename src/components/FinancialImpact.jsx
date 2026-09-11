import React from 'react';
import { motion } from 'framer-motion';
import card1Gray from '../assets/card-1-gray.png';
import card2Gray from '../assets/card-2-gray.png';
import card3Gray from '../assets/card-3-gray.png';

// import sondaLogo from '../assets/success-stories/sonda-makeiteasy.png';
// import logistikLogo from '../assets/success-stories/logistik.jpeg';
// import gasoLogo from '../assets/success-stories/gaso-comunicaciones.jpeg';

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
      giro: "Empresa de Giro Tecnológico y Servicios IT",
      bgImage: card1Gray,
      text: (
        <>
          "Nos ha ayudado a hacer <span className="font-extrabold text-brand-darkblue">más eficiente la gestión</span> de nuestros viajes corporativos y nuestra operación diaria."
        </>
      )
    },
    {
      giro: "Empresa de Giro Logístico y Cadena de Suministro",
      bgImage: card2Gray,
      text: (
        <>
          "Más de 7 años trabajando juntos respaldan nuestra confianza. Su gestión transparente es la clave para entregar soluciones <span className="font-extrabold text-brand-darkblue">en tiempo y forma</span>."
        </>
      )
    },
    {
      giro: "Empresa de Giro Telecomunicaciones y Energía",
      bgImage: card3Gray,
      text: (
        <>
          "Nos brindó la <span className="font-extrabold text-brand-darkblue">trazabilidad necesaria</span> para nuestra operación, dándonos control total de cada gasto y la <span className="font-extrabold text-brand-darkblue">flexibilidad en dispersión</span> y comprobación."
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
                className="group relative h-[380px] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between p-7 border border-slate-100 bg-slate-50"
              >
                {/* Imagen de Fondo decorativa */}
                <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
                  <img
                    src={card.bgImage}
                    alt={`Caso de éxito ${idx + 1}`}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
            
                {/* Etiqueta / Giro de la Empresa */}
                <div className="relative z-10">
                  <span className="inline-block px-4 py-2 rounded-full bg-brand-darkblue text-white text-xs sm:text-sm font-bold shadow-sm">
                    {card.giro}
                  </span>
                </div>
            
                {/* Cita / Testimonio */}
                <div className="relative z-10 bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-slate-100/80 shadow-sm">
                  <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed italic">
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