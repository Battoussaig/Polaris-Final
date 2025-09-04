
import React from 'react';
import type { Guide } from '../types';

interface GuideCardProps {
  guide: Guide;
  onMoreInfoClick: (guide: Guide) => void;
}

const GuideCard: React.FC<GuideCardProps> = ({ guide, onMoreInfoClick }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
      <img
        src={guide.image}
        alt={`Portada de la guía: ${guide.title}`}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{guide.title}</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300 flex-grow">{guide.description}</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => onMoreInfoClick(guide)}
            className="w-full text-center bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 font-semibold py-2 px-4 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 transition-colors"
          >
            Más info
          </button>
          <a
            href={guide.gumroadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center bg-polar-blue-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-polar-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-polar-blue-500 transition-colors"
          >
            Comprar
          </a>
        </div>
      </div>
    </div>
  );
};

export default GuideCard;
