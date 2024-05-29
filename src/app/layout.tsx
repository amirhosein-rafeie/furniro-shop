import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import SessionProvider from "~/app/components/SessionProvider";
import StoreProvider from "./lib/StoreProvider";

// react-slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      <body className={`${inter.variable} ${montserrat.variable}`}>
        <StoreProvider>
          <SessionProvider>{children}</SessionProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
