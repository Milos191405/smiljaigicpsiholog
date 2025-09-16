import { Raleway } from 'next/font/google';  // Import the correct font
import "./globals.css";

// Define font styles
const raleway = Raleway({
  subsets: ['latin'], // You can add other subsets like 'latin-ext' if needed
  weights: [100, 300, 400, 500, 600, 700], // Add weights as necessary
  display: 'swap',  // Add display swap for better rendering
});

const geistMono = Raleway({  // Correct the font reference to Raleway, not Railway
  subsets: ['latin'],
  variable: '--font-geist-mono', // This sets the custom CSS variable
  display: 'swap',
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
        className={`antialiased ${raleway.variable} ${geistMono.variable}`} // Add correct font classes
        style={{
          fontFamily: `var(--font-sans), sans-serif`,
        }}
      >
        {children}
      </body>
    </html>
  );
}
