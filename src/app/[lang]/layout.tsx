import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "./globals.css";

import { i18n, Locale } from "@/i18n.config";

import { ThemeProvider } from "@/components/theme-provider";

import SessionAuthProvider from "./providers";

const roboto = Roboto({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Red Social | Fernando Ortega | Proyecto",
  description:
    "Proyecto de Desarrollador Web FullStack con React, Nodejs y SQL",
  icons: {
    icon: ["favicon.ico"],
    apple: ["apple-touch-icon.png?v=4"],
    shortcut: ["apple-touch-icon.png"],
  },
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body className={roboto.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <SessionAuthProvider>{children}</SessionAuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
