"use client";

import React from "react";
import { CheckCircle2, Laptop } from "lucide-react";

export default function WhyVisit() {
  return (
    <section className="py-20 border-t border-slate-100 bg-slate-50/60 relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#0269ac]/8 via-sky-300/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Satu Ai, Tools ke Semua Aplikasi Anda
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Tidak perlu belajar koding atau menghafal tools rumit. Kami bimbing pasang dan koneksikan AI langsung ke software yang Anda gunakan sehari-hari.
          </p>
        </div>

        {/* ================= CORE BRAIN HUB: PUSAT AI DI LAPTOP ANDA ================= */}
        <div className="relative max-w-2xl mx-auto mb-10">
          {/* Ambient Glow */}
          <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-[#0269ac]/25 via-sky-400/25 to-[#0269ac]/25 blur-xl opacity-75" />

          <div className="relative rounded-2xl border-2 border-[#0269ac]/30 bg-white p-6 sm:p-7 shadow-xl text-center space-y-3.5">
            <div className="w-13 h-13 mx-auto rounded-2xl bg-[#0269ac] text-white flex items-center justify-center shadow-md shadow-[#0269ac]/25">
              <Laptop className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                Pusat AI di Laptop Anda
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-md mx-auto leading-relaxed">
                Dibimbing langsung tatap muka untuk menghubungkan model AI terdepan ke semua alur kerja Anda:
              </p>
            </div>

            {/* AI Models Chips with Authentic Brand Logos */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 pt-1">
              {/* ChatGPT */}
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200/80 px-3 py-1.5 rounded-xl border border-slate-200/80 shadow-xs transition-colors">
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="#10a37f">
                  <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.6667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
                </svg>
                <span>ChatGPT</span>
              </div>

              {/* Claude */}
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200/80 px-3 py-1.5 rounded-xl border border-slate-200/80 shadow-xs transition-colors">
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2C12.6 2 13 2.4 13 3V7.1L15.9 4.2C16.3 3.8 17 3.8 17.4 4.2C17.8 4.6 17.8 5.3 17.4 5.7L14.5 8.6H18.6C19.2 8.6 19.6 9 19.6 9.6C19.6 10.2 19.2 10.6 18.6 10.6H14.5L17.4 13.5C17.8 13.9 17.8 14.6 17.4 15C17 15.4 16.3 15.4 15.9 15L13 12.1V16.2C13 16.8 12.6 17.2 12 17.2C11.4 17.2 11 16.8 11 16.2V12.1L8.1 15C7.7 15.4 7 15.4 6.6 15C6.2 14.6 6.2 13.9 6.6 13.5L9.5 10.6H5.4C4.8 10.6 4.4 10.2 4.4 9.6C4.4 9 4.8 8.6 5.4 8.6H9.5L6.6 5.7C6.2 5.3 6.2 4.6 6.6 4.2C7 3.8 7.7 3.8 8.1 4.2L11 7.1V3C11 2.4 11.4 2 12 2Z"
                    fill="#D97757"
                  />
                </svg>
                <span>Claude</span>
              </div>

              {/* Gemini */}
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200/80 px-3 py-1.5 rounded-xl border border-slate-200/80 shadow-xs transition-colors">
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
                  <defs>
                    <linearGradient id="geminiHubGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1BA1E3" />
                      <stop offset="50%" stopColor="#5468FF" />
                      <stop offset="100%" stopColor="#9C42F5" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M12 2C12 7.52 7.52 12 2 12C7.52 12 12 16.48 12 22C12 16.48 16.48 12 22 12C16.48 12 12 7.52 12 2Z"
                    fill="url(#geminiHubGrad)"
                  />
                </svg>
                <span>Gemini</span>
              </div>
            </div>
          </div>

          {/* Visual Downward Flow Indicator */}
          <div className="flex flex-col items-center mt-3">
            <div className="w-0.5 h-6 bg-gradient-to-b from-[#0269ac]/50 to-slate-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#0269ac] ring-4 ring-sky-100" />
          </div>
        </div>

        {/* ================= CONNECTED APPLICATIONS GRID ================= */}
        {/* Row 1: 3 Main Productivity & Communication Apps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* Card 1: Spreadsheet (Excel & Google Sheets) */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#107C41]" />
            <div className="flex items-center gap-3.5 mb-3.5">
              <div className="w-12 h-12 rounded-xl bg-[#107C41] flex items-center justify-center text-white shrink-0 shadow-md shadow-emerald-700/25 group-hover:scale-105 transition-transform">
                <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
                  <rect x="14" y="5" width="15" height="22" rx="2" fill="#185C37" />
                  <rect x="17" y="8" width="4" height="4" rx="0.5" fill="#33C481" />
                  <rect x="23" y="8" width="4" height="4" rx="0.5" fill="#33C481" />
                  <rect x="17" y="14" width="4" height="4" rx="0.5" fill="#33C481" />
                  <rect x="23" y="14" width="4" height="4" rx="0.5" fill="#33C481" />
                  <rect x="17" y="20" width="4" height="4" rx="0.5" fill="#33C481" />
                  <rect x="23" y="20" width="4" height="4" rx="0.5" fill="#33C481" />
                  <rect x="3" y="5" width="15" height="22" rx="2.5" fill="#0E5C2F" />
                  <path d="M7 9.5L10.5 16L7 22.5H9.5L11.5 18L13.5 22.5H16L12.5 16L16 9.5H13.5L11.5 14L9.5 9.5H7Z" fill="white" />
                </svg>
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                  Formula &amp; Olah Data
                </span>
                <h4 className="text-base font-extrabold text-slate-900 mt-1">Spreadsheet</h4>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Bikin rumus kompleks otomatis, data cleaning ribuan baris, dan rekap laporan seketika tanpa perlu menghafal rumus manual.
            </p>
            <div className="space-y-1.5 text-xs text-slate-700 font-medium pt-3 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0269ac] shrink-0" />
                <span>Formula otomatis tanpa hafal sintaks</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0269ac] shrink-0" />
                <span>Analisis tren &amp; rekap bisnis cepat</span>
              </div>
            </div>
          </div>

          {/* Card 2: Google Docs AI */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#4285F4]" />
            <div className="flex items-center gap-3.5 mb-3.5">
              <div className="w-12 h-12 rounded-xl bg-[#4285F4] flex items-center justify-center text-white shrink-0 shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform">
                <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
                  <path d="M7 4C5.89543 4 5 4.89543 5 6V26C5 27.1046 5.89543 28 7 28H25C26.1046 28 27 27.1046 27 26V11L19 4H7Z" fill="#2684FC" />
                  <path d="M19 4V9C19 10.1046 19.8954 11 21 11H27L19 4Z" fill="#A1C2FA" />
                  <rect x="9" y="14" width="14" height="2" rx="1" fill="white" />
                  <rect x="9" y="18" width="14" height="2" rx="1" fill="white" />
                  <rect x="9" y="22" width="9" height="2" rx="1" fill="white" />
                </svg>
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                  Dokumen &amp; Proposal
                </span>
                <h4 className="text-base font-extrabold text-slate-900 mt-1">Google Docs AI</h4>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Susun draft proposal rapi, SOP alur kerja operasional, dan ringkasan notulensi meeting otomatis dalam hitungan menit.
            </p>
            <div className="space-y-1.5 text-xs text-slate-700 font-medium pt-3 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0269ac] shrink-0" />
                <span>Draft SOP &amp; proposal bisnis rapi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0269ac] shrink-0" />
                <span>Notulensi rapat otomatis</span>
              </div>
            </div>
          </div>

          {/* Card 3: WhatsApp CS 24/7 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden group md:col-span-2 lg:col-span-1">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#25D366]" />
            <div className="flex items-center gap-3.5 mb-3.5">
              <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center text-white shrink-0 shadow-md shadow-emerald-500/30 group-hover:scale-105 transition-transform">
                <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="14" fill="#25D366" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M16 6C10.5 6 6 10.5 6 16C6 17.8 6.5 19.5 7.4 21L6 26L11.2 24.6C12.6 25.5 14.3 26 16 26C21.5 26 26 21.5 26 16C26 10.5 21.5 6 16 6ZM16 24.3C14.5 24.3 13 23.9 11.8 23.2L11.5 23L8.4 23.8L9.2 20.8L9 20.4C8.2 19.1 7.7 17.6 7.7 16C7.7 11.4 11.4 7.7 16 7.7C20.6 7.7 24.3 11.4 24.3 16C24.3 20.6 20.6 24.3 16 24.3ZM20.4 18.3C20.1 18.2 18.9 17.6 18.7 17.5C18.5 17.4 18.3 17.4 18.1 17.6C17.9 17.9 17.4 18.5 17.3 18.7C17.1 18.8 17 18.9 16.7 18.7C16.4 18.6 15.6 18.3 14.7 17.5C14 16.8 13.5 16 13.3 15.8C13.1 15.5 13.3 15.4 13.4 15.3C13.5 15.2 13.6 15 13.8 14.8C13.9 14.7 14 14.6 14 14.4C14.1 14.2 14.1 14.1 14 14C13.9 13.9 13.5 12.7 13.3 12.2C13.1 11.7 12.9 11.8 12.8 11.8C12.6 11.8 12.5 11.8 12.3 11.8C12.1 11.8 11.8 11.9 11.6 12.1C11.4 12.3 10.7 12.9 10.7 14.1C10.7 15.3 11.6 16.5 11.7 16.7C11.8 16.8 13.4 19.3 15.9 20.4C16.5 20.6 17 20.8 17.3 20.9C17.9 21.1 18.5 21.1 18.9 21C19.4 20.9 20.4 20.4 20.6 19.8C20.8 19.2 20.8 18.7 20.8 18.6C20.7 18.5 20.6 18.4 20.4 18.3Z" fill="white" />
                </svg>
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                  Chatbot Penjualan
                </span>
                <h4 className="text-base font-extrabold text-slate-900 mt-1">WhatsApp CS 24/7</h4>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Balas pesan pelanggan otomatis, tangkap leads pembeli, dan jawab FAQ seputar produk nonstop tanpa perlu standby HP.
            </p>
            <div className="space-y-1.5 text-xs text-slate-700 font-medium pt-3 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0269ac] shrink-0" />
                <span>Auto-reply cerdas 24 jam nonstop</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0269ac] shrink-0" />
                <span>Catat pesanan &amp; follow-up otomatis</span>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: 2 Creative & Automation Apps (Centered & Balanced) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Card 4: Canva with AI */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00C4CC] via-[#3B66DE] to-[#7D2AE8]" />
            <div className="flex items-center gap-3.5 mb-3.5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#00C4CC] via-[#3B66DE] to-[#7D2AE8] flex items-center justify-center text-white shrink-0 shadow-md shadow-sky-600/25 group-hover:scale-105 transition-transform">
                <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="14" fill="url(#canvaCardGrad)" />
                  <defs>
                    <linearGradient id="canvaCardGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#00C4CC" />
                      <stop offset="50%" stopColor="#3B66DE" />
                      <stop offset="100%" stopColor="#7D2AE8" />
                    </linearGradient>
                  </defs>
                  <path d="M21 14C20.6 12.3 19.2 11.2 17.5 11.2C14.2 11.2 11.8 13.5 11.8 16.5C11.8 19.5 14.1 21.8 17.5 21.8C19.5 21.8 21 20.8 21.8 19.3L19.8 18.2C19.3 19.1 18.5 19.6 17.4 19.6C15.4 19.6 14.1 18.2 14.1 16.5C14.1 14.8 15.4 13.4 17.4 13.4C18.4 13.4 19.2 13.9 19.6 14.7L21 14Z" fill="white" />
                </svg>
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-100">
                  Desain &amp; Materi Konten
                </span>
                <h4 className="text-base font-extrabold text-slate-900 mt-1">Canva with AI</h4>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Bikin 30 materi promosi media sosial, banner katalog, hingga copywriting iklan dalam 1 jam tanpa buntu ide.
            </p>
            <div className="space-y-1.5 text-xs text-slate-700 font-medium pt-3 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0269ac] shrink-0" />
                <span>30 ide konten &amp; script iklan cepat</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0269ac] shrink-0" />
                <span>Desain banner produk profesional</span>
              </div>
            </div>
          </div>

          {/* Card 5: Bisnis & Otomasi Alur Kerja (Make.com & n8n) */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#6F2CF3]" />
            <div className="flex items-center gap-3.5 mb-3.5">
              <div className="w-12 h-12 rounded-xl bg-[#6F2CF3] flex items-center justify-center text-white shrink-0 shadow-md shadow-purple-600/30 group-hover:scale-105 transition-transform">
                <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
                  <rect width="32" height="32" rx="8" fill="#6F2CF3" />
                  <line x1="10" y1="12" x2="22" y2="12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="10" y1="12" x2="16" y2="22" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="22" y1="12" x2="16" y2="22" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="10" cy="12" r="3.5" fill="#38bdf8" stroke="#0269ac" strokeWidth="1.5" />
                  <circle cx="22" cy="12" r="3.5" fill="#0269ac" stroke="#0269ac" strokeWidth="1.5" />
                  <circle cx="16" cy="22" r="4" fill="white" stroke="#6F2CF3" strokeWidth="1.5" />
                </svg>
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-100">
                  Otomasi No-Code
                </span>
                <h4 className="text-base font-extrabold text-slate-900 mt-1">Bisnis &amp; Otomasi</h4>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Hubungkan form leads web ke Google Sheets &amp; notifikasi WA secara otomatis tanpa koding manual.
            </p>
            <div className="space-y-1.5 text-xs text-slate-700 font-medium pt-3 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0269ac] shrink-0" />
                <span>Form leads langsung masuk WA</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0269ac] shrink-0" />
                <span>SOP alur kerja bisnis otomatis</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
