import ConsoleLayout from "@/components/layout/ConsoleLayout";

const stats = [
  { label: "Total Customers", value: "24,831", change: "+12%", icon: "👤", color: "bg-blue-500/10 border-blue-500/20", text: "text-blue-400" },
  { label: "Active Tailors", value: "1,204", change: "+5%", icon: "✂️", color: "bg-purple-500/10 border-purple-500/20", text: "text-purple-400" },
  { label: "Prime Tailors", value: "186", change: "+2%", icon: "⭐", color: "bg-yellow-500/10 border-yellow-500/20", text: "text-yellow-400" },
  { label: "Vendors", value: "438", change: "+8%", icon: "🏪", color: "bg-green-500/10 border-green-500/20", text: "text-green-400" },
  { label: "Orders Today", value: "3,920", change: "+18%", icon: "📦", color: "bg-orange-500/10 border-orange-500/20", text: "text-orange-400" },
  { label: "Revenue Today", value: "₹2.4L", change: "+22%", icon: "💰", color: "bg-pink-500/10 border-pink-500/20", text: "text-pink-400" },
];

const recentOrders = [
  { id: "#ORD-9821", customer: "Riya Sharma", tailor: "Mohammed Ali", amount: "₹1,200", status: "In Progress", time: "2 min ago" },
  { id: "#ORD-9820", customer: "Priya Mehta", tailor: "Suresh Kumar", amount: "₹850", status: "Completed", time: "8 min ago" },
  { id: "#ORD-9819", customer: "Anjali Singh", tailor: "Rina Bose", amount: "₹2,400", status: "Placed", time: "15 min ago" },
  { id: "#ORD-9818", customer: "Fatima Khan", tailor: "Deepak Nair", amount: "₹560", status: "Cancelled", time: "22 min ago" },
  { id: "#ORD-9817", customer: "Sunita Patel", tailor: "Arjun Das", amount: "₹3,100", status: "Completed", time: "34 min ago" },
];

const statusColor: Record<string, string> = {
  "In Progress": "bg-blue-500/15 text-blue-400",
  "Completed": "bg-green-500/15 text-green-400",
  "Placed": "bg-yellow-500/15 text-yellow-400",
  "Cancelled": "bg-red-500/15 text-red-400",
};

const pendingVerifications = [
  { name: "Kabir Textiles", type: "Vendor", submitted: "Today, 9:14 AM" },
  { name: "Sana Boutique", type: "Prime Tailor", submitted: "Today, 8:50 AM" },
  { name: "FastFabric Co.", type: "Manufacturer", submitted: "Yesterday" },
];

export default function Dashboard() {
  return (
    <ConsoleLayout title="Dashboard" subtitle="Welcome back — here's what's happening today">
      {/* Stats Grid */}
      <div className="grid grid-cols-6 gap-4 mb-8">
        {stats.map((s) => (
          <div key={s.label} className={`rounded-xl border p-4 ${s.color}`}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xl">{s.icon}</span>
              <span className={`text-xs font-medium ${s.text}`}>{s.change}</span>
            </div>
            <div className={`text-2xl font-bold mb-1 ${s.text}`}>{s.value}</div>
            <div className="text-xs text-[#64748b]">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="col-span-2 bg-[#161b27] rounded-xl border border-[#2a3044]">
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#2a3044]">
            <h3 className="font-semibold text-sm">Recent Orders</h3>
            <button className="text-xs text-[#4f6ef7] hover:underline">View all →</button>
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-[11px] text-[#64748b] uppercase tracking-wider">
                <th className="text-left px-6 py-3">Order ID</th>
                <th className="text-left px-4 py-3">Customer</th>
                <th className="text-left px-4 py-3">Tailor</th>
                <th className="text-left px-4 py-3">Amount</th>
                <th className="text-left px-4 py-3">Status</th>
                <th className="text-left px-4 py-3">Time</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-t border-[#2a3044] hover:bg-[#1e2535] transition-colors">
                  <td className="px-6 py-3 text-xs font-mono text-[#4f6ef7]">{order.id}</td>
                  <td className="px-4 py-3 text-sm">{order.customer}</td>
                  <td className="px-4 py-3 text-sm text-[#94a3b8]">{order.tailor}</td>
                  <td className="px-4 py-3 text-sm font-medium">{order.amount}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColor[order.status]}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-[#64748b]">{order.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-5">
          {/* Pending Verifications */}
          <div className="bg-[#161b27] rounded-xl border border-[#2a3044]">
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#2a3044]">
              <h3 className="font-semibold text-sm">Pending KYC</h3>
              <span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full">{pendingVerifications.length} new</span>
            </div>
            <div className="p-3 flex flex-col gap-2">
              {pendingVerifications.map((v) => (
                <div key={v.name} className="flex items-center justify-between bg-[#1e2535] rounded-lg px-4 py-3">
                  <div>
                    <div className="text-sm font-medium">{v.name}</div>
                    <div className="text-xs text-[#64748b]">{v.type} · {v.submitted}</div>
                  </div>
                  <div className="flex gap-2">
                    <button className="text-xs bg-green-500/15 text-green-400 px-2 py-1 rounded-md hover:bg-green-500/25 transition-colors">✓</button>
                    <button className="text-xs bg-red-500/15 text-red-400 px-2 py-1 rounded-md hover:bg-red-500/25 transition-colors">✗</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* System Health */}
          <div className="bg-[#161b27] rounded-xl border border-[#2a3044]">
            <div className="px-5 py-4 border-b border-[#2a3044]">
              <h3 className="font-semibold text-sm">System Health</h3>
            </div>
            <div className="p-4 flex flex-col gap-3">
              {[
                { name: "API Gateway", status: "Operational", uptime: "99.9%" },
                { name: "Payment Service", status: "Operational", uptime: "100%" },
                { name: "Notification Service", status: "Degraded", uptime: "97.2%" },
                { name: "Search Engine", status: "Operational", uptime: "99.7%" },
              ].map((svc) => (
                <div key={svc.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${svc.status === "Operational" ? "bg-green-400" : "bg-yellow-400"}`} />
                    <span className="text-sm">{svc.name}</span>
                  </div>
                  <span className="text-xs text-[#64748b]">{svc.uptime}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ConsoleLayout>
  );
}
