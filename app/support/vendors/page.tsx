import ConsoleLayout from "@/components/layout/ConsoleLayout";

const vendors = [
  { id: "V001", name: "Kabir Textiles", category: "Fabric", products: 234, rating: 4.6, revenue: "₹4,20,000", status: "Active", joined: "Nov 2023" },
  { id: "V002", name: "Silk Route Co.", category: "Fabric", products: 89, rating: 4.4, revenue: "₹1,80,000", status: "Active", joined: "Jan 2024" },
  { id: "V003", name: "Button Palace", category: "Accessories", products: 412, rating: 4.7, revenue: "₹92,000", status: "Active", joined: "Oct 2023" },
  { id: "V004", name: "FastFabric Co.", category: "Manufacturer", products: 0, rating: 0, revenue: "₹0", status: "Pending", joined: "Today" },
  { id: "V005", name: "ZipZap Zippers", category: "Accessories", products: 67, rating: 3.8, revenue: "₹31,000", status: "Suspended", joined: "Feb 2024" },
];

export default function VendorsPage() {
  return (
    <ConsoleLayout title="Vendor Management" subtitle="Console 3 › Panel 5 — Manage all vendors & suppliers">
      <div className="grid grid-cols-4 gap-4 mb-7">
        {[
          { label: "Total Vendors", value: "438", icon: "🏪", color: "text-green-400" },
          { label: "Active", value: "392", icon: "✅", color: "text-green-400" },
          { label: "Pending Approval", value: "31", icon: "⏳", color: "text-yellow-400" },
          { label: "Total Products", value: "12,841", icon: "📦", color: "text-blue-400" },
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
          <div className="flex items-center gap-3">
            <input type="text" placeholder="Search vendors..." className="bg-[#1e2535] border border-[#2a3044] rounded-lg px-4 py-2 text-sm text-white placeholder-[#64748b] w-64 focus:outline-none focus:border-[#4f6ef7]" />
            <select className="bg-[#1e2535] border border-[#2a3044] rounded-lg px-3 py-2 text-sm text-[#94a3b8] focus:outline-none">
              <option>All Categories</option>
              <option>Fabric</option>
              <option>Accessories</option>
              <option>Manufacturer</option>
            </select>
          </div>
          <button className="bg-[#4f6ef7] text-white text-sm px-4 py-2 rounded-lg hover:bg-[#3d5ce5] transition-colors">+ Add Vendor</button>
        </div>

        <table className="w-full">
          <thead>
            <tr className="text-[11px] text-[#64748b] uppercase tracking-wider bg-[#1a2030]">
              <th className="text-left px-6 py-3">Vendor</th>
              <th className="text-left px-4 py-3">Category</th>
              <th className="text-left px-4 py-3">Products</th>
              <th className="text-left px-4 py-3">Rating</th>
              <th className="text-left px-4 py-3">Revenue</th>
              <th className="text-left px-4 py-3">Status</th>
              <th className="text-left px-4 py-3">Joined</th>
              <th className="text-left px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((v) => (
              <tr key={v.id} className="border-t border-[#2a3044] hover:bg-[#1e2535] transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-xs font-bold text-green-400">
                      {v.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-medium">{v.name}</div>
                      <div className="text-xs text-[#64748b]">{v.id}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm text-[#94a3b8]">{v.category}</td>
                <td className="px-4 py-4 text-sm font-medium">{v.products}</td>
                <td className="px-4 py-4">
                  {v.rating ? (
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400 text-sm">★</span>
                      <span className="text-sm font-medium">{v.rating}</span>
                    </div>
                  ) : <span className="text-[#64748b] text-sm">—</span>}
                </td>
                <td className="px-4 py-4 text-sm font-medium text-green-400">{v.revenue}</td>
                <td className="px-4 py-4">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    v.status === "Active" ? "bg-green-500/15 text-green-400" :
                    v.status === "Pending" ? "bg-yellow-500/15 text-yellow-400" :
                    "bg-red-500/15 text-red-400"
                  }`}>{v.status}</span>
                </td>
                <td className="px-4 py-4 text-sm text-[#64748b]">{v.joined}</td>
                <td className="px-4 py-4">
                  <div className="flex gap-2">
                    <button className="text-xs bg-[#1e2535] px-3 py-1.5 rounded-md hover:bg-[#2a3044]">View</button>
                    <button className="text-xs bg-[#1e2535] px-3 py-1.5 rounded-md hover:bg-[#2a3044]">Catalog</button>
                    {v.status === "Pending" && (
                      <button className="text-xs bg-green-500/15 text-green-400 px-3 py-1.5 rounded-md hover:bg-green-500/25">Approve</button>
                    )}
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
