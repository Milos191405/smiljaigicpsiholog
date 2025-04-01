"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import RandomQuote from "@/components/RandomQuote";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gray-100 pt-[64px]">
        <div className="mx-auto flex flex-col bg-background-secondary pt-10 pb-10 lg:flex-row items-center justify-between px-6 lg:px-20">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl lg:text-2xl font-semibold leading-tight">
              Terapija za decu, tinejdžere i njihove porodice
            </h1>
            <p className="mt-6 text-lg text-text-secondary">
              Pronađite podršku i razumevanje kroz stručni pristup.
            </p>
            <Link
              href="/Kontakt"
              className="mt-6 inline-block bg-text-primary text-white px-8 py-4 text-lg rounded-full shadow-lg hover:bg-blue-700 transition"
            >
              Zakaži konsultaciju
            </Link>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-end">
            {/* Hero Image */}
            <Image
              src="/Smiljka1.jpg"
              width={500}
              height={500}
              alt="Terapija"
              className="rounded-4xl shadow-lg"
            />
          </div>
        </div>
      </section>

      <div className="bg-text-primary text-background">
        <RandomQuote />
      </div>

      {/* About Section */}
      <section className="py-20 px-6 lg:px-20 bg-background">
        <div className="mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 flex justify-center">
            <Image
              src="/Smiljka1.jpg"
              width={500}
              height={500}
              alt="Smilja Igic"
              className="rounded-4xl shadow-lg text-text-primary"
            />
          </div>
          <div className="lg:w-1/2 lg:ml-10 mt-10 lg:mt-0">
            <h2 className="text-3xl font-semibold text-text-primary">O meni</h2>
            <p className="mt-6 text-gray-600 text-lg">
              Dipl. Psiholog Smilja Igic pruža podršku kroz terapijske procese, pomažući deci, tinejdžerima i porodicama da prevaziđu izazove.
            </p>
            <Link href="/O_meni" className="mt-6 inline-block text-text-secondary hover:underline text-lg">
              Saznaj više
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background-secondary px-6 lg:px-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            <Link href="/Psihoterapija">Kako mogu pomoći?</Link>
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 bg-background-ternary text-background shadow-xl rounded-lg">
              <h3 className="text-2xl font-bold">Psihološko savetovanje</h3>
              <p className="mt-4">Individualni pristup i profesionalna podrška u prevazilaženju životnih izazova.</p>
            </div>

            <div className="p-8 bg-text-ternary text-background-secondary shadow-xl rounded-lg">
              <h3 className="text-2xl font-bold">Porodična terapija</h3>
              <p className="mt-4">Rad na poboljšanju odnosa i razumevanju u porodici.</p>
            </div>

            <div className="p-8 bg-white shadow-xl rounded-lg">
              <h3 className="text-2xl font-bold text-gray-700">Rad sa decom i tinejdžerima</h3>
              <p className="mt-4 text-gray-600">Podrška u razvoju samopouzdanja i emocionalne inteligencije.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 lg:px-20 bg-white text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Šta kažu klijenti?</h2>
        <p className="mt-6 text-gray-600 italic text-lg">"Smilja nam je pomogla da ponovo pronađemo mir i razumevanje u porodici."</p>
        <p className="mt-4 text-gray-600 italic text-lg">"Njena empatija i stručnost učinili su veliku razliku u našem životu."</p>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-100 px-6 lg:px-20 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Kontaktirajte me</h2>
        <p className="mt-6 text-gray-600 text-lg">Spremni da napravite prvi korak? Pošaljite poruku ili zakažite konsultaciju.</p>
        <Link href="/kontakt" className="mt-8 inline-block bg-blue-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:bg-blue-700 transition">
          Pošaljite poruku
        </Link>
      </section>

      <Footer />
    </>
  );
}
