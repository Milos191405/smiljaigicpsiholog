import ImageComponent from "@/components/ImageComponent";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RandomQuote from "@/components/RandomQuote";
import ImageSection from "@/components/ImageComponent";

function O_meni() {
  return (
    <>
      <Navbar />
      <article className="">

      <div className= "pt-[64px] lg:pt-[100px] ">
          <RandomQuote />
        </div>

        <h2 className="text-lg italic text-center font-bold py-4  md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-text-primary">
          Smilja Igic
        </h2>

        {/* Bio Section */}
<section className=" px-6">
  <div className="mx-auto md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1500px] flex flex-col lg:flex-row items-center">

  <p className=" pb-4 md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
        <span className="font-bold italic">Psiholog</span> i{" "}
        <span className="font-bold italic">psihoterapeut</span> sa preko 23
        godine iskustva u radu sa porodicama, partnerima i decom, posebno
        u okviru socijalne zaštite.
      </p>
    
    {/* Image Section */}
    <div className="lg:w-1/2 flex justify-center">
     <ImageSection
                    src="/Smiljka2.jpg"
                    width={500}
                    height={500}
                    alt="Terapija"
                    className="rounded-4xl shadow-lg"
                  />
    </div>

    {/* Text Section */}
    <div className="lg:w-1/2 lg:ml-10 mt-10 text-text-primary md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">


      <div className="space-y-4 mb-4">
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

        <div className="lg:w-1/2 flex justify-center">
     <ImageSection
                    src="/Smiljka2.jpg"
                    width={500}
                    height={500}
                    alt="Terapija"
                    className="rounded-4xl shadow-lg"
                  />
    </div>

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
    </div>
  </div>
</section>

      </article>
      <Footer />
    </>
  );
}

export default O_meni;
