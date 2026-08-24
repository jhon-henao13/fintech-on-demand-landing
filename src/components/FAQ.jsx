import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  // Estado para controlar la pregunta abierta (por defecto la primera)
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "¿Qué es Travex y cómo automatiza los gastos de la empresa?",
      answer: "Es una plataforma integral de gestión de viáticos y gastos corporativos operada por FinTech On Demand. Automatiza todo el ciclo en un solo flujo: asignación presupuestal, dispersión a tarjetas corporativas, comprobación por foto al ticket, validación de facturas ante el SAT e integración contable directa con tu ERP."
    },
    {
      question: "¿En cuánto tiempo se implementa la plataforma?",
      answer: "La certificación operativa toma entre 6 y 8 horas de capacitación práctica (una vez firmado el contrato y entregada la documentación), permitiendo que tu equipo comience a dispersar y comprobar de inmediato sin interrumpir la operación."
    },
    {
      question: "¿Qué seguridad financiera y jurídica respalda a Travex?",
      answer: "Travex opera bajo el respaldo de FinTech On Demand, Institución de Fondos de Pago Electrónico (IFPE) autorizada y regulada por la CNBV, Banxico y Condusef. Cumple con la Ley Fintech y utiliza encriptación y protocolos de seguridad de grado bancario."
    },
    {
      question: "¿Se integra con nuestro ERP o sistema contable actual?",
      answer: "Sí. Se conecta de forma nativa con los principales ERPs del mercado (SAP, CONTPAQi, Oracle) mediante APIs, conexiones SFTP y layouts de exportación personalizados para generar asientos contables automáticos."
    },
    {
      question: "¿Cómo funciona la comprobación automática mediante foto al ticket?",
      answer: "El colaborador toma una foto al ticket físico desde la app móvil. Nuestro algoritmo patentado procesa la imagen, recupera la factura XML/PDF asociada y la vincula con la transacción de la tarjeta en menos de 10 segundos."
    },
    {
      question: "¿Cómo previene Travex las facturas duplicadas o apócrifas ante el SAT?",
      answer: "El sistema valida el código UUID único de cada CFDI en tiempo real con los servidores del SAT. Detecta automáticamente si una factura está cancelada, duplicada entre usuarios o si proviene de empresas en listas negras (EFOS)."
    },
    {
      question: "¿Puedo personalizar políticas de gasto y niveles de autorización?",
      answer: "Totalmente. Permite configurar techos de gasto por categoría o colaborador, restricciones de horario y hasta 10 niveles de aprobación en solicitudes de presupuesto y 5 niveles en la comprobación."
    },
    {
      question: "¿Por qué usar Travex en lugar de dispersar viáticos por nómina o tarjetas bancarias?",
      answer: "Depositar viáticos en nómina genera riesgo de discrepancia fiscal para los colaboradores e incrementa de forma artificial el ingreso ante el SAT. Las tarjetas bancarias tradicionales no restringen giros de consumo ni automatizan la conciliación fiscal. Travex garantiza deducibilidad limpia y trazabilidad total."
    },
    {
      question: "¿Los colaboradores pueden realizar retiros de efectivo durante sus viajes?",
      answer: "Sí. Además del uso en terminales punto de venta (TPV) de la red VISA, la tarjeta Travex permite disposiciones de efectivo en más de 24,000 tiendas OXXO a nivel nacional para cubrir gastos imprevistos o de caja chica."
    },
    {
      question: "¿Para qué tamaño de empresas e industrias está diseñado Travex?",
      answer: "Está optimizado para empresas a partir de 10 empleados hasta corporativos de más de 500 colaboradores en sectores de alta movilidad como transporte, logística, manufactura, distribución, construcción, farmacéutica y consultoría."
    }
  ];

  return (
    <section id="faq" className="bg-white py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Encabezado Principal */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-darkblue tracking-tight">
            Todo lo que necesitas saber
          </h2>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-darkblue/90 tracking-tight">
            antes de contratar
          </p>
        </div>

        {/* Acordeón de Preguntas Frecuentes */}
        <div className="space-y-3.5">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-brand-darkblue/30 bg-slate-50/50 shadow-md"
                    : "border-slate-200/80 bg-white hover:border-slate-300 hover:shadow-sm"
                }`}
              >
                {/* Botón Encabezado de la Pregunta */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-800 tracking-tight leading-snug">
                    {item.question}
                  </span>

                  {/* Icono + / - Animado */}
                  <span className={`shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-45 text-brand-blue' : ''}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>

                {/* Respuesta Colapsable con Transición Fluida */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed border-t border-slate-100 pt-3">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}