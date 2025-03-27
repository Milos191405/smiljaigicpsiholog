import React from 'react'

function odbaceneOpcije() {
  return (
    <>
    {/* druga varijanta */}

    <div className=" lg:flex pb-10 ">
          
          <ImageComponent
            src="/Smiljka1.jpg"
            alt="Smilja Igic vas psiholog"
            className="lg:w-[300px]  object-containe"
          />
          <div className=" lg:flex lg:flex-col lg:w-1/2 lg:justify-center">
            {" "}
            <TextComponentHome className="">
              <span className="font-bold italic text-xl">Razgovor</span> koji
              otvara perspektive, pokreće i ohrabruje na rešavanje problema je
              potreban savremenom čoveku kako bi uspešno prevladao svakodnevne
              izazove života.
            </TextComponentHome>
          
          </div>
        </div>

        <div className=" lg:flex lg:left-20 pb-10">
          
          <ImageComponent
            src="/Smiljka3.jpg"
            alt="Smilja Igic vas psiholog"
            className="lg:w-1/5 relative left-40"
          />
          <div className=" lg:flex lg:flex-col lg:w-1/2 lg:justify-center">
            {" "}
           
             <TextComponentHome className="relative left-40">
              <span className="font-bold italic text-xl "> Uloge</span> koje
              živimo (roditeljstvo, detinjstvo, partnerstvo, profesionalne
              pozicije...), nameću očekivanja koja mogu biti u neskladu sa
              ličnom prirodom i kreativnim razvojem identiteta.
            </TextComponentHome>
          </div>
        </div>

        <div className=" lg:flex lg:left-20 pb-10 relative ">
          
          <ImageComponent
            src="/Smiljka4.jpg"
            alt="Smilja Igic vas psiholog"
            className="lg:w-1/5 relative left-40"
          />
          <div className=" lg:flex lg:flex-col lg:w-1/2 lg:justify-center">
            {" "}
           
             <TextComponentHome className="relative left-40">
             <span className="font-bold italic">Ljubav, sreća, uspeh</span> su
              samo neki od ključnih pojmova života kojima ljudi pridaju
              značenje, a koji duboko određuju osećaj ostvarenosti i
              zadovljstva.
            </TextComponentHome>
          </div>
        </div> </>
  )
}

export default odbaceneOpcije

        