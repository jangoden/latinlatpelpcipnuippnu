'use client';

import { useEffect } from 'react';

export default function ChatBot() {
  useEffect(() => {
    // Load the chatbot script dynamically
    const script = document.createElement('script');
    script.src = 'https://www.noupe.com/embed/019afd5893c1768f9c036f74fe5749915ade.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      const scriptElement = document.querySelector('script[src="https://www.noupe.com/embed/019afd5893c1768f9c036f74fe5749915ade.js"]');
      if (scriptElement) {
        scriptElement.remove();
      }
    };
  }, []);

  return null;
}
