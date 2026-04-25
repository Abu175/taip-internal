import SupportLayout from "@/components/layout/SupportLayout";

const customers = [
  { id: "C001", name: "Riya Sharma", email: "riya@gmail.com", phone: "+91 98001 23456", orders: 14, spent: "₹18,400", status: "Active", joined: "Jan 2024" },
  { id: "C002", name: "Priya Mehta", email: "priya@gmail.com", phone: "+91 98765 43210", orders: 7, spent: "₹9,200", status: "Active", joined: "Mar 2024" },
  { id: "C003", name: "Anjali Singh", email: "anjali@gmail.com", phone: "+91 99887 65432", orders: 22, spent: "₹31,000", status: "Active", joined: "Nov 2023" },
  { id: "C004", name: "Farhan Qureshi", email: "farhan@gmail.com", phone: "+91 97654 32109", orders: 3, spent: "₹2,100", status: "Blocked", joined: "Apr 2024" },
  { id: "C005", name: "Sunita Patel", email: "sunita@gmail.com", phone: "+91 91234 56789", orders: 9, spent: "₹12,600", status: "Active", joined: "Feb 2024" },
  { id: "C006", name: "Kavya Reddy", email: "kavya@gmail.com", phone: "+91 96543 21098", orders: 1, spent: "₹750", status: "Pending", joined: "Today" },
];

const statusStyle: Record<string, string> = {
  Active: "bg-green-50 text-green-700 border border-green-200",
  Blocked: "bg-red-50 text-red-700 border border-red-200",
  Pending: "bg-yellow-50 text-yellow-700 border border-yellow-200",
};

export default function CustomersPage() {
  return (
    <SupportLayout title="Customer Management" subtitle="Panel 1 — View and manage all customers">
      {/* Stats */}
      <div className="grid grid-cols-4 gap-5 mb-7">
        {[
          { label: "Total Customers", value: "24,831", icon: "👤", color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Active", value: "23,104", icon: "✅", color: "text-green-600", bg: "bg-green-50" },
          { label: "Blocked", value: "312", icon: "🚫", color: "text-red-600", bg: "bg-red-50" },
          { label: "Open Tickets", value: "87", icon: "🎫", color: "text-yellow-600", bg: "bg-yellow-50" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
            <div className={`w-10 h-10 ${s.bg} rounded-lg flex items-center justify-center text-xl mb-3`}>{s.icon}</div>
            <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
            <div className="text-xs text-gray-400 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <input type="text" placeholder="🔍  Search customers..." className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 placeholder-gray-400 w-64 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-100" />
            <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 focus:outline-none bg-white">
              <option>All Status</option>
              <option>Active</option>
              <option>Blocked</option>
              <option>Pending</option>
            </select>
          </div>
          <div className="flex gap-2">
            <button className="border border-gray-200 text-gray-600 text-sm px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">⬇ Export</button>
            <button className="bg-green-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">+ Add Customer</button>
          </div>
        </div>

        <table className="w-full">
          <thead>
            <tr className="text-[11px] text-gray-400 uppercase tracking-wider bg-gray-50 border-b border-gray-100">
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
              <tr key={c.id} className="border-t border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-sm font-bold text-blue-700">{c.name.charAt(0)}</div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{c.name}</div>
                      <div className="text-xs text-gray-400">{c.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm text-gray-600">{c.phone}</td>
                <td className="px-4 py-4 text-sm font-semibold text-gray-800">{c.orders}</td>
                <td className="px-4 py-4 text-sm font-semibold text-green-600">{c.spent}</td>
                <td className="px-4 py-4">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${statusStyle[c.status]}`}>{c.status}</span>
                </td>
                <td className="px-4 py-4 text-sm text-gray-400">{c.joined}</td>
                <td className="px-4 py-4">
                  <div className="flex gap-2">
                    <button className="text-xs border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 text-gray-600 transition-colors">View</button>
                    <button className="text-xs border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 text-gray-600 transition-colors">Orders</button>
                    {c.status === "Active"
                      ? <button className="text-xs bg-red-50 border border-red-200 text-red-600 px-3 py-1.5 rounded-lg hover:bg-red-100 transition-colors">Block</button>
                      : <button className="text-xs bg-green-50 border border-green-200 text-green-600 px-3 py-1.5 rounded-lg hover:bg-green-100 transition-colors">Unblock</button>
                    }
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
          <div className="text-xs text-gray-400">Showing 6 of 24,831 customers</div>
          <div className="flex gap-1">
            {["←", "1", "2", "3", "...", "→"].map((p, i) => (
              <button key={i} className={`w-8 h-8 rounded-lg text-xs transition-colors ${p === "1" ? "bg-green-600 text-white" : "border border-gray-200 text-gray-500 hover:bg-gray-50"}`}>{p}</button>
            ))}
          </div>
        </div>
      </div>
    </SupportLayout>
  );
}
