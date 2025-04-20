
export interface KPI {
  id: string;
  name: string;
  value: number;
  target: number;
  unit: string;
  change: number;
  trend: 'up' | 'down' | 'neutral';
}

export interface ChartData {
  name: string;
  value: number;
  color?: string;
}

export interface PieChartData {
  name: string;
  value: number;
}

export interface LineChartData {
  date: string;
  value: number;
}

export interface BarChartData {
  name: string;
  value: number;
}

export interface Risk {
  id: string;
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  category: 'timeline' | 'budget' | 'resource' | 'scope' | 'quality';
  date: string;
  impact: number;
  status: 'open' | 'mitigated' | 'closed';
}

export interface Recommendation {
  id: string;
  title: string;
  description: string;
  impact: 'low' | 'medium' | 'high';
  effort: 'low' | 'medium' | 'high';
  category: 'resource' | 'timeline' | 'budget' | 'quality' | 'scope';
  status: 'new' | 'in-progress' | 'implemented' | 'rejected';
  progress: number;
}

export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: string;
}
