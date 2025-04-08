export type Lead = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  status: string;
  source: string;
  notes: string;
  created_at: string;
  updated_at: string;
  next_contact_date: string;
};

export type Task = {
  id: string;
  title: string;
  type: "call" | "email" | "todo";
  scheduled_at: string;
  priority: "low" | "medium" | "high";
  completed: boolean;
};
