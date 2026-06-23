import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1 bg-[#034694] text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold mb-4">Chelsea Matchday Intelligence</h1>
      <p className="text-xl text-blue-200">
        Your home for tactics, analysis, and away days
      </p>
    </main>
  );
}
