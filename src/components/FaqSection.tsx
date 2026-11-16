"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Berapa lama durasi 1 sesi pertemuan?",
      a: "Durasi jam belajar per sesi fleksibel disesuaikan dengan kebutuhan materi kerjaan atau bisnis Anda. Silakan hubungi via WhatsApp untuk konsultasi estimasi waktu yang tepat.",
    },
    {
      q: "Apakah saya harus punya dasar coding?",
      a: "Tidak. Seluruh materi 100% no-code, ramah pemula, dan berfokus langsung pada implementasi kerjaan harian.",
    },
    {
      q: "Apa saja yang perlu saya siapkan?",
      a: "Cukup 1 unit laptop (Windows atau MacBook) dan koneksi internet yang stabil (WiFi rumah atau hotspot HP).",
    },
    {
      q: "Wilayah mana saja di Medan yang bisa dikunjungi?",
      a: "Mencakup seluruh area Kota Medan dan sekitarnya (termasuk Deli Serdang, Binjai, dan sekitarnya).",
    },
  ];

  return (
    <section id="faq" className="py-20 border-t border-slate-100 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Pertanyaan Umum
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900 text-sm">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform ${
                      isOpen ? "rotate-180 text-slate-900" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
