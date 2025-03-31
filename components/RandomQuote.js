'use client'

import { useState, useEffect } from "react";
import quotes from "@/src/data/quotes.json";

function RandomQuote() {
  const [randomQuote, setRandomQuote] = useState({
    text: "",
    author: "",
  });

  const getRandomQuote = () => {
    if (quotes.length > 0) {
      return quotes[Math.floor(Math.random() * quotes.length)];
    }
    return {
      text: "Psihoterapija je put do samorazumevanja.",
      author: "Nepoznat autor",
    };
  };

  useEffect(() => {
    setRandomQuote(getRandomQuote());
  }, []);

  return (
    <div className="p-4 text-center">
      <p className="italic font-semibold">"{randomQuote.text}"</p>
      <p className="italic">{randomQuote.author}</p>
    </div>
  );
}

export default RandomQuote;