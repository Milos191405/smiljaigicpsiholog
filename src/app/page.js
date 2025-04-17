"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import ImageSection from "@/components/ImageComponent";
import RandomQuote from "@/components/RandomQuote";
import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <Navbar />
      <article>
        {/* Hero Section */}
        <section className="pt-[64px] lg:pt-[100px] bg-background-secondary ">
          <div
            className="mx-auto md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1500px] flex flex-col pt-10 pb-10 lg:flex-row 
          items-center justify-center px-6 md:px-0  "
          >
            <div className="lg:w-1/2 text-center lg:text-left lg:p-10">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold leading-tight">
                Terapija za decu, tinejdžere i njihove porodice
              </h1>
              <p className="my-6 text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-text-secondary">
                Pronađite podršku i razumevanje kroz stručni pristup.
              </p>
              <Button
                href="/Kontakt"
                text="Zakaži konsultaciju"
                styleType="consultation"
              />
            </div>
            <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-end lg:p-10">
              <ImageSection
                src="/Smiljka1.jpg"
                width={500}
                height={500}
                alt="Terapija"
                className=""
              />
            </div>
          </div>
        </section>

        <RandomQuote className="" />

        {/* About Section */}
        <section className="py-10 px-6 bg-background ">
          <div className="mx-auto md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1500px] flex flex-col lg:flex-row items-center ">
            <div className="lg:w-1/2 flex justify-center">
              <ImageSection
                src="/Smiljka1.jpg"
                width={500}
                height={500}
                alt="Smilja Igic"
                className="rounded-4xl shadow-lg "
              />
            </div>
            <div className="lg:w-1/2 lg:ml-10 mt-10">
              <h2
                className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-text-primary"
              >
                O meni
              </h2>
              <p className="mt-6 text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-text-primary">
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
        <section className="py-10 bg-background-secondary px-6 lg:px-20">
          <div className="mx-auto text-center md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1500px]">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-text-primary">
              <Link href="/Psihoterapija" className="hover:text-text-secondary">
                Kako mogu pomoći?
              </Link>
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="p-8 bg-background-ternary text-background shadow-xl rounded-lg">
                <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold">
                  Psihološko savetovanje
                </h3>
                <p className="mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                  Individualni pristup i profesionalna podrška u prevazilaženju
                  životnih izazova.
                </p>
              </div>

              <div className="p-8 bg-text-ternary text-background-secondary shadow-xl rounded-lg">
                <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold">
                  Porodična terapija
                </h3>
                <p className="mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                  Rad na poboljšanju odnosa i razumevanju u porodici.
                </p>
              </div>

              <div className="p-8 bg-background shadow-xl rounded-lg">
                <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-700">
                  Rad sa decom i tinejdžerima
                </h3>
                <p className="mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-text-primary">
                  Podrška u razvoju samopouzdanja i emocionalne inteligencije.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-10 bg-text-primary text-background px-6 lg:px-20 text-center">
          <div className="md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1200px] mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold">
              Kontaktirajte me
            </h2>
            <p className="mt-6 mb-6 text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
              Spremni da napravite prvi korak? Pošaljite poruku ili zakažite
              konsultaciju.
            </p>
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
