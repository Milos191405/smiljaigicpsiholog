import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <article className="mt-[140px]">
        <div className="text-center p-4 " > 
          {/* <p className="text-xl">Zasnovana na ponašanju </p> */}
          <p className=" pt-10 text-4xl">
            Terapija za decu, <br/> tinejdžere i  <br/>njihove porodice.
          </p>
          
          <h1 className="text-2xl pt-10"><span>Dipl. Psiholog </span>Smilja Igic</h1>
        </div>
        <Image
          src="/Smiljka 1.jpg" 
          alt="Logo"
          width={50000}
          height={8}
          className="w-full p-20 "
        />
        <p className="px-20 pb-5">Razgovor koji otvara perspektive, pokreće i ohrabruje na rešavanje problema je potreban
savremenom čoveku kako bi uspešno prevladao svakodnevne izazove života. Uloge koje živimo
(roditeljstvo, detinjstvo, partnerstvo, profesionalne pozicije...), nameću očekivanja koja mogu biti u
neskladu sa ličnom prirodom i kreativnim razvojem identiteta.</p>
        <Image
          src="/Smiljka 1.jpg" 
          alt="Logo"
          width={500}
          height={30}
          className="w-full p-20 "
        />
        <p className="px-20 pb-5">
        Značenja koja čovek pridaje ključnim
pojmovima života (ljubav, sreća, uspeh...), duboko određuju osećaj ostvarenosti i zadovljstva.
Verujem da &quot;ples&quot; terapeuta i klijenta vođen stručnim i fokusiranim metodama i tehnikama može
odgovoriti i na najteže izazove kao što su gubici, traume nasilja, lične emotivne krize, narušeni
partnerski odnosi ili problemi u odrastanju dece.
        </p>
      </article>
    </>
  );
}
