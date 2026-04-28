import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const horrorFont = localFont({ src: "./fonts/horror.ttf", variable: "--font-horror" });
const b2tfFont = localFont({ src: "./fonts/b2tf.otf", variable: "--font-b2tf" });
const westernFont = localFont({ src: "./fonts/nashville.ttf", variable: "--font-western" });
const groovyFont = localFont({ src: "./fonts/groovy.ttf", variable: "--font-groovy" });
const bladeFont = localFont({ src: "./fonts/blade.ttf", variable: "--font-blade" });
const t2Font = localFont({ src: "./fonts/t2.ttf", variable: "--font-t2" });
const fightFont = localFont({ src: "./fonts/fightclub2.ttf", variable: "--font-fight" });
const fadedFont = localFont({ src: "./fonts/faded2.ttf", variable: "--font-faded" });

export const metadata: Metadata = {
  title: "TAPEWRM - VHS Collection Cataloger with Spine Recognition",
  description: "Upload photos of VHS shelves or stacks and automatically extract spine titles using computer vision. Review unrecognized tapes and improve future training."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${horrorFont.variable} ${b2tfFont.variable} ${westernFont.variable} ${groovyFont.variable} ${bladeFont.variable} ${t2Font.variable} ${fightFont.variable} ${fadedFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
