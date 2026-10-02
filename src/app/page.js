import About from "@/components/home/About";
import BookCall from "@/components/home/BookCall";
import CoreServices from "@/components/home/CoreServices";
import Hero from "@/components/home/Hero";
import ProcessFlow from "@/components/home/ProcessFlow";
import SecondNav from "@/components/home/SecondNav";
import WhyTechCloud from "@/components/home/WhyTechCloud";

export default function Home() {
  return (
    <main>
      <Hero />
      <SecondNav/>
      <About/>
      <CoreServices/>
      <WhyTechCloud/>
      <ProcessFlow/>
      <BookCall/>
    </main>
  );
}
