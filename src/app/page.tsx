import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-3 p-24">
      <h1 className="text-3xl">
        Hey there! I'm <span className="text-blue-500">Chetan</span> 👋
      </h1>
      <h3 className="text-2xl">I love building stuff</h3>
    </main>
  );
}
