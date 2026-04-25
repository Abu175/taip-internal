import AdminLayout from "@/components/layout/AdminLayout";
import LoginGate from "@/components/auth/LoginGate";

const logs = [
  { user: "Super Admin", action: "Approved KYC — Kabir Textiles", time: "2 min ago", type: "success" },
  { user: "Support Agent", action: "Blocked customer C004 — Farhan Qureshi", time: "14 min ago", type: "warning" },
  { user: "Tech Admin", action: "Deployed new API version v2.4.1", time: "1 hr ago", type: "info" },
  { user: "Unknown IP", action: "Failed login attempt — 3 retries", time: "2 hr ago", type: "danger" },
  { user: "Super Admin", action: "Updated platform commission rate to 12%", time: "3 hr ago", type: "info" },
];

function SecurityContent() {
  return (
    <AdminLayout title="Security Center" subtitle="Panel 1 — Monitor access logs, threats & platform security">
      <div className="grid grid-cols-4 gap-5 mb-7">
        {[
          { label: "Active Sessions", value: "24", icon: "👥", color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Failed Logins (24h)", value: "7", icon: "⚠️", color: "text-yellow-600", bg: "bg-yellow-50" },
          { label: "Blocked IPs", value: "3", icon: "🚫", color: "text-red-600", bg: "bg-red-50" },
          { label: "Security Score", value: "94/100", icon: "🛡️", color: "text-green-600", bg: "bg-green-50" },
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
          <h3 className="font-semibold text-sm text-gray-800">Activity Log</h3>
          <button className="border border-gray-200 text-gray-600 text-sm px-4 py-2 rounded-lg hover:bg-gray-50">⬇ Export Log</button>
        </div>
        <div className="divide-y divide-gray-50">
          {logs.map((log, i) => (
            <div key={i} className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50">
              <div className={`w-2 h-2 rounded-full flex-shrink-0 ${log.type==="success"?"bg-green-400":log.type==="warning"?"bg-yellow-400":log.type==="danger"?"bg-red-400":"bg-blue-400"}`} />
              <div className="flex-1"><span className="text-sm font-semibold text-gray-800">{log.user}</span><span className="text-sm text-gray-500"> — {log.action}</span></div>
              <span className="text-xs text-gray-400">{log.time}</span>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}

export default function SecurityPage() {
  return (
    <LoginGate role="Security Analyst" department="Super Admin — Panel 1" icon="🛡️" accent="#dc2626" accentLight="#fff5f5" storageKey="security-analyst">
      <SecurityContent />
    </LoginGate>
  );
}
