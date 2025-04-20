import DashboardLayout from "@/components/layout/DashboardLayout";
import { RiskAlerts } from "@/components/dashboard/RiskAlerts";

export default function RiskAlertsPage() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 gap-8">
        <div>
          <h1 className="text-2xl font-bold text-navy-950 mb-2">
            Project Command Center
          </h1>
          <p className="text-slate-500">
            Monitor real-time project metrics, risks, and AI-recommended actions
          </p>
        </div>

        <RiskAlerts />
      </div>
    </DashboardLayout>
  );
}
