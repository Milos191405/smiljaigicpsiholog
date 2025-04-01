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
    <div className="p-4 py-10 text-center w-full md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
      <p className=" italic font-semibold pb-4">{`"${randomQuote.text}"`}</p>
      {randomQuote.author && randomQuote.author !== "Nepoznati autor" && (
        <p className=" italic">{randomQuote.author}</p>
      )}
    </div>
  );
}

export default RandomQuote;
