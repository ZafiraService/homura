import "./globals.css";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className="flex bg-[#0f0f1a] text-white">

        <Sidebar />

        <main className="flex-1 p-6">
          {children}
        </main>

      </body>
    </html>
  );
}