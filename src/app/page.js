import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageComponent from "@/components/ImageComponent";
import TextComponentHome from "@/components/TextComponentHome";
import Link from "next/link";

import "@fortawesome/fontawesome-svg-core/styles.css"; // Import FontAwesome styles globally
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Prevent automatic addition of CSS

export default function Home() {
  return (
    <>
      <Navbar />
      <article className="pt-10 md:max-w-[700px] md:mx-auto lg:pt-24 lg:max-w-[1000px] xl:max-w-[1500px]">
        <div className="text-center p-4  ">
          {/* <p className="text-xl">Zasnovana na ponašanju </p> */}
          <p className=" pt-10 text-lg md:text-2xl lg:text-3xl ">
            Terapija za decu,{" "}
            <br
              className="
           hidden lg:hidden"
            />{" "}
            tinejdžere i <br className="hidden" />
            njihove porodice.
          </p>
          <Link href={"/O_meni"}>
            <h1 className="text-xl pt-10 italic  md:text-2xl lg:text-3xl lg:py-10  ">
              <span>Dipl. Psiholog </span>Smilja Igic
            </h1>
          </Link>
        </div>

        <div className=" lg:flex lg:justify-between pb-10">
          {/* First Image */}
          <ImageComponent
            src="/Smiljka1.jpg"
            alt="Smilja Igic vas psiholog"
            className="lg:w-1/3 object-contain"
          />
          <div className=" lg:flex lg:flex-col lg:w-1/2 lg:justify-center">
            {" "}
            <TextComponentHome className="">
              <span className="font-bold italic text-xl">Razgovor</span> koji
              otvara perspektive, pokreće i ohrabruje na rešavanje problema je
              potreban savremenom čoveku kako bi uspešno prevladao svakodnevne
              izazove života.
            </TextComponentHome>
            <TextComponentHome className="">
              <span className="font-bold italic text-xl "> Uloge</span> koje
              živimo (roditeljstvo, detinjstvo, partnerstvo, profesionalne
              pozicije...), nameću očekivanja koja mogu biti u neskladu sa
              ličnom prirodom i kreativnim razvojem identiteta.
            </TextComponentHome>
          </div>
        </div>

        {/* Second Image */}
        <div className="lg:flex flex-row-reverse lg:lg:justify-between pb-10">
          <ImageComponent
            src="/Smiljka3.jpg"
            alt="Smilja Igic vas psiholog"
            className="lg:w-1/3 object-contain"
          />
          <div className=" lg:flex flex-col lg:w-1/2 justify-center">
            <TextComponentHome>
              <span className="font-bold italic">Ljubav, sreća, uspeh</span> su
              samo neki od ključnih pojmova života kojima ljudi pridaju
              značenje, a koji duboko određuju osećaj ostvarenosti i
              zadovljstva.
            </TextComponentHome>
            <TextComponentHome>
              <span className="italic font-bold">Ples</span> terapeuta i
              klijenta vođen stručnim i fokusiranim metodama i tehnikama može
              odgovoriti i na najteže izazove kao što su gubici, traume nasilja,
              lične emotivne krize, narušeni partnerski odnosi ili problemi u
              odrastanju dece.
            </TextComponentHome>
          </div>
        </div>
       
      </article>

      <Footer />
    </>
  );
}
