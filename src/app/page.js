import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer.js/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <article className="pt-10 ">
        <div className="text-center p-4 ">
          {/* <p className="text-xl">Zasnovana na ponašanju </p> */}
          <p className=" pt-10 text-3xl">
            Terapija za decu, <br /> tinejdžere i <br />
            njihove porodice.
          </p>

          <h1 className="text-2xl pt-10 italic font-bold ">
            <span>Dipl. Psiholog </span>Smilja Igic
          </h1>
        </div>
        <div className="h-">
          <Image
            src="/Smiljka1.jpg"
            alt="Logo"
            width={3000}
            height={1000}
            className="object-contain bg-[#164e4e] p-5" // 'object-contain' will maintain the aspect ratio of the image.
          />
        </div>

        <p className="text-lg p-4 ">
          <span className="font-bold italic text-xl">Razgovor</span> koji otvara
          perspektive, pokreće i ohrabruje na rešavanje problema je potreban
          savremenom čoveku kako bi uspešno prevladao svakodnevne izazove
          života.
        </p>
        <p className="text-lg p-4 ">
          <span className="font-bold italic text-xl "> Uloge</span> koje živimo
          (roditeljstvo, detinjstvo, partnerstvo, profesionalne pozicije...),
          nameću očekivanja koja mogu biti u neskladu sa ličnom prirodom i
          kreativnim razvojem identiteta.
        </p>
        <div className="h-">
          <Image
            src="/Smiljka1.jpg"
            alt="Logo"
            width={3000}
            height={1000}
            className="object-contain bg-[#164e4e] p-5" // 'object-contain' will maintain the aspect ratio of the image.
          />
        </div>
        <p className="text-lg p-4">
          Značenja koja čovek pridaje{" "}
          <span className="font-bold italic">ključnim pojmovima života </span>
          (ljubav, sreća, uspeh...), duboko određuju osećaj ostvarenosti i
          zadovljstva.
        </p>
        <p className="text-lg p-4">
          Verujem da <span className="italic font-bold">ples</span> terapeuta i
          klijenta vođen stručnim i fokusiranim metodama i tehnikama može
          odgovoriti i na najteže izazove kao što su gubici, traume nasilja,
          lične emotivne krize, narušeni partnerski odnosi ili problemi u
          odrastanju dece.
        </p>
        <div className="h-">
          <Image
            src="/Smiljka1.jpg"
            alt="Logo"
            width={3000}
            height={1000}
            className="object-contain bg-[#164e4e] p-5" // 'object-contain' will maintain the aspect ratio of the image.
          />
        </div>
      </article>
      <Footer />
    </>
  );
}
