"use client";

import React from "react";
import Image from "next/image";
import {
  ChevronDown,
  MessageCircle,
} from "lucide-react";

export default function Hero() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white w-full">
      {/* 
        HERO CONTAINER:
        Spacious azure sky blue hero (#0269ac) with 2-column layout:
        Left: Headline, Subtitle, Booking Button
        Right: Photo of Adi in Organic Canvas Shape
        Bottom: White Shelf Cutout with Application Logos
      */}
      <section className="relative w-full bg-[#0269ac] text-white flex flex-col justify-between overflow-hidden min-h-0 lg:min-h-[660px] xl:min-h-[700px] pt-20 sm:pt-24 lg:pt-24">
        {/* Ambient Radial Glow in the center */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 75% 55% at 50% 35%, rgba(255, 255, 255, 0.2) 0%, rgba(2, 105, 172, 0) 75%)",
          }}
        />

        {/* Perspective 3D Grid on the Floor */}
        <div
          className="absolute inset-x-0 bottom-0 h-[65%] pointer-events-none opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.22) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
            maskImage: "radial-gradient(ellipse at 50% 85%, black 20%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 85%, black 20%, transparent 75%)",
          }}
        />

        {/* ================= TOP HEADER: BRAND LOGO & NAVIGATION (FIXED ON SCROLL) ================= */}
        <header
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 sm:px-12 flex items-center justify-between ${
            scrolled
              ? "bg-[#0269ac]/95 backdrop-blur-md shadow-md border-b border-white/15 py-2.5 sm:py-3"
              : "bg-transparent py-3.5 sm:py-5"
          }`}
        >
          {/* Left: Official Brand Logo (AiBA - AI Bareng Adi) */}
          <a href="#" className="flex items-center group transition-transform hover:scale-105">
            <Image
              src="/logo-aiba.png"
              alt="AiBA - AI Bareng Adi"
              width={140}
              height={46}
              className="h-8 sm:h-11 w-auto object-contain drop-shadow-md"
              priority
              unoptimized
            />
          </a>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold text-white/90">
            <a href="#materi" className="hover:text-white transition-colors">
              Materi
            </a>
            <a href="#paket" className="hover:text-white transition-colors">
              Biaya Sesi
            </a>
            <a href="#booking" className="hover:text-white transition-colors">
              Jadwal Visit
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
          </nav>

          {/* Right: Tanya WhatsApp Button */}
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Adi,%20saya%20di%20Medan%20mau%20tanya%20jadwal%20kelas%20privat%20AI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 text-[11px] sm:text-xs font-semibold transition-all backdrop-blur-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 text-white" />
              <span>Tanya WhatsApp</span>
            </a>
          </div>
        </header>

        {/* ================= 2-COLUMN HERO CONTENT (BALANCED POSITIONING) ================= */}
        <div className="relative z-20 my-auto py-5 sm:py-8 px-5 sm:px-12 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            {/* Left Column: Headline, Subtitle, Booking Button */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.18] sm:leading-[1.12]">
                <span className="font-mandey font-light text-white block text-[46px] sm:text-[72px] lg:text-[88px] leading-[0.9] tracking-tight mb-1">
                  Bantu Bisnis
                </span>
                <span className="text-[#bae6fd] block mt-1">Kendalikan dengan</span>
                <span className="text-[#bae6fd] relative inline-block mt-1">
                  Ai.
                </span>
              </h1>

              {/* Subtitle & Booking Button (Desktop View) */}
              <div className="hidden lg:block space-y-4 sm:space-y-5">
                <p className="text-xs sm:text-base text-blue-100 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Kelas privat visit home 1-on-1 di Medan. Mulai <span className="font-semibold text-white">Rp 249.000</span> / sesi.
                </p>

                {/* Single Red Primary CTA Button: Booking */}
                <div className="pt-1 sm:pt-2 flex flex-row items-center justify-center lg:justify-start">
                  <a
                    href="#booking"
                    className="inline-flex items-center justify-center gap-2 px-10 sm:px-14 min-w-[170px] sm:min-w-[190px] py-3 sm:py-3.5 rounded-full bg-[#ef4444] hover:bg-[#dc2626] text-white font-bold text-sm sm:text-base tracking-wide shadow-[0_0_25px_rgba(239,68,68,0.45)] hover:shadow-[0_0_35px_rgba(239,68,68,0.65)] transition-all hover:scale-105 active:scale-95"
                  >
                    <span>Ambil Kelas</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Adi's Photo in Organic Canvas Shape */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end mt-2 lg:mt-0">
              <div className="relative w-full max-w-[240px] sm:max-w-[320px] lg:max-w-[370px] xl:max-w-[390px]">
                {/* Organic Ambient Glow Behind Shape */}
                <div
                  className="absolute -inset-2 bg-gradient-to-tr from-white/30 via-sky-300/30 to-blue-400/20 blur-2xl opacity-80"
                  style={{ borderRadius: "42% 58% 62% 38% / 46% 42% 58% 54%" }}
                />

                {/* Organic Canvas Container */}
                <div
                  className="relative overflow-hidden shadow-[0_25px_60px_rgba(2,105,172,0.4)] border-2 border-white/40 bg-slate-900 group transition-all duration-500 hover:border-white"
                  style={{ borderRadius: "42% 58% 62% 38% / 46% 42% 58% 54%" }}
                >
                  <Image
                    src="/hero-adi.jpg"
                    alt="Adi - Kelas Privat AI Visit Home Medan"
                    width={600}
                    height={600}
                    unoptimized
                    priority
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Subtitle & Booking Button (Mobile View - Placed below Photo) */}
              <div className="lg:hidden mt-5 sm:mt-6 space-y-3 sm:space-y-4 text-center w-full">
                <p className="text-xs sm:text-sm text-blue-100 font-light leading-relaxed max-w-sm mx-auto">
                  Kelas privat visit home 1-on-1 di Medan. Mulai <span className="font-semibold text-white">Rp 249.000</span> / sesi.
                </p>

                <div className="pt-1 flex flex-row items-center justify-center">
                  <a
                    href="#booking"
                    className="inline-flex items-center justify-center gap-2 px-10 sm:px-14 min-w-[170px] sm:min-w-[190px] py-3 sm:py-3.5 rounded-full bg-[#ef4444] hover:bg-[#dc2626] text-white font-bold text-sm sm:text-base tracking-wide shadow-[0_0_25px_rgba(239,68,68,0.45)] hover:shadow-[0_0_35px_rgba(239,68,68,0.65)] transition-all hover:scale-105 active:scale-95"
                  >
                    <span>Ambil Kelas</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM NOTCH CUTOUT WITH SCROLL DOWN ================= */}
        <div className="relative w-full z-20 mt-1 sm:mt-3">
          {/* Scroll Down on the Left (hidden on mobile to prevent overlapping) */}
          <div className="hidden sm:inline-flex absolute left-6 sm:left-14 bottom-8 sm:bottom-12 z-30">
            <a
              href="#materi"
              className="inline-flex items-center gap-1.5 text-xs text-white/90 hover:text-white transition-colors"
            >
              <span>Scroll down</span>
              <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
            </a>
          </div>

          {/* Smooth Inverted Curved SVG Cutout creating the white tray shelf */}
          <svg
            viewBox="0 0 1440 90"
            fill="none"
            preserveAspectRatio="none"
            className="w-full h-10 sm:h-14 lg:h-16 block translate-y-px"
          >
            <path
              d="M 0 0 L 140 0 C 180 0 190 70 230 70 L 1210 70 C 1250 70 1260 0 1300 0 L 1440 0 L 1440 90 L 0 90 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* ================= WHITE TRAY UNDER HERO: APPLICATION LOGOS ================= */}
      <section className="bg-white pt-4 sm:pt-6 pb-10 sm:pb-12 text-center px-4 sm:px-6 border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          {/* Applications Row with Authentic Brand Logos (Excel & Sheets, Canva, WhatsApp, ChatGPT, Claude) */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-10 text-slate-800 font-bold text-xs sm:text-sm">
            {/* Spreadsheets (Official Microsoft Excel Layered Tile) */}
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl hover:bg-slate-50 transition-colors">
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 32 32" fill="none">
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
              <span>Spreadsheets</span>
            </div>

            {/* Google Docs AI (Official Google Docs Brand Icon) */}
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl hover:bg-slate-50 transition-colors">
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 32 32" fill="none">
                <path d="M7 4C5.89543 4 5 4.89543 5 6V26C5 27.1046 5.89543 28 7 28H25C26.1046 28 27 27.1046 27 26V11L19 4H7Z" fill="#4285F4" />
                <path d="M19 4V9C19 10.1046 19.8954 11 21 11H27L19 4Z" fill="#A1C2FA" />
                <rect x="9" y="14" width="14" height="2" rx="1" fill="white" />
                <rect x="9" y="18" width="14" height="2" rx="1" fill="white" />
                <rect x="9" y="22" width="9" height="2" rx="1" fill="white" />
              </svg>
              <span>Google Docs AI</span>
            </div>

            {/* Canva (Official Canva Brand Gradient Circle) */}
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl hover:bg-slate-50 transition-colors">
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 32 32" fill="none">
                <defs>
                  <linearGradient id="canvaGradTray" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#00C4CC" />
                    <stop offset="50%" stopColor="#3B66DE" />
                    <stop offset="100%" stopColor="#7D2AE8" />
                  </linearGradient>
                </defs>
                <circle cx="16" cy="16" r="15" fill="url(#canvaGradTray)" />
                <path d="M21 14C20.6 12.3 19.2 11.2 17.5 11.2C14.2 11.2 11.8 13.5 11.8 16.5C11.8 19.5 14.1 21.8 17.5 21.8C19.5 21.8 21 20.8 21.8 19.3L19.8 18.2C19.3 19.1 18.5 19.6 17.4 19.6C15.4 19.6 14.1 18.2 14.1 16.5C14.1 14.8 15.4 13.4 17.4 13.4C18.4 13.4 19.2 13.9 19.6 14.7L21 14Z" fill="white" />
              </svg>
              <span>Canva</span>
            </div>

            {/* WhatsApp (Official Round Green WhatsApp Icon) */}
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl hover:bg-slate-50 transition-colors">
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="15" fill="#25D366" />
                <path fillRule="evenodd" clipRule="evenodd" d="M16 6C10.5 6 6 10.5 6 16C6 17.8 6.5 19.5 7.4 21L6 26L11.2 24.6C12.6 25.5 14.3 26 16 26C21.5 26 26 21.5 26 16C26 10.5 21.5 6 16 6ZM16 24.3C14.5 24.3 13 23.9 11.8 23.2L11.5 23L8.4 23.8L9.2 20.8L9 20.4C8.2 19.1 7.7 17.6 7.7 16C7.7 11.4 11.4 7.7 16 7.7C20.6 7.7 24.3 11.4 24.3 16C24.3 20.6 20.6 24.3 16 24.3ZM20.4 18.3C20.1 18.2 18.9 17.6 18.7 17.5C18.5 17.4 18.3 17.4 18.1 17.6C17.9 17.9 17.4 18.5 17.3 18.7C17.1 18.8 17 18.9 16.7 18.7C16.4 18.6 15.6 18.3 14.7 17.5C14 16.8 13.5 16 13.3 15.8C13.1 15.5 13.3 15.4 13.4 15.3C13.5 15.2 13.6 15 13.8 14.8C13.9 14.7 14 14.6 14 14.4C14.1 14.2 14.1 14.1 14 14C13.9 13.9 13.5 12.7 13.3 12.2C13.1 11.7 12.9 11.8 12.8 11.8C12.6 11.8 12.5 11.8 12.3 11.8C12.1 11.8 11.8 11.9 11.6 12.1C11.4 12.3 10.7 12.9 10.7 14.1C10.7 15.3 11.6 16.5 11.7 16.7C11.8 16.8 13.4 19.3 15.9 20.4C16.5 20.6 17 20.8 17.3 20.9C17.9 21.1 18.5 21.1 18.9 21C19.4 20.9 20.4 20.4 20.6 19.8C20.8 19.2 20.8 18.7 20.8 18.6C20.7 18.5 20.6 18.4 20.4 18.3Z" fill="white" />
              </svg>
              <span>WhatsApp</span>
            </div>

            {/* ChatGPT (Official Authentic OpenAI Vortex Flower Swirl) */}
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl hover:bg-slate-50 transition-colors">
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#10A37F">
                <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.6667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
              </svg>
              <span>ChatGPT</span>
            </div>

            {/* Claude (Official Anthropic Claude Sunburst Asterisk) */}
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl hover:bg-slate-50 transition-colors">
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2C12.6 2 13 2.4 13 3V7.1L15.9 4.2C16.3 3.8 17 3.8 17.4 4.2C17.8 4.6 17.8 5.3 17.4 5.7L14.5 8.6H18.6C19.2 8.6 19.6 9 19.6 9.6C19.6 10.2 19.2 10.6 18.6 10.6H14.5L17.4 13.5C17.8 13.9 17.8 14.6 17.4 15C17 15.4 16.3 15.4 15.9 15L13 12.1V16.2C13 16.8 12.6 17.2 12 17.2C11.4 17.2 11 16.8 11 16.2V12.1L8.1 15C7.7 15.4 7 15.4 6.6 15C6.2 14.6 6.2 13.9 6.6 13.5L9.5 10.6H5.4C4.8 10.6 4.4 10.2 4.4 9.6C4.4 9 4.8 8.6 5.4 8.6H9.5L6.6 5.7C6.2 5.3 6.2 4.6 6.6 4.2C7 3.8 7.7 3.8 8.1 4.2L11 7.1V3C11 2.4 11.4 2 12 2Z"
                  fill="#D97757"
                />
              </svg>
              <span>Claude</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
