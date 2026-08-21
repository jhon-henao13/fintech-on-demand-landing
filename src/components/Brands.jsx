// src/components/Brands.jsx
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

  return (
    <section className="bg-brand-darkblue text-white py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm font-semibold tracking-wider text-slate-100 uppercase mb-8">
          + de 500 empresas
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center opacity-90">
          {brandNames.map((brand, idx) => (
            <span 
              key={idx} 
              className="font-bold text-md tracking-tight text-white hover:text-slate-200 transition-colors cursor-default"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}