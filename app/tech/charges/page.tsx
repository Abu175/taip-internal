import LoginGate from "@/components/auth/LoginGate";
import TechLayout from "@/components/layout/TechLayout";

export default function ChargesPagePage() {
  return (
    <LoginGate role="Finance Executive" department="Tech Console — Panel 5" icon="💰" accent="#d97706" accentLight="#fffbeb" storageKey="finance-executive">
      <ChargesPage />
    </LoginGate>
  );
}
