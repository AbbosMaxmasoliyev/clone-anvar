'use client';
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/Navbar";
import Testiominals from "@/components/testiominals";
import Works from "@/components/works";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function Home() {

  return (
    <div className="flex flex-col w-full min-h-screen">
      <Hero />
      <Footer />
    </div>
  );
}
