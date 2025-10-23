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

      <FadeUp delay={0.2}>
        <section
          aria-label="Inspirativna izreka"
          className="pt-[80px] lg:pt-[100px]"
        >
          <RandomQuote />
        </section>
      </FadeUp>

      <main>
        {/* Sekcija 1 - Slika desno */}
        <FadeUp delay={0.6}>
          <section
            aria-labelledby="o-meni-naslov"
            className=" bg-background-secondary"
          >
            <div className="mx-auto md:max-w-[600px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1400px] flex flex-col pt-10 pb-10 lg:flex-row items-center justify-center px-6 md:px-0">
              {/* Tekstualni deo */}
            <div className="lg:w-2/3 xl:w-2/3 text-text-primary text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-xl space-y-4 lg:p-10">
  <h1
    id="o-meni-naslov"
    className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-center xl:text-4xl 2xl:text-5xl text-text-primary lg:text-left pb-5 lg:pb-10"
  >
    Smilja Igić, dipl. psiholog
  </h1>

  <p>
    Smilja Igić je <strong>psiholog</strong> i <strong>psihoterapeut</strong> sa više od dve decenije iskustva u radu sa
    porodicama, parovima, decom i pojedincima. Posvećena je pružanju podrške u prevazilaženju životnih kriza, jačanju
    porodičnih odnosa i unapređenju mentalnog zdravlja.
  </p>

 <p>
  Studije psihologije završila je na <strong>Filozofskom fakultetu u Novom Sadu</strong>, a nakon toga i četvorogodišnju
  edukaciju iz <strong>sistemske porodične psihoterapije</strong> u okviru Udruženja
  <strong> Centar za porodicu i porodične terapeute CEPTE</strong> u Beogradu. Aktuelno je već drugu godinu
  u <strong>specijalizovanom supervizijskom procesu rada sa traumom</strong>.
</p>


  <p>
    Kroz brojne edukacije u zemlji i inostranstvu, dodatno se usavršavala u oblastima podrške porodicama, parovima i deci,
    kao i u radu sa stručnjacima iz sistema socijalne zaštite i obrazovanja. 
  </p>

  <p>
    Smilja je <strong>trener programa Pozitivnog roditeljstva</strong> i realizator brojnih programa namenjenih stručnjacima
    koji rade sa decom i porodicama. Poseduje <strong>osnovnu i specijalizovane licence</strong> za superviziju i
    psihološko savetovanje, izdate od strane <strong>Komore socijalne zaštite Republike Srbije</strong>.
  </p>
</div>




              {/* Slika desno */}
              <aside className="w-3/4 md:w-[90%] lg:w-3/10 mt-10 lg:mt-0 flex justify-end lg:p-5">
                <ImageSection
                  src="/o_meni_1.jpg"
                  width={500}
                  height={400}
                  alt="Psiholog Smilja Igić u Beogradu – portret"
                  className="w-full h-full object-cover"
                  priority={true}
                />
              </aside>
            </div>
          </section>
        </FadeUp>

        {/* Sekcija 2 - Slika levo */}
        <FadeUp delay={0.4}>
          <section
            className="px-6 bg-background"
            aria-label="Psihoterapija – Smilja Igić"
          >
            <div className="mx-auto md:max-w-[600px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1400px] flex flex-col pt-10 pb-10 lg:flex-row items-center justify-center px-6 md:px-0">
              {/* Slika levo */}
              <aside className="w-3/4 md:w-[90%] lg:w-3/10 lg:mt-0 flex justify-start lg:p-5">
                <ImageSection
                  src="/o_meni_2.jpg"
                  width={500}
                  height={400}
                  alt="Psihoterapija u Beogradu – rad sa decom i roditeljima"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </aside>

              {/* Tekstualni deo */}
            <section className="lg:w-2/3 text-text-primary text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-xl space-y-4 lg:ml-10 mt-10">
  <p>
    Dugogodišnje iskustvo stekla je i kao <strong>savetnik na Roditeljskom telefonu</strong> i 
    <strong> Dečijoj liniji</strong>, pružajući podršku i smernice roditeljima i deci u kriznim situacijama.
  </p>

  <p>
    Njena <strong>psihoterapijska praksa</strong> usmerena je na podršku klijentima u ličnom razvoju, ali i u
    prevazilaženju različitih životnih izazova kao što su razvojne i situacione krize, poremećaji ponašanja,
    traume, gubici i narušeni partnerski odnosi.
  </p>

  <p>
    <strong>Rad sa decom</strong> uvek uključuje i saradnju sa roditeljima, zasnovan je na partnerskom odnosu i
    pridruživanju detetu, uz cilj da se stvori sigurno i podržavajuće okruženje za razvoj i promenu.
  </p>

  <p>
    Više od <strong>dve decenije</strong> ima iskustva u realizaciji <strong>grupnih psihosocijalnih radionica za usvojitelje</strong>,
    kao i u radu sa porodicama sa usvojenom decom, pružajući podršku u procesu prilagođavanja i izgradnje porodičnih veza.
  </p>

  <p className="pb-4">
    Stekavši <strong>međunarodni sertifikat norveške organizacije ATV</strong>, realizovala je brojne
    <strong> grupne psihoterapijske seanse sa počiniocima partnerskog nasilja</strong>, sa ciljem prevencije
    recidiva nasilja i zaštite žena i dece žrtava nasilja.
  </p>
</section>

            </div>
          </section>
        </FadeUp>
      </main>

      <footer>
        <FadeUpStatic>
          <Footer />
        </FadeUpStatic>
      </footer>
    </>
  );
}
