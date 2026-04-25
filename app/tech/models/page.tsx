import TechLayout from "@/components/layout/TechLayout";
export default function ModelsPage() {
  return (
    <TechLayout title="AI Models" subtitle="Panel 4 — Manage and monitor hosted AI/ML models">
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="font-semibold text-sm text-gray-800">Hosted Models</h3>
        </div>
        <table className="w-full">
          <thead>
            <tr className="text-[11px] text-gray-400 uppercase tracking-wider bg-gray-50 border-b border-gray-100">
              <th className="text-left px-6 py-3">Model</th>
              <th className="text-left px-4 py-3">Type</th>
              <th className="text-left px-4 py-3">Version</th>
              <th className="text-left px-4 py-3">Accuracy</th>
              <th className="text-left px-4 py-3">Calls/day</th>
              <th className="text-left px-4 py-3">Status</th>
              <th className="text-left px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "Size Recommender", type: "ML", version: "v2.1", accuracy: "91%", calls: "42K", status: "Active" },
              { name: "Search Ranker", type: "NLP", version: "v3.0", accuracy: "88%", calls: "210K", status: "Active" },
              { name: "Fraud Detector", type: "ML", version: "v1.4", accuracy: "97%", calls: "29K", status: "Active" },
              { name: "Price Suggester", type: "ML", version: "v1.0", accuracy: "83%", calls: "8K", status: "Beta" },
            ].map((m) => (
              <tr key={m.name} className="border-t border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-semibold text-gray-800">{m.name}</td>
                <td className="px-4 py-4"><span className="text-xs bg-purple-50 text-purple-700 border border-purple-200 px-2 py-1 rounded-full">{m.type}</span></td>
                <td className="px-4 py-4 text-sm text-gray-600">{m.version}</td>
                <td className="px-4 py-4 text-sm font-semibold text-blue-600">{m.accuracy}</td>
                <td className="px-4 py-4 text-sm text-gray-700">{m.calls}</td>
                <td className="px-4 py-4"><span className={`text-xs px-2 py-1 rounded-full border font-medium ${m.status === "Active" ? "bg-green-50 text-green-700 border-green-200" : "bg-yellow-50 text-yellow-700 border-yellow-200"}`}>{m.status}</span></td>
                <td className="px-4 py-4">
                  <div className="flex gap-2">
                    <button className="text-xs border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 text-gray-600">Metrics</button>
                    <button className="text-xs bg-blue-50 border border-blue-200 text-blue-600 px-3 py-1.5 rounded-lg hover:bg-blue-100">Redeploy</button>
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
