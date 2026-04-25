import Sidebar from "./Sidebar";
import Header from "./Header";

interface ConsoleLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

export default function ConsoleLayout({ children, title, subtitle }: ConsoleLayoutProps) {
  return (
    <div className="flex min-h-screen bg-[#0f1117]">
      <Sidebar />
      <div style={{ marginLeft: "var(--sidebar-width)", paddingTop: "var(--header-height)", width: "100%" }}>
        <Header title={title} subtitle={subtitle} />
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
