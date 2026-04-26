import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">

      <h1 className="text-6xl font-bold text-pink-500">
        🔥 Homura
      </h1>

      <p className="text-gray-400 mt-3">
        Discord Community & Moderation System
      </p>

      <Link
        href="/login"
        className="mt-6 px-6 py-3 bg-indigo-600 rounded-xl hover:bg-indigo-500"
      >
        Login con Discord
      </Link>

      <div className="grid grid-cols-3 gap-4 mt-10">

        <div className="bg-white/5 p-5 rounded-xl">⚡ Moderazione avanzata</div>
        <div className="bg-white/5 p-5 rounded-xl">📩 Requests system</div>
        <div className="bg-white/5 p-5 rounded-xl">👥 Staff management</div>

      </div>

    </div>
  );
}