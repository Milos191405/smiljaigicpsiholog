"use client";

import FadeUp from "@/components/FadeUp";
import FadeUpStatic from "@/components/FadeUpStatic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RandomQuote from "@/components/RandomQuote";
import ImageSection from "@/components/ImageComponent";

export default function O_meni() {
  return (
    <>
      <header>
        <FadeUpStatic>
          <Navbar />
        </FadeUpStatic>
      </header>

      <main>
        {/* Sekcija 1 - Slika desno */}
        <FadeUp>
          <section
            aria-labelledby="O Psihologu Smilja Igic"
            className="pt-[80px] lg:pt-[100px] bg-background-secondary"
          >
            <div className="mx-auto md:max-w-[600px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1400px] flex flex-col pt-10 pb-10 lg:flex-row items-center justify-center px-6 md:px-0">
              <div className="lg:w-2/3 xl:w-2/3 text-text-primary text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-xl space-y-4 lg:p-10">
                <h1
                  id="o-meni-naslov"
                  className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight italic text-center xl:text-4xl 2xl:text-5xl text-text-primary lg:text-left pb-5 lg:pb-10"
                >
                  Smilja Igić, dipl. psiholog
                </h1>
                <p>
                  <strong>Psiholog</strong> i <strong>psihoterapeut</strong> sa preko 23 godine iskustva u radu sa porodicama, partnerima i decom, posebno u okviru socijalne zaštite.
                </p>
                <p>
                  Diplomirala je na Fakultetu u Novom Sadu, gde je stekla temeljna znanja iz psihologije i psihoterapije. Specijalizovala se za rad sa porodicama, partnerskim odnosima i decom sa problemima u ponašanju, pružajući profesionalnu podršku klijentima u Beogradu.
                </p>
                <p>
                  Njena praksa uključuje individualne konsultacije, porodičnu terapiju i rad sa decom i tinejdžerima, pomažući im da razviju emocionalnu inteligenciju i samopouzdanje.
                </p>
              </div>
              <aside className="w-3/4 md:w-[90%] lg:w-3/10 mt-10 lg:mt-0 flex justify-end lg:p-5">
                <ImageSection
                  src="/Smiljka1.jpg"
                  width={500}
                  height={400}
                  alt="Psiholog Smilja Igic,Beograd"
                  className="w-full h-full object-cover"
                />
              </aside>
            </div>
          </section>
        </FadeUp>

        {/* Inspirativna izreka */}
        <FadeUp delay={0.2}>
          <section aria-label="Inspirativna izreka">
            <RandomQuote />
          </section>
        </FadeUp>

        {/* Sekcija 2 - Slika levo */}
        <FadeUp delay={0.4}>
          <section className="px-6 bg-background" aria-labelledby="Smilja igic psihoterapija">
            <div className="mx-auto md:max-w-[600px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1400px] flex flex-col pt-10 pb-10 lg:flex-row items-center justify-center px-6 md:px-0">
              <aside className="w-3/4 md:w-[90%] lg:w-3/10 lg:mt-0 flex justify-start lg:p-5">
                <ImageSection
                  src="/Smiljka2.jpg"
                  width={500}
                  height={400}
                  alt="Psihoterapija u Beogradu"
                  className="w-full h-full object-cover"
                />
              </aside>
              <section className="lg:w-2/3 text-text-primary text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-xl space-y-4 lg:ml-10 mt-10">
                <p>
                  Dugogodišnje iskustvo stekla je kao savetnik na roditeljskom telefonu i dečijoj liniji, pružajući podršku i smernice roditeljima i deci u kriznim situacijama u Beogradu.
                </p>
                <p>
                  Njena psihoterapijska praksa fokusira se na rešavanje izazova narušenih partnerskih odnosa, roditeljstva i emotivnih gubitaka, kao i na individualne sesije za decu i tinejdžere.
                </p>
                <p>
                  Pomaže osobama koje se suočavaju sa stresom, anksioznošću i traumama, koristeći moderne metode psihoterapije i prilagođene tehnike za svaku starosnu grupu.
                </p>
                <p className="pb-4">
                  Poslednje dve godine posvećena je dodatnoj edukaciji u radu sa traumom kod dece i odraslih, kako bi pružila još efikasniju podršku klijentima iz Beograda i šire.
                </p>
              </section>
            </div>
          </section>
        </FadeUp>
      </main>

      <footer>
        <FadeUp delay={0.6}>
          <Footer />
        </FadeUp>
      </footer>
    </>
  );
}
