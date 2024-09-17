import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Filip Płócienniczak",
  description:
    "Niezależny ekspert kredytowy. Jeśli szukasz finansowania nieruchomości lub planujesz budować dom - jesteś w dobrym miejscu",
  openGraph: {
    title: "Filip Płócienniczak",
    description:
      "Niezależny ekspert kredytowy. Jeśli szukasz finansowania nieruchomości lub planujesz budować dom - jesteś w dobrym miejscu",
    images: "/og-image.png",
    type: "website",
    url: "https://filipplocienniczak.pl",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
