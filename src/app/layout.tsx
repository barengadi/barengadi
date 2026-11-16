import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bareng Adi | Kelas Privat Visit Home AI & Automasi Bisnis Medan",
  description:
    "Bimbingan privat tatap muka 1-on-1 langsung di rumah atau kantor Anda di Medan. Kuasai implementasi AI dan tools praktis untuk pekerjaan dan bisnis.",
  icons: {
    icon: "/logo-aiba.png",
    shortcut: "/logo-aiba.png",
    apple: "/logo-aiba.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="min-h-screen bg-white text-slate-900 antialiased selection:bg-slate-900 selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
