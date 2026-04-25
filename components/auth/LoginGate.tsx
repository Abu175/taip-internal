"use client";
import { useState, useEffect } from "react";

interface LoginGateProps {
  children: React.ReactNode;
  role: string;
  department: string;
  icon: string;
  accent: string;       // hex color
  accentLight: string;  // light bg hex
  storageKey: string;
}

// Demo credentials per role (in production replace with real auth)
const DEMO_CREDENTIALS: Record<string, { email: string; password: string }> = {
  "customer-support":   { email: "support@taip.in",      password: "support123" },
  "tailor-manager":     { email: "tailor@taip.in",        password: "tailor123" },
  "prime-manager":      { email: "prime@taip.in",         password: "prime123" },
  "manufacturer-mgr":   { email: "mfg@taip.in",           password: "mfg123" },
  "vendor-manager":     { email: "vendor@taip.in",        password: "vendor123" },
  "security-analyst":   { email: "security@taip.in",      password: "security123" },
  "kyc-executive":      { email: "kyc@taip.in",           password: "kyc123" },
  "platform-manager":   { email: "platform@taip.in",      password: "platform123" },
  "backend-engineer":   { email: "backend@taip.in",       password: "backend123" },
  "hosting-engineer":   { email: "hosting@taip.in",       password: "hosting123" },
  "app-manager":        { email: "app@taip.in",           password: "app123" },
  "ai-engineer":        { email: "ai@taip.in",            password: "ai123" },
  "finance-executive":  { email: "finance@taip.in",       password: "finance123" },
};

export default function LoginGate({ children, role, department, icon, accent, accentLight, storageKey }: LoginGateProps) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const session = localStorage.getItem(`taip_session_${storageKey}`);
    if (session === "active") setLoggedIn(true);
    setChecking(false);
  }, [storageKey]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setTimeout(() => {
      const creds = DEMO_CREDENTIALS[storageKey];
      if (email === creds?.email && password === creds?.password) {
        localStorage.setItem(`taip_session_${storageKey}`, "active");
        setLoggedIn(true);
      } else {
        setError("Invalid email or password. Please try again.");
      }
      setLoading(false);
    }, 800);
  };

  const handleLogout = () => {
    localStorage.removeItem(`taip_session_${storageKey}`);
    setLoggedIn(false);
    setEmail("");
    setPassword("");
  };

  if (checking) {
    return (
      <div className="min-h-screen bg-[#f5f6fa] flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
      </div>
    );
  }

  if (loggedIn) {
    return (
      <div>
        {/* Logged-in top bar */}
        <div className="fixed top-0 right-0 z-50 flex items-center gap-2 m-3">
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-3 py-1.5 shadow-sm text-xs text-gray-500">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
            Logged in as <span className="font-semibold text-gray-800">{role}</span>
            <button onClick={handleLogout} className="ml-1 text-red-400 hover:text-red-600 font-medium">Logout</button>
          </div>
        </div>
        {children}
      </div>
    );
  }

  const creds = DEMO_CREDENTIALS[storageKey];

  return (
    <div className="min-h-screen bg-[#f5f6fa] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
          {/* Top accent bar */}
          <div className="h-1.5 w-full" style={{ background: accent }} />

          <div className="p-8">
            {/* Logo + Role */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl text-3xl mb-4"
                style={{ background: accentLight }}>
                {icon}
              </div>
              <div className="text-xs font-semibold tracking-widest text-gray-400 mb-1 uppercase">{department}</div>
              <h1 className="text-2xl font-bold text-gray-900">{role}</h1>
              <p className="text-sm text-gray-400 mt-1">Sign in to access your panel</p>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <div>
                <label className="text-xs font-semibold text-gray-500 mb-1.5 block">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={creds?.email}
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-500 mb-1.5 block">Password</label>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all pr-12"
                  />
                  <button type="button" onClick={() => setShowPass(!showPass)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs">
                    {showPass ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 text-xs rounded-lg px-4 py-3">
                  ⚠️ {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl text-white font-semibold text-sm transition-all mt-1 disabled:opacity-60"
                style={{ background: accent }}
              >
                {loading ? "Signing in..." : "Sign In →"}
              </button>
            </form>

            {/* Demo hint */}
            <div className="mt-5 bg-gray-50 border border-gray-100 rounded-xl p-3">
              <div className="text-[10px] text-gray-400 font-semibold mb-1 uppercase tracking-wider">Demo Credentials</div>
              <div className="text-xs text-gray-600">📧 <span className="font-mono">{creds?.email}</span></div>
              <div className="text-xs text-gray-600">🔑 <span className="font-mono">{creds?.password}</span></div>
            </div>
          </div>
        </div>

        {/* Back to hub */}
        <div className="text-center mt-4">
          <a href="/" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">← Back to Console Hub</a>
        </div>
      </div>
    </div>
  );
}
