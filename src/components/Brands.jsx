import React from 'react';

export default function Brands() {
  const brandNames = [
    'lululemon',
    'BCG BOSTON CONSULTING GROUP',
    'UKG',
    'JOHNS HOPKINS UNIVERSITY',
    'dyson',
    'Etsy',
    'affirm',
    'Tripadvisor'
  ];

  // Duplicamos el arreglo para el bucle continuo sin saltos
  const doubleBrands = [...brandNames, ...brandNames];

  return (
    <section className="bg-brand-darkblue text-white py-8 overflow-hidden border-t border-b border-brand-violet/20">
      <div className="max-w-7xl mx-auto px-6 text-center mb-6">
        <p className="text-xs sm:text-sm font-semibold tracking-widest text-slate-200 uppercase">
          + de 500 empresas
        </p>
      </div>

      {/* Carrusel Ticker */}
      <div className="relative w-full flex overflow-hidden mask-gradient">
        <div className="flex shrink-0 gap-12 sm:gap-16 animate-marquee whitespace-nowrap items-center">
          {doubleBrands.map((brand, idx) => (
            <span
              key={idx}
              className="font-bold text-base sm:text-lg tracking-tight text-slate-100/90 hover:text-white transition-colors cursor-default"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}