import type React from "react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Metrik Rehber - Premium Eğitim Kursları",
  description:
    "Metrik Rehber olarak sizlere, bilgi çağının tekniklerini etkin bir şekilde kullanarak hedef odaklı yenilikçi bir online eğitim platformu sunuyoruz. Dijital defter uygulaması sayesinde paketlere dahil grafik tabletler ile notlarınızı alabilecek, istediğiniz zaman bu notlarla çalışabileceksiniz. İnteraktif ödev etütleri sayesinde çalışmalarınıza eşlik ederek başarınızı garanti altına alıyoruz.",
  generator: "ynsemre1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} ${poppins.variable} font-inter`}>
        {children}
      </body>
    </html>
  );
}
