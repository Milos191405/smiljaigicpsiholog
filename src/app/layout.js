import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata = {
  titleTemplate: "%s | Psiholog Smilja Igić",
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
    images: [
      {
        url: "https://smiljaigicpsiholog.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Psiholog Smilja Igić",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psiholog Smilja Igić – Terapija u Beogradu",
    description:
      "Stručna psihološka podrška za decu, tinejdžere i porodice u Beogradu.",
    images: ["https://smiljaigicpsiholog.com/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <head>
        {/* Preconnect za brži load fontova */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* JSON-LD Schema.org markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Psychologist",
              name: "Smilja Igić",
              url: "https://smiljaigicpsiholog.com",
              image: "https://smiljaigicpsiholog.com/profile.jpg",
              description:
                "Dipl. psiholog Smilja Igić – terapija za decu, tinejdžere i porodice u Beogradu.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "",
                addressLocality: "Beograd",
                addressRegion: "Beograd",
                postalCode: "11000",
                addressCountry: "RS",
              },
              telephone: "+381601234567",
              email: "kontakt@smiljaigicpsiholog.com",
            }),
          }}
        />
      </head>
      <body className={`antialiased ${raleway.variable}`}>{children}</body>
    </html>
  );
}
