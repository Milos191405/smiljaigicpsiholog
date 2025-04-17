"use client";

import { useState, useEffect } from "react";
import quotes from "@/src/data/quotes.json";

function RandomQuote() {
  const [randomQuote, setRandomQuote] = useState(null);

  useEffect(() => {
    const getRandomQuote = () =>
      quotes.length > 0
        ? quotes[Math.floor(Math.random() * quotes.length)]
        : { text: "Psihoterapija je put do samorazumevanja.", author: "" };

    setRandomQuote(getRandomQuote());
  }, []);

  if (!randomQuote) return null;

  return (
    <div className="w-full bg-text-primary text-background ">
    <div className=" p-4  text-center  md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl  ">
      <p className=" italic font-semibold pb-4">{`"${randomQuote.text}"`}</p>
      {randomQuote.author && randomQuote.author !== "Nepoznati autor" && (
        <p className=" italic text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">{randomQuote.author}</p>
      )}
    </div>
    </div>
  );
}

export default RandomQuote;
