"use client";

import React, { useState } from "react";
import { MapPin } from "lucide-react";

const WHATSAPP_NUMBER = "6281234567890";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [plan, setPlan] = useState("Visit Home / Office Medan (Rp 249.000 / sesi)");
  const [focus, setFocus] = useState("Produktivitas Kerja & Dokumen");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Halo Mas Adi, saya ingin jadwalkan Kelas Privat AI Bareng Adi:

• Nama: ${name || "-"}
• No. WhatsApp: ${phone || "-"}
• Lokasi: ${location || "-"}
• Paket Pilihan: ${plan}
• Fokus Kebutuhan: ${focus}

Saya ingin konfirmasi ketersediaan jadwal dan estimasi durasi sesinya ya mas. Terima kasih!`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="booking" className="py-20 border-t border-slate-100 bg-white">
      <div className="max-w-xl mx-auto px-6">
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Jadwalkan Sesi Privat Anda
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-5 shadow-sm"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700">Nama Lengkap</label>
              <input
                type="text"
                required
                placeholder="Nama Anda"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-slate-900 placeholder:text-slate-400"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700">Nomor WhatsApp</label>
              <input
                type="tel"
                required
                placeholder="0812XXXXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-slate-900 placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-slate-600" /> Lokasi (Area Medan untuk Visit / Kota Anda untuk Online)
            </label>
            <input
              type="text"
              required
              placeholder="Contoh: Medan Baru (Visit) / Jakarta (Online)"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-slate-900 placeholder:text-slate-400"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700">Pilihan Paket</label>
              <select
                value={plan}
                onChange={(e) => setPlan(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-slate-900"
              >
                <option value="Visit Home / Office Medan (Rp 249.000 / sesi)">
                  Visit Medan (Rp 249.000 / sesi)
                </option>
                <option value="Online Private Google Meet/Zoom (Rp 149.000 / orang - min. 2 orang)">
                  Online Private (Rp 149.000 / orang - min. 2 org)
                </option>
                <option value="Konsultasi Jadwal & Durasi via WhatsApp">
                  Konsultasi Jadwal & Durasi Dulu
                </option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700">Fokus Kebutuhan</label>
              <select
                value={focus}
                onChange={(e) => setFocus(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-slate-900"
              >
                <option value="Produktivitas Kerja & Dokumen">
                  Produktivitas Kerja & Dokumen
                </option>
                <option value="Automasi Bisnis & Chatbot CS">
                  Automasi Bisnis & Chatbot CS
                </option>
                <option value="Konten & Copywriting Iklan">
                  Konten & Copywriting Iklan
                </option>
                <option value="Kombinasi Keduanya">Kombinasi Keduanya</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-3.5 px-4 rounded-xl bg-[#0269ac] hover:bg-[#02568e] text-white font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            Lanjutkan ke WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
