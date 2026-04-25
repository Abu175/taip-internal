import TechLayout from "@/components/layout/TechLayout";

export default function ChargesPage() {
  return (
    <TechLayout title="Charges & Billing" subtitle="Panel 5 — Platform fees, commissions & payment gateway config">
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h3 className="font-semibold text-gray-800 mb-4">💰 Commission Rates</h3>
          <div className="flex flex-col gap-3">
            {[
              { label: "Regular Tailor", value: "12%" },
              { label: "Prime Tailor", value: "8%" },
              { label: "Manufacturer Tailor", value: "6%" },
              { label: "Vendor", value: "10%" },
            ].map((r) => (
              <div key={r.label} className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3">
                <span className="text-sm text-gray-700">{r.label}</span>
                <div className="flex items-center gap-3">
                  <input defaultValue={r.value} className="w-16 text-center border border-gray-200 rounded-lg px-2 py-1 text-sm font-bold text-gray-900 focus:outline-none focus:border-blue-400" />
                  <button className="text-xs bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700">Save</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h3 className="font-semibold text-gray-800 mb-4">🏦 Payment Gateway</h3>
          <div className="flex flex-col gap-3">
            {[
              { name: "Razorpay", status: "Active", mode: "Live" },
              { name: "Cashfree", status: "Standby", mode: "Live" },
              { name: "UPI Direct", status: "Active", mode: "Live" },
              { name: "COD", status: "Active", mode: "—" },
            ].map((g) => (
              <div key={g.name} className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3">
                <div>
                  <div className="text-sm font-semibold text-gray-800">{g.name}</div>
                  <div className="text-xs text-gray-400">Mode: {g.mode}</div>
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${g.status === "Active" ? "bg-green-50 text-green-700 border-green-200" : "bg-gray-100 text-gray-500 border-gray-200"}`}>
                  {g.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h3 className="font-semibold text-gray-800 mb-4">🧾 GST Settings</h3>
          <div className="flex flex-col gap-3">
            {[
              { label: "Tailoring Services", value: "5%" },
              { label: "Fabric Products", value: "12%" },
              { label: "Accessories", value: "18%" },
              { label: "Platform Fee", value: "18%" },
            ].map((r) => (
              <div key={r.label} className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3">
                <span className="text-sm text-gray-700">{r.label}</span>
                <span className="text-sm font-bold text-gray-900">{r.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h3 className="font-semibold text-gray-800 mb-4">📅 Settlement Schedule</h3>
          <div className="flex flex-col gap-3">
            {[
              { label: "Regular Tailor", value: "Weekly (Mon)" },
              { label: "Prime Tailor", value: "Weekly (Mon & Thu)" },
              { label: "Manufacturer", value: "Bi-weekly" },
              { label: "Vendor", value: "Weekly (Wed)" },
            ].map((r) => (
              <div key={r.label} className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3">
                <span className="text-sm text-gray-700">{r.label}</span>
                <span className="text-sm font-semibold text-blue-600">{r.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TechLayout>
  );
}
