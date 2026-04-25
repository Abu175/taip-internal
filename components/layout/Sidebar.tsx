"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navGroups = [
  {
    label: "MAIN",
    items: [
      { href: "/", icon: "⬛", label: "Dashboard" },
    ],
  },
  {
    label: "CONSOLE 1 — TECH",
    items: [
      { href: "/tech/backend", icon: "🔧", label: "Backend & APIs" },
      { href: "/tech/hosting", icon: "🌐", label: "Hosting" },
      { href: "/tech/app", icon: "📱", label: "App Management" },
      { href: "/tech/models", icon: "🤖", label: "AI Models" },
      { href: "/tech/charges", icon: "💰", label: "Charges & Billing" },
    ],
  },
  {
    label: "CONSOLE 2 — SUPER ADMIN",
    items: [
      { href: "/admin/security", icon: "🛡️", label: "Security Center" },
      { href: "/admin/verification", icon: "✅", label: "KYC Verification" },
      { href: "/admin/management", icon: "👑", label: "Platform Controls" },
    ],
  },
  {
    label: "CONSOLE 3 — SUPPORT",
    items: [
      { href: "/support/customers", icon: "👤", label: "Customers" },
      { href: "/support/tailors", icon: "✂️", label: "Tailors" },
      { href: "/support/prime", icon: "⭐", label: "Prime Tailors" },
      { href: "/support/manufacturers", icon: "🏭", label: "Manufacturers" },
      { href: "/support/vendors", icon: "🏪", label: "Vendors" },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      style={{ width: "var(--sidebar-width)", minHeight: "100vh" }}
      className="fixed left-0 top-0 flex flex-col border-r border-[#2a3044] bg-[#161b27] z-40"
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-[#2a3044]" style={{ height: "var(--header-height)" }}>
        <div className="w-8 h-8 bg-[#4f6ef7] rounded-lg flex items-center justify-center text-sm font-bold">T</div>
        <div>
          <div className="text-sm font-bold leading-tight">TAIP Internal</div>
          <div className="text-[10px] text-[#64748b]">Operations Console</div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        {navGroups.map((group) => (
          <div key={group.label} className="mb-5">
            <div className="text-[9px] font-semibold text-[#64748b] tracking-widest px-2 mb-2">{group.label}</div>
            {group.items.map((item) => {
              const active = pathname === item.href;
              return (
                <Link key={item.href} href={item.href}>
                  <div className={`flex items-center gap-3 px-3 py-2 rounded-lg mb-0.5 text-sm transition-all cursor-pointer
                    ${active
                      ? "bg-[#4f6ef7]/15 text-[#4f6ef7] font-medium"
                      : "text-[#94a3b8] hover:bg-[#1e2535] hover:text-white"
                    }`}>
                    <span className="text-base w-5 text-center">{item.icon}</span>
                    <span>{item.label}</span>
                    {active && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#4f6ef7]" />}
                  </div>
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-[#2a3044] px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-[#4f6ef7] flex items-center justify-center text-xs font-bold">A</div>
          <div>
            <div className="text-xs font-medium">Admin</div>
            <div className="text-[10px] text-[#64748b]">Super Admin</div>
          </div>
          <div className="ml-auto w-2 h-2 rounded-full bg-green-400" />
        </div>
      </div>
    </aside>
  );
}
