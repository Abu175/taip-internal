import Link from "next/link";

export default function Home() {
  const consoles = [
    {
      id: 1,
      title: "Tech & Infrastructure",
      description: "Backend, Hosting, App, AI Models, Charges",
      href: "/tech-panel",
      icon: "🖥️",
      color: "bg-blue-600",
      access: "Tech Team Only",
    },
    {
      id: 2,
      title: "Super Admin",
      description: "Security, KYC Verification, Platform Controls",
      href: "/super-admin",
      icon: "🔐",
      color: "bg-red-600",
      access: "Founders / Senior Management",
    },
    {
      id: 3,
      title: "Support Console",
      description: "Customer, Tailor, Prime, Manufacturer & Vendor Management",
      href: "/support",
      icon: "🎧",
      color: "bg-green-600",
      access: "Support Team",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">✂️</span>
          <div>
            <h1 className="text-xl font-bold">TAIP Internal</h1>
            <p className="text-xs text-gray-400">Operations Console Hub</p>
          </div>
        </div>
        <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full border border-green-500/30">
          ● System Online
        </span>
      </header>

      {/* Main */}
      <div className="max-w-5xl mx-auto px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Select Your Console</h2>
          <p className="text-gray-400">Access is role-restricted. Each console is for authorized personnel only.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {consoles.map((c) => (
            <Link key={c.id} href={c.href}>
              <div className="group border border-gray-800 rounded-2xl p-6 hover:border-gray-600 hover:bg-gray-900 transition-all cursor-pointer h-full">
                <div className={`w-12 h-12 ${c.color} rounded-xl flex items-center justify-center text-2xl mb-4`}>
                  {c.icon}
                </div>
                <div className="text-xs text-gray-500 mb-1">Console {c.id}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-white">{c.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{c.description}</p>
                <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                  🔒 {c.access}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Total Customers", value: "—", icon: "👤" },
            { label: "Active Tailors", value: "—", icon: "✂️" },
            { label: "Vendors", value: "—", icon: "🏪" },
            { label: "Orders Today", value: "—", icon: "📦" },
          ].map((stat) => (
            <div key={stat.label} className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-xl font-bold">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
