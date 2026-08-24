import React, { useState } from 'react';
import cardImg from '../assets/card-blackblue-visa.png';

export default function VideoDemo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="bg-brand-darkblue text-white py-16 lg:py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Columna Izquierda: Copys y CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left z-10">
            <h2 className="text-5xl sm:text-6xl font-extrabold !tracking-[1.3] !leading-[1.4]">
              Conoce Travex <br className="hidden sm:inline" />
              <span className="text-white text-5xl sm:text-6xl font-bold">en 60 segundos</span>
            </h2>

            <p className="text-slate-200 text-lg sm:text-xl font-normal !leading-[1.7] max-w-lg mx-auto lg:mx-0">
              Descubre cómo funciona la tarjeta corporativa que te da control total sobre los gastos de tu empresa.
            </p>

            <div className="pt-2">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center px-6 py-4 rounded-xl font-bold text-brand-darkblue bg-white hover:bg-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 active:scale-95 text-lg"
              >
                Agenda tu demo
              </a>
            </div>
          </div>

          {/* Columna Derecha: Mockup Video Shorts + Tarjetas Flotantes Animadas */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[480px] sm:min-h-[560px]">
            
            {/* --- TARJETAS AMBIENTALES EN EL FONDO (ANIMADAS) --- */}
            
            {/* Tarjeta 1: Superior Izquierda */}
            <img
              src={cardImg}
              alt="Travex Visa Card"
              className="absolute top-20 left-2 sm:-left-10 w-24 sm:w-36 rounded-lg shadow-2xl opacity-60 animate-floatSlow -rotate-0 pointer-events-none z-0"
            />

            {/* Tarjeta 2: Superior Derecha */}
            <img
              src={cardImg}
              alt="Travex Visa Card"
              className="absolute top-20 right-2 sm:-right-2 w-28 sm:w-40 rounded-lg shadow-2xl opacity-70 animate-float rotate-12 pointer-events-none z-0"
            />

            {/* Tarjeta 3: Centro Izquierda */}
            <img
              src={cardImg}
              alt="Travex Visa Card"
              className="absolute top-1/2 -translate-y-1/2 left-0 sm:left-16 w-20 sm:w-28 rounded-lg shadow-xl opacity-90 animate-floatFast -rotate-2 pointer-events-none z-0"
            />

            {/* Tarjeta 4: Centro Derecha */}
            <img
              src={cardImg}
              alt="Travex Visa Card"
              className="absolute bottom-28 -translate-y-1/2 right-0 sm:right-10 w-28 sm:w-36 rounded-lg shadow-xl opacity-75 animate-floatSlow rotate-0 pointer-events-none z-0"
            />

            {/* Tarjeta 5: Inferior Izquierda */}
            <img
              src={cardImg}
              alt="Travex Visa Card"
              className="absolute bottom-20 left-6 sm:left-6 w-24 sm:w-32 rounded-lg shadow-2xl opacity-40 animate-float rotate-6 pointer-events-none z-0"
            />

            {/* Tarjeta 6: Inferior Derecha */}
            <img
              src={cardImg}
              alt="Travex Visa Card"
              className="absolute bottom-16 right-4 sm:right-6 w-14 sm:w-16 rounded-lg shadow-xl opacity-60 animate-floatFast -rotate-2 pointer-events-none z-0"
            />


            {/* --- CONTENEDOR DEL VIDEO SHORTS --- */}
            <div className="relative z-10 w-[220px] sm:w-[260px] h-[450px] sm:h-[500px] bg-slate-950 rounded-[36px] p-2.5 shadow-2xl border-4 border-slate-700/50 flex flex-col justify-between overflow-hidden group">
              
              {!isPlaying ? (
                /* Poster Preview del Video */
                <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-slate-900 flex flex-col justify-between p-4">
                  
                  {/* Overlay Gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40 z-10" />

                  {/* Header simulado dentro del Shorts */}
                  <div className="relative z-20 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center p-1 shadow-md">
                      <span className="text-[10px] font-bold text-brand-darkblue">FT</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white leading-tight">
                        Travex by Fintech On Demand
                      </p>
                      <p className="text-[10px] text-slate-300">Fintech On Demand</p>
                    </div>
                  </div>

                  {/* Botón Play central con pulso dinámico */}
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <button
                      onClick={() => setIsPlaying(true)}
                      aria-label="Reproducir video"
                      className="w-12 h-12 rounded-full bg-red-600 hover:bg-red-500 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 group-hover:shadow-red-500/50"
                    >
                      <svg className="w-8 h-8 fill-current translate-x-0.5" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>

                  {/* Footer simulado dentro del Shorts */}
                  <div className="relative z-20 space-y-1">
                    <p className="text-xs text-slate-200 font-medium line-clamp-2">
                      Tecnología de gastos empresariales patentada.
                    </p>
                    <div className="flex items-center gap-1.5 pt-1">
                      <span className="text-xs text-brand-blue font-bold bg-white/90 px-2 py-0.5 rounded-full">
                        travex
                      </span>
                    </div>
                  </div>

                </div>
              ) : (
                /* Reproductor Embed de YouTube Short */
                <iframe
                  className="w-full h-full rounded-[28px] z-20"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Travex Demo Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}