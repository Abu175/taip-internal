import ConsoleLayout from "@/components/layout/ConsoleLayout";

const tailors = [
  { id: "T001", name: "Mohammed Ali", city: "Mumbai", orders: 312, rating: 4.8, earnings: "₹1,24,000", status: "Active", kyc: true, joined: "Oct 2023" },
  { id: "T002", name: "Suresh Kumar", city: "Delhi", orders: 218, rating: 4.6, earnings: "₹89,000", status: "Active", kyc: true, joined: "Dec 2023" },
  { id: "T003", name: "Rina Bose", city: "Kolkata", orders: 97, rating: 4.2, earnings: "₹38,500", status: "Active", kyc: true, joined: "Feb 2024" },
  { id: "T004", name: "Deepak Nair", city: "Bangalore", orders: 44, rating: 3.9, earnings: "₹17,200", status: "Warning", kyc: true, joined: "Mar 2024" },
  { id: "T005", name: "Arjun Das", city: "Chennai", orders: 156, rating: 4.7, earnings: "₹63,400", status: "Active", kyc: true, joined: "Jan 2024" },
  { id: "T006", name: "Nisha Verma", city: "Pune", orders: 0, rating: 0, earnings: "₹0", status: "Pending KYC", kyc: false, joined: "Today" },
];

export default function TailorsPage() {
  return (
    <ConsoleLayout title="Tailor Management" subtitle="Console 3 › Panel 2 — Manage all tailors">
      <div className="grid grid-cols-4 gap-4 mb-7">
        {[
          { label: "Total Tailors", value: "1,204", icon: "✂️", color: "text-purple-400" },
          { label: "Active", value: "1,089", icon: "✅", color: "text-green-400" },
          { label: "Pending KYC", value: "67", icon: "⏳", color: "text-yellow-400" },
          { label: "Suspended", value: "48", icon: "⛔", color: "text-red-400" },
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
            <input type="text" placeholder="Search tailors..." className="bg-[#1e2535] border border-[#2a3044] rounded-lg px-4 py-2 text-sm text-white placeholder-[#64748b] w-64 focus:outline-none focus:border-[#4f6ef7]" />
            <select className="bg-[#1e2535] border border-[#2a3044] rounded-lg px-3 py-2 text-sm text-[#94a3b8] focus:outline-none">
              <option>All Status</option>
              <option>Active</option>
              <option>Warning</option>
              <option>Suspended</option>
              <option>Pending KYC</option>
            </select>
          </div>
          <button className="bg-[#4f6ef7] text-white text-sm px-4 py-2 rounded-lg hover:bg-[#3d5ce5] transition-colors">+ Add Tailor</button>
        </div>

        <table className="w-full">
          <thead>
            <tr className="text-[11px] text-[#64748b] uppercase tracking-wider bg-[#1a2030]">
              <th className="text-left px-6 py-3">Tailor</th>
              <th className="text-left px-4 py-3">City</th>
              <th className="text-left px-4 py-3">Orders</th>
              <th className="text-left px-4 py-3">Rating</th>
              <th className="text-left px-4 py-3">Earnings</th>
              <th className="text-left px-4 py-3">KYC</th>
              <th className="text-left px-4 py-3">Status</th>
              <th className="text-left px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tailors.map((t) => (
              <tr key={t.id} className="border-t border-[#2a3044] hover:bg-[#1e2535] transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-xs font-bold text-purple-400">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-medium">{t.name}</div>
                      <div className="text-xs text-[#64748b]">ID: {t.id}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm text-[#94a3b8]">{t.city}</td>
                <td className="px-4 py-4 text-sm font-medium">{t.orders}</td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400 text-sm">★</span>
                    <span className="text-sm font-medium">{t.rating || "—"}</span>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm font-medium text-green-400">{t.earnings}</td>
                <td className="px-4 py-4">
                  <span className={`text-xs px-2 py-1 rounded-full ${t.kyc ? "bg-green-500/15 text-green-400" : "bg-red-500/15 text-red-400"}`}>
                    {t.kyc ? "✓ Verified" : "✗ Pending"}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    t.status === "Active" ? "bg-green-500/15 text-green-400" :
                    t.status === "Warning" ? "bg-yellow-500/15 text-yellow-400" :
                    t.status === "Suspended" ? "bg-red-500/15 text-red-400" :
                    "bg-gray-500/15 text-gray-400"
                  }`}>{t.status}</span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex gap-2">
                    <button className="text-xs bg-[#1e2535] px-3 py-1.5 rounded-md hover:bg-[#2a3044]">View</button>
                    <button className="text-xs bg-[#1e2535] px-3 py-1.5 rounded-md hover:bg-[#2a3044]">Payout</button>
                    <button className="text-xs bg-yellow-500/15 text-yellow-400 px-3 py-1.5 rounded-md hover:bg-yellow-500/25">Warn</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-center justify-between px-6 py-4 border-t border-[#2a3044]">
          <div className="text-xs text-[#64748b]">Showing 6 of 1,204 tailors</div>
          <div className="flex gap-1">
            {["←", "1", "2", "3", "→"].map((p) => (
              <button key={p} className={`w-8 h-8 rounded-lg text-xs transition-colors ${p === "1" ? "bg-[#4f6ef7] text-white" : "bg-[#1e2535] text-[#94a3b8] hover:bg-[#2a3044]"}`}>{p}</button>
            ))}
          </div>
        </div>
      </div>
    </ConsoleLayout>
  );
}
