import { useEffect } from 'react';

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Monsol",
    "description": "Ohjelmistokehitys ja web-ratkaisut",
    "url": "https://monsol.fi",
    "sameAs": [
      "https://github.com/jaycm18"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "areaServed": "FI",
      "availableLanguage": "Finnish"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "FI"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web-sovellukset",
          "description": "React, Node.js ja modernit teknologiat"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "WordPress-sivut",
          "description": "Nopeat ja responsiiviset verkkosivut"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Verkkokaupat",
          "description": "WooCommerce-verkkokaupat"
        }
      }
    ]
  };

  useEffect(() => {
    // Poista vanha structured data jos on
    const existing = document.querySelector('script[type="application/ld+json"]');
    if (existing) {
      existing.remove();
    }

    // Lisää uusi structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(organizationSchema);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const scriptToRemove = document.querySelector('script[type="application/ld+json"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null;
}