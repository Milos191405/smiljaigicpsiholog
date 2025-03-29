import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Define font styles
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata = {
  title: "Psiholog Smilja Igic",
  description: "Psiholog za decu, tinejdzere i njihove porodice",
};

// RootLayout component
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${geistSans.variable} ${geistMono.variable}`}
        style={{
          fontFamily: `var(--font-geist-sans), sans-serif`, // Apply geistSans by default
        }}
      >
        {children}
      </body>
    </html>
  );
}
