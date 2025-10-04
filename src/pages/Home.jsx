import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCode, FaWordpress, FaProjectDiagram } from "react-icons/fa";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <>
      <SEO 
        title="Etusivu"
        description="Monsol tarjoaa ammattitaitoista web-kehitystä, WordPress-ratkaisuja ja ohjelmistokehityspalveluja. Räätälöidyt ratkaisut yrityksillesi."
        keywords="web-kehitys, WordPress, ohjelmistokehitys, verkkokauppa, WooCommerce, React, Node.js"
        url="/"
      />
      <section className="font-retro bg-background text-text">
        {/* Hero-osio */}
        <div className="relative h-screen -mt-16 md:-mt-20 flex items-center justify-center">
          {/* Placeholder tausta nopeaa latautumista varten */}
          <div className="absolute inset-0 bg-gradient-to-br from-background to-primary opacity-50"></div>
          
          {/* Optimoitu taustakuva WebP + JPG fallback */}
          <picture className="absolute inset-0">
            <source 
              srcSet="/home5.webp" 
              type="image/webp"
            />
            <motion.img
              src="/home5.jpg"
              alt="Ohjelmistokehitys - Monsol tarjoaa moderneja web-ratkaisuja yrityksille"
              className="w-full h-full object-cover brightness-75"
              loading="eager"
              decoding="async"
              fetchpriority="high"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            />
          </picture>

          {/* Tekstit hero-kuvan päällä */}
        <div className="relative z-10 text-center px-4 sm:px-6 md:px-0 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-accent">
            monsol - modernia ohjelmistokehitystä
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 text-text">
            Monsol tarjoaa ammattitaitoista web-kehitystä, WordPress-ratkaisuja ja paljon muuta. Katsotaan yhdessä mitä voimme rakentaa!
          </p>
          <Link
            to="/contact"
            className="inline-block bg-accent text-background px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-xl font-medium hover:opacity-90 transition"
            onClick={() => {
              if (window.gtag) {
                window.gtag('event', 'click', {
                  event_category: 'CTA',
                  event_label: 'Hero Contact Button',
                  value: 1
                });
              }
            }}
          >
            Ota yhteyttä
          </Link>
        </div>
      </div>

      {/* Divider hero ja palvelut välissä */}
      <div className="my-12 md:my-16 flex justify-center">
        <div className="w-24 md:w-32 h-1 bg-accent rounded-full"></div>
      </div>

      {/* Palvelut */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-accent mb-12 text-center">
          Palvelut
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <Link to="/services">
            <div className="bg-primary p-6 md:p-8 rounded-xl shadow-md hover:scale-105 transition-transform cursor-pointer">
              <FaCode className="text-accent text-3xl md:text-4xl mx-auto mb-4" />
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-text">
                Web-sovellukset
              </h3>
              <p className="text-text text-sm md:text-base">
                React, Node.js ja modernit teknologiat käyttöön räätälöidyissä projekteissa.
              </p>
            </div>
          </Link>

          <Link to="/services">
            <div className="bg-primary p-6 md:p-8 rounded-xl shadow-md hover:scale-105 transition-transform cursor-pointer">
              <FaWordpress className="text-accent text-3xl md:text-4xl mx-auto mb-4" />
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-text">
                WordPress-sivut
              </h3>
              <p className="text-text text-sm md:text-base">
                Nopeat ja responsiiviset verkkosivut, jotka on helppo ylläpitää.
              </p>
            </div>
          </Link>

          <Link to="/services">
            <div className="bg-primary p-6 md:p-8 rounded-xl shadow-md hover:scale-105 transition-transform cursor-pointer">
              <FaProjectDiagram className="text-accent text-3xl md:text-4xl mx-auto mb-4" />
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-text">
                Ohjelmistokehitys
              </h3>
              <p className="text-text text-sm md:text-base">
                Rajapinnat ja automaatiot, jotka helpottavat arkea ja säästävät aikaa.
              </p>
            </div>
          </Link>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-accent my-20"></div>

        {/* Call to Action */}
        <div className="bg-primary p-12 rounded-xl text-center hover:scale-105 transition-transform">
          <h2 className="text-3xl font-bold mb-6 text-accent">
            Kiinnostuitko?
          </h2>
          <p className="text-text mb-6">
            Ota rohkeasti yhteyttä niin suunnitellaan yhdessä juuri sinulle sopiva ratkaisu.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-accent text-background px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition"
            onClick={() => {
              if (window.gtag) {
                window.gtag('event', 'click', {
                  event_category: 'CTA',
                  event_label: 'Home Bottom Contact Button',
                  value: 1
                });
              }
            }}
          >
            Ota yhteyttä
          </Link>
        </div>
      </section>
      </section>
    </>
  );
}
