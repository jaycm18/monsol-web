import React from 'react';
import { Helmet } from 'react-helmet-async';

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

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
}