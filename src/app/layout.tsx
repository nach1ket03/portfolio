import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Nachiket — MERN Developer & AI Builder",
  description:
    "Nachiket — MERN stack developer & AI tools builder. Founder of Brink Co. Open to internships & freelance. Based in Pune, India.",
  authors: [{ name: "Nachiket Chole" }],
  openGraph: {
    title: "Nachiket — MERN Developer & AI Builder",
    description:
      "MERN stack developer & AI tools builder. Founder of Brink Co. Open to internships & freelance. Based in Pune, India.",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nachiket — MERN Developer & AI Builder",
    description:
      "MERN stack developer & AI tools builder. Founder of Brink Co. Open to internships & freelance. Based in Pune, India.",
    images: ["/og-image.png"],
    creator: "@nach1ket03",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
