import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Image from "next/image";
import Project from "./projects/page";

export default function Home() {
  return (
    <main className="flex bg-black text-white font-mono min-h-screen flex-col    items-center   ">
      <About />
      <Project />
    </main>
  );
}
