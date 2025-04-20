
import { 
  KPI, 
  Risk, 
  Recommendation, 
  ChatMessage, 
  PieChartData, 
  LineChartData, 
  BarChartData 
} from '@/types/dashboard';

export const kpiData: KPI[] = [
  {
    id: '1',
    name: 'Project Completion',
    value: 85,
    target: 100,
    unit: '%',
    change: 5,
    trend: 'up',
  },
  {
    id: '2',
    name: 'Budget Usage',
    value: 72,
    target: 100,
    unit: '%',
    change: -3,
    trend: 'down',
  },
  {
    id: '3',
    name: 'Tasks Completed',
    value: 156,
    target: 200,
    unit: '',
    change: 12,
    trend: 'up',
  },
  {
    id: '4',
    name: 'Team Velocity',
    value: 42,
    target: 45,
    unit: 'points',
    change: 2,
    trend: 'up',
  },
];

export const pieChartData: PieChartData[] = [
  { name: 'Development', value: 45 },
  { name: 'Design', value: 25 },
  { name: 'Research', value: 15 },
  { name: 'Testing', value: 10 },
  { name: 'Documentation', value: 5 },
];

export const lineChartData: LineChartData[] = [
  { date: 'Jan', value: 30 },
  { date: 'Feb', value: 35 },
  { date: 'Mar', value: 45 },
  { date: 'Apr', value: 40 },
  { date: 'May', value: 55 },
  { date: 'Jun', value: 60 },
  { date: 'Jul', value: 65 },
  { date: 'Aug', value: 85 },
];

export const barChartData: BarChartData[] = [
  { name: 'Phase 1', value: 100 },
  { name: 'Phase 2', value: 85 },
  { name: 'Phase 3', value: 45 },
  { name: 'Phase 4', value: 10 },
];

export const riskData: Risk[] = [
  {
    id: '1',
    title: 'Timeline Delay: Phase 3',
    description: 'Integration with third-party APIs is taking longer than expected, potentially delaying Phase 3 completion.',
    severity: 'high',
    category: 'timeline',
    date: '2025-04-17',
    impact: 8,
    status: 'open',
  },
  {
    id: '2',
    title: 'Budget Overrun: Hardware Costs',
    description: 'Unexpected infrastructure costs may exceed allocated budget by 15%.',
    severity: 'medium',
    category: 'budget',
    date: '2025-04-15',
    impact: 6,
    status: 'open',
  },
  {
    id: '3',
    title: 'Resource Shortage: Frontend Team',
    description: 'Frontend team is understaffed for upcoming UI implementation sprint.',
    severity: 'high',
    category: 'resource',
    date: '2025-04-19',
    impact: 7,
    status: 'open',
  },
  {
    id: '4',
    title: 'Scope Creep: Client Requests',
    description: 'Additional feature requests from client may impact project timeline.',
    severity: 'medium',
    category: 'scope',
    date: '2025-04-16',
    impact: 5,
    status: 'mitigated',
  },
  {
    id: '5',
    title: 'Quality Issue: Testing Coverage',
    description: 'Current test coverage is below target threshold of 80%.',
    severity: 'low',
    category: 'quality',
    date: '2025-04-14',
    impact: 4,
    status: 'open',
  },
];

export const recommendationData: Recommendation[] = [
  {
    id: '1',
    title: 'Reallocate 2 Team Members',
    description: 'Move two developers from the backend team to frontend temporarily to address resource shortage.',
    impact: 'high',
    effort: 'low',
    category: 'resource',
    status: 'new',
    progress: 0,
  },
  {
    id: '2',
    title: 'Extend Sprint Timeline',
    description: 'Extend current sprint by 3 days to accommodate API integration challenges.',
    impact: 'medium',
    effort: 'low',
    category: 'timeline',
    status: 'in-progress',
    progress: 50,
  },
  {
    id: '3',
    title: 'Optimize Cloud Resource Usage',
    description: 'Reduce cloud infrastructure costs by optimizing usage patterns and turning off unused instances.',
    impact: 'medium',
    effort: 'medium',
    category: 'budget',
    status: 'implemented',
    progress: 100,
  },
  {
    id: '4',
    title: 'Implement Automated Testing',
    description: 'Increase test coverage by implementing additional automated tests for critical components.',
    impact: 'high',
    effort: 'high',
    category: 'quality',
    status: 'in-progress',
    progress: 30,
  },
  {
    id: '5',
    title: 'Prioritize Feature Backlog',
    description: 'Review and reprioritize feature backlog with stakeholders to address scope concerns.',
    impact: 'high',
    effort: 'medium',
    category: 'scope',
    status: 'new',
    progress: 0,
  },
];

export const chatHistory: ChatMessage[] = [
  {
    id: '1',
    content: 'Hello, I need information about our current project status.',
    sender: 'user',
    timestamp: '2025-04-20T09:30:00',
  },
  {
    id: '2',
    content: 'Sure! Current project completion is at 85%, with 156 tasks completed out of 200. Budget usage is at 72%. What specific information would you like to know?',
    sender: 'ai',
    timestamp: '2025-04-20T09:30:05',
  },
  {
    id: '3',
    content: 'Show me Q3 KPIs',
    sender: 'user',
    timestamp: '2025-04-20T09:31:00',
  },
  {
    id: '4',
    content: 'Here are the Q3 KPIs: Project completion: 85% (+5%), Budget usage: 72% (-3%), Tasks completed: 156/200, Team velocity: 42 points (+2 points)',
    sender: 'ai',
    timestamp: '2025-04-20T09:31:05',
  },
];
