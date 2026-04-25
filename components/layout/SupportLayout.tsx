"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/support/customers", icon: "👤", label: "Customers", badge: "24,831" },
  { href: "/support/tailors", icon: "✂️", label: "Tailors", badge: "1,204" },
  { href: "/support/prime", icon: "⭐", label: "Prime Tailors", badge: "186" },
  { href: "/support/manufacturers", icon: "🏭", label: "Manufacturers", badge: "94" },
  { href: "/support/vendors", icon: "🏪", label: "Vendors", badge: "438" },
];

export default function SupportLayout({ children, title, subtitle }: { children: React.ReactNode; title: string; subtitle?: string }) {
  const pathname = usePathname();
  return (
    <div className="flex min-h-screen bg-[#f5f6fa]">
      {/* Sidebar */}
      <aside className="w-64 min-h-screen bg-white border-r border-gray-100 flex flex-col fixed left-0 top-0 z-40">
        {/* Back to Hub */}
        <div className="px-5 py-4 border-b border-gray-100">
          <Link href="/" className="flex items-center gap-2 text-xs text-gray-400 hover:text-gray-700 mb-3 transition-colors">
            ← Back to Hub
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-base">🎧</div>
            <div>
              <div className="text-sm font-bold text-gray-900">Support Console</div>
              <div className="text-[10px] text-gray-400">Console 03</div>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4">
          <div className="text-[9px] font-bold text-gray-300 tracking-widest px-3 mb-2">PANELS</div>
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <div className={`flex items-center justify-between px-3 py-2.5 rounded-lg mb-0.5 cursor-pointer transition-all
                  ${active ? "bg-green-50 text-green-700 font-semibold" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-base">{item.icon}</span>
                    <span className="text-sm">{item.label}</span>
                  </div>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium
                    ${active ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-400"}`}>
                    {item.badge}
                  </span>
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-gray-100 px-5 py-3">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center text-xs font-bold text-green-700">A</div>
            <div>
              <div className="text-xs font-medium text-gray-800">Support Admin</div>
              <div className="text-[10px] text-gray-400">Console 03</div>
            </div>
            <span className="ml-auto w-2 h-2 rounded-full bg-green-400"></span>
          </div>
        </div>
      </aside>

      {/* Content */}
      <div className="flex-1 flex flex-col" style={{ marginLeft: "256px" }}>
        {/* Header */}
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
            <button className="relative w-8 h-8 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center">
              <span className="text-sm">🔔</span>
              <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </header>
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
