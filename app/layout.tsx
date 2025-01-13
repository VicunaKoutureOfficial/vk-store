import { Urbanist } from "next/font/google";

import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import "./globals.css";
import Salebar from "@/components/salebar";
import { Hero } from "@/components/hero";
import Faqsection from "@/components/faqsection";
import { Fashion } from "@/components/fashion";
import Marquee from "@/components/marquee";
import CreativeHubs from "@/components/creative-hubs";
import {
  ClerkProvider,
} from '@clerk/nextjs'

const font = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Vicuna Kouture",
  description: "Vicuna Kouture - The place for all your purchases.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <html lang="en" className=" !scroll-smooth scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-[#76287E] scrollbar-track-[#000000]">
      <body className={font.className}>
        <ToastProvider />
        <ModalProvider />
        {/* <Salebar /> */}
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
    </ClerkProvider>
  );
}
