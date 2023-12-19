import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Image from "next/image";
import Project from "./projects/page";
import Achievement from "@/pages/Achievement";

export default function Home() {
  return (
    <main className="flex bg-black text-white font-mono gap-20 min-h-screen flex-col    items-center   ">
      <About />
      <Achievement />
      <Project />
    </main>
  );
}
