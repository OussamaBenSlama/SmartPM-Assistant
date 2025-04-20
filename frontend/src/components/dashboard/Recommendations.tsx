
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw, Loader } from 'lucide-react';
import { ExpandableText } from '@/components/ui/expandable-text';

export function Recommendations() {
  const [recommendationsReport, setRecommendationsReport] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateReport = async () => {
    setIsLoading(true);
    // Simulate API call with 3s delay
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setRecommendationsReport(
      "Priority recommendations: 1) Immediate reallocation of 2 backend developers to frontend team to address resource shortage. " +
      "2) Sprint timeline extension (3 days) needed for API integration. 3) Implement automated testing to improve quality metrics. " +
      "Current implementation progress: Cloud resource optimization complete, automated testing at 30%."
    );
    setIsLoading(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center justify-between p-5 border-b border-gray-100">
        <h2 className="text-lg font-medium text-navy-800">AI Recommendations</h2>
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
      
      <div className="p-5">
        {recommendationsReport && (
          <div className="mb-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
            <h3 className="text-sm font-medium text-slate-600 mb-2">AI Generated Recommendations</h3>
            <ExpandableText text={recommendationsReport} maxLines={2} />
          </div>
        )}
      </div>
    </div>
  );
}
