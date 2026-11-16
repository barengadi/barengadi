import Hero from "@/components/Hero";
import WhyVisit from "@/components/WhyVisit";
import Curriculum from "@/components/Curriculum";
import Pricing from "@/components/Pricing";
import BookingForm from "@/components/BookingForm";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      <main className="flex-1">
        <Hero />
        <WhyVisit />
        <Curriculum />
        <Pricing />
        <BookingForm />
        <FaqSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
