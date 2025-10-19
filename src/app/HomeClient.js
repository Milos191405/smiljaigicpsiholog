"use client";

import FadeUp from "@/components/FadeUp";
import FadeUpStatic from "@/components/FadeUpStatic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageSection from "@/components/ImageComponent";
import RandomQuote from "@/components/RandomQuote";
import Button from "@/components/Button";
import Link from "next/link";

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
      <header>
        <FadeUpStatic>
          <Navbar />
        </FadeUpStatic>
      </header>

      <main>
        {/* Hero Section */}
        <FadeUp>
          <section className="pt-[80px] lg:pt-[100px] bg-background-secondary">
            <div className="mx-auto md:max-w-[600px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1400px] flex flex-col pt-10 pb-10 lg:flex-row items-center justify-center px-6 md:px-0">
              {/* Tekst leva strana */}
              <div className="lg:w-2/3 text-text-primary text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-xl space-y-4 text-center lg:text-left">
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-semibold leading-tight italic text-text-primary pb-5 ">
                  Terapija za decu, tinejdžere i njihove porodice
                </h1>
                <p className="my-6 md:pb-5 lg:pb-10 text-lg md:text-xl text-text-secondary">
                  Pronađite podršku i razumevanje kroz stručni pristup.
                </p>
                <Button
                  href="/Kontakt"
                  text="Zakaži konsultaciju"
                  styleType="consultation"
                />
              </div>

              {/* Slika desna strana */}
              <aside className="w-3/4 md:w-9/10 lg:w-4/10 mt-10 lg:mt-0 flex justify-end lg:p-5">
                <ImageSection
                  src="/Smiljka1.jpg"
                  width={500}
                  height={400}
                  alt="Terapija"
                  className="w-full h-full object-cover"
                  priority
                />
              </aside>
            </div>
          </section>
        </FadeUp>

        {/* Quote Section */}
        <FadeUp delay={0.2}>
          <section>
            <RandomQuote />
          </section>
        </FadeUp>

        {/* About Section */}
        <FadeUp delay={0.4}>
          <section className=" lg:pt-10 bg-background">
            <div className="mx-auto md:max-w-[600px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1400px] flex flex-col pt-1 pb-10 lg:flex-row items-center justify-center px-6 md:px-0">
              {/* Slika leva strana */}
              <div className="w-3/4 md:w-9/10 lg:w-4/10 mt-10 lg:mt-0 flex justify-end lg:p-5">
                <ImageSection
                  src="/Smiljka1.jpg"
                  width={500}
                  height={400}
                  alt="Smilja Igic"
                />
              </div>

              {/* Tekst desna strana */}
              <article className="lg:w-2/3 lg:ml-10 mt-10 text-left">
                <h2 className="text-2xl md:text-3xl lg:text-3xl font-semibold text-text-primary pb-5">
                  O meni
                </h2>
                <p className="mt-6 text-lg md:text-xl text-text-primary">
                  Dipl. Psiholog Smilja Igic pruža podršku kroz terapijske
                  procese, pomažući deci, tinejdžerima i porodicama da prevaziđu
                  izazove.
                </p>
                <Link
                  href="/O_meni"
                  className="mt-6 inline-block text-text-secondary hover:underline"
                >
                  Saznaj više
                </Link>
              </article>
            </div>
          </section>
        </FadeUp>

        {/* Services Section */}
        <FadeUp delay={0.6}>
          <section className="py-10 bg-background-secondary px-6">
            <div className="mx-auto md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1800px] text-center max-w-screen-xl">
              <h2 className="text-2xl lg:text-3xl font-semibold text-text-primary">
                <Link
                  href="/Psihoterapija"
                  className="hover:text-text-secondary"
                >
                  Kako mogu pomoći?
                </Link>
              </h2>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                {cards.map((card, index) => (
                  <article
                    key={index}
                    className={`p-8 shadow-xl rounded-lg ${card.bg} ${card.text}`}
                  >
                    <h3 className={sharedTitleClass}>{card.title}</h3>
                    <p className={sharedDescClass}>{card.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </FadeUp>

        {/* Contact CTA samo LinkedIn */}
        <FadeUp delay={0.8}>
          <section className="py-10 bg-text-primary text-background px-6 text-center">
            <div className="max-w-screen-md mx-auto">
              <h3 className="text-2xl lg:text-3xl font-semibold">
                Kontaktirajte me
              </h3>
              <p className="pt-4 text-lg md:text-xl">
                Pratite moj rad i kontaktirajte me putem LinkedIn.
              </p>
              <div className="flex justify-center mt-6">
                <Button
                  href="https://www.linkedin.com/in/smilja-igi%C4%87-16734866/"
                  text="LinkedIn"
                  styleType="message"
                />
              </div>
            </div>
          </section>
        </FadeUp>
      </main>

      <footer>
        <FadeUp delay={1}>
          <Footer />
        </FadeUp>
      </footer>
    </>
  );
}
