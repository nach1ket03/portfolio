import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nachiket — Full Stack Developer",
  description:
    "Full-Stack Developer & College Student. Building polished web products with modern tech. Founder of Brink Co. Based in Pune, India.",
  keywords: ["Nachiket", "Full Stack Developer", "Next.js", "React", "MERN", "Portfolio", "Pune"],
  authors: [{ name: "Nachiket" }],
  openGraph: {
    title: "Nachiket — Full Stack Developer",
    description: "Full-Stack Developer & College Student building polished web products.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
