// ============================================================
// TAIP INTERNAL — Type Definitions
// ============================================================

export type UserRole =
  | "super_admin"
  | "tech_admin"
  | "support_agent"
  | "customer_manager"
  | "tailor_manager"
  | "vendor_manager";

export type ConsolePanel =
  | "tech-panel"
  | "super-admin"
  | "support";

// --- User / Customer ---
export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: "active" | "blocked" | "pending";
  createdAt: string;
  totalOrders: number;
}

// --- Tailor ---
export type TailorType = "regular" | "prime" | "manufacturer";

export interface Tailor {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: TailorType;
  status: "active" | "suspended" | "pending_verification";
  rating: number;
  totalOrders: number;
  earnings: number;
  kycVerified: boolean;
  createdAt: string;
}

// --- Vendor ---
export interface Vendor {
  id: string;
  businessName: string;
  email: string;
  phone: string;
  category: string;
  status: "active" | "suspended" | "pending";
  rating: number;
  totalProducts: number;
  createdAt: string;
}

// --- Order ---
export interface Order {
  id: string;
  customerId: string;
  tailorId: string;
  status: "placed" | "in_progress" | "completed" | "cancelled" | "refunded";
  amount: number;
  createdAt: string;
  deliveryDate: string;
}

// --- Support Ticket ---
export interface Ticket {
  id: string;
  userId: string;
  userType: "customer" | "tailor" | "vendor";
  subject: string;
  status: "open" | "in_progress" | "resolved" | "closed";
  priority: "low" | "medium" | "high" | "urgent";
  createdAt: string;
}
