import React, { useState } from "react";
import SEO from "../components/SEO";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { "Accept": "application/json" },
      });

      if (response.ok) {
        setStatus("Kiitos viestistäsi! Otamme sinuun yhteyttä pian.");
        form.reset();
        
        // Google Analytics event
        if (window.gtag) {
          window.gtag('event', 'form_submit', {
            event_category: 'Contact',
            event_label: 'Contact Form Submission',
            value: 1
          });
        }
      } else {
        setStatus("Jokin meni pieleen, kokeile myöhemmin.");
      }
    } catch (error) {
      setStatus("Jokin meni pieleen, kokeile myöhemmin.");
    }
  };

  return (
    <>
      <SEO 
        title="Ota yhteyttä"
        description="Ota yhteyttä Monsoliin ja keskustellaan projektistasi. Tarjoamme ilmaisen konsultaation ja räätälöidyt tarjoukset."
        keywords="ota yhteyttä, konsultaatio, tarjous, yhteydenotto, projekti"
        url="/contact"
      />
      <section className="py-20 px-6 bg-background text-text font-retro min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-accent text-center">
          Ota yhteyttä
        </h1>

        <form
          action="https://formspree.io/f/mqaddgdj" // oma Formspree-URL
          method="POST"
          className="bg-primary p-10 rounded-xl shadow-md space-y-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block mb-2 font-semibold" htmlFor="name">
              Nimi
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full p-3 rounded-lg border border-accent bg-background text-text focus:outline-none focus:ring-2 focus:ring-accent transition"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold" htmlFor="email">
              Sähköposti
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full p-3 rounded-lg border border-accent bg-background text-text focus:outline-none focus:ring-2 focus:ring-accent transition"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold" htmlFor="phone">
              Puhelinnumero (valinnainen)
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              className="w-full p-3 rounded-lg border border-accent bg-background text-text focus:outline-none focus:ring-2 focus:ring-accent transition"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold" htmlFor="message">
              Viesti
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows="5"
              className="w-full p-3 rounded-lg border border-accent bg-background text-text focus:outline-none focus:ring-2 focus:ring-accent transition"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-accent text-background px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition w-full"
          >
            Lähetä
          </button>

          {status && <p className="text-accent font-semibold mt-4 text-center">{status}</p>}
        </form>
      </div>
      </section>
    </>
  );
}
