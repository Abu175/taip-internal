import LoginGate from "@/components/auth/LoginGate";
import TechLayout from "@/components/layout/TechLayout";

export default function ModelsPagePage() {
  return (
    <LoginGate role="AI/ML Engineer" department="Tech Console — Panel 4" icon="🤖" accent="#059669" accentLight="#ecfdf5" storageKey="ai-engineer">
      <ModelsPage />
    </LoginGate>
  );
}
