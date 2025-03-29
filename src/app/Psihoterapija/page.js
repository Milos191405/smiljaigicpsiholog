import Navbar from "@/components/Navbar"
import ImageComponent from "@/components/ImageComponent"

function Psihoterapija() {
  return (
   <>
   <Navbar />
   <article className="pt-20">
   
   <ImageComponent
            src="/Smiljka1.jpg"
            alt="Smilja Igic vas psiholog"
            className="lg:w-1/3"
          />
   
   <p className="p-4">
          Dobar terapeut ne zna šta je najbolje za klijenta. To se znanje nalazi
          u osobi koja dolazi na terapiju i ona uz pomoć terapeuta, otkriva
          sopstvene snage za rešavanje životnih kriza. 
        </p>

        <p className="p-4">
        Specifičnost sistemskog
          pristupa u radu, a koji kao terapeut zastupam, podrazumeva da
          terapijski rad sa klijentom dovodi do promena i kod bliskih osoba sa
          kojima je klijent u interakcijama (osobe koje su deo njegovog životnog
          sistema). Na ovaj način se efekti psihoterapije prenose na čitav
          životni kontekst klijenta.
        </p>
        
   </article>

   </>
  )
}

export default Psihoterapija