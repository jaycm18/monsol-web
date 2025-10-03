import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="py-20 px-6 bg-background text-text font-retro min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-accent text-center">
          Tietoa Meistä
        </h1>

        {/* Yritysesittely */}
        <section className="space-y-6 mb-12">
          <p>
            Tervetuloa sivustollemme! Olemme moderni ja asiakaslähtöinen yritys, joka
            auttaa pienyrityksiä ja yrittäjiä menestymään verkossa. Tarjoamme
            räätälöityjä ratkaisuja kotisivujen, verkkokauppojen ja web-sovellusten
            toteutukseen, jotta liiketoimintasi kasvaa ja saavuttaa uusia asiakkaita.
            Lisäksi tarjoamme yleisiä ohjelmistokehityspalveluita, kuten sovellusten
            ja järjestelmien suunnittelua, toteutusta ja ylläpitoa.
          </p>

          <p>
            Meille tärkeintä on laatu, selkeys ja toimivuus. Haluamme varmistaa, että
            digitaalinen ratkaisusi ei ole vain kaunis, vaan myös käytännöllinen, tehokas
            ja helposti hallittavissa. Olipa kyseessä yrityksesi esittelysivu, verkkokauppa,
            web-sovellus tai muu ohjelmistoratkaisu, meiltä saat kokonaisvaltaisen palvelun,
            joka tukee liiketoimintasi kasvua.
          </p>
        </section>

        {/* Artikkeli kotisivujen ja verkkokaupan hyödyistä */}
        <section className="space-y-6 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-accent text-center">
            Kotisivujen ja verkkokaupan hyödyt yritykselle
          </h2>

          <article className="space-y-6">
            <p>
              Nykyään toimiva kotisivu on yrityksen käyntikortti verkossa. Se antaa
              potentiaalisille asiakkaille ensivaikutelman yrityksestäsi ja sen
              luotettavuudesta. Hyvin suunniteltu sivusto auttaa myös asiakkaita
              löytämään tarvitsemansa tiedot nopeasti ja vaivattomasti.
            </p>

            <p>
              Kotisivujen avulla voit esitellä palvelusi ja tuotteesi selkeästi, jakaa
              asiakaskokemuksia ja referenssejä sekä vahvistaa brändiäsi.
              Hakukoneoptimoitu sivusto parantaa myös näkyvyyttä Googlessa, mikä tuo
              uusia asiakkaita ilman jatkuvia mainoskuluja.
            </p>

            <h3 className="text-2xl font-semibold text-accent mt-6">
              Verkkokaupan hyödyt
            </h3>

            <p>
              Verkkokauppa avaa yrityksellesi mahdollisuuden myydä tuotteita ympäri
              vuorokauden ilman fyysisiä rajoitteita. Asiakkaat voivat selata tuotteita,
              tehdä tilauksia ja maksaa turvallisesti suoraan verkossa. Tämä laajentaa
              asiakaskuntaa ja lisää myyntimahdollisuuksia merkittävästi.
            </p>

            <p>
              Verkkokauppa myös automatisoi osan myyntiprosessista, kuten tilausvahvistukset,
              varaston seurannan ja maksujen käsittelyn, mikä vapauttaa aikaa muihin
              liiketoiminnan osa-alueisiin. Hyvin suunniteltu verkkokauppa parantaa
              asiakaskokemusta ja lisää asiakkaiden luottamusta yritykseesi.
            </p>

            <p>
              Lyhyesti sanottuna, kotisivut ja verkkokauppa ovat nykyajan yrityksen
              tärkeimpiä työkaluja. Ne auttavat tavoittamaan uusia asiakkaita, tehostamaan
              myyntiä ja rakentamaan vahvaa brändiä verkossa. Panostamalla verkkonäkyvyyteen
              ja käyttäjäystävälliseen palveluun, yrityksesi voi menestyä kilpailussa ja
              kasvaa tehokkaasti.
            </p>

            <h3 className="text-2xl font-semibold text-accent mt-6">
              Web-sovellukset ja ohjelmistokehitys
            </h3>

            <p>
              Web-sovellukset mahdollistavat räätälöidyt ratkaisut, jotka tukevat
              yrityksesi prosesseja ja parantavat asiakaskokemusta. Voimme toteuttaa
              esimerkiksi ajanvarausjärjestelmiä, asiakasportaaleja, sisäisiä
              työkaluja tai muita toiminnallisia ratkaisuja, jotka säästävät aikaa ja
              lisäävät tehokkuutta.
            </p>

            <p>
              Tarjoamme myös yleistä ohjelmistokehitystä, kuten järjestelmien
              suunnittelua, toteutusta ja ylläpitoa. Olipa tarpeesi pieni sovellus tai
              jotain laajempaa, suunnittelemme ja toteutamme sen
              laadukkaasti ja skaalautuvasti.
            </p>
          </article>
        </section>

        {/* Divider */}
        <div className="border-t-2 border-accent my-20"></div>

        {/* Call to Action: sama kuin muilla sivuilla */}
        <section
          id="contact"
          className="max-w-4xl mx-auto mb-20 bg-primary p-8 md:p-10 rounded-xl text-center"
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
  );
}
