import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
function WooCommerceCard({ onImageClick }) {
  const images = [
    "/kogle_screen.jpg",
    "/kogle_screen2.jpg",
    "/kogle_screen3.jpg"
  ];
  return (
    <div className="bg-primary rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition cursor-pointer overflow-hidden block">
      <div className="overflow-hidden relative">
        <img
          src={images[0]}
          alt="WooCommerce-projekti"
          className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-110 cursor-zoom-in"
          onClick={e => {
            e.preventDefault();
            e.stopPropagation();
            if (onImageClick) onImageClick(0);
          }}
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-accent mb-4">
          WooCommerce-verkkokauppa
        </h2>
        <p className="mb-4">
          Asiakkaalle toteutettu moderni WooCommerce-verkkokauppa, jossa
          painotettiin selkeää ulkoasua ja helppoa ostokokemusta. Kauppa
          on responsiivinen ja helppo ylläpitää.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://www.kogle.fi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline font-semibold"
          >
            Kogle.fi
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [wcModalOpen, setWcModalOpen] = useState(false);
  const [wcCurrent, setWcCurrent] = useState(0);
  const wcImages = [
    "/kogle_screen.jpg",
    "/kogle_screen2.jpg",
    "/kogle_screen3.jpg"
  ];

  // FreeWo modal state
  const [fwModalOpen, setFwModalOpen] = useState(false);
  const [fwCurrent, setFwCurrent] = useState(0);
  const fwImages = [
    "/freewo.jpg"
    // Lisää tähän muita FreeWo-kuvia jos haluat
  ];

  return (
    <>
      <SEO 
        title="Referenssit ja projektit"
        description="Katso Monsoln toteutetut projektit: WooCommerce-verkkokauppoja ja web-sovelluksia. Ammattitaitoista toteutusta modernein teknologioin."
        keywords="referenssit, projektit, WooCommerce, verkkokauppa, web-sovellukset, portfolio"
        url="/projects"
      />
      <section className="py-20 px-6 bg-background text-text font-retro min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-accent text-center">
          Referenssit
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* WooCommerce Project */}
          <WooCommerceCard onImageClick={idx => { setWcCurrent(idx); setWcModalOpen(true); }} />

          {/* FreeWo Project */}
          <div className="bg-primary rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition cursor-pointer overflow-hidden block">
            <div className="overflow-hidden relative">
              <img
                src={fwImages[0]}
                alt="FreeWo-projekti"
                className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-110 cursor-zoom-in"
                onClick={e => {
                  e.preventDefault();
                  e.stopPropagation();
                  setFwCurrent(0);
                  setFwModalOpen(true);
                }}
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-accent mb-4">
                FreeWo – Opinnäytetyö
              </h2>
              <p className="mb-4">
                Opinnäytetyönä toteutettu web-sovellus, joka sisältää sekä
                frontendin (React) että backendin (Node.js, Express, PostgreSQL).
                FreeWo on alusta, jossa asiakkaat voivat julkaista toimeksiantoja ja freelancerit sekä kevytyrittäjät voivat hakea niitä.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/jaycm18/FreeWo_frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Frontend (GitHub)
                </a>
                <a
                  href="https://github.com/jaycm18/freewo_backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                  onClick={e => e.stopPropagation()}
                >
                  Backend (GitHub)
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* WooCommerce Modal overlay */}
        {/* FreeWo Modal overlay */}
        {fwModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={() => setFwModalOpen(false)}>
            <div
              style={{
                position: "relative",
                background: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}
              onClick={e => e.stopPropagation()}
            >
              <button style={{position: "absolute", top: 0, right: 0, fontSize: "2rem", color: "#fff", background: "none", border: "none", cursor: "pointer", zIndex: 2}} onClick={() => setFwModalOpen(false)}>&times;</button>
              <img
                src={fwImages[fwCurrent]}
                alt={`FreeWo-projekti ${fwCurrent + 1}`}
                style={{
                  maxWidth: "900px",
                  width: "90vw",
                  maxHeight: "80vh",
                  objectFit: "contain",
                  borderRadius: "0.5rem"
                }}
              />
              {/* Jos lisäät useampia kuvia, voit lisätä nuolinapit tähän */}
            </div>
          </div>
        )}
        {wcModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={() => setWcModalOpen(false)}>
            <div
              style={{
                position: "relative",
                background: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}
              onClick={e => e.stopPropagation()}
            >
              <button style={{position: "absolute", top: 0, right: 0, fontSize: "2rem", color: "#fff", background: "none", border: "none", cursor: "pointer", zIndex: 2}} onClick={() => setWcModalOpen(false)}>&times;</button>
              <img
                src={wcImages[wcCurrent]}
                alt={`WooCommerce-projekti ${wcCurrent + 1}`}
                style={{
                  maxWidth: "900px",
                  width: "90vw",
                  maxHeight: "80vh",
                  objectFit: "contain",
                  borderRadius: "0.5rem"
                }}
              />
              <div style={{display: "flex", justifyContent: "space-between", width: "100%", marginTop: "1rem"}}>
                <button
                  onClick={e => {e.stopPropagation(); setWcCurrent(prev => (prev === 0 ? wcImages.length - 1 : prev - 1));}}
                  style={{background: "#eab308", color: "#fff", borderRadius: "999px", padding: "0.75rem 2rem", fontSize: "1.5rem", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", border: "none", cursor: "pointer"}}
                  aria-label="Edellinen kuva"
                >
                  &#8592;
                </button>
                <button
                  onClick={e => {e.stopPropagation(); setWcCurrent(prev => (prev === wcImages.length - 1 ? 0 : prev + 1));}}
                  style={{background: "#eab308", color: "#fff", borderRadius: "999px", padding: "0.75rem 2rem", fontSize: "1.5rem", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", border: "none", cursor: "pointer"}}
                  aria-label="Seuraava kuva"
                >
                  &#8594;
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Divider */}
        <div className="border-t-2 border-accent my-20"></div>

        {/* Call to Action */}
        <section
          id="contact"
          className="max-w-4xl mx-auto mt-16 bg-primary p-8 md:p-10 rounded-xl text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">
            Kiinnostuitko?
          </h2>
          <p className="text-text mb-6 text-base md:text-lg">
            Ota rohkeasti yhteyttä niin suunnitellaan yhdessä juuri sinulle sopiva ratkaisu.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-accent text-background px-6 md:px-8 py-2 md:py-4 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Ota yhteyttä
          </Link>
        </section>
      </div>
      </section>
    </>
  );
}
