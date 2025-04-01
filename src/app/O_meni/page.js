import ImageComponent from "@/components/ImageComponent";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RandomQuote from "@/components/RandomQuote";

function O_meni() {
  return (
    <>
      <Navbar />
      <article className="pt-20 md:max-w-[700px] md:mx-auto lg:pt-24 lg:max-w-[1000px] xl:max-w-[1500px]">

        <RandomQuote />

        <h2 className="text-lg italic text-center font-bold pb-8 md:text-xl lg:text-2xl md:pt-10">
          Smilja Igic
        </h2>

        <div className="flex flex-col items-center lg:flex-row lg:gap-8">
          {/* Image Section */}
          <ImageComponent
            src="/Smiljka2.jpg"
            alt="Smilja Igic vas psiholog"
            className="w-2/3 md:w-1/2 lg:w-1/3"
          />

          {/* Bio Section */}
          <div className="lg:w-2/3">
            <p className="px-4 pb-4 md:pb-8">
              <span className="font-bold italic">Psiholog</span> i{" "}
              <span className="font-bold italic">psihoterapeut</span> sa preko 23
              godine iskustva u radu sa porodicama, partnerima i decom, posebno
              u okviru socijalne zaštite.
            </p>
          </div>
        </div>

        <div className="p-4 space-y-4">
          <p>
            Diplomirala je na Fakultetu u Novom Sadu, gde je stekla temeljna
            znanja iz psihologije i psihoterapije. Specijalizovala se za rad sa
            porodicama, partnerskim odnosima i decom sa problemima u ponašanju.
          </p>

          <p>
            Dugogodišnje iskustvo stekla je kao savetnik na roditeljskom telefonu
            i dečijoj liniji, pružajući podršku i smernice roditeljima i deci u
            kriznim situacijama.
          </p>

          <p>
            Njena psihoterapijska praksa fokusira se na rešavanje izazova
            narušenih partnerskih odnosa, roditeljstva i emotivnih gubitaka.
            Takođe, pomaže osobama koje se suočavaju sa stresom, anksioznošću i
            traumama.
          </p>

          <p>
            Poslednje dve godine posvećena je dodatnoj edukaciji u radu sa
            traumom kod dece i odraslih, kako bi pružila još efikasniju podršku
            klijentima.
          </p>
        </div>
      </article>
      <Footer />
    </>
  );
}

export default O_meni;
