"use client";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <header
      className="fixed top-0 right-0 z-30 flex items-center justify-between px-8 border-b border-[#2a3044] bg-[#0f1117]/90 backdrop-blur"
      style={{
        left: "var(--sidebar-width)",
        height: "var(--header-height)",
      }}
    >
      <div>
        <h1 className="text-base font-semibold leading-tight">{title}</h1>
        {subtitle && <p className="text-xs text-[#64748b]">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 bg-[#1e2535] rounded-lg px-3 py-1.5">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-[#94a3b8]">All systems online</span>
        </div>
        <button className="relative w-8 h-8 rounded-lg bg-[#1e2535] flex items-center justify-center hover:bg-[#2a3044] transition-colors">
          <span className="text-sm">🔔</span>
          <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-red-500 rounded-full" />
        </button>
      </div>
    </header>
  );
}
