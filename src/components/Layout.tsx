import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnnouncementsTicker } from "@/components/AnnouncementsTicker";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import StructuredDataSchool from "@/components/StructuredDataSchool";

export const Layout = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <Navbar />
    <main className="flex-1 pt-[72px] md:pt-[104px]">
      <AnnouncementsTicker />
      <Outlet />
    </main>
    <Footer />
    <FloatingWhatsApp />
    <StructuredDataSchool />
  </div>
);
