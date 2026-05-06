import { Hero } from "@/components/Hero";
import { Specialties } from "@/components/Specialties";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { TechStack } from "@/components/TechStack";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Specialties />
      <About />
      <Experience />
      <TechStack />
      <Contact />
    </>
  );
}
