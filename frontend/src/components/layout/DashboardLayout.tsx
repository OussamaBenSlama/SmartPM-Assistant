
import { useState } from 'react';
import Sidebar from './Sidebar';
import { cn } from '@/lib/utils';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-slate-50 font-sans">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <main 
        className={cn(
          "flex-1 overflow-auto transition-all duration-300 ease-in-out",
          sidebarOpen ? "ml-64" : "ml-16"
        )}
      >
        <div className="container mx-auto py-6">
          {children}
        </div>
      </main>
    </div>
  );
}
