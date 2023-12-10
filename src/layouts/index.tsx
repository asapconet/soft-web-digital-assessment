"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import classNames from "classnames";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { ToastContext } from "@/app/context/ToastContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dutiful Test App",
  description: "Built by @asapconet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body className={classNames(inter.className)}>
          <Header />
          <ToastContext />
          {children}
          <Footer />
        </body>
      </QueryClientProvider>
    </html>
  );
}
