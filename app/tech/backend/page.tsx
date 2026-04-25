import TechLayout from "@/components/layout/TechLayout";
import LoginGate from "@/components/auth/LoginGate";

const services = [
  { name: "API Gateway", status: "Operational", uptime: "99.99%", latency: "42ms", requests: "1.2M/hr" },
  { name: "Auth Service", status: "Operational", uptime: "100%", latency: "18ms", requests: "340K/hr" },
  { name: "Order Service", status: "Operational", uptime: "99.9%", latency: "67ms", requests: "820K/hr" },
  { name: "Payment Service", status: "Operational", uptime: "100%", latency: "210ms", requests: "290K/hr" },
  { name: "Notification Service", status: "Degraded", uptime: "97.2%", latency: "1.2s", requests: "190K/hr" },
  { name: "Search Engine", status: "Operational", uptime: "99.7%", latency: "95ms", requests: "2.1M/hr" },
];

function BackendContent() {
  return (
    <TechLayout title="Backend & APIs" subtitle="Panel 1 — Monitor microservices, APIs & system health">
      <div className="grid grid-cols-4 gap-5 mb-7">
        {[
          { label: "Total Services", value: "24", icon: "⚙️", color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Operational", value: "23", icon: "✅", color: "text-green-600", bg: "bg-green-50" },
          { label: "Degraded", value: "1", icon: "⚠️", color: "text-yellow-600", bg: "bg-yellow-50" },
          { label: "API Requests/hr", value: "4.9M", icon: "📡", color: "text-purple-600", bg: "bg-purple-50" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
            <div className={`w-10 h-10 ${s.bg} rounded-lg flex items-center justify-center text-xl mb-3`}>{s.icon}</div>
            <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
            <div className="text-xs text-gray-400 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h3 className="font-semibold text-sm text-gray-800">Microservices Status</h3>
          <button className="text-xs bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">🔄 Refresh</button>
        </div>
        <table className="w-full">
          <thead>
            <tr className="text-[11px] text-gray-400 uppercase tracking-wider bg-gray-50 border-b border-gray-100">
              <th className="text-left px-6 py-3">Service</th><th className="text-left px-4 py-3">Status</th>
              <th className="text-left px-4 py-3">Uptime</th><th className="text-left px-4 py-3">Latency</th>
              <th className="text-left px-4 py-3">Requests/hr</th><th className="text-left px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((s) => (
              <tr key={s.name} className="border-t border-gray-50 hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-semibold text-gray-800">{s.name}</td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${s.status==="Operational"?"bg-green-400":"bg-yellow-400"}`}></span>
                    <span className={`text-xs font-medium ${s.status==="Operational"?"text-green-600":"text-yellow-600"}`}>{s.status}</span>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm font-medium">{s.uptime}</td>
                <td className="px-4 py-4 text-sm text-gray-700">{s.latency}</td>
                <td className="px-4 py-4 text-sm text-gray-700">{s.requests}</td>
                <td className="px-4 py-4">
                  <div className="flex gap-2">
                    <button className="text-xs border border-gray-200 px-3 py-1.5 rounded-lg text-gray-600">Logs</button>
                    <button className="text-xs bg-blue-50 border border-blue-200 text-blue-600 px-3 py-1.5 rounded-lg">Restart</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </TechLayout>
  );
}

export default function BackendPage() {
  return (
    <LoginGate role="Backend Engineer" department="Tech Console — Panel 1" icon="🔧" accent="#2563eb" accentLight="#eff6ff" storageKey="backend-engineer">
      <BackendContent />
    </LoginGate>
  );
}
