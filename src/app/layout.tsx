import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gustavo Martins | AI Automation Developer",
  description:
    "AI Automation Developer portfolio. Building intelligent automation solutions.",
  metadataBase: new URL("https://gustavohv.dev"),
  keywords: [
    "developer",
    "portfolio",
    "AI automation",
    "n8n",
    "software engineer",
    "intelligent automation",
    "workflow automation",
    "productivity tools",
    "AI solutions",
    "automation developer",
  ],
  creator: "Gustavo Martins",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
