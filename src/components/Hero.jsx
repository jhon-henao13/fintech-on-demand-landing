// src/components/Hero.jsx
import React, { useState } from 'react';
import heroRightImg from '../assets/hero-right.png';
import cnbvLogo from '../assets/cnbv-icon-gray-png.png';
import bancoMexicoLogo from '../assets/bancodemexico-png.png';
import visaLogo from '../assets/visa-png.png';
import condusefLogo from '../assets/condusef-png.png';

export default function Hero() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Demo solicitada para: ${email}`);
      setEmail('');
    }
  };

  return (
    <section className="relative overflow-hidden bg-slate-50/60 pt-8 lg:pt-14 pb-0">
      <div className="w-full max-w-[1536px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-0">
          
          {/* Columna Izquierda: Texto y Captación */}
          <div className="lg:col-span-6 px-6 sm:px-12 lg:pl-16 lg:pr-8 space-y-6">
            <span className="text-slate-600 font-medium text-lg block tracking-tight">
              Travex
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-brand-darkblue !leading-[1.2] tracking-tight">
              El control financiero que <span className="font-semibold text-brand-blue">tu empresa merece</span>
            </h1>

            <p className="text-slate-600 text-lg leading-relaxed max-w-lg">
              La forma más fácil de gestionar los gastos de tu empresa.
            </p>

            {/* Formulario de Email + CTA */}
            <form onSubmit={handleSubmit} className="pt-2 max-w-md">
              <div className="flex flex-col sm:flex-row gap-2 bg-white p-2 rounded-2xl shadow-sm border border-slate-200 focus-within:border-brand-blue focus-within:ring-2 focus-within:ring-brand-blue/20 transition-all">
                <input
                  type="email"
                  required
                  placeholder="Tu correo empresarial"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-slate-800 placeholder-slate-400 outline-none text-base"
                />
                <button
                  type="submit"
                  className="whitespace-nowrap px-6 py-3.5 rounded-xl font-bold text-white bg-brand-darkblue hover:bg-brand-blue shadow-md transition-all active:scale-95"
                >
                  Agenda tu demo
                </button>
              </div>
            </form>

            {/* Entidades reguladoras / Badges */}
            <div className="pt-8 pb-8 lg:pb-12">
              <div className="flex flex-wrap items-center gap-6 sm:gap-8 opacity-75 grayscale hover:grayscale-0 transition-all">
                <img src={cnbvLogo} alt="CNBV" className="h-8 object-contain" />
                <img src={bancoMexicoLogo} alt="Banco de México" className="h-8 object-contain" />
                <img src={visaLogo} alt="VISA" className="h-6 object-contain" />
                <img src={condusefLogo} alt="CONDUSEF" className="h-8 object-contain" />
              </div>
            </div>
          </div>

          {/* Columna Derecha: Mockup estático pegado al borde derecho */}
          <div className="lg:col-span-6 w-full flex justify-end items-end self-end pl-6 lg:pl-0">
            <img
              src={heroRightImg}
              alt="Travex Fintech App and Card Mockup"
              className="w-full h-auto object-cover object-left-bottom max-h-[580px] lg:max-h-none"
            />
          </div>

        </div>
      </div>
    </section>
  );
}