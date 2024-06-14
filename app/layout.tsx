import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { SessionProvider } from "next-auth/react";
import { Suspense } from "react";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Modal from "@/components/modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextBook",
  description: "Generated by Bobo from Telega",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <Header />
          <Suspense>
            <Modal />
          </Suspense>
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
