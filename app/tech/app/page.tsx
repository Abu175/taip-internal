import TechLayout from "@/components/layout/TechLayout";
export default function AppPage() {
  return (
    <TechLayout title="App Management" subtitle="Panel 3 — Android, iOS versions, A/B tests & feature flags">
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h3 className="font-semibold text-gray-800 mb-4">📱 App Versions</h3>
          {[
            { platform: "Android", version: "v3.2.1", users: "18,400", status: "Live" },
            { platform: "iOS", version: "v3.2.0", users: "6,200", status: "Live" },
            { platform: "Android (Beta)", version: "v3.3.0-beta", users: "240", status: "Beta" },
          ].map((a) => (
            <div key={a.platform} className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3 mb-2">
              <div>
                <div className="text-sm font-semibold text-gray-900">{a.platform} <span className="text-xs text-gray-400">{a.version}</span></div>
                <div className="text-xs text-gray-400">{a.users} active users</div>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full border font-medium ${a.status === "Live" ? "bg-green-50 text-green-700 border-green-200" : "bg-yellow-50 text-yellow-700 border-yellow-200"}`}>{a.status}</span>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h3 className="font-semibold text-gray-800 mb-4">🚦 Feature Flags</h3>
          {[
            { name: "New Checkout Flow", enabled: true },
            { name: "AI Size Recommender", enabled: true },
            { name: "Voice Search", enabled: false },
            { name: "Prime Subscription", enabled: true },
          ].map((f) => (
            <div key={f.name} className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3 mb-2">
              <span className="text-sm text-gray-700">{f.name}</span>
              <div className={`w-10 h-5 rounded-full flex items-center px-0.5 cursor-pointer transition-colors ${f.enabled ? "bg-blue-500 justify-end" : "bg-gray-200 justify-start"}`}>
                <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </TechLayout>
  );
}
