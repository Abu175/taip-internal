import Link from "next/link";

const consoles = [
  {
    id: "01",
    title: "Tech & Infrastructure",
    desc: "Backend, Hosting, App Management, AI Models, Charges & Billing",
    href: "/tech/backend",
    icon: "🖥️",
    accent: "#3b5bdb",
    bg: "#eef2ff",
    border: "#c5d0fc",
    tags: ["Backend", "Hosting", "App", "AI Models", "Billing"],
  },
  {
    id: "02",
    title: "Super Admin",
    desc: "Security Center, KYC Verification, Platform Controls & Approvals",
    href: "/admin/security",
    icon: "🔐",
    accent: "#c92a2a",
    bg: "#fff5f5",
    border: "#ffc9c9",
    tags: ["Security", "KYC", "Verification", "Controls"],
  },
  {
    id: "03",
    title: "Support Console",
    desc: "Customer, Tailor, Prime Tailors, Manufacturer & Vendor Management",
    href: "/support/customers",
    icon: "🎧",
    accent: "#2f9e44",
    bg: "#ebfbee",
    border: "#b2f2bb",
    tags: ["Customers", "Tailors", "Prime", "Manufacturers", "Vendors"],
  },
];

export default function Hub() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top Bar */}
      <header className="border-b border-gray-100 px-12 py-5 flex items-center justify-between bg-white">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#3b5bdb] rounded-xl flex items-center justify-center text-white font-bold text-sm">T</div>
          <div>
            <div className="font-bold text-gray-900 text-base leading-tight">TAIP Internal</div>
            <div className="text-xs text-gray-400">Operations Hub</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
            All systems online
          </div>
          <div className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2 border border-gray-200">
            <div className="w-6 h-6 rounded-full bg-[#3b5bdb] flex items-center justify-center text-white text-xs font-bold">A</div>
            <span className="text-sm font-medium text-gray-700">Admin</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 py-16">
        <div className="text-center mb-14">
          <div className="inline-block bg-[#eef2ff] text-[#3b5bdb] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 border border-[#c5d0fc]">
            Internal Operations Platform
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Select a Console</h1>
          <p className="text-gray-500 text-base max-w-lg mx-auto">
            Each console is role-restricted. Choose your panel to start managing.
          </p>
        </div>

        {/* Console Cards */}
        <div className="grid grid-cols-3 gap-6 w-full max-w-5xl">
          {consoles.map((c) => (
            <Link key={c.id} href={c.href}>
              <div
                className="group rounded-2xl border-2 p-7 bg-white hover:shadow-lg transition-all duration-200 cursor-pointer h-full flex flex-col"
                style={{ borderColor: c.border }}
              >
                {/* Console number */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-bold text-gray-300 tracking-widest">CONSOLE {c.id}</span>
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl"
                    style={{ background: c.bg }}
                  >
                    {c.icon}
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#3b5bdb] transition-colors">
                  {c.title}
                </h2>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed flex-1">{c.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {c.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{ background: c.bg, color: c.accent }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all"
                  style={{ background: c.bg, color: c.accent }}
                >
                  <span>Open Console</span>
                  <span className="text-lg">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-5 gap-4 mt-14 w-full max-w-5xl">
          {[
            { label: "Customers", value: "24,831", icon: "👤" },
            { label: "Tailors", value: "1,204", icon: "✂️" },
            { label: "Prime Tailors", value: "186", icon: "⭐" },
            { label: "Vendors", value: "438", icon: "🏪" },
            { label: "Orders Today", value: "3,920", icon: "📦" },
          ].map((s) => (
            <div key={s.label} className="bg-white border border-gray-100 rounded-xl p-4 text-center shadow-sm">
              <div className="text-xl mb-1">{s.icon}</div>
              <div className="text-lg font-bold text-gray-900">{s.value}</div>
              <div className="text-xs text-gray-400 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
