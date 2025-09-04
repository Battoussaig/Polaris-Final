
import React from 'react';

const Footer: React.FC = () => {
    
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const quickLinks = [
    { href: '#guias', label: 'Guías' },
    { href: '#audiolibros', label: 'Audiolibros' },
    { href: '#podcast', label: 'Podcast' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#inicio" onClick={(e) => handleScroll(e, '#inicio')} className="text-2xl font-bold text-polar-blue-600 dark:text-polar-blue-400">
              Polaris
            </a>
            <p className="mt-2 text-gray-500 dark:text-gray-400">Tu guía hacia el bienestar.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
             <div>
                 <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Navegación</h2>
                 <ul className="text-gray-500 dark:text-gray-400 font-medium">
                     {quickLinks.map(link => (
                         <li key={link.href} className="mb-4">
                             <a href={link.href} onClick={(e) => handleScroll(e, link.href)} className="hover:underline">{link.label}</a>
                         </li>
                     ))}
                 </ul>
             </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="text-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} Polaris. Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
