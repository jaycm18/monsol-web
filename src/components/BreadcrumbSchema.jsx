import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function BreadcrumbSchema() {
  const location = useLocation();

  useEffect(() => {
    // Poista vanha breadcrumb schema
    const existing = document.querySelector('script[data-breadcrumb]');
    if (existing) {
      existing.remove();
    }

    // Luo breadcrumb polku
    const pathnames = location.pathname.split('/').filter(x => x);
    
    if (pathnames.length === 0) return; // Ei breadcrumbia etusivulle

    const breadcrumbList = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Etusivu",
          "item": "https://monsol.fi/"
        }
      ]
    };

    // Lisää polun mukaiset breadcrumbit
    pathnames.forEach((name, index) => {
      const position = index + 2;
      const path = `/${pathnames.slice(0, index + 1).join('/')}`;
      
      let displayName = name;
      switch(name) {
        case 'services': displayName = 'Palvelut'; break;
        case 'projects': displayName = 'Referenssit'; break;
        case 'about': displayName = 'Tietoa meistä'; break;
        case 'contact': displayName = 'Ota yhteyttä'; break;
      }

      breadcrumbList.itemListElement.push({
        "@type": "ListItem",
        "position": position,
        "name": displayName,
        "item": `https://monsol.fi${path}`
      });
    });

    // Lisää breadcrumb schema DOM:iin
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-breadcrumb', 'true');
    script.text = JSON.stringify(breadcrumbList);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector('script[data-breadcrumb]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [location.pathname]);

  return null;
}