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
    <div className=" py-4  text-center text-sm  md:text-sm lg:text-md xl:text-lg 2xl:text-xl mx-auto md:max-w-[600px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1800px]">
      <p className=" italic font-semibold pb-4">{`"${randomQuote.text}"`}</p>
      {randomQuote.author && randomQuote.author !== "Nepoznati autor" && (
        <p className="italic text-sm md:text-sm lg:text-md xl:text-lg 2xl:text-xl">{randomQuote.author}</p>
      )}
    </div>
    </div>
  );
}

export default RandomQuote;
