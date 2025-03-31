"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import RandomQuote from "@/components/RandomQuote";

function Kontakt() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    subject: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Poruka poslata!");
    setFormData({ firstname: "", lastname: "", subject: "" });
  };

  return (
    <>
      <Navbar />
      <article className="pt-20 px-4 md:max-w-xl md:mx-auto lg:max-w-2xl">
        <RandomQuote />
        <h1 className="text-center text-2xl font-bold py-6">Kontakt</h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 p-4 border border-foreground rounded-lg shadow-md text-foreground bg-background"
        >
          <label htmlFor="firstname" className="font-medium">
            Ime
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            placeholder="Unesite vaše ime..."
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <label htmlFor="lastname" className="font-medium">
            Prezime
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Unesite vaše prezime..."
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <label htmlFor="subject" className="font-medium">
            Tema
          </label>
          <textarea
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Recite mi šta vas muči..."
            className="border border-gray-300 rounded-md p-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-foreground text-background font-semibold py-2 rounded-md hover:text-orange-300 transition duration-300"
          >
            Pošalji
          </button>
        </form>
      </article>
    </>
  );
}

export default Kontakt;
