import { Raleway } from 'next/font/google';
import "./globals.css";


const raleway = Raleway({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-sans', 
});


const geistMono = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-geist-mono',
});

export const metadata = {
  title: "Psiholog Smilja Igic – Terapija za decu i tinejdžere u Beogradu",
  description: "Dipl. psiholog Smilja Igic pruža podršku deci, tinejdžerima i porodicama u Beogradu. Individualni i porodični tretmani, profesionalna terapija.",
};


export default function RootLayout({ children }) {
  // Ovo filtrira greške iz Chrome ekstenzija i React hydration mismatch
  if (typeof window !== "undefined") {
    const originalError = console.error;
    console.error = (...args) => {
      if (
        args.some(
          a =>
            typeof a === "string" &&
            (a.includes("chrome-extension://") || a.includes("hydration"))
        )
      ) {
        return; // Ignoriši ove greške
      }
      originalError(...args);
    };
  }

  return (
    <html lang="en">
      <body className={`antialiased ${raleway.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
