import React from "react";
import { FaCode, FaWordpress, FaProjectDiagram, FaLaptopCode, FaBuilding, FaShoppingCart, FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { useEffect } from "react";

export default function Services() {
  // Service Schema
  useEffect(() => {
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Monsol - Ohjelmistokehityspalvelut",
      "description": "Web-sovellukset, WordPress-sivut ja verkkokaupat",
      "provider": {
        "@type": "Organization",
        "name": "Monsol"
      },
      "areaServed": "FI",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Ohjelmistokehityspalvelut",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Pieni sivusto",
              "description": "1-3 sivua, sopiva pienelle yritykselle"
            },
            "price": "495",
            "priceCurrency": "EUR"
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Yrityspaketti",
              "description": "3-5 sivua, laajempi sivustorakenne"
            },
            "price": "995",
            "priceCurrency": "EUR"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Verkkokauppa",
              "description": "WooCommerce-verkkokauppa"
            },
            "price": "1495",
            "priceCurrency": "EUR"
          }
        ]
      }
    };

    const existing = document.querySelector('script[data-service-schema]');
    if (existing) existing.remove();

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-service-schema', 'true');
    script.text = JSON.stringify(serviceSchema);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector('script[data-service-schema]');
      if (scriptToRemove) scriptToRemove.remove();
    };
  }, []);

  return (
    <>
      <SEO 
        title="Palvelut ja hinnasto"
        description="Katso Monsoln palvelut ja hinnat: web-sovellukset, WordPress-sivut, verkkokaupat ja ohjelmistokehitys. Räätälöidyt ratkaisut yrityksillesi."
        keywords="web-sovellukset, WordPress, WooCommerce, verkkokauppa, ohjelmistokehitys, hinnat, palvelut"
        url="/services"
      />
      <section className="py-20 px-6 bg-background text-text font-retro min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-accent text-center">
          Palvelut ja hinnasto
        </h1>

        {/* Palvelut kortteina */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {/* Web-sovellukset */}
          <Link to="/contact" className="transform hover:scale-105 transition-transform cursor-pointer">
            <div className="bg-primary p-8 rounded-xl shadow-md hover:shadow-xl">
              <FaCode className="text-accent text-4xl mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-4 text-text text-center">
                Web-sovellukset
              </h2>
              <p className="text-text mb-2">
                Kehitämme räätälöityjä web-sovelluksia moderneilla teknologioilla esimerkiksi:
              </p>
              <ul className="list-disc list-inside text-text space-y-1 mb-4">
                <li>C# / .NET / ASP.NET Core</li>
                <li>React & Node.js</li>
                <li>SQL-tietokannat ja backend-ratkaisut</li>
              </ul>
              <p className="text-sm text-accent text-center font-semibold">
                Hinnoittelu projektin mukaan, ota yhteyttä
              </p>
            </div>
          </Link>

          {/* WordPress & WooCommerce */}
          <Link to="/contact" className="transform hover:scale-105 transition-transform cursor-pointer">
            <div className="bg-primary p-8 rounded-xl shadow-md hover:shadow-xl">
              <FaWordpress className="text-accent text-4xl mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-4 text-text text-center">
                WordPress & WooCommerce
              </h2>
              <p className="text-text mb-2">
                Suunnittelemme ja toteutamme käyttäjäystävällisiä verkkosivustoja sekä
                verkkokauppoja:
              </p>
              <ul className="list-disc list-inside text-text space-y-1">
                <li>WordPress-sivustot</li>
                <li>WooCommerce-verkkokaupat</li>
                <li>Helppo ylläpito ja päivitys</li>
              </ul>
            </div>
          </Link>

          {/* Ohjelmistokehitys */}
          <Link to="/contact" className="transform hover:scale-105 transition-transform cursor-pointer">
            <div className="bg-primary p-8 rounded-xl shadow-md hover:shadow-xl">
              <FaProjectDiagram className="text-accent text-4xl mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-4 text-text text-center">
                Ohjelmistokehitys
              </h2>
              <p className="text-text mb-2">
                Tarjoamme kokonaisvaltaista ohjelmistokehitystä:
              </p>
              <ul className="list-disc list-inside text-text space-y-1 mb-4">
                <li>API-rajapinnat ja automaatiot</li>
                <li>Yleiset ohjelmistoprojektit ja tehtävät räätälöitynä asiakkaalle</li>
              </ul>
              <p className="text-sm text-accent text-center font-semibold">
                Hinnoittelu projektin mukaan, ota yhteyttä
              </p>
            </div>
          </Link>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-accent my-20"></div>

        {/* Hinnastopaketit */}
        <h2 className="text-3xl font-bold text-accent mb-10 text-center">
          WordPress & WooCommerce paketit
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Pieni sivusto */}
          <Link to="/contact" className="transform hover:scale-105 transition-transform cursor-pointer">
            <div className="bg-primary p-8 rounded-xl shadow-md text-center hover:shadow-xl">
              <FaLaptopCode className="text-accent text-3xl mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-text">Pieni sivusto</h3>
              <p className="text-lg text-accent font-bold mb-4">
                Alkaen 495 € + alv
              </p>
              <ul className="list-disc list-inside text-text space-y-1 text-left">
                <li>1–3 sivua</li>
                <li>Sopiva pienelle yritykselle tai yrittäjälle</li>
                <li>Responsiivinen design</li>
                <li>Yhteydenottolomake</li>
              </ul>
            </div>
          </Link>

          {/* Yrityspaketti */}
          <Link to="/contact" className="transform hover:scale-105 transition-transform cursor-pointer">
            <div className="bg-primary p-8 rounded-xl shadow-md text-center hover:shadow-xl">
              <FaBuilding className="text-accent text-3xl mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-text">Yrityspaketti</h3>
              <p className="text-lg text-accent font-bold mb-4">
                Alkaen 995 € + alv
              </p>
              <ul className="list-disc list-inside text-text space-y-1 text-left">
                <li>3–5 sivua</li>
                <li>Laajempi sivustorakenne</li>
                <li>Sopiva keskikokoiselle yritykselle</li>
                <li>Hakukoneoptimointi</li>             
                <li>Esim. blogi ja yhteydenottolomake</li>
              </ul>
            </div>
          </Link>

          {/* Verkkokauppa */}
          <Link to="/contact" className="transform hover:scale-105 transition-transform cursor-pointer">
            <div className="bg-primary p-8 rounded-xl shadow-md text-center hover:shadow-xl">
              <FaShoppingCart className="text-accent text-3xl mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-text">Verkkokauppa</h3>
              <p className="text-lg text-accent font-bold mb-4">
                Alkaen 1495 € + alv
              </p>
              <ul className="list-disc list-inside text-text space-y-1 text-left">
                <li>Sisältää verkkosivuston ja verkkokaupan</li>
                <li>WooCommerce-integraatio</li>
                <li>Maksupalvelut ja toimitustavat</li>
                <li>Hakukoneoptimointi</li>
                <li>Räätälöityjä ratkaisuja</li>
              </ul>
            </div>
          </Link>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-accent my-20"></div>

        {/* Ylläpitoartikkeli */}
        <article className="bg-primary p-10 rounded-xl shadow-md mb-20 hover:scale-105 transition-transform">
          <FaShieldAlt className="text-accent text-4xl mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-accent mb-6 text-center break-words">
            Ylläpito
          </h2>

          <p className="text-text mb-4">
            Pienemmillä verkkosivustoilla asiakas voi usein hoitaa itse päivitykset ja perusylläpidon.
            WordPress tarjoaa helppokäyttöisen hallintapaneelin, jolla onnistuvat esimerkiksi sisällön
            päivittäminen ja lisäosien päivitykset.
          </p>
          <p className="text-text mb-4">
            Mikäli kuitenkin haluat mielenrauhaa ja varmistaa, että sivustosi pysyy aina ajan tasalla
            ja turvallisena, tarjoamme{" "}
            <span className="font-bold text-accent">palvelun ylläpidon</span>.
          </p>
          <p className="text-text font-semibold text-center text-2xl mb-6">
            Palvelun ylläpito alkaen <span className="text-accent">29 € / kk + alv</span>
          </p>
          <ul className="list-disc list-inside text-text space-y-2 mb-6">
            <li>Säännölliset WordPress- ja lisäosapäivitykset</li>
            <li>Varmuuskopiot sivustosta</li>
            <li>Sivuston tietoturvan seuranta</li>
            <li>Tekninen tuki ja nopea reagointi ongelmatilanteissa</li>
          </ul>
          <p className="text-text text-center">
            Ylläpitopalvelu vapauttaa sinut keskittymään liiketoimintaasi, kun me huolehdimme
            verkkosivustosi teknisestä toimivuudesta.
          </p>
        </article>

        {/* Divider */}
        <div className="border-t-2 border-accent my-20"></div>

        {/* Call to Action */}
        <section className="bg-primary p-12 rounded-xl text-center hover:scale-105 transition-transform">
          <h2 className="text-3xl font-bold mb-6 text-accent">
            Kiinnostuitko?
          </h2>
          <p className="text-text mb-6">
            Ota rohkeasti yhteyttä niin suunnitellaan yhdessä juuri sinulle sopiva ratkaisu.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-accent text-background px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Ota yhteyttä
          </Link>
        </section>
      </div>
      </section>
    </>
  );
}
