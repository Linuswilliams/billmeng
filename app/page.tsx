import { ComparisonTable } from "@/components/usable/ComparisonTable";
import { FAQSection } from "@/components/usable/Faq";
import { Footer } from "@/components/usable/Footer";
import { Header } from "@/components/usable/Header";
import { Hero } from "@/components/usable/Hero";
import { ServicesGrid } from "@/components/usable/Services";
import { SubHero } from "@/components/usable/SubHero";
import TestimonialSlider  from "@/components/usable/TestimonialSlider";
import VideoSection  from "@/components/usable/VideoSection";
import DownloadSection from "@/components/usable/DownloadSection"
import Image from "next/image";

export default function Home() {
  return (
<main>
  <Header/>
  <Hero/>
{/*<ServicesGrid/>
  <SubHero/>
  <ComparisonTable/>
  <VideoSection/>
  <FAQSection/>
  <TestimonialSlider/>
  <DownloadSection/>
  <Footer/>*/ }
</main>
  );
}
