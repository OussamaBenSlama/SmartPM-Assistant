
import { KPI } from '@/types/dashboard';
import { ArrowUpIcon, ArrowDownIcon, MinusIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface KpiCardProps {
  kpi: KPI;
}

export function KpiCard({ kpi }: KpiCardProps) {
  const percentage = Math.round((kpi.value / kpi.target) * 100);
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <h3 className="text-sm font-medium text-gray-500">{kpi.name}</h3>
        <div className={cn(
          "flex items-center text-xs font-medium rounded-full px-2 py-1",
          kpi.trend === 'up' ? 'text-green-700 bg-green-50' : 
          kpi.trend === 'down' ? 'text-red-700 bg-red-50' : 
          'text-gray-700 bg-gray-50'
        )}>
          {kpi.trend === 'up' ? (
            <ArrowUpIcon className="w-3 h-3 mr-1" />
          ) : kpi.trend === 'down' ? (
            <ArrowDownIcon className="w-3 h-3 mr-1" />
          ) : (
            <MinusIcon className="w-3 h-3 mr-1" />
          )}
          {kpi.change > 0 ? '+' : ''}{kpi.change}{kpi.unit ? kpi.unit : '%'}
        </div>
      </div>
      
      <div className="mt-4 flex items-baseline">
        <h2 className="text-3xl font-bold text-navy-800">
          {kpi.value}{kpi.unit}
        </h2>
        <span className="ml-2 text-sm text-gray-500">/ {kpi.target}{kpi.unit}</span>
      </div>
      
      <div className="mt-4">
        <div className="w-full bg-gray-100 rounded-full h-2">
          <div 
            className={cn(
              "h-2 rounded-full",
              percentage >= 90 ? 'bg-green-500' :
              percentage >= 70 ? 'bg-teal-500' :
              percentage >= 50 ? 'bg-amber-500' :
              'bg-red-500'
            )}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}
