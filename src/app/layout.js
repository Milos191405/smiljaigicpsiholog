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
  title: "Psiholog Smilja Igic",
  description: "Psiholog za decu, tinejdžere i njihove porodice",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${raleway.variable} ${geistMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
