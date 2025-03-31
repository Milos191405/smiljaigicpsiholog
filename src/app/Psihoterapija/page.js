import Navbar from "@/components/Navbar";
import ImageComponent from "@/components/ImageComponent";
import RandomQuote from "@/components/RandomQuote";


function Psihoterapija() {
 
  return (
    <>
      <Navbar />

      
      <article className="pt-20 md:max-w-[700px] md:mx-auto lg:pt-24 lg:max-w-[1000px] xl:max-w-[1500px]">

       <RandomQuote />
        {/* Image Section */}
        <ImageComponent
          src="/Smiljka1.jpg"
          alt="Smilja Igic - Vaš psiholog"
          className="lg:w-1/3"
        />

       

        {/* Main Content */}
        <p className="p-4">
          Dobar terapeut ne zna šta je najbolje za klijenta. To se znanje nalazi
          u osobi koja dolazi na terapiju i ona uz pomoć terapeuta, otkriva
          sopstvene snage za rešavanje životnih kriza.
        </p>

        <p className="p-4">
          Specifičnost sistemskog pristupa u radu, a koji kao terapeut zastupam,
          podrazumeva da terapijski rad sa klijentom dovodi do promena i kod
          bliskih osoba sa kojima je klijent u interakcijama (osobe koje su deo
          njegovog životnog sistema). Na ovaj način se efekti psihoterapije
          prenose na čitav životni kontekst klijenta.
        </p>

        {/* Services List */}
        <div className="px-2">
          <p className="pb-2 italic font-semibold">
            Vrste terapeutskih usluga koje pružam:
          </p>
          <ul className="px-8 list-disc">
            <li>Individualna psihoterapija</li>
            <li>Psihološko savetovanje</li>
            <li>Porodična psihoterapija</li>
            <li>Bračna i psihoterapija parova</li>
            <li>Dečija psihoterapija</li>
            <li>Online savetovanje</li>
            <li>Individualno savetovanje</li>
            <li>Savetodavni rad sa decom i adolescentima</li>
            <li>Porodično savetovanje</li>
          </ul>
        </div>
      </article>
    </>
  );
}

export default Psihoterapija;
