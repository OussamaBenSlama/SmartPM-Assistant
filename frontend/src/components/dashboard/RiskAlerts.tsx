import { Risk } from '@/types/dashboard';
import { riskData } from '@/data/mockData';
import { cn } from '@/lib/utils';
import { AlertTriangle, Clock, DollarSign, Users, Maximize2, CheckSquare, RefreshCw, Loader } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { ExpandableText } from '@/components/ui/expandable-text';

export function RiskAlerts() {
  const [riskReport, setRiskReport] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateReport = async () => {
    setIsLoading(true);
    // Simulate API call with 3s delay
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setRiskReport(
      "Critical risks detected: Timeline delay in Phase 3 due to API integration challenges (High severity). " +
      "Resource shortage in Frontend team requires immediate attention. Budget overrun risk (15%) " +
      "identified in hardware costs. Recommended priority: Address timeline and resource risks first."
    );
    setIsLoading(false);
  };

  const getSeverityColor = (severity: Risk['severity']) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-50 text-red-700 border-red-200';
      case 'high':
        return 'bg-orange-50 text-orange-700 border-orange-200';
      case 'medium':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'low':
        return 'bg-green-50 text-green-700 border-green-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };
  
  const getCategoryIcon = (category: Risk['category']) => {
    switch (category) {
      case 'timeline':
        return <Clock className="w-4 h-4" />;
      case 'budget':
        return <DollarSign className="w-4 h-4" />;
      case 'resource':
        return <Users className="w-4 h-4" />;
      case 'scope':
        return <Maximize2 className="w-4 h-4" />;
      case 'quality':
        return <CheckSquare className="w-4 h-4" />;
      default:
        return <AlertTriangle className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center justify-between p-5 border-b border-gray-100">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-medium text-navy-800">Risk Alerts</h2>
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-navy-50 text-navy-700">
            {riskData.filter(risk => risk.status === 'open').length} Open
          </span>
        </div>
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
      
      <div className="p-0">
        {riskReport && (
          <div className="p-5 border-b">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h3 className="text-sm font-medium text-slate-600 mb-2">AI Generated Risk Report</h3>
              <ExpandableText text={riskReport} maxLines={2} />
            </div>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-500 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3">Risk</th>
                <th className="px-6 py-3">Category</th>
                <th className="px-6 py-3">Severity</th>
                <th className="px-6 py-3">Impact</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {riskData.map((risk) => (
                <tr 
                  key={risk.id}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 font-medium text-navy-800">
                    <div>
                      {risk.title}
                      <p className="text-xs text-gray-500 mt-1 truncate max-w-xs">{risk.description}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <span className="p-1 rounded bg-gray-100 mr-2">
                        {getCategoryIcon(risk.category)}
                      </span>
                      <span className="capitalize">{risk.category}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "px-2.5 py-1 text-xs font-medium rounded-full",
                      getSeverityColor(risk.severity)
                    )}>
                      {risk.severity.charAt(0).toUpperCase() + risk.severity.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <div 
                          key={i} 
                          className={cn(
                            "w-2 h-4 mx-0.5 rounded-sm",
                            i < risk.impact ? 'bg-teal-500' : 'bg-gray-200'
                          )}
                        />
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-500">
                    {new Date(risk.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "px-2.5 py-1 text-xs font-medium rounded-full",
                      risk.status === 'open' ? 'bg-red-50 text-red-700' :
                      risk.status === 'mitigated' ? 'bg-amber-50 text-amber-700' :
                      'bg-green-50 text-green-700'
                    )}>
                      {risk.status.charAt(0).toUpperCase() + risk.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
