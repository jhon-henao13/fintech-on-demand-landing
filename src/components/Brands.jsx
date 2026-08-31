import React from 'react';

// Importación de logos desde src/assets/brands
import envasesLogo from '../assets/brands/envases-logo.png';
import grupoSendaLogo from '../assets/brands/gruposenda.png';
import ikusiLogo from '../assets/brands/ikusi-logo.png';
import littleCaesarsLogo from '../assets/brands/little-caesars-logo.png';
import muguerzaLogo from '../assets/brands/muguerza-logo.png';
// import polloLocoLogo from '../assets/brands/pollo-loco-logo.png';
import sterenLogo from '../assets/brands/steren-logo.png';
import transmontesLogo from '../assets/brands/transmontes-logo.png';
import vilnlaceroLogo from '../assets/brands/vilnlacero-logo.png';

const brands = [
  { name: 'Envases Group', logo: envasesLogo },
  { name: 'Grupo Senda', logo: grupoSendaLogo },
  { name: 'Ikusi', logo: ikusiLogo },
  { name: 'Little Caesars', logo: littleCaesarsLogo },
  { name: 'Christus Muguerza', logo: muguerzaLogo },
  // { name: 'El Pollo Loco', logo: polloLocoLogo },
  { name: 'Steren', logo: sterenLogo },
  { name: 'Transmontes', logo: transmontesLogo },
  { name: 'Villacero', logo: vilnlaceroLogo },
];

// Duplicamos la lista para garantizar el loop infinito continuo
const carouselBrands = [...brands, ...brands];

export default function Brands() {
  return (
    <section className="bg-brand-darkblue text-white py-10 overflow-hidden border-t border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 text-center mb-8">
        <p className="text-xs sm:text-sm font-semibold tracking-widest text-slate-200 uppercase">
          + de 500 empresas confían en nosotros
        </p>
      </div>

      {/* Contenedor del Carrusel Interactivo */}
      <div className="relative w-full overflow-hidden pause-on-hover group">
        
        {/* Mascaras de degradado lateral (efecto fade/desvanecido premium) */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-brand-darkblue to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-brand-darkblue to-transparent z-10 pointer-events-none" />

        {/* Track animado */}
        <div className="flex shrink-0 gap-8 sm:gap-14 animate-marquee whitespace-nowrap items-center w-max py-2">
          {carouselBrands.map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 transition-all duration-300 transform hover:scale-105 group/item cursor-pointer"
            >
              <img
                src={brand.logo}
                alt={`Logo de ${brand.name}`}
                className="h-12 sm:h-14 w-auto object-contain brightness-0 invert opacity-70 group-hover/item:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}