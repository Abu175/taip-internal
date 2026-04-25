import ConsoleLayout from "@/components/layout/ConsoleLayout";

const manufacturers = [
  { id: "MF001", name: "Bharat Garments Ltd.", city: "Surat", capacity: "5,000/mo", bulkOrders: 18, revenue: "₹12,40,000", status: "Active", certified: true },
  { id: "MF002", name: "Elite Stitch Works", city: "Tirupur", capacity: "8,000/mo", bulkOrders: 31, revenue: "₹22,80,000", status: "Active", certified: true },
  { id: "MF003", name: "FastFabric Co.", city: "Ludhiana", capacity: "2,000/mo", bulkOrders: 0, revenue: "₹0", status: "Pending", certified: false },
  { id: "MF004", name: "Royal Weavers", city: "Varanasi", capacity: "3,500/mo", bulkOrders: 9, revenue: "₹6,30,000", status: "Active", certified: true },
];

export default function ManufacturersPage() {
  return (
    <ConsoleLayout title="Manufacturer Tailor Management" subtitle="Console 3 › Panel 4 — Bulk orders, B2B, factory management">
      <div className="grid grid-cols-4 gap-4 mb-7">
        {[
          { label: "Manufacturers", value: "94", icon: "🏭", color: "text-orange-400" },
          { label: "Active B2B Orders", value: "312", icon: "📋", color: "text-blue-400" },
          { label: "Monthly Capacity", value: "1.2L units", icon: "⚙️", color: "text-purple-400" },
          { label: "B2B Revenue", value: "₹84L", icon: "💰", color: "text-green-400" },
        ].map((s) => (
          <div key={s.label} className="bg-[#161b27] border border-[#2a3044] rounded-xl p-5">
            <div className="text-2xl mb-1">{s.icon}</div>
            <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
            <div className="text-xs text-[#64748b] mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-[#161b27] rounded-xl border border-[#2a3044]">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2a3044]">
          <h3 className="font-semibold text-sm">Manufacturer Units</h3>
          <div className="flex gap-2">
            <button className="bg-[#1e2535] border border-[#2a3044] text-sm px-4 py-2 rounded-lg hover:bg-[#2a3044] transition-colors">⬇ Export Report</button>
            <button className="bg-[#4f6ef7] text-white text-sm px-4 py-2 rounded-lg hover:bg-[#3d5ce5] transition-colors">+ Register Unit</button>
          </div>
        </div>

        <table className="w-full">
          <thead>
            <tr className="text-[11px] text-[#64748b] uppercase tracking-wider bg-[#1a2030]">
              <th className="text-left px-6 py-3">Manufacturer</th>
              <th className="text-left px-4 py-3">City</th>
              <th className="text-left px-4 py-3">Capacity</th>
              <th className="text-left px-4 py-3">Bulk Orders</th>
              <th className="text-left px-4 py-3">Revenue</th>
              <th className="text-left px-4 py-3">Certified</th>
              <th className="text-left px-4 py-3">Status</th>
              <th className="text-left px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {manufacturers.map((m) => (
              <tr key={m.id} className="border-t border-[#2a3044] hover:bg-[#1e2535] transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-xs font-bold text-orange-400">
                      {m.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-medium">{m.name}</div>
                      <div className="text-xs text-[#64748b]">{m.id}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm text-[#94a3b8]">{m.city}</td>
                <td className="px-4 py-4 text-sm font-medium">{m.capacity}</td>
                <td className="px-4 py-4 text-sm font-medium">{m.bulkOrders}</td>
                <td className="px-4 py-4 text-sm font-medium text-green-400">{m.revenue}</td>
                <td className="px-4 py-4">
                  <span className={`text-xs px-2 py-1 rounded-full ${m.certified ? "bg-green-500/15 text-green-400" : "bg-red-500/15 text-red-400"}`}>
                    {m.certified ? "✓ Certified" : "✗ Not Certified"}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    m.status === "Active" ? "bg-green-500/15 text-green-400" : "bg-yellow-500/15 text-yellow-400"
                  }`}>{m.status}</span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex gap-2">
                    <button className="text-xs bg-[#1e2535] px-3 py-1.5 rounded-md hover:bg-[#2a3044]">View</button>
                    <button className="text-xs bg-[#1e2535] px-3 py-1.5 rounded-md hover:bg-[#2a3044]">Orders</button>
                    <button className="text-xs bg-orange-500/15 text-orange-400 px-3 py-1.5 rounded-md hover:bg-orange-500/25">QC Report</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ConsoleLayout>
  );
}
