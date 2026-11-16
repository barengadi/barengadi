import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10 text-xs text-slate-500">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src="/logo-aiba-dark.png"
            alt="AiBA - AI Bareng Adi"
            width={100}
            height={33}
            className="h-8 w-auto object-contain"
            unoptimized
          />
          <span className="text-slate-300">|</span>
          <span className="text-slate-700 font-medium">Kelas Privat Visit Home AI &amp; Automasi Bisnis Medan</span>
        </div>
        <div>
          &copy; {new Date().getFullYear()} AiBA (AI Bareng Adi). All rights reserved.
        </div>
      </div>
    </footer>
  );
}
