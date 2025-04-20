import DashboardLayout from "@/components/layout/DashboardLayout";
import { Recommendations } from "@/components/dashboard/Recommendations";

export default function RecommendationsPage() {
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

        <Recommendations />
      </div>
    </DashboardLayout>
  );
}
