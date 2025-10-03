import React from 'react';
import { Helmet } from 'react-helmet-async';

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

  return (
    <Helmet>
      {/* Perus meta-tagit */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph (Facebook, LinkedIn) */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="fi_FI" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Robots */}
      <meta name="robots" content="index, follow" />
      
      {/* Language */}
      <meta httpEquiv="content-language" content="fi" />
      
      {/* Author */}
      <meta name="author" content="Monsol" />
    </Helmet>
  );
}