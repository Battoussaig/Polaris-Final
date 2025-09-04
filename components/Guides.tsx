
import React, { useState } from 'react';
import { GUIDES_DATA } from '../constants';
import type { Guide } from '../types';
import GuideCard from './GuideCard';
import Modal from './Modal';

const Guides: React.FC = () => {
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);

  const handleOpenModal = (guide: Guide) => {
    setSelectedGuide(guide);
  };

  const handleCloseModal = () => {
    setSelectedGuide(null);
  };

  return (
    <section id="guias" className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Guías Prácticas</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Herramientas claras y empáticas para acompañarte en tu proceso.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GUIDES_DATA.map((guide) => (
            <GuideCard key={guide.id} guide={guide} onMoreInfoClick={handleOpenModal} />
          ))}
        </div>
      </div>
      {selectedGuide && <Modal guide={selectedGuide} onClose={handleCloseModal} />}
    </section>
  );
};

export default Guides;
