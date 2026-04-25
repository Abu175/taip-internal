import SupportLayout from "@/components/layout/SupportLayout";
import LoginGate from "@/components/auth/LoginGate";

const tailors = [
  { id: "T001", name: "Mohammed Ali", city: "Mumbai", orders: 312, rating: 4.8, earnings: "₹1,24,000", status: "Active", kyc: true },
  { id: "T002", name: "Suresh Kumar", city: "Delhi", orders: 218, rating: 4.6, earnings: "₹89,000", status: "Active", kyc: true },
  { id: "T003", name: "Rina Bose", city: "Kolkata", orders: 97, rating: 4.2, earnings: "₹38,500", status: "Active", kyc: true },
  { id: "T004", name: "Deepak Nair", city: "Bangalore", orders: 44, rating: 3.9, earnings: "₹17,200", status: "Warning", kyc: true },
  { id: "T005", name: "Arjun Das", city: "Chennai", orders: 156, rating: 4.7, earnings: "₹63,400", status: "Active", kyc: true },
  { id: "T006", name: "Nisha Verma", city: "Pune", orders: 0, rating: 0, earnings: "₹0", status: "Pending KYC", kyc: false },
];

const statusStyle: Record<string, string> = {
  "Active": "bg-green-50 text-green-700 border border-green-200",
  "Warning": "bg-yellow-50 text-yellow-700 border border-yellow-200",
  "Suspended": "bg-red-50 text-red-700 border border-red-200",
  "Pending KYC": "bg-gray-100 text-gray-600 border border-gray-200",
};

function TailorsContent() {
  return (
    <SupportLayout title="Tailor Management" subtitle="Panel 2 — Manage tailors, payouts & performance">
      <div className="grid grid-cols-4 gap-5 mb-7">
        {[
          { label: "Total Tailors", value: "1,204", icon: "✂️", color: "text-purple-600", bg: "bg-purple-50" },
          { label: "Active", value: "1,089", icon: "✅", color: "text-green-600", bg: "bg-green-50" },
          { label: "Pending KYC", value: "67", icon: "⏳", color: "text-yellow-600", bg: "bg-yellow-50" },
          { label: "Suspended", value: "48", icon: "⛔", color: "text-red-600", bg: "bg-red-50" },
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
          <input type="text" placeholder="🔍  Search tailors..." className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 w-64 focus:outline-none focus:border-purple-400" />
          <button className="bg-purple-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-purple-700">+ Add Tailor</button>
        </div>
        <table className="w-full">
          <thead>
            <tr className="text-[11px] text-gray-400 uppercase tracking-wider bg-gray-50 border-b border-gray-100">
              <th className="text-left px-6 py-3">Tailor</th><th className="text-left px-4 py-3">City</th>
              <th className="text-left px-4 py-3">Orders</th><th className="text-left px-4 py-3">Rating</th>
              <th className="text-left px-4 py-3">Earnings</th><th className="text-left px-4 py-3">KYC</th>
              <th className="text-left px-4 py-3">Status</th><th className="text-left px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tailors.map((t) => (
              <tr key={t.id} className="border-t border-gray-50 hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center text-sm font-bold text-purple-700">{t.name.charAt(0)}</div>
                    <div><div className="text-sm font-semibold text-gray-900">{t.name}</div><div className="text-xs text-gray-400">{t.id}</div></div>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm text-gray-600">{t.city}</td>
                <td className="px-4 py-4 text-sm font-semibold">{t.orders}</td>
                <td className="px-4 py-4 text-sm font-semibold">{t.rating ? `★ ${t.rating}` : "—"}</td>
                <td className="px-4 py-4 text-sm font-semibold text-green-600">{t.earnings}</td>
                <td className="px-4 py-4"><span className={`text-xs px-2.5 py-1 rounded-full font-medium ${t.kyc ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-600 border border-red-200"}`}>{t.kyc ? "✓ Verified" : "✗ Pending"}</span></td>
                <td className="px-4 py-4"><span className={`text-xs px-2.5 py-1 rounded-full font-medium ${statusStyle[t.status]}`}>{t.status}</span></td>
                <td className="px-4 py-4">
                  <div className="flex gap-2">
                    <button className="text-xs border border-gray-200 px-3 py-1.5 rounded-lg text-gray-600">View</button>
                    <button className="text-xs border border-gray-200 px-3 py-1.5 rounded-lg text-gray-600">Payout</button>
                    <button className="text-xs bg-yellow-50 border border-yellow-200 text-yellow-700 px-3 py-1.5 rounded-lg">Warn</button>
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

export default function TailorsPage() {
  return (
    <LoginGate role="Tailor Manager" department="Support Console — Panel 2" icon="✂️" accent="#7c3aed" accentLight="#f5f3ff" storageKey="tailor-manager">
      <TailorsContent />
    </LoginGate>
  );
}
