
import React from 'react';

const Hero: React.FC = () => {
  const handleScrollToGuides = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.querySelector('#guias')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section id="inicio" className="text-center py-20 md:py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
          Polaris — Tu guía hacia el bienestar
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Información clara y humana para acompañarte en tu camino hacia una vida más plena y saludable.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="https://t.me/Polaris_ayuda_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-block bg-polar-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-polar-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-polar-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 transition-transform duration-300 hover:scale-105"
          >
            Hablar con Polaris (Telegram)
          </a>
          <button
            onClick={handleScrollToGuides}
            className="w-full sm:w-auto bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 font-semibold py-3 px-8 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 transition-transform duration-300 hover:scale-105"
          >
            Ver guías
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
