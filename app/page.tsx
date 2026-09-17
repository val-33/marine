import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Signature from "@/components/Signature";
import ScrollingYacht from "@/components/ScrollingYacht";
import FeaturedFleet from "@/components/FeaturedFleet";
import Charter from "@/components/Charter";
import About from "@/components/About";
import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Signature />
        <ScrollingYacht />
        <FeaturedFleet />
        <Charter />
        <About />
        <Brands />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
