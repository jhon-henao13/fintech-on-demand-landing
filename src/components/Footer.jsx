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
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white tracking-[0.2em] uppercase">
              SÍGUENOS
            </h4>
            <div className="flex items-center space-x-3">
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