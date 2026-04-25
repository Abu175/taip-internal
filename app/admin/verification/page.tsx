import AdminLayout from "@/components/layout/AdminLayout";

const queue = [
  { id: "KYC001", name: "Kabir Textiles", type: "Vendor", docs: ["GST Certificate", "Aadhaar", "Bank Details"], submitted: "Today, 9:14 AM", status: "Pending" },
  { id: "KYC002", name: "Sana Boutique", type: "Prime Tailor", docs: ["Aadhaar", "Portfolio"], submitted: "Today, 8:50 AM", status: "Pending" },
  { id: "KYC003", name: "FastFabric Co.", type: "Manufacturer", docs: ["GST", "Factory License", "ISO Certificate"], submitted: "Yesterday", status: "Under Review" },
  { id: "KYC004", name: "Nisha Verma", type: "Tailor", docs: ["Aadhaar", "Bank Details"], submitted: "Yesterday", status: "Pending" },
];

export default function VerificationPage() {
  return (
    <AdminLayout title="KYC Verification" subtitle="Panel 2 — Review and approve KYC documents">
      <div className="grid grid-cols-4 gap-5 mb-7">
        {[
          { label: "Pending Review", value: "31", icon: "⏳", color: "text-yellow-600", bg: "bg-yellow-50" },
          { label: "Under Review", value: "8", icon: "🔍", color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Approved Today", value: "14", icon: "✅", color: "text-green-600", bg: "bg-green-50" },
          { label: "Rejected Today", value: "3", icon: "❌", color: "text-red-600", bg: "bg-red-50" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
            <div className={`w-10 h-10 ${s.bg} rounded-lg flex items-center justify-center text-xl mb-3`}>{s.icon}</div>
            <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
            <div className="text-xs text-gray-400 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {queue.map((item) => (
          <div key={item.id} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-red-100 flex items-center justify-center text-xl font-bold text-red-700">{item.name.charAt(0)}</div>
                <div>
                  <div className="font-semibold text-gray-900">{item.name}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{item.id} · {item.type} · Submitted {item.submitted}</div>
                </div>
              </div>
              <span className={`text-xs px-2.5 py-1 rounded-full font-medium border ${item.status === "Pending" ? "bg-yellow-50 text-yellow-700 border-yellow-200" : "bg-blue-50 text-blue-700 border-blue-200"}`}>
                {item.status}
              </span>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <span className="text-xs text-gray-500 font-medium">Documents:</span>
              {item.docs.map((doc) => (
                <span key={doc} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full border border-gray-200 cursor-pointer hover:bg-gray-200 transition-colors">
                  📄 {doc}
                </span>
              ))}
            </div>

            <div className="mt-4 flex gap-3">
              <button className="bg-green-600 text-white text-sm px-5 py-2 rounded-lg hover:bg-green-700 transition-colors">✓ Approve</button>
              <button className="bg-red-50 border border-red-200 text-red-600 text-sm px-5 py-2 rounded-lg hover:bg-red-100 transition-colors">✗ Reject</button>
              <button className="bg-gray-50 border border-gray-200 text-gray-600 text-sm px-5 py-2 rounded-lg hover:bg-gray-100 transition-colors">📩 Request More Docs</button>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}
