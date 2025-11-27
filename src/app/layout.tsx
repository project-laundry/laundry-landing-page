import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NooraCare - Din hverdag, lysere og lettere",
  description: "Mer tid til det som betyr noe. NooraCare håndterer vasken for travle familier i Bergen og Oslo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body>{children}</body>
    </html>
  );
}
