import React from 'react';
import fintechLogo from '../assets/fintech-logo.png';

export default function Footer() {
  const secciones = [
    { name: 'Travex', href: '#travex' },
    { name: 'Integrador Básico', href: '#' },
    { name: 'Nosotros', href: '#' },
    { name: 'UNE', href: '#' },
    { name: 'Estados financieros', href: '#' },
    { name: 'Consultas, Aclaraciones y Reclamaciones', href: '#' },
  ];

  const legales = [
    { name: 'Términos y Condiciones Cuenta empresarial', href: '#' },
    { name: 'Términos y Condiciones Persona física', href: '#' },
    { name: 'Aviso de privacidad', href: '#' },
  ];

  return (
    <footer className="bg-brand-violet text-white pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      
      {/* Glow de fondo discreto */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Grilla Principal de 4 Columnas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Columna 1: Logo e Información Fisico-Geográfica */}
          <div className="space-y-4">
            <img 
              src={fintechLogo} 
              alt="FinTech On Demand" 
              className="h-9 w-auto brightness-0 invert" 
            />
            <div className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed space-y-1">
              <p>Calle Paseo Del Rosario #1160</p>
              <p>Colonia Valle del Mirador. CP: 64750,</p>
              <p>Monterrey N.L.</p>
            </div>
          </div>

          {/* Columna 2: Secciones de Navegación */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white tracking-[0.2em] uppercase">
              SECCIONES
            </h4>
            <ul className="space-y-2.5">
              {secciones.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-xs sm:text-sm text-slate-300 hover:text-white transition-colors duration-200 block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Información de Contacto (Llámanos) */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white tracking-[0.2em] uppercase">
              LLÁMANOS
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <p className="text-slate-300">
                Tel. <a href="tel:+528182488265" className="hover:text-white transition-colors">+52 (81) 8248 8265</a>
              </p>

              <div>
                <span className="text-[13px] font-bold text-brand-blue uppercase tracking-wider block mb-0.5">
                  SERVICIO AL CLIENTE
                </span>
                <a 
                  href="mailto:empresas@fintechondemand.mx" 
                  className="text-slate-300 hover:text-white transition-colors break-all"
                >
                  empresas@fintechondemand.mx
                </a>
              </div>

              <div>
                <span className="text-[13px] font-bold text-brand-blue uppercase tracking-wider block mb-0.5">
                  VENTAS
                </span>
                <a 
                  href="mailto:ventas@fintechondemand.mx" 
                  className="text-slate-300 hover:text-white transition-colors break-all"
                >
                  ventas@fintechondemand.mx
                </a>
              </div>
            </div>
          </div>

          {/* Columna 4: Redes Sociales */}
          {/* Columna 4: Redes Sociales */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white tracking-[0.2em] uppercase">
              SÍGUENOS
            </h4>
            <div className="flex items-center space-x-3">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook FinTech On Demand"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-brand-blue transition-all duration-300 transform hover:scale-110 shadow-sm"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram FinTech On Demand"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-brand-blue transition-all duration-300 transform hover:scale-110 shadow-sm"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn FinTech On Demand"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-brand-blue transition-all duration-300 transform hover:scale-110 shadow-sm"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Texto Regulatorio Ley Fintech */}
        <div className="py-8 border-b border-white/10">
          <p className="text-[11px] leading-relaxed text-slate-400 font-normal text-justify">
            Se informa a los Clientes que FINTECH ON DEMAND, S.A. DE C.V. INSTITUCIÓN DE FONDOS DE PAGO ELECTRÓNICO, se encuentra autorizada, regulada y supervisada por las autoridades financieras; asimismo se informa que el Gobierno Federal y las Entidades de la Administración Pública Paraestatal no podrán responsabilizarse o garantizar los recursos de los Usuarios que sean utilizados en las operaciones que celebren los Usuarios con FINTECH ON DEMAND S.A. DE C.V. INSTITUCIÓN DE FONDOS DE PAGO ELECTRÓNICO o frente a otros, ni asumir alguna responsabilidad por las obligaciones contraídas por FINTECH ON DEMAND S.A. DE C.V. INSTITUCIÓN DE FONDOS DE PAGO ELECTRÓNICO o por algún Usuario frente a otro, en virtud de las operaciones que celebren.
          </p>
        </div>

        {/* Sub-Footer Legal y Créditos */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          
          {/* Isotipo Mini */}
          <div className="flex items-center space-x-2">
            <img 
              src={fintechLogo} 
              alt="FinTech On Demand Mini" 
              className="h-4 w-auto brightness-0 invert opacity-80" 
            />
          </div>

          {/* Enlaces Legales */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-slate-300">
            {legales.map((link, idx) => (
              <a 
                key={idx} 
                href={link.href} 
                className="hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Firma Embudo.io */}
          <div>
            <p className="text-slate-400">
              <span className="text-slate-300 font-medium hover:text-white cursor-pointer">dealbamkt</span>
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}