
import React, { useEffect, useRef } from 'react';
import type { Guide } from '../types';

interface ModalProps {
  guide: Guide;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ guide, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog) {
      dialog.showModal();
    }
    
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            onClose();
        }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      if (dialog) {
        dialog.close();
      }
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);
  
  const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) {
      onClose();
    }
  };


  return (
    <dialog ref={dialogRef} onClick={handleBackdropClick} className="backdrop:bg-black/50 bg-transparent p-0 w-full max-w-2xl rounded-2xl">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-polar-blue-500 rounded-full"
          aria-label="Cerrar modal"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
        <img
          src={guide.image}
          alt={`Portada de la guía: ${guide.title}`}
          className="w-full h-64 object-cover"
        />
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{guide.title}</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">{guide.fullDescription}</p>
          <a
            href={guide.gumroadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block w-full text-center bg-polar-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-polar-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-polar-blue-500 transition-transform duration-300 hover:scale-105"
          >
            Comprar Guía
          </a>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
