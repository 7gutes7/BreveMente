import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Features } from "@/components/Features";
import { Brifi } from "@/components/Brifi";
import { ForPatients } from "@/components/ForPatients";
import { HowItWorks } from "@/components/HowItWorks";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Features />
        <Brifi />
        <ForPatients />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
