
import React from 'react';

const Chat: React.FC = () => {
  return (
    <section id="chat" className="py-20 md:py-28">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Habla con nosotros</h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Utiliza nuestros canales de chat para obtener respuestas rápidas o simplemente para conversar.
        </p>
        <div className="mt-10 max-w-2xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Chatbot Inteligente</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
                Nuestro asistente virtual está disponible 24/7 para ayudarte. Para activarlo, el dueño del sitio debe pegar los scripts de Botpress a continuación.
            </p>
            <div className="mt-4 text-left bg-gray-200 dark:bg-gray-700 p-4 rounded-lg font-mono text-sm text-gray-500 dark:text-gray-400">
              <pre>
                <code>
{`<!-- BOTPRESS CLOUD EMBED (pegar aquí los 2 <script>): 
<script src="https://cdn.botpress.cloud/webchat/v3.0/inject.js"></script>
<script src="https://files.bpcontent.cloud/TU/RUTA/EMBED_ID.js" defer></script>
-->`}
                </code>
              </pre>
            </div>
             <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                Una vez configurado, aparecerá una burbuja de chat flotante.
            </p>
        </div>
         <div className="mt-8">
             <a
                href="https://t.me/Polaris_ayuda_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 transition-transform duration-300 hover:scale-105"
            >
                Abrir en Telegram
            </a>
         </div>
      </div>
    </section>
  );
};

export default Chat;
