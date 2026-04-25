import SupportLayout from "@/components/layout/SupportLayout";
import LoginGate from "@/components/auth/LoginGate";

const vendors = [
  { id: "V001", name: "Kabir Textiles", category: "Fabric", products: 234, rating: 4.6, revenue: "₹4,20,000", status: "Active", joined: "Nov 2023" },
  { id: "V002", name: "Silk Route Co.", category: "Fabric", products: 89, rating: 4.4, revenue: "₹1,80,000", status: "Active", joined: "Jan 2024" },
  { id: "V003", name: "Button Palace", category: "Accessories", products: 412, rating: 4.7, revenue: "₹92,000", status: "Active", joined: "Oct 2023" },
  { id: "V004", name: "FastFabric Co.", category: "Manufacturer", products: 0, rating: 0, revenue: "₹0", status: "Pending", joined: "Today" },
  { id: "V005", name: "ZipZap Zippers", category: "Accessories", products: 67, rating: 3.8, revenue: "₹31,000", status: "Suspended", joined: "Feb 2024" },
];

function VendorsContent() {
  return (
    <SupportLayout title="Vendor Management" subtitle="Panel 5 — Manage vendors, catalogs & payments">
      <div className="grid grid-cols-4 gap-5 mb-7">
        {[
          { label: "Total Vendors", value: "438", icon: "🏪", color: "text-green-700", bg: "bg-green-50" },
          { label: "Active", value: "392", icon: "✅", color: "text-green-600", bg: "bg-green-50" },
          { label: "Pending Approval", value: "31", icon: "⏳", color: "text-yellow-600", bg: "bg-yellow-50" },
          { label: "Total Products", value: "12,841", icon: "📦", color: "text-blue-600", bg: "bg-blue-50" },
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
          <input type="text" placeholder="🔍  Search vendors..." className="border border-gray-200 rounded-lg px-4 py-2 text-sm w-64 focus:outline-none focus:border-green-400" />
          <button className="bg-green-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-green-700">+ Add Vendor</button>
        </div>
        <table className="w-full">
          <thead>
            <tr className="text-[11px] text-gray-400 uppercase tracking-wider bg-gray-50 border-b border-gray-100">
              <th className="text-left px-6 py-3">Vendor</th><th className="text-left px-4 py-3">Category</th>
              <th className="text-left px-4 py-3">Products</th><th className="text-left px-4 py-3">Rating</th>
              <th className="text-left px-4 py-3">Revenue</th><th className="text-left px-4 py-3">Status</th>
              <th className="text-left px-4 py-3">Joined</th><th className="text-left px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((v) => (
              <tr key={v.id} className="border-t border-gray-50 hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center text-sm font-bold text-green-700">{v.name.charAt(0)}</div>
                    <div><div className="text-sm font-semibold text-gray-900">{v.name}</div><div className="text-xs text-gray-400">{v.id}</div></div>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm text-gray-600">{v.category}</td>
                <td className="px-4 py-4 text-sm font-semibold">{v.products}</td>
                <td className="px-4 py-4 text-sm font-semibold">{v.rating ? `★ ${v.rating}` : "—"}</td>
                <td className="px-4 py-4 text-sm font-semibold text-green-600">{v.revenue}</td>
                <td className="px-4 py-4"><span className={`text-xs px-2.5 py-1 rounded-full font-medium border ${v.status==="Active"?"bg-green-50 text-green-700 border-green-200":v.status==="Pending"?"bg-yellow-50 text-yellow-700 border-yellow-200":"bg-red-50 text-red-600 border-red-200"}`}>{v.status}</span></td>
                <td className="px-4 py-4 text-sm text-gray-400">{v.joined}</td>
                <td className="px-4 py-4">
                  <div className="flex gap-2">
                    <button className="text-xs border border-gray-200 px-3 py-1.5 rounded-lg text-gray-600">View</button>
                    <button className="text-xs border border-gray-200 px-3 py-1.5 rounded-lg text-gray-600">Catalog</button>
                    {v.status==="Pending"&&<button className="text-xs bg-green-50 border border-green-200 text-green-700 px-3 py-1.5 rounded-lg">Approve</button>}
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

export default function VendorsPage() {
  return (
    <LoginGate role="Vendor Manager" department="Support Console — Panel 5" icon="🏪" accent="#15803d" accentLight="#f0fdf4" storageKey="vendor-manager">
      <VendorsContent />
    </LoginGate>
  );
}
