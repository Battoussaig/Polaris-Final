
import React from 'react';

const Podcast: React.FC = () => {
    const episodes = [
        { title: 'Ep. 1: El poder de la respiración', description: 'Cómo una respiración consciente puede cambiar tu sistema nervioso.' },
        { title: 'Ep. 2: Nutrición antiinflamatoria', description: 'Primeros pasos para una dieta que apoye tu bienestar.' },
    ];
  return (
    <section id="podcast" className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Podcast Polaris</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Conversaciones honestas sobre salud, bienestar y resiliencia.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-8">
          {episodes.map(episode => (
            <div key={episode.title} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{episode.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{episode.description}</p>
                <div className="mt-4">
                     {/* El usuario reemplazaría esto con su iframe o un reproductor de audio real */}
                    <audio controls className="w-full">
                        <source src="" type="audio/mpeg" />
                        Tu navegador no soporta el elemento de audio.
                    </audio>
                </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
            <a href="#" className="bg-polar-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-polar-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-polar-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 transition-transform duration-300 hover:scale-105">
                Ver todos los episodios
            </a>
        </div>
      </div>
    </section>
  );
};

export default Podcast;
