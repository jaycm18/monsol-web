import { useEffect } from 'react';

export default function SEO({ 
  title, 
  description, 
  keywords, 
  image,
  url,
  type = 'website' 
}) {
  const siteTitle = 'Monsol';
  const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} - Modernia ohjelmistokehitystä`;
  const siteUrl = 'https://monsol.fi'; // Vaihda oikeaan domain-osoitteeseen
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const defaultImage = `${siteUrl}/home5.jpg`;
  const finalImage = image || defaultImage;

  useEffect(() => {
    // Update title
    document.title = fullTitle;
    
    // Update meta tags
    const updateMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    const updateProperty = (property, content) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Basic meta tags
    updateMeta('description', description);
    if (keywords) updateMeta('keywords', keywords);
    updateMeta('author', 'Monsol');
    updateMeta('robots', 'index, follow');
    
    // Open Graph (Facebook, LinkedIn)
    updateProperty('og:title', fullTitle);
    updateProperty('og:description', description);
    updateProperty('og:type', type);
    updateProperty('og:url', fullUrl);
    updateProperty('og:image', finalImage);
    updateProperty('og:site_name', siteTitle);
    updateProperty('og:locale', 'fi_FI');
    
    // Twitter Card
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', fullTitle);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', finalImage);
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = fullUrl;
    
  }, [fullTitle, description, keywords, fullUrl, finalImage, type, siteTitle]);

  return null;
}