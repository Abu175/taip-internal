import ConsoleLayout from "@/components/layout/ConsoleLayout";

const customers = [
  { id: "C001", name: "Riya Sharma", email: "riya@gmail.com", phone: "+91 98001 23456", orders: 14, spent: "₹18,400", status: "Active", joined: "Jan 2024" },
  { id: "C002", name: "Priya Mehta", email: "priya@gmail.com", phone: "+91 98765 43210", orders: 7, spent: "₹9,200", status: "Active", joined: "Mar 2024" },
  { id: "C003", name: "Anjali Singh", email: "anjali@gmail.com", phone: "+91 99887 65432", orders: 22, spent: "₹31,000", status: "Active", joined: "Nov 2023" },
  { id: "C004", name: "Farhan Qureshi", email: "farhan@gmail.com", phone: "+91 97654 32109", orders: 3, spent: "₹2,100", status: "Blocked", joined: "Apr 2024" },
  { id: "C005", name: "Sunita Patel", email: "sunita@gmail.com", phone: "+91 91234 56789", orders: 9, spent: "₹12,600", status: "Active", joined: "Feb 2024" },
  { id: "C006", name: "Kavya Reddy", email: "kavya@gmail.com", phone: "+91 96543 21098", orders: 1, spent: "₹750", status: "Pending", joined: "Today" },
];

export default function CustomersPage() {
  return (
    <ConsoleLayout title="Customer Management" subtitle="Console 3 › Panel 1 — Manage all customers">
      {/* Top Stats */}
      <div className="grid grid-cols-4 gap-4 mb-7">
        {[
          { label: "Total Customers", value: "24,831", icon: "👤", color: "text-blue-400" },
          { label: "Active", value: "23,104", icon: "✅", color: "text-green-400" },
          { label: "Blocked", value: "312", icon: "🚫", color: "text-red-400" },
          { label: "Open Tickets", value: "87", icon: "🎫", color: "text-yellow-400" },
        ].map((s) => (
          <div key={s.label} className="bg-[#161b27] border border-[#2a3044] rounded-xl p-5">
            <div className="text-2xl mb-1">{s.icon}</div>
            <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
            <div className="text-xs text-[#64748b] mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Table Card */}
      <div className="bg-[#161b27] rounded-xl border border-[#2a3044]">
        {/* Toolbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2a3044]">
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Search customers..."
              className="bg-[#1e2535] border border-[#2a3044] rounded-lg px-4 py-2 text-sm text-white placeholder-[#64748b] w-64 focus:outline-none focus:border-[#4f6ef7]"
            />
            <select className="bg-[#1e2535] border border-[#2a3044] rounded-lg px-3 py-2 text-sm text-[#94a3b8] focus:outline-none">
              <option>All Status</option>
              <option>Active</option>
              <option>Blocked</option>
              <option>Pending</option>
            </select>
          </div>
          <div className="flex gap-2">
            <button className="bg-[#1e2535] border border-[#2a3044] text-sm px-4 py-2 rounded-lg hover:bg-[#2a3044] transition-colors">⬇ Export</button>
            <button className="bg-[#4f6ef7] text-white text-sm px-4 py-2 rounded-lg hover:bg-[#3d5ce5] transition-colors">+ Add Customer</button>
          </div>
        </div>

        {/* Table */}
        <table className="w-full">
          <thead>
            <tr className="text-[11px] text-[#64748b] uppercase tracking-wider bg-[#1a2030]">
              <th className="text-left px-6 py-3">Customer</th>
              <th className="text-left px-4 py-3">Phone</th>
              <th className="text-left px-4 py-3">Orders</th>
              <th className="text-left px-4 py-3">Total Spent</th>
              <th className="text-left px-4 py-3">Status</th>
              <th className="text-left px-4 py-3">Joined</th>
              <th className="text-left px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.id} className="border-t border-[#2a3044] hover:bg-[#1e2535] transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#4f6ef7]/20 flex items-center justify-center text-xs font-bold text-[#4f6ef7]">
                      {c.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-medium">{c.name}</div>
                      <div className="text-xs text-[#64748b]">{c.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm text-[#94a3b8]">{c.phone}</td>
                <td className="px-4 py-4 text-sm font-medium">{c.orders}</td>
                <td className="px-4 py-4 text-sm font-medium text-green-400">{c.spent}</td>
                <td className="px-4 py-4">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    c.status === "Active" ? "bg-green-500/15 text-green-400" :
                    c.status === "Blocked" ? "bg-red-500/15 text-red-400" :
                    "bg-yellow-500/15 text-yellow-400"
                  }`}>{c.status}</span>
                </td>
                <td className="px-4 py-4 text-sm text-[#64748b]">{c.joined}</td>
                <td className="px-4 py-4">
                  <div className="flex gap-2">
                    <button className="text-xs bg-[#1e2535] px-3 py-1.5 rounded-md hover:bg-[#2a3044] transition-colors">View</button>
                    <button className="text-xs bg-[#1e2535] px-3 py-1.5 rounded-md hover:bg-[#2a3044] transition-colors">Orders</button>
                    {c.status === "Active"
                      ? <button className="text-xs bg-red-500/15 text-red-400 px-3 py-1.5 rounded-md hover:bg-red-500/25 transition-colors">Block</button>
                      : <button className="text-xs bg-green-500/15 text-green-400 px-3 py-1.5 rounded-md hover:bg-green-500/25 transition-colors">Unblock</button>
                    }
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-[#2a3044]">
          <div className="text-xs text-[#64748b]">Showing 6 of 24,831 customers</div>
          <div className="flex gap-1">
            {["←", "1", "2", "3", "...", "248", "→"].map((p) => (
              <button key={p} className={`w-8 h-8 rounded-lg text-xs transition-colors ${p === "1" ? "bg-[#4f6ef7] text-white" : "bg-[#1e2535] text-[#94a3b8] hover:bg-[#2a3044]"}`}>{p}</button>
            ))}
          </div>
        </div>
      </div>
    </ConsoleLayout>
  );
}
