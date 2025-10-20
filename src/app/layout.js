import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata = {
  title: "Psiholog Smilja Igić – Terapija za decu i tinejdžere u Beogradu",
  description:
    "Dipl. psiholog Smilja Igić pruža podršku deci, tinejdžerima i porodicama u Beogradu. Individualni i porodični tretmani, profesionalna terapija.",
  metadataBase: new URL("https://smiljaigicpsiholog.com"),
  openGraph: {
    title: "Psiholog Smilja Igić – Terapija u Beogradu",
    description:
      "Stručna psihološka podrška za decu, tinejdžere i porodice u Beogradu.",
    url: "https://smiljaigicpsiholog.com",
    siteName: "Smilja Igić Psiholog",
    locale: "sr_RS",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <head>
        {/* ✅ schema.org JSON-LD SEO markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Psychologist",
              name: "Smilja Igić",
              url: "https://smiljaigicpsiholog.com",
              description:
                "Dipl. psiholog Smilja Igić – terapija za decu, tinejdžere i porodice u Beogradu.",
            }),
          }}
        />
      </head>
      <body className={`antialiased ${raleway.variable}`}>
        {children}
      </body>
    </html>
  );
}