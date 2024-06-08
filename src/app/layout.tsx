import type { Metadata } from "next";
import { Inter, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import SessionProvider from "~/components/SessionProvider";
import StoreProvider from "../lib/StoreProvider";

// react-slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "~/components/NavBar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const popins = Poppins({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-popins",
});

export const metadata: Metadata = {
  title: "Furniro",
  description: "Created by Amirhosein Rafeie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.svg" type="image/svg" sizes="52" />
      <body
        className={`${inter.variable} ${montserrat.variable} ${popins.variable}`}
      >
        <StoreProvider>
          <SessionProvider>
            <div className="container mx-auto">
              <NavBar />
              {children}
            </div>
          </SessionProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
