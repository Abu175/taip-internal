import LoginGate from "@/components/auth/LoginGate";
import TechLayout from "@/components/layout/TechLayout";

export default function AppPagePage() {
  return (
    <LoginGate role="App Manager" department="Tech Console — Panel 3" icon="📱" accent="#7c3aed" accentLight="#f5f3ff" storageKey="app-manager">
      <AppPage />
    </LoginGate>
  );
}
