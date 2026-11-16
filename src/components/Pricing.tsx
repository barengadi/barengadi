"use client";

import React from "react";
import { Check, MessageCircle } from "lucide-react";

export default function Pricing() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const onlineFeatures = [
    "Sesi privat interaktif via Google Meet / Zoom (layar dipandu langsung)",
    "Praktik langsung di laptop masing-masing menggunakan file kerja asli",
    "Setup & implementasi tools AI sesuai alur kerja / kebutuhan bisnis",
    "Rekaman video full sesi diberikan agar bisa ditonton ulang kapan saja",
    "Minimal pendaftaran 2 orang (bisa bareng rekan kerja / partner bisnis)",
    "Pendampingan tanya jawab & konsultasi via WhatsApp pasca-sesi",
  ];

  const visitFeatures = [
    "1 Sesi tatap muka langsung di rumah / kantor Anda di Kota Medan",
    "Praktik langsung di laptop kerja Anda menggunakan file & kasus asli",
    "Setup dan implementasi tools AI sesuai kebutuhan (Kerja / Bisnis)",
    "Bebas tanya jawab santai 1-on-1 sampai Anda benar-benar paham",
    "Durasi jam belajar fleksibel disesuaikan dengan kebutuhan Anda",
    "Pendampingan tanya jawab & konsultasi via WhatsApp pasca-visit",
  ];

  return (
    <section id="paket" className="py-20 border-t border-slate-100 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pilihan Paket Kelas Privat AI
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Tersedia sesi online interaktif untuk seluruh Indonesia dan sesi tatap muka visit langsung di Kota Medan.
          </p>
        </div>

        {/* 2-Column Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Card 1: Online Private (Rp 149.000 / orang - Min. 2 Orang) */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900">
                Sesi Online Private
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                Mentoring privat interaktif via Google Meet / Zoom langsung praktik di laptop masing-masing.
              </p>

              {/* Price */}
              <div className="my-6 pt-2 pb-4 border-y border-slate-100">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-semibold text-slate-500">Rp</span>
                  <span className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
                    149.000
                  </span>
                  <span className="text-xs text-slate-600 font-medium ml-1">
                    / orang
                  </span>
                </div>
                <p className="text-[11px] text-[#0269ac] font-semibold mt-1">
                  *Pendaftaran minimal 2 orang (Rp 298.000 untuk 2 orang)
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-3.5 mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Yang Anda Dapatkan:
                </h4>
                <div className="space-y-2.5">
                  {onlineFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <Check className="w-4 h-4 text-[#0269ac] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-2.5 pt-4 border-t border-slate-100">
              <a
                href="#booking"
                onClick={(e) => scrollTo(e, "booking")}
                className="w-full py-3.5 px-4 rounded-xl text-center text-xs sm:text-sm font-bold bg-[#0269ac] text-white hover:bg-[#02568e] transition-colors inline-flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                Booking Sesi Online
              </a>
              <a
                href="https://wa.me/6281234567890?text=Halo%20Adi,%20saya%20mau%20tanya%20jadwal%20Kelas%20Privat%20Online%20AI%20(149k/orang%20min%202%20orang)"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl text-center text-xs font-semibold border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#0269ac]" />
                Tanya via WhatsApp
              </a>
            </div>
          </div>

          {/* Card 2: Visit Home / Office Medan (Rp 249.000 / sesi) */}
          <div className="rounded-3xl border-2 border-[#0269ac] bg-white p-7 sm:p-9 shadow-xl relative flex flex-col justify-between ring-4 ring-[#0269ac]/10">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900">
                1 Sesi Visit Tatap Muka
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                Mentoring tatap muka 1-on-1 langsung di rumah atau kantor Anda di Kota Medan.
              </p>

              {/* Price */}
              <div className="my-6 pt-2 pb-4 border-y border-slate-100">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-semibold text-slate-500">Rp</span>
                  <span className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
                    249.000
                  </span>
                  <span className="text-xs text-slate-600 font-medium ml-1">
                    / sesi pertemuan
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium mt-1">
                  *Mentor datang langsung membawa modul &amp; praktik di laptop Anda
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-3.5 mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Yang Anda Dapatkan:
                </h4>
                <div className="space-y-2.5">
                  {visitFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <Check className="w-4 h-4 text-[#0269ac] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-2.5 pt-4 border-t border-slate-100">
              <a
                href="#booking"
                onClick={(e) => scrollTo(e, "booking")}
                className="w-full py-3.5 px-4 rounded-xl text-center text-xs sm:text-sm font-bold bg-[#ef4444] hover:bg-[#dc2626] text-white shadow-md shadow-red-500/20 transition-all hover:scale-[1.02] active:scale-98 inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                Jadwalkan Visit Medan
              </a>
              <a
                href="https://wa.me/6281234567890?text=Halo%20Adi,%20saya%20di%20Medan%20mau%20tanya%20durasi%20jam%20dan%20jadwal%20kelas%20privat%20AI%20visit%20(249k/sesi)"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl text-center text-xs font-semibold border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#0269ac]" />
                Tanya Jadwal Visit via WA
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="max-w-3xl mx-auto mt-10 p-4 rounded-2xl bg-white border border-slate-200 text-center text-xs text-slate-600 leading-relaxed shadow-xs">
          💡 <strong>Fleksibilitas Waktu:</strong> Penyesuaian durasi jam belajar, pemilihan hari/jam, serta topik khusus yang ingin didalami dapat dikonfirmasi langsung dengan Mas Adi via WhatsApp.
        </div>
      </div>
    </section>
  );
}
