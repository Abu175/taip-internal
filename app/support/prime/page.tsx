import SupportLayout from "@/components/layout/SupportLayout";

const primeTailors = [
  { id: "PT001", name: "Mohammed Ali", city: "Mumbai", orders: 312, rating: 4.8, earnings: "₹1,24,000", badge: "Gold Prime", since: "Jun 2024" },
  { id: "PT002", name: "Arjun Das", city: "Chennai", orders: 156, rating: 4.7, earnings: "₹63,400", badge: "Silver Prime", since: "Aug 2024" },
  { id: "PT003", name: "Suresh Kumar", city: "Delhi", orders: 218, rating: 4.6, earnings: "₹89,000", badge: "Silver Prime", since: "Sep 2024" },
  { id: "PT004", name: "Meena Iyer", city: "Bangalore", orders: 290, rating: 4.9, earnings: "₹1,38,000", badge: "Gold Prime", since: "May 2024" },
];

export default function PrimeTailorsPage() {
  return (
    <SupportLayout title="Prime Tailors Management" subtitle="Panel 3 — Manage Prime badges, benefits & eligibility">
      <div className="grid grid-cols-4 gap-5 mb-7">
        {[
          { label: "Total Prime", value: "186", icon: "⭐", color: "text-yellow-600", bg: "bg-yellow-50" },
          { label: "Gold Prime", value: "42", icon: "🥇", color: "text-yellow-600", bg: "bg-yellow-50" },
          { label: "Silver Prime", value: "144", icon: "🥈", color: "text-gray-600", bg: "bg-gray-100" },
          { label: "Avg. Rating", value: "4.76", icon: "📊", color: "text-blue-600", bg: "bg-blue-50" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
            <div className={`w-10 h-10 ${s.bg} rounded-lg flex items-center justify-center text-xl mb-3`}>{s.icon}</div>
            <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
            <div className="text-xs text-gray-400 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Criteria */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 mb-6">
        <h3 className="font-semibold text-gray-800 text-sm mb-4">⭐ Prime Eligibility Criteria</h3>
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "Minimum Orders", value: "100+", icon: "📦" },
            { label: "Minimum Rating", value: "4.5★", icon: "⭐" },
            { label: "Max Complaint Rate", value: "< 3%", icon: "🎫" },
          ].map((c) => (
            <div key={c.label} className="flex items-center gap-4 bg-yellow-50 border border-yellow-100 rounded-xl p-4">
              <span className="text-2xl">{c.icon}</span>
              <div>
                <div className="text-base font-bold text-yellow-700">{c.value}</div>
                <div className="text-xs text-gray-500">{c.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h3 className="font-semibold text-sm text-gray-800">Prime Tailors</h3>
          <button className="bg-yellow-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors">⭐ Assign Prime Badge</button>
        </div>
        <table className="w-full">
          <thead>
            <tr className="text-[11px] text-gray-400 uppercase tracking-wider bg-gray-50 border-b border-gray-100">
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
              <tr key={t.id} className="border-t border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-yellow-100 flex items-center justify-center text-sm font-bold text-yellow-700">{t.name.charAt(0)}</div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{t.name}</div>
                      <div className="text-xs text-gray-400">{t.id}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm text-gray-600">{t.city}</td>
                <td className="px-4 py-4 text-sm font-semibold text-gray-800">{t.orders}</td>
                <td className="px-4 py-4 text-sm font-semibold text-gray-800">★ {t.rating}</td>
                <td className="px-4 py-4 text-sm font-semibold text-green-600">{t.earnings}</td>
                <td className="px-4 py-4">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-semibold border ${t.badge === "Gold Prime" ? "bg-yellow-50 text-yellow-700 border-yellow-200" : "bg-gray-100 text-gray-600 border-gray-200"}`}>
                    {t.badge}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm text-gray-400">{t.since}</td>
                <td className="px-4 py-4">
                  <div className="flex gap-2">
                    <button className="text-xs border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 text-gray-600">View</button>
                    <button className="text-xs bg-yellow-50 border border-yellow-200 text-yellow-700 px-3 py-1.5 rounded-lg hover:bg-yellow-100">Upgrade</button>
                    <button className="text-xs bg-red-50 border border-red-200 text-red-600 px-3 py-1.5 rounded-lg hover:bg-red-100">Revoke</button>
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
