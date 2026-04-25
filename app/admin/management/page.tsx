import AdminLayout from "@/components/layout/AdminLayout";
import LoginGate from "@/components/auth/LoginGate";

function ManagementContent() {
  return (
    <AdminLayout title="Platform Controls" subtitle="Panel 3 — Manage platform settings, roles & announcements">
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h3 className="font-semibold text-gray-800 mb-4">💰 Commission Rates</h3>
          <div className="flex flex-col gap-3">
            {[{label:"Regular Tailor",value:"12%"},{label:"Prime Tailor",value:"8%"},{label:"Manufacturer",value:"6%"},{label:"Vendor",value:"10%"}].map((r) => (
              <div key={r.label} className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3">
                <span className="text-sm text-gray-700">{r.label}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-gray-900">{r.value}</span>
                  <button className="text-xs text-blue-600 hover:underline">Edit</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h3 className="font-semibold text-gray-800 mb-4">👑 Admin Roles</h3>
          <div className="flex flex-col gap-3">
            {[{role:"Super Admin",count:2,color:"bg-red-100 text-red-700"},{role:"Tech Admin",count:4,color:"bg-blue-100 text-blue-700"},{role:"Support Agent",count:18,color:"bg-green-100 text-green-700"},{role:"Finance Admin",count:3,color:"bg-yellow-100 text-yellow-700"}].map((r) => (
              <div key={r.role} className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3">
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${r.color}`}>{r.role}</span>
                <span className="text-sm text-gray-500">{r.count} users</span>
              </div>
            ))}
          </div>
          <button className="mt-3 w-full bg-red-600 text-white text-sm py-2.5 rounded-lg hover:bg-red-700">+ Add Admin User</button>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h3 className="font-semibold text-gray-800 mb-4">📢 Broadcast Announcement</h3>
          <textarea className="w-full border border-gray-200 rounded-lg p-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-red-400 resize-none" rows={4} placeholder="Type announcement message here..." />
          <div className="flex gap-3 mt-3">
            {["All Users","Tailors Only","Vendors Only"].map((t) => (
              <label key={t} className="flex items-center gap-1.5 text-xs text-gray-600 cursor-pointer"><input type="checkbox" className="rounded" /> {t}</label>
            ))}
          </div>
          <button className="mt-3 bg-red-600 text-white text-sm px-5 py-2 rounded-lg hover:bg-red-700">📤 Send Announcement</button>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h3 className="font-semibold text-gray-800 mb-4">🚨 Emergency Controls</h3>
          <div className="flex flex-col gap-3">
            <button className="w-full flex items-center justify-between bg-red-50 border border-red-200 rounded-lg px-4 py-3 hover:bg-red-100">
              <span className="text-sm font-medium text-red-700">🔴 Pause All Payments</span>
              <span className="text-xs text-red-400">Dangerous</span>
            </button>
            <button className="w-full flex items-center justify-between bg-yellow-50 border border-yellow-200 rounded-lg px-4 py-3 hover:bg-yellow-100">
              <span className="text-sm font-medium text-yellow-700">⚠️ Enable Maintenance Mode</span>
              <span className="text-xs text-yellow-400">Caution</span>
            </button>
            <button className="w-full flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 hover:bg-gray-100">
              <span className="text-sm font-medium text-gray-700">🔒 Lock New Registrations</span>
              <span className="text-xs text-gray-400">Moderate</span>
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default function ManagementPage() {
  return (
    <LoginGate role="Platform Manager" department="Super Admin — Panel 3" icon="👑" accent="#7c3aed" accentLight="#f5f3ff" storageKey="platform-manager">
      <ManagementContent />
    </LoginGate>
  );
}
