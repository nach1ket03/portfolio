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
  title: "Nachiket — Full Stack Developer",
  description:
    "Full-Stack Developer & AI Engineer. Building polished web products with modern tech. Founder of Brink Co. Based in Pune, India.",
  keywords: ["Nachiket", "Full Stack Developer", "Next.js", "React", "MERN", "AI Engineer", "Portfolio", "Pune"],
  authors: [{ name: "Nachiket" }],
  openGraph: {
    title: "Nachiket — Full Stack Developer",
    description: "Full-Stack Developer & AI Engineer building polished web products.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
