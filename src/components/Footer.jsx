// src/components/Footer.jsx
import fintechLogo from '../assets/fintech-logo.png';

const Footer = () => {
  const footerSections = [
    {
      title: 'Soluciones',
      links: [
        { name: 'Viáticos y Gastos', href: '#' },
        { name: 'Control Presupuestal', href: '#' },
        { name: 'Tarjetas Corporativas', href: '#' },
        { name: 'Reportes en Vivo', href: '#' },
      ],
    },
    {
      title: 'Compañía',
      links: [
        { name: 'Sobre Nosotros', href: '#' },
        { name: 'Carreras', href: '#' },
        { name: 'Soporte', href: '#' },
        { name: 'Contacto', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Términos de Servicio', href: '#' },
        { name: 'Privacidad', href: '#' },
        { name: 'Seguridad CNBV', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-100 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-5 gap-12">
        
        {/* Columna 1: Logo y Eslogan */}
        <div className="md:col-span-2 space-y-4">
          <img src={fintechLogo} alt="FinTech On Demand Logo" className="h-10 w-auto" />
          <p className="text-sm text-fintech-azulOscuro max-w-xs">
            El control financiero moderno para empresas de clase mundial.
          </p>
        </div>

        {/* Secciones de Enlaces */}
        {footerSections.map((section) => (
          <div key={section.title} className="space-y-4">
            <h4 className="text-sm font-semibold text-fintech-violetaOscuro tracking-wider uppercase">
              {section.title}
            </h4>
            <ul className="space-y-3">
              {section.links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-fintech-azulOscuro hover:text-fintech-azulPrimary transition-smooth">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Barra de Copyright */}
      <div className="max-w-7xl mx-auto px-6 py-8 border-t border-gray-100 text-center">
        <p className="text-xs text-fintech-azulApagado">
          &copy; {new Date().getFullYear()} FinTech On Demand. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;