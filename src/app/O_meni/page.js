import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer.js/page'

function O_meni() {
  return (
    <>
    <Navbar />
    <article className='pt-20'>
      <p className='text-lg px-4 pb-4 '>
    <span className="font-bold italic">Psiholog</span> i <span className="font-bold italic">psihoterapeut</span> sa preko 23 godina iskustva u radu iz oblasti porodičnih odnosa, najviše iz
okvira socijalne zaštite- razvoda, delinkvencije...</p>

<div className="">
          <Image
            src="/Smiljka 2.jpg"
            alt="Logo"
            width={3000}
            height={1000}
            className=" px-20 pb-4" 
          />
        </div>

<p className='text-lg p-4'> Posebne specijalizacije završila je u oblasti
porodičnog i partnerskog nasilja, kao i rada sa decom sa problemima u ponašanju. Značajno iskustvo
je stekla u radu kao savetnik na roditeljskom telefonu i dečijoj liniji.</p>

<p className='text-lg p-4'> Višegodišnja psihoterapijska
praksa sistemske porodične psihoterapije najviše je usmerena na pomoć u izazovima narušenih
partnerskih odnosa, roditeljstva, emotivnih gubitaka. Poslednje dve godine u edukaciji iz oblasti rada
sa traumom kod dece i odraslih.</p>
    </article>
    <Footer />

    </>
  )
}

export default O_meni