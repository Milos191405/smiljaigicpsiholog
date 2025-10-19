"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import RandomQuote from "@/components/RandomQuote";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp"; // import FadeUp

export default function Kontakt() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formspreeURL = "https://formspree.io/f/xrbkeeaq"; // formspree URL

    try {
      const response = await fetch(formspreeURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Poruka je uspešno poslata. Javiću Vam se uskoro.");
        setFormData({ firstname: "", lastname: "", email: "", subject: "" });
      } else {
        setStatus("Došlo je do greške. Molimo pokušajte ponovo.");
      }
    } catch {
      setStatus("Došlo je do greške. Molimo pokušajte ponovo.");
    }
  };

  return (
    <>
      <Navbar />

      <main className="pt-[80px] lg:pt-[100px]">
        {/* Quote sa fade */}
        <FadeUp delay={0}>
          <section>
            <RandomQuote />
          </section>
        </FadeUp>

        {/* Naslov */}
        <FadeUp delay={0.2}>
          <section className="bg-background-secondary">
            <h1 className="text-center text-xl md:text-2xl font-bold py-8">
              Kontakt
            </h1>
          </section>
        </FadeUp>

        {/* Motivacioni tekst */}
        <FadeUp delay={0.4}>
          <section className="py-6 px-4 text-center text-lg md:text-xl mx-auto font-semibold">
            <p>Briga o sebi počinje malim koracima.</p>
            <p>Ovaj može biti prvi.</p>
          </section>
        </FadeUp>

        {/* Forma */}
        <FadeUp delay={0.6}>
          <section className="px-4 pb-10 mx-auto md:w-2/3 lg:w-1/2 xl:w-1/3">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col space-y-4 p-6 border border-foreground rounded-lg shadow-md bg-background text-foreground"
              aria-label="Kontakt forma"
            >
              <div>
                <label htmlFor="firstname" className="font-medium block mb-1">
                  Ime
                </label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  placeholder="Unesite vaše ime..."
                  className="w-full border border-foreground rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-foreground"
                  required
                />
              </div>

              <div>
                <label htmlFor="lastname" className="font-medium block mb-1">
                  Prezime
                </label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="Unesite vaše prezime..."
                  className="w-full border border-foreground rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-foreground"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="font-medium block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Unesite vašu email adresu..."
                  className="w-full border border-foreground rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-foreground"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="font-medium block mb-1">
                  Poruka
                </label>
                <textarea
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Recite mi šta vas muči..."
                  className="w-full border border-foreground rounded-md p-2 h-32 focus:outline-none focus:ring-2 focus:ring-foreground"
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-text-primary text-background border-2 font-semibold py-2 px-8 rounded-full shadow-lg hover:bg-text-secondary hover:text-background transition duration-300"
                >
                  Pošalji
                </button>
              </div>

              {status && (
                <p className="mt-4 text-center text-sm font-medium text-muted-foreground">
                  {status}
                </p>
              )}
            </form>
          </section>
        </FadeUp>

        <Footer />
      </main>
    </>
  );
}
