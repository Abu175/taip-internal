import SupportLayout from "@/components/layout/SupportLayout";

const manufacturers = [
  { id: "MF001", name: "Bharat Garments Ltd.", city: "Surat", capacity: "5,000/mo", bulkOrders: 18, revenue: "₹12,40,000", status: "Active", certified: true },
  { id: "MF002", name: "Elite Stitch Works", city: "Tirupur", capacity: "8,000/mo", bulkOrders: 31, revenue: "₹22,80,000", status: "Active", certified: true },
  { id: "MF003", name: "FastFabric Co.", city: "Ludhiana", capacity: "2,000/mo", bulkOrders: 0, revenue: "₹0", status: "Pending", certified: false },
  { id: "MF004", name: "Royal Weavers", city: "Varanasi", capacity: "3,500/mo", bulkOrders: 9, revenue: "₹6,30,000", status: "Active", certified: true },
];

export default function ManufacturersPage() {
  return (
    <SupportLayout title="Manufacturer Tailor Management" subtitle="Panel 4 — Bulk orders, factory registration, B2B pricing">
      <div className="grid grid-cols-4 gap-5 mb-7">
        {[
          { label: "Manufacturers", value: "94", icon: "🏭", color: "text-orange-600", bg: "bg-orange-50" },
          { label: "Active B2B Orders", value: "312", icon: "📋", color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Monthly Capacity", value: "1.2L units", icon: "⚙️", color: "text-purple-600", bg: "bg-purple-50" },
          { label: "B2B Revenue", value: "₹84L", icon: "💰", color: "text-green-600", bg: "bg-green-50" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
            <div className={`w-10 h-10 ${s.bg} rounded-lg flex items-center justify-center text-xl mb-3`}>{s.icon}</div>
            <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
            <div className="text-xs text-gray-400 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <input type="text" placeholder="🔍  Search manufacturers..." className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 placeholder-gray-400 w-64 focus:outline-none focus:border-orange-400" />
          </div>
          <div className="flex gap-2">
            <button className="border border-gray-200 text-gray-600 text-sm px-4 py-2 rounded-lg hover:bg-gray-50">⬇ Export Report</button>
            <button className="bg-orange-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">+ Register Unit</button>
          </div>
        </div>

        <table className="w-full">
          <thead>
            <tr className="text-[11px] text-gray-400 uppercase tracking-wider bg-gray-50 border-b border-gray-100">
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
              <tr key={m.id} className="border-t border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-sm font-bold text-orange-700">{m.name.charAt(0)}</div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{m.name}</div>
                      <div className="text-xs text-gray-400">{m.id}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm text-gray-600">{m.city}</td>
                <td className="px-4 py-4 text-sm font-semibold text-gray-800">{m.capacity}</td>
                <td className="px-4 py-4 text-sm font-semibold text-gray-800">{m.bulkOrders}</td>
                <td className="px-4 py-4 text-sm font-semibold text-green-600">{m.revenue}</td>
                <td className="px-4 py-4">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium border ${m.certified ? "bg-green-50 text-green-700 border-green-200" : "bg-red-50 text-red-600 border-red-200"}`}>
                    {m.certified ? "✓ Certified" : "✗ Not Certified"}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium border ${m.status === "Active" ? "bg-green-50 text-green-700 border-green-200" : "bg-yellow-50 text-yellow-700 border-yellow-200"}`}>
                    {m.status}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex gap-2">
                    <button className="text-xs border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 text-gray-600">View</button>
                    <button className="text-xs border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 text-gray-600">Orders</button>
                    <button className="text-xs bg-orange-50 border border-orange-200 text-orange-700 px-3 py-1.5 rounded-lg hover:bg-orange-100">QC Report</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SupportLayout>
  );
}
