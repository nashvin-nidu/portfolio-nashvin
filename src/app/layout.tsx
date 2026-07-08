import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nashvin Nidu  Full-Stack Developer",
  description:
    "Full-stack developer from Kerala, India. I build fast, reliable products for the web — multi-tenant platforms, offline-first tools and automation pipelines.",
  keywords: [
    "Nashvin Nidu",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Kerala",
  ],
  openGraph: {
    title: "Nashvin Nidu Full-Stack Developer",
    description:
      "Full-stack developer building fast, reliable products for the web.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="grain min-h-full flex flex-col">{children}</body>
    </html>
  );
}
