import ImageComponent from "@/components/ImageComponent";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function O_meni() {
  return (
    <>
      <Navbar />
      <article className="pt-20 md:max-w-[700px] md:mx-auto lg:pt-24 lg:max-w-[1000px] xl:max-w-[1500px]">
        <h2 className="text-lg italic text-center font-bold pb-8 md:text-xl lg:text-2xl md:pt-10">
          Smilja Igic
        </h2>
        <p className=" px-4 pb-4 md:pb-8 ">
          <span className="font-bold italic">Psiholog</span> i{" "}
          <span className="font-bold italic">psihoterapeut</span> sa preko 23
          godina iskustva u radu iz oblasti porodičnih odnosa, najviše iz okvira
          socijalne zaštite- razvoda, delinkvencije...
        </p>

        <div className="">
        <ImageComponent
            src="/Smiljka2.jpg"
            alt="Smilja Igic vas psiholog"
            className="lg:w-1/3"
          />
        </div>

        <p className=" p-4 ">
          Diplomirala je na Fakultetu u Novom Sadu, gde je stekla temeljna
          znanja iz oblasti psihologije i psihoterapije. Posebne specijalizacije
          završila je u oblasti porodičnog i partnerskog nasilja, kao i rada sa
          decom koja imaju probleme u ponašanju.
        </p>
        <p className="p-4">
          {" "}
          Značajno iskustvo stekla je kroz rad kao savetnik na roditeljskom
          telefonu i dečijoj liniji, pružajući podršku i smernice roditeljima i
          deci u kriznim situacijama.
        </p>

        <p className="p-4">
          Višegodišnja psihoterapijska praksa u sistemskoj porodičnoj
          psihoterapiji najviše je usmerena na pomoć pri izazovima narušenih
          partnerskih odnosa, roditeljstva i emotivnih gubitaka. Pored toga,
          poseduje bogato iskustvo u radu sa osobama koje se suočavaju sa
          stresom, anksioznošću i traumatskim iskustvima.
        </p>

        <p className="p-4">
          Poslednje dve godine posvećena je dodatnoj edukaciji iz oblasti rada
          sa traumom kod dece i odraslih, sa ciljem pružanja još efikasnije i
          sveobuhvatnije podrške klijentima.
        </p>
      </article>
      <Footer />
    </>
  );
}

export default O_meni;
