import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageComponent from "@/components/ImageComponent";
import TextComponentHome from "@/components/TextComponentHome";

export default function Home() {
  return (
    <>
      <Navbar />
      <article className="pt-10 md:max-w-[680px] border border-red-600 md:mx-auto">
        <div className="text-center p-4 ">
          {/* <p className="text-xl">Zasnovana na ponašanju </p> */}
          <p className=" pt-10 text-3xl md:text-4xl ">
            Terapija za decu, <br /> tinejdžere i <br />
            njihove porodice.
          </p>

          <h1 className="text-2xl pt-10 italic font-bold md:text-3xl ">
            <span>Dipl. Psiholog </span>Smilja Igic
          </h1>
        </div>

        {/* First Image */}
        <ImageComponent src="/Smiljka1.jpg" alt="Smilja Igic vas psiholog" />

        <TextComponentHome>
          <span className="font-bold italic text-xl">Razgovor</span> koji otvara
          perspektive, pokreće i ohrabruje na rešavanje problema je potreban
          savremenom čoveku kako bi uspešno prevladao svakodnevne izazove
          života.
        </TextComponentHome>

        <TextComponentHome>
          <span className="font-bold italic text-xl "> Uloge</span> koje živimo
          (roditeljstvo, detinjstvo, partnerstvo, profesionalne pozicije...),
          nameću očekivanja koja mogu biti u neskladu sa ličnom prirodom i
          kreativnim razvojem identiteta.
        </TextComponentHome>

        {/* Second Image */}
        <ImageComponent src="/Smiljka1.jpg" alt="Smilja Igic vas psiholog" />

        <TextComponentHome>
          <span className="font-bold italic">Ljubav, sreća, uspeh</span> su samo
          neki od ključnih pojmova života kojima ljudi pridaju značenje, a koji
          duboko određuju osećaj ostvarenosti i zadovljstva.
        </TextComponentHome>

        <TextComponentHome>
          <span className="italic font-bold">Ples</span> terapeuta i
          klijenta vođen stručnim i fokusiranim metodama i tehnikama može
          odgovoriti i na najteže izazove kao što su gubici, traume nasilja,
          lične emotivne krize, narušeni partnerski odnosi ili problemi u
          odrastanju dece.
        </TextComponentHome>

        {/* Third Image */}
        <ImageComponent src="/Smiljka2.jpg" alt="Smilja Igic vas psiholog" />
      </article>
      <Footer />
    </>
  );
}
