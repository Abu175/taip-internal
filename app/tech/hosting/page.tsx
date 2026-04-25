import LoginGate from "@/components/auth/LoginGate";
import TechLayout from "@/components/layout/TechLayout";

export default function HostingPagePage() {
  return (
    <LoginGate role="Hosting Engineer" department="Tech Console — Panel 2" icon="🌐" accent="#0891b2" accentLight="#ecfeff" storageKey="hosting-engineer">
      <HostingPage />
    </LoginGate>
  );
}
