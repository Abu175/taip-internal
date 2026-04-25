import Link from "next/link";

const panels = [
  {
    id: 1,
    title: "Customer Management",
    description: "View profiles, orders, complaints, refunds, block/unblock",
    href: "/support/customer",
    icon: "👤",
    color: "bg-sky-600",
  },
  {
    id: 2,
    title: "Tailor Management",
    description: "Tailor profiles, performance, payouts, warnings",
    href: "/support/tailor",
    icon: "✂️",
    color: "bg-purple-600",
  },
  {
    id: 3,
    title: "Prime Tailors Management",
    description: "Prime badge, eligibility, priority routing, premium rates",
    href: "/support/prime-tailors",
    icon: "⭐",
    color: "bg-yellow-500",
  },
  {
    id: 4,
    title: "Manufacturer Tailor Management",
    description: "Bulk orders, factory registration, B2B pricing, QC reports",
    href: "/support/manufacturer",
    icon: "🏭",
    color: "bg-orange-600",
  },
  {
    id: 5,
    title: "Vendor Management",
    description: "Vendor profiles, catalog approval, payments, disputes",
    href: "/support/vendor",
    icon: "🏪",
    color: "bg-green-600",
  },
];

export default function SupportConsole() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <header className="border-b border-gray-800 px-8 py-5 flex items-center gap-3">
        <Link href="/" className="text-gray-400 hover:text-white text-sm">← Home</Link>
        <span className="text-gray-600">/</span>
        <span className="text-sm font-semibold">🎧 Support Console</span>
      </header>

      <div className="max-w-5xl mx-auto px-8 py-12">
        <h2 className="text-2xl font-bold mb-2">Support & Management Console</h2>
        <p className="text-gray-400 mb-10">Select a panel to manage customers, tailors, or vendors.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {panels.map((p) => (
            <Link key={p.id} href={p.href}>
              <div className="group border border-gray-800 rounded-2xl p-5 hover:border-gray-600 hover:bg-gray-900 transition-all cursor-pointer h-full">
                <div className={`w-10 h-10 ${p.color} rounded-lg flex items-center justify-center text-xl mb-3`}>
                  {p.icon}
                </div>
                <div className="text-xs text-gray-500 mb-1">Panel {p.id}</div>
                <h3 className="font-semibold mb-1 group-hover:text-white">{p.title}</h3>
                <p className="text-sm text-gray-400">{p.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
