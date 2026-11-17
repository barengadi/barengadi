"use client";

import React from "react";
import { Briefcase, TrendingUp, CheckCircle2 } from "lucide-react";

export default function Curriculum() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const tracks = [
    {
      icon: Briefcase,
      title: "Untuk Produktivitas Kerja",
      description: "Pangkas waktu tugas administratif harian hingga 70%.",
      items: [
        "Otomasi rumus Excel & olah data tanpa perlu menghafal rumus",
        "Rangkuman notulensi meeting audio & ringkasan file PDF tebal",
        "Penyusunan draf email profesional, laporan kerja, & proposal",
        "Setup asisten AI pribadi yang mengerti konteks kerjaan Anda",
      ],
    },
    {
      icon: TrendingUp,
      title: "Untuk Membangun & Scale Bisnis",
      description: "Bangun sistem operasional dan pemasaran yang berjalan otomatis.",
      items: [
        "Chatbot CS WhatsApp otomatis melayani pertanyaan pelanggan 24/7",
        "Integrasi alur kerja tanpa koding (Make.com: Form Leads → Sheets → WA)",
        "Pembuatan materi konten promosi & copywriting iklan penjualan",
        "Riset kompetitor, tren pasar, & standarisasi dokumen SOP bisnis",
      ],
    },
  ];

  return (
    <section id="materi" className="py-20 border-t border-slate-100 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Materi yang Dipelajari
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tracks.map((track, idx) => {
            const Icon = track.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white p-8 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-3.5">
                    <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0269ac] shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">
                      {track.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 mb-6 font-normal">{track.description}</p>

                  <ul className="space-y-3.5 mb-6">
                    {track.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#0269ac] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <a
                    href="#booking"
                    onClick={(e) => scrollTo(e, "booking")}
                    className="text-xs font-semibold text-slate-900 hover:text-slate-600 inline-flex items-center gap-1 cursor-pointer"
                  >
                    Pilih materi ini untuk sesi visit →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
