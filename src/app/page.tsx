import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Image from "next/image";
import Project from "./projects/page";
import Achievement from "@/pages/Achievement";
import Hero from "@/pages/Hero";

export default function Home() {
  return (
    <main className="flex bg-white  text-[#212121]  gap-20 min-h-screen flex-col    items-center   ">
      <Hero />
      <About />
      <Achievement />
      <Project />
    </main>
  );
}
