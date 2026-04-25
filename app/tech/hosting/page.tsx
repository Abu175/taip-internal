import TechLayout from "@/components/layout/TechLayout";
export default function HostingPage() {
  return (
    <TechLayout title="Website Hosting" subtitle="Panel 2 — Domains, SSL, CDN & deployments">
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h3 className="font-semibold text-gray-800 mb-4">🌐 Domains & SSL</h3>
          {[
            { domain: "taip.in", ssl: "Valid — expires Dec 2025", status: "Active" },
            { domain: "api.taip.in", ssl: "Valid — expires Dec 2025", status: "Active" },
            { domain: "admin.taip.in", ssl: "Valid — expires Dec 2025", status: "Active" },
          ].map((d) => (
            <div key={d.domain} className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3 mb-2">
              <div>
                <div className="text-sm font-semibold text-gray-900">{d.domain}</div>
                <div className="text-xs text-gray-400">{d.ssl}</div>
              </div>
              <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-1 rounded-full">{d.status}</span>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h3 className="font-semibold text-gray-800 mb-4">🚀 Recent Deployments</h3>
          {[
            { version: "v2.4.1", env: "Production", time: "1 hr ago", status: "Success" },
            { version: "v2.4.0", env: "Production", time: "2 days ago", status: "Success" },
            { version: "v2.3.9", env: "Staging", time: "3 days ago", status: "Success" },
          ].map((d) => (
            <div key={d.version} className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3 mb-2">
              <div>
                <div className="text-sm font-semibold text-gray-900">{d.version} <span className="text-xs text-gray-400">({d.env})</span></div>
                <div className="text-xs text-gray-400">{d.time}</div>
              </div>
              <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-1 rounded-full">{d.status}</span>
            </div>
          ))}
          <button className="mt-2 w-full bg-blue-600 text-white text-sm py-2.5 rounded-lg hover:bg-blue-700 transition-colors">🚀 Deploy New Version</button>
        </div>
      </div>
    </TechLayout>
  );
}
