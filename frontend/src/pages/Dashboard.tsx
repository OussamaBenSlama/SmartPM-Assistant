
import DashboardLayout from '@/components/layout/DashboardLayout';
import { KpiOverview } from '@/components/dashboard/KpiOverview';
import { RiskAlerts } from '@/components/dashboard/RiskAlerts';
import { Recommendations } from '@/components/dashboard/Recommendations';

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 gap-8">
        <div>
          <h1 className="text-2xl font-bold text-navy-950 mb-2">Project Command Center</h1>
          <p className="text-slate-500">
            Monitor real-time project metrics, risks, and AI-recommended actions
          </p>
        </div>
        
        <KpiOverview />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:col-span-2">
            <RiskAlerts />
          </div>
          <div className="lg:col-span-2">
            <Recommendations />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
