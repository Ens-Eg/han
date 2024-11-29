import "../../styles/bootstrap.min.css";
import "animate.css";
import "../../styles/boxicons.min.css";
import "../../styles/flaticon.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Global styles
import "../../styles/style.css";
import "../../styles/responsive.css";
// Global rtl styles
import "../../styles/rtl.css";
import "./globals.css";

import type { Metadata } from "next";
import { Open_Sans, Dosis } from "next/font/google";
import AosAnimation from "@/components/Layouts/AosAnimation";
import ScrollToTop from "@/components/Layouts/ScrollToTop";

// For all body text font
const open_sans = Open_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

// For all heading font
const dosis = Dosis({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
  variable: "--font-dosis",
  display: "swap",
});

export const metadata: Metadata = {
  title: "الهندسية لصيانة الاجهزة المنزلية",
  description: "وصف",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${open_sans.variable} ${dosis.variable}`}>

<link href="https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@100..900&display=swap" rel="stylesheet"></link>
      <body>
        {children}

        <AosAnimation />

        <ScrollToTop />
      </body>
    </html>
  );
}
