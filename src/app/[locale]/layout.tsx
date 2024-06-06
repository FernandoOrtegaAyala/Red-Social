import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "./globals.css";

import { unstable_setRequestLocale } from "next-intl/server";

import { ThemeProvider } from "@/components/theme-provider";

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

const locales = ["en", "es"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: "es" | "en" };
}) {
  unstable_setRequestLocale(params.locale);
  return (
    <html lang={params.locale}>
      <body className={roboto.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
