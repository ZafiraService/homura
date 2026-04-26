import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-[#141625] p-5">

      <h1 className="text-pink-500 font-bold text-xl">
        🔥 Homura
      </h1>

      <nav className="mt-8 flex flex-col gap-3 text-gray-300">

        <Link href="/dashboard">📊 Dashboard</Link>
        <Link href="/requests">📩 Requests</Link>
        <Link href="/staff">👥 Staff</Link>
        <Link href="/announcements">📢 Annunci</Link>

      </nav>

    </div>
  );
}