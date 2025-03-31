"use client";

import { useState, useEffect } from "react";
import quotes from "@/src/data/quotes.json";

function RandomQuote() {
  const getRandomQuote = () => 
    quotes.length > 0
      ? quotes[Math.floor(Math.random() * quotes.length)]
      : { text: "Psihoterapija je put do samorazumevanja.", author: "Nepoznat autor" };

  const [randomQuote, setRandomQuote] = useState(getRandomQuote);

  useEffect(() => {
    setRandomQuote(getRandomQuote());
  }, []);

  return (
    <div className="p-4 text-center">
      <p className="italic font-semibold">{`"${randomQuote.text}"`}</p>
      <p className="italic">{randomQuote.author}</p>
    </div>
  );
}

export default RandomQuote;
