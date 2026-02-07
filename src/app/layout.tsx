"use client";
import "./globals.css";
import Header from "@/components/header/Header";
import { motion } from "framer-motion";
import { Teko, Montserrat } from "next/font/google";

const teko = Teko({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-teko", // This matches the config above
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat", // This matches the config above
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${teko.variable} ${montserrat.variable}`}>
      <body
        className="bg-black text-white antialiased font-montserrat relative"
      >
        {/* --- Background Decorative Glows --- */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div 
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-600/20 blur-[120px]" 
          />
          <motion.div 
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-600/15 blur-[120px]" 
          />
          <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-emerald-500/10 blur-[100px]" />
        </div>
        
        <Header />
        {children}
      </body>
    </html>
  );
}
