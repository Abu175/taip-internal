import ConsoleLayout from "@/components/layout/ConsoleLayout";

const primeTailors = [
  { id: "PT001", name: "Mohammed Ali", city: "Mumbai", orders: 312, rating: 4.8, earnings: "₹1,24,000", badge: "Gold Prime", since: "Jun 2024" },
  { id: "PT002", name: "Arjun Das", city: "Chennai", orders: 156, rating: 4.7, earnings: "₹63,400", badge: "Silver Prime", since: "Aug 2024" },
  { id: "PT003", name: "Suresh Kumar", city: "Delhi", orders: 218, rating: 4.6, earnings: "₹89,000", badge: "Silver Prime", since: "Sep 2024" },
  { id: "PT004", name: "Meena Iyer", city: "Bangalore", orders: 290, rating: 4.9, earnings: "₹1,38,000", badge: "Gold Prime", since: "May 2024" },
];

const badgeColor: Record<string, string> = {
  "Gold Prime": "bg-yellow-500/15 text-yellow-400 border border-yellow-500/30",
  "Silver Prime": "bg-gray-400/15 text-gray-300 border border-gray-400/30",
};

export default function PrimeTailorsPage() {
  return (
    <ConsoleLayout title="Prime Tailors Management" subtitle="Console 3 › Panel 3 — Manage Prime badge & benefits">
      <div className="grid grid-cols-4 gap-4 mb-7">
        {[
          { label: "Total Prime", value: "186", icon: "⭐", color: "text-yellow-400" },
          { label: "Gold Prime", value: "42", icon: "🥇", color: "text-yellow-400" },
          { label: "Silver Prime", value: "144", icon: "🥈", color: "text-gray-300" },
          { label: "Avg. Rating", value: "4.76", icon: "📊", color: "text-blue-400" },
        ].map((s) => (
          <div key={s.label} className="bg-[#161b27] border border-[#2a3044] rounded-xl p-5">
            <div className="text-2xl mb-1">{s.icon}</div>
            <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
            <div className="text-xs text-[#64748b] mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Criteria Card */}
      <div className="bg-[#161b27] border border-[#2a3044] rounded-xl p-5 mb-6">
        <h3 className="font-semibold text-sm mb-4">Prime Eligibility Criteria</h3>
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "Minimum Orders", value: "100+", icon: "📦" },
            { label: "Minimum Rating", value: "4.5★", icon: "⭐" },
            { label: "Max Complaints", value: "< 3%", icon: "🎫" },
          ].map((c) => (
            <div key={c.label} className="bg-[#1e2535] rounded-lg p-4 flex items-center gap-3">
              <span className="text-2xl">{c.icon}</span>
              <div>
                <div className="text-sm font-bold text-yellow-400">{c.value}</div>
                <div className="text-xs text-[#64748b]">{c.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#161b27] rounded-xl border border-[#2a3044]">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2a3044]">
          <h3 className="font-semibold text-sm">Prime Tailors List</h3>
          <button className="bg-yellow-500/15 text-yellow-400 border border-yellow-500/30 text-sm px-4 py-2 rounded-lg hover:bg-yellow-500/25 transition-colors">⭐ Assign Prime Badge</button>
        </div>
        <table className="w-full">
          <thead>
            <tr className="text-[11px] text-[#64748b] uppercase tracking-wider bg-[#1a2030]">
              <th className="text-left px-6 py-3">Tailor</th>
              <th className="text-left px-4 py-3">City</th>
              <th className="text-left px-4 py-3">Orders</th>
              <th className="text-left px-4 py-3">Rating</th>
              <th className="text-left px-4 py-3">Earnings</th>
              <th className="text-left px-4 py-3">Badge</th>
              <th className="text-left px-4 py-3">Prime Since</th>
              <th className="text-left px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {primeTailors.map((t) => (
              <tr key={t.id} className="border-t border-[#2a3044] hover:bg-[#1e2535] transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center text-xs font-bold text-yellow-400">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-medium">{t.name}</div>
                      <div className="text-xs text-[#64748b]">{t.id}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm text-[#94a3b8]">{t.city}</td>
                <td className="px-4 py-4 text-sm font-medium">{t.orders}</td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400 text-sm">★</span>
                    <span className="text-sm font-medium">{t.rating}</span>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm font-medium text-green-400">{t.earnings}</td>
                <td className="px-4 py-4">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${badgeColor[t.badge]}`}>{t.badge}</span>
                </td>
                <td className="px-4 py-4 text-sm text-[#64748b]">{t.since}</td>
                <td className="px-4 py-4">
                  <div className="flex gap-2">
                    <button className="text-xs bg-[#1e2535] px-3 py-1.5 rounded-md hover:bg-[#2a3044]">View</button>
                    <button className="text-xs bg-yellow-500/15 text-yellow-400 px-3 py-1.5 rounded-md hover:bg-yellow-500/25">Upgrade</button>
                    <button className="text-xs bg-red-500/15 text-red-400 px-3 py-1.5 rounded-md hover:bg-red-500/25">Revoke</button>
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
