import React from 'react';
import card1 from '../assets/five-cards/card-1.jpeg';
import card2 from '../assets/five-cards/card-2.jpeg';
import card3 from '../assets/five-cards/card-3.png';
import card4 from '../assets/five-cards/card-4.jpeg';
import card5 from '../assets/five-cards/card-5.jpeg';

export default function Features() {
  const cardsData = [
    {
      title: "Tarjetas Ilimitadas",
      description: "Presupuestos en tiempo real, límites por categoría y efectivo en +24,000 puntos OXXO.",
      image: card1,
      alt: "Tarjetas corporativas Travex Visa",
    },
    {
      title: "Comprobación con Foto",
      description: "Vínculo automático con factura XML/PDF en <10 segundos.",
      image: card2,
      alt: "Foto de ticket comprobante de gasto",
    },
    {
      title: "Validación Fiscal SAT",
      description: "Validación de UUIDs en tiempo real.",
      image: card3,
      alt: "Logo e integración con el SAT",
    },
    {
      title: "Flujos de Aprobación",
      description: "Hasta 10 niveles de autorización y 6 modalidades de solicitud.",
      image: card4,
      alt: "Interfaz de flujos de aprobación en app",
    },
    {
      title: "Integración Contable",
      description: "Integra información vía API, SFTP o Layouts con tu ERP.",
      image: card5,
      alt: "Red de integración contable con ERP",
    },
  ];

  return (
    <section id="soluciones" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-darkblue tracking-tight">
            Más que una tarjeta corporativa.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed !mt-8">
            Todo lo que necesitas para asignar presupuesto, automatizar la comprobación y eliminar el trabajo manual contable.
          </p>
        </div>

        {/* Grid de 5 tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {cardsData.map((card, idx) => (
            <div
              key={idx}
              className={`group bg-[#7985b8] hover:bg-[#6c78ad] rounded-2xl text-white flex flex-col justify-between overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${
                idx === 0 ? 'pt-5 px-0 pb-0' : 'p-5'
              }`}
            >
              {/* Texto superior */}
              <div className={`space-y-3 mb-6 ${idx === 0 ? 'px-5' : ''}`}>
                <h3 className="text-2xl font-extrabold leading-snug tracking-tight">
                  {card.title}
                </h3>
                <p className="text-md font-semibold text-slate-100/90 leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Imagen inferior */}
              <div className={`w-full min-h-[160px] flex items-end pt-2 ${idx === 0 ? 'justify-start' : 'justify-center'}`}>
                <img
                  src={card.image}
                  alt={card.alt}
                  className="max-h-36 w-auto object-contain transition-transform duration-300 group-hover:scale-105 rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}