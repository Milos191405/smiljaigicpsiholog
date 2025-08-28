"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RandomQuote from "@/components/RandomQuote";
import ImageSection from "@/components/ImageComponent";

export default function O_meni() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        {/* Sekcija 1 - Slika desno */}
        <section
          aria-labelledby="o-meni-naslov"
          className="pt-[64px] lg:pt-[100px] bg-background-secondary"
        >
          <div className="mx-auto md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1800px] flex flex-col pt-10 pb-10 lg:flex-row items-center justify-center px-6 md:px-0">
            <div className="lg:w-1/2 text-text-primary text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-xl space-y-4 lg:p-10">
              <h1
                id="o-meni-naslov"
                className="italic text-center font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-text-primary pb-5 lg:pb-10"
              >
                Smilja Igić
              </h1>
              <p>
                <strong>Psiholog</strong> i <strong>psihoterapeut</strong> sa preko 23 godine iskustva u radu sa
                porodicama, partnerima i decom, posebno u okviru socijalne zaštite.
              </p>
              <p>
                Diplomirala je na Fakultetu u Novom Sadu, gde je stekla temeljna
                znanja iz psihologije i psihoterapije. Specijalizovala se za rad
                sa porodicama, partnerskim odnosima i decom sa problemima u ponašanju.
              </p>
            </div>
            <aside className="md:w-7/10 lg:w-3/10 mt-10 lg:mt-0 flex justify-end lg:p-5">
              <ImageSection
                src="/Smiljka1.jpg"
                width={500}
                height={400}
                alt="Prva slika terapija"
                className="w-full h-full object-cover"
              />
            </aside>
          </div>
        </section>

        <section aria-label="Inspirativna izreka" className="my-10">
          <RandomQuote />
        </section>

        {/* Sekcija 2 - Slika levo */}
        <section className="px-6 bg-background" aria-labelledby="druga-sekcija-naslov">
          <div className="mx-auto md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1800px] flex flex-col pt-10 pb-10 lg:flex-row items-center justify-center px-6 md:px-0">
            <aside className="md:w-7/10 lg:w-3/10 lg:mt-0 flex justify-start lg:p-5">
              <ImageSection
                src="/Smiljka2.jpg"
                width={500}
                height={400}
                alt="Druga slika terapija"
                className="w-full h-full object-cover"
              />
            </aside>
            <section className="lg:w-1/2 text-text-primary text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-xl space-y-4 lg:ml-10 mt-10">
              <p>
                Dugogodišnje iskustvo stekla je kao savetnik na roditeljskom telefonu i dečijoj liniji,
                pružajući podršku i smernice roditeljima i deci u kriznim situacijama.
              </p>
              <p>
                Njena psihoterapijska praksa fokusira se na rešavanje izazova narušenih
                partnerskih odnosa, roditeljstva i emotivnih gubitaka.
              </p>
              <p>
                Takođe, pomaže osobama koje se suočavaju sa stresom, anksioznošću i traumama.
              </p>
              <p className="pb-4">
                Poslednje dve godine posvećena je dodatnoj edukaciji u radu sa traumom kod
                dece i odraslih, kako bi pružila još efikasniju podršku klijentima.
              </p>
            </section>
          </div>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
