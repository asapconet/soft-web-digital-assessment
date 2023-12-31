import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header";
import Providers from "@/app/Providers";
import Footer from "@/components/Footer";
import { ToastContext } from "./context/ToastContext";
import QueryProvider from "@/Providers/QueryProvider";

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
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        <ToastContext />
          <QueryProvider>{children}</QueryProvider>
        </Providers>
      </body>
    </html>
  );
}
