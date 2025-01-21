import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import Providers from "@/components/providers";

import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bleeding Edge Next",
  description: "Living on the edge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
