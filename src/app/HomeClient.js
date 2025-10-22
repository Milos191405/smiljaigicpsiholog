"use client";

import FadeUp from "@/components/FadeUp";
import FadeUpStatic from "@/components/FadeUpStatic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageComponent from "@/components/ImageComponent";
import RandomQuote from "@/components/RandomQuote";
import Button from "@/components/Button";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faViber, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const cards = [
  {
    title: "Psihološko savetovanje",
    description:
      "Individualni pristup i profesionalna podrška u prevazilaženju životnih izazova.",
    bg: "bg-background-ternary",
    text: "text-background",
  },
  {
    title: "Porodična terapija",
    description: "Rad na poboljšanju odnosa i razumevanju u porodici.",
    bg: "bg-text-ternary",
    text: "text-background-secondary",
  },
  {
    title: "Rad sa decom i tinejdžerima",
    description: "Podrška u razvoju samopouzdanja i emocionalne inteligencije.",
    bg: "bg-background",
    text: "text-text-primary",
  },
];

const sharedTitleClass =
  "text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold";
const sharedDescClass = "mt-4 text-lg md:text-xl lg:text-xl";

export default function HomeClient() {
  return (
    <>
      {/* HEADER */}
      <header>
        <FadeUpStatic>
          <Navbar />
        </FadeUpStatic>
      </header>
      <FadeUp delay={0.2}>
        <section
          aria-label="Nasumičan citat o psihologiji"
          className="pt-[80px] lg:pt-[100px]"
        >
          <RandomQuote />
        </section>
      </FadeUp>

      <main>
        {/* HERO SECTION */}
        <FadeUp delay={0.6}>
          <section
            className=" bg-background-secondary"
            aria-labelledby="hero-naslov"
          >
            <div className="mx-auto md:max-w-[600px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1400px] flex flex-col pt-10 pb-10 lg:flex-row items-center justify-center px-6 md:px-0">
              {/* Tekst leva strana */}
              <div className="lg:w-2/3 text-text-primary text-sm md:text-md lg:text-lg xl:text-xl space-y-4 text-center lg:text-left">
                <h1
                  id="hero-naslov"
                  className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-semibold leading-tight  text-text-primary pb-5"
                >
                  Terapija za decu, tinejdžere i njihove porodice
                </h1>
                <p className="my-6 md:pb-5 lg:pb-10 text-lg md:text-xl text-primary">
                  Pronađite podršku i razumevanje kroz stručni pristup.
                </p>
                <Button
                  href="/Kontakt"
                  text="Zakaži konsultaciju"
                  styleType="consultation"
                  ariaLabel="Zakaži konsultaciju sa psihologom Smiljom Igić"
                />
              </div>

              {/* Slika desna strana */}
              <aside className="w-3/4 md:w-9/10 lg:w-4/10 mt-10 lg:mt-0 flex justify-end lg:p-5">
                <ImageComponent
                  src="/Smiljka1.jpg"
                  alt="Terapija za celu porodicu u Beogradu"
                  priority={true}
                />
              </aside>
            </div>
          </section>
        </FadeUp>

        {/* O MENI */}
        <FadeUp delay={0.6}>
          <section
            className="lg:pt-10 bg-background"
            aria-labelledby="o-meni-naslov"
          >
            <div className="mx-auto md:max-w-[600px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1400px] flex flex-col pt-1 pb-10 lg:flex-row items-center justify-center px-6 md:px-0">
              {/* Slika leva strana */}
              <div className="w-3/4 md:w-9/10 lg:w-4/10 mt-10 lg:mt-0 flex justify-end lg:p-5">
                <ImageComponent
                  src="/Smilja Igic, psiholog Beograd.jpeg"
                  alt="Smilja Igić psiholog, Beograd"
                />
              </div>

              {/* Tekst desna strana */}
              <article className="lg:w-2/3 lg:ml-10 mt-10 text-left">
                <h2
                  id="o-meni-naslov"
                  className="text-2xl md:text-3xl lg:text-3xl font-semibold text-text-primary pb-5"
                >
                  O meni
                </h2>
                <p className="mt-6 text-lg md:text-xl text-text-primary">
                  Dipl. psiholog Smilja Igić pruža podršku kroz terapijske
                  procese, pomažući deci, tinejdžerima i porodicama da prevaziđu
                  izazove i pronađu unutrašnju ravnotežu.
                </p>
                <Link
                  href="/O_meni"
                  className="mt-6 inline-block text-text-secondary hover:underline"
                  aria-label="Saznaj više o psihologu Smilji Igić"
                >
                  Saznaj više
                </Link>
              </article>
            </div>
          </section>
        </FadeUp>

        {/* USLUGE */}
        <FadeUp delay={0.8}>
          <section
            className="py-10 bg-background-secondary px-6"
            aria-labelledby="usluge-naslov"
          >
            <div className="mx-auto md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1800px] text-center max-w-screen-xl">
              <h2
                id="usluge-naslov"
                className="text-2xl lg:text-3xl font-semibold text-text-primary"
              >
                <Link
                  href="/Psihoterapija"
                  className="hover:text-text-secondary"
                  aria-label="Psihoterapija za decu, tinejdžere i porodice u Beogradu"
                >
                  Kako mogu pomoći?
                </Link>
              </h2>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                {cards.map((card, index) => (
                  <FadeUp key={index} delay={1 + index * 0.2}>
                    <article
                      className={`p-8 shadow-xl rounded-lg ${card.bg} ${card.text}`}
                      aria-label={card.title}
                    >
                      <h3 className={sharedTitleClass}>{card.title}</h3>
                      <p className={sharedDescClass}>{card.description}</p>
                    </article>
                  </FadeUp>
                ))}
              </div>
            </div>
          </section>
        </FadeUp>

        {/* KONTAKT CTA */}
        <FadeUp delay={1.2}>
          <section
            className="py-5 bg-text-primary text-background px-6 text-center"
            aria-labelledby="kontakt-naslov"
          >
            <div className="max-w-screen-md mx-auto">
              <h3
                id="kontakt-naslov"
                className="text-2xl lg:text-3xl font-semibold"
              >
                Kontaktirajte me
              </h3>
              <div className="flex justify-center mt-5 gap-6 ">
                <a
                  href="viber://chat?number=%2B381638344258"
                  aria-label="Kontaktirajte me putem Viber-a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faViber}
                    className="text-2xl md:text-4xl text-foreground hover:text-violet-500 transition-all duration-300"
                  />
                </a>

                <a
                  href="https://wa.me/381638344258"
                  aria-label="Kontaktirajte me putem WhatsApp-a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="text-2xl md:text-4xl text-foreground hover:text-green-600 transition-all duration-300"
                  />
                </a>
              </div>
            </div>
          </section>
        </FadeUp>
      </main>

      {/* FOOTER */}
      <footer>
        <FadeUpStatic>
          <Footer />
        </FadeUpStatic>
      </footer>
    </>
  );
}
