import { KpiCard } from "./KpiCard";
import { KpiCharts } from "./KpiCharts";
import { kpiData } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { RefreshCw, Loader } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { marked } from "marked";

export function KpiOverview() {
  const [kpiReport, setKpiReport] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateReport = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/get-insights");
      const htmlContent = await marked(response.data.data);
      setKpiReport(htmlContent);
    } catch (error) {
      console.error("Error fetching KPI insights:", error);
    }

    // setKpiReport(
    //   "Based on current KPIs, project completion is trending positively at 85% (+5%). " +
    //     "Budget usage is under control at 72% (-3%). Task completion rate shows strong momentum " +
    //     "with 156 tasks completed, and team velocity remains high at 42 points (+2)."
    // );
    setIsLoading(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="p-5 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-medium text-navy-800">KPI Overview</h2>
          <Button
            variant="outline"
            onClick={generateReport}
            className="gap-2"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader className="h-4 w-4 animate-spin" />
            ) : (
              <RefreshCw className="h-4 w-4" />
            )}
            Generate Report
          </Button>
        </div>
      </div>

      <div className="p-5">
        {kpiReport && (
          <div className="mb-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
            <h3 className="text-sm font-medium text-slate-600 mb-2">
              AI Generated Report
            </h3>
            <div dangerouslySetInnerHTML={{ __html: kpiReport || "" }} />
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {kpiData.map((kpi) => (
            <KpiCard key={kpi.id} kpi={kpi} />
          ))}
        </div>

        <KpiCharts />
      </div>
    </div>
  );
}
