"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/admin/security", icon: "🛡️", label: "Security Center" },
  { href: "/admin/verification", icon: "✅", label: "KYC Verification" },
  { href: "/admin/management", icon: "👑", label: "Platform Controls" },
];

export default function AdminLayout({ children, title, subtitle }: { children: React.ReactNode; title: string; subtitle?: string }) {
  const pathname = usePathname();
  return (
    <div className="flex min-h-screen bg-[#f5f6fa]">
      <aside className="w-64 min-h-screen bg-white border-r border-gray-100 flex flex-col fixed left-0 top-0 z-40">
        <div className="px-5 py-4 border-b border-gray-100">
          <Link href="/" className="flex items-center gap-2 text-xs text-gray-400 hover:text-gray-700 mb-3 transition-colors">← Back to Hub</Link>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-base">🔐</div>
            <div>
              <div className="text-sm font-bold text-gray-900">Super Admin</div>
              <div className="text-[10px] text-gray-400">Console 02</div>
            </div>
          </div>
        </div>
        <nav className="flex-1 px-3 py-4">
          <div className="text-[9px] font-bold text-gray-300 tracking-widest px-3 mb-2">PANELS</div>
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <div className={`flex items-center gap-3 px-3 py-2.5 rounded-lg mb-0.5 cursor-pointer transition-all text-sm
                  ${active ? "bg-red-50 text-red-700 font-semibold" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`}>
                  <span className="text-base">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-gray-100 px-5 py-3">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center text-xs font-bold text-red-700">S</div>
            <div>
              <div className="text-xs font-medium text-gray-800">Super Admin</div>
              <div className="text-[10px] text-gray-400">Console 02</div>
            </div>
            <span className="ml-auto w-2 h-2 rounded-full bg-green-400"></span>
          </div>
        </div>
      </aside>
      <div className="flex-1 flex flex-col" style={{ marginLeft: "256px" }}>
        <header className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between sticky top-0 z-30">
          <div>
            <h1 className="text-lg font-bold text-gray-900">{title}</h1>
            {subtitle && <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p>}
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              <span className="text-xs text-gray-500">Online</span>
            </div>
          </div>
        </header>
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
