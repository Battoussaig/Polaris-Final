
import React from 'react';

const About: React.FC = () => {
  const benefits = [
    {
      icon: 'clarity',
      title: 'Claridad',
      description: 'Información compleja explicada de forma sencilla y directa.'
    },
    {
      icon: 'empathy',
      title: 'Empatía',
      description: 'Contenido creado desde la experiencia, para acompañarte sin juicios.'
    },
    {
      icon: 'wellness',
      title: 'Bienestar integral',
      description: 'Un enfoque que une mente, cuerpo y emociones para un bienestar real.'
    },
    {
      icon: 'trust',
      title: 'Contenido confiable',
      description: 'Basado en evidencia y en la experiencia de profesionales y pacientes.'
    }
  ];

  const Icon: React.FC<{ name: string }> = ({ name }) => {
    const icons: { [key: string]: JSX.Element } = {
      clarity: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />,
      empathy: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />,
      wellness: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />,
      trust: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    };
    return <svg className="w-8 h-8 mb-4 text-polar-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">{icons[name]}</svg>;
  };
  
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">¿Qué es Polaris?</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Polaris nace de la experiencia real de cuidar a un ser querido con enfermedades crónicas. Nuestro propósito es poner en tus manos información confiable, clara y humana para que puedas navegar tu camino con más seguridad y esperanza.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex flex-col items-center">
              <Icon name={benefit.icon} />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{benefit.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
