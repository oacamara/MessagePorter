// Basic data models for the HR platform
// Employee Self-Service and Manager Space

export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  position?: string;
  department?: string;
  avatarUrl?: string;
  documents: DocumentReference[];
}

export interface DocumentReference {
  id: string;
  type: 'pay_slip' | 'certificate' | 'other';
  name: string;
  url: string;
  uploadedAt: string; // ISO date string
}

export interface LeaveBalance {
  annual: number;
  rtt: number;
  sickness: number;
}

export interface LeaveRequest {
  id: string;
  employeeId: string;
  type: 'annual' | 'sickness' | 'rtt' | 'other';
  startDate: string; // ISO date
  endDate: string;   // ISO date
  reason?: string;
  attachmentUrl?: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
  managerComment?: string;
}

export interface ExpenseItem {
  id: string;
  date: string; // ISO date
  amount: number;
  description: string;
  receiptUrl?: string;
}

export interface ExpenseReport {
  id: string;
  employeeId: string;
  items: ExpenseItem[];
  totalAmount: number;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
  managerComment?: string;
}

export interface TrainingCatalogItem {
  id: string;
  title: string;
  description: string;
  certification?: string;
  durationHours: number;
}

export interface EmployeeTraining {
  catalogId: string;
  progress: number; // 0-100
  certified: boolean;
  completionDate?: string;
}

export interface KnowledgeBaseArticle {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

export interface NewsPost {
  id: string;
  title: string;
  body: string;
  createdAt: string;
}

export interface PerformanceGoal {
  id: string;
  employeeId: string;
  title: string;
  description: string;
  targetDate: string;
  progress: number; // 0-100
}

export interface EvaluationRecord {
  id: string;
  employeeId: string;
  evaluatorId: string;
  date: string;
  feedback: string;
  score: number; // e.g., 1-5
}

export interface TeamKPI {
  absentRate: number;
  averagePerformance: number;
  pendingRequests: number;
}

export interface ProjectAssignment {
  projectId: string;
  employeeId: string;
  role: string;
  startDate: string;
  endDate?: string;
}

export interface UserCredentials {
  username: string;
  password: string;
}

export interface AuthToken {
  accessToken: string;
  refreshToken: string;
  expiresIn: number; // seconds
}

