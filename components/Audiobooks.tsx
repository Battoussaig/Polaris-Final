
import React from 'react';

const Audiobooks: React.FC = () => {
  const audiobooks = [
    {
      title: 'Meditaciones para calmar la mente',
      description: 'Una colección de meditaciones guiadas para encontrar paz en tu día a día.',
      cover: 'https://picsum.photos/seed/meditation/400/400'
    },
    {
      title: 'Entendiendo el dolor crónico',
      description: 'Exploramos la ciencia detrás del dolor y cómo puedes cambiar tu relación con él.',
      cover: 'https://picsum.photos/seed/pain/400/400'
    }
  ];

  return (
    <section id="audiolibros" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Audiolibros</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Contenido para escuchar donde y cuando quieras.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {audiobooks.map((book) => (
            <div key={book.title} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col sm:flex-row items-center transform hover:-translate-y-2 transition-transform duration-300">
              <img src={book.cover} alt={`Portada de ${book.title}`} className="w-full sm:w-48 h-48 object-cover" loading="lazy" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{book.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{book.description}</p>
                <a href="#" className="mt-4 inline-block text-polar-blue-600 dark:text-polar-blue-400 font-semibold hover:underline">
                  Escuchar →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audiobooks;
