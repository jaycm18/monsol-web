import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_MEASUREMENT_ID = 'G-M6HFK7P9HS';

export default function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    // Lataa Google Analytics script vain tuotannossa
    if (import.meta.env.PROD) {
      // Lataa Google Analytics script
      if (!window.gtag) {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
        document.head.appendChild(script);

        // Initialize gtag
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          window.dataLayer.push(arguments);
        }
        window.gtag = gtag;
        
        gtag('js', new Date());
        gtag('config', GA_MEASUREMENT_ID, {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    }
  }, []);

  // Seuraa sivujen vaihtoja
  useEffect(() => {
    if (import.meta.env.PROD && window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname,
      });
    }
  }, [location]);

  return null;
}