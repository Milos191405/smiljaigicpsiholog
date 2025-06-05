"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import ImageSection from "@/components/ImageComponent";
import RandomQuote from "@/components/RandomQuote";
import Button from "@/components/Button";

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
    description:
      "Podrška u razvoju samopouzdanja i emocionalne inteligencije.",
    bg: "bg-background",
    text: "text-text-primary",
  },
];

const sharedTitleClass =
  "text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-3xl font-semibold";
const sharedDescClass =
  "mt-4 text-md md:text-lg lg:text-1xl xl:text-xl 2xl:text-2xl";




export default function Home() {
  return (
    <>
      <Navbar />
      <article>
        {/* Hero Section */}
        <section className="pt-[64px] lg:pt-[100px] bg-background-secondary ">
          <div
            className="mx-auto md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1500px] 2xl:max-w-[1800px] flex flex-col  pt-20 pb-10 lg:flex-row 
          items-center justify-center px-6 md:px-0"
          >
            <div className="lg:w-1/2 text-center lg:text-left pb-6 lg:p-10">
              <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold leading-tight">
                Terapija za decu, tinejdžere i njihove porodice
              </h1>
              <p className="my-6 pb-6 text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl text-text-secondary">
                Pronađite podršku i razumevanje kroz stručni pristup.
              </p>
              <Button
                href="/Kontakt"
                text="Zakaži konsultaciju"
                styleType="consultation"
              />
            </div>
            <div className="md:w-7/10 lg:w-3/10  mt-10 lg:mt-0 flex justify-end lg:p-5">
              <ImageSection
                src="/Smiljka1.jpg"
                width={500}
                height={400}
                alt="Terapija"
                className=""
              />
            </div>
          </div>
        </section>

        <RandomQuote className="" />

        {/* About Section */}
        <section className="py-10  bg-background ">
         <div
            className="mx-auto md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1800px] flex flex-col pt-10 pb-10 lg:flex-row 
          items-center justify-center px-6 md:px-0 "
          >
            <div className="md:w-7/10 lg:w-3/10  lg:mt-0 flex justify-end lg:p-5">
              <ImageSection
                src="/Smiljka1.jpg"
                width={500}
                height={400}
                alt="Smilja Igic"
                className=""
              />
            </div>
            <div className="lg:w-1/2 lg:ml-10 mt-10 ">
              <h2
                className="text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-semibold text-text-primary"
              >
                O meni
              </h2>
              <p className="mt-6 text-msm md:text-md lg:text-lg xl:text-xl 2xl:text-1xl text-text-primary">
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
            </div>
          </div>
        </section>

        {/* Services Section */}

<section className="py-10 bg-background-secondary px-6 ">
  <div className="mx-auto text-center md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1500px]">
    <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-semibold text-text-primary">
      <Link href="/Psihoterapija" className="hover:text-text-secondary">
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

        {/* Contact Section */}
        <section className="py-10 bg-text-primary text-background px-6 lg:px-20 text-center">
          <div className="md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1200px] mx-auto">
            <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-semibold">
              Kontaktirajte me
            </h3>
            <p className="pt-4 text-md md:text-lg lg:text-xl xl:text-1xl 2xl:text-2xl">
              Spremni da napravite prvi korak?
            </p>
            <p className="pt-4 pb-6 text-md md:text-lg lg:text-xl xl:text-1xl 2xl:text-2xl"> Pošaljite poruku ili zakažite
              konsultaciju.</p>
            <Button
              href="/Kontakt"
              text="Pošaljite poruku"
              styleType="message"
            />
          </div>
        </section>
      </article>
      <Footer />
    </>
  );
}
