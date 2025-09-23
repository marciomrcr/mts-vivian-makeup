import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Viviane Studio - Hair Style & Make Up Premium",
  description:
    "Estúdio especializado em Hair Style e Make Up de alto padrão. Transformamos sua beleza com técnicas avançadas e produtos exclusivos. Agende sua consulta.",
  keywords:
    "hair style, make up, maquiagem, cabelo, beleza, estúdio, São Paulo, premium, produtos exclusivos",
  authors: [{ name: "Viviane Studio" }],
  openGraph: {
    title: "Viviane Studio - Hair Style & Make Up Premium",
    description:
      "Transformamos sua beleza com técnicas avançadas e produtos exclusivos",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Viviane Studio - Hair Style & Make Up Premium",
    description:
      "Transformamos sua beleza com técnicas avançadas e produtos exclusivos",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${playfairDisplay.variable} antialiased font-sans`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
