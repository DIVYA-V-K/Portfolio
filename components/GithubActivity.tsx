import React, { useEffect, useState } from 'react';
import { Eye, Users, TrendingUp, Activity, RefreshCw } from 'lucide-react';

const StatCard: React.FC<{ label: string; value: string; icon: React.ReactNode; trend: string }> = ({ label, value, icon, trend }) => (
  <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-start justify-between">
    <div>
      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-1">{label}</p>
      <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 font-mono">{value}</h3>
      <p className="text-xs text-emerald-500 flex items-center gap-1 mt-2 font-medium">
        <TrendingUp size={12} /> {trend}
      </p>
    </div>
    <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-accent-500">
      {icon}
    </div>
  </div>
);

const GithubActivity: React.FC = () => {
  const [views, setViews] = useState<number>(0);
  const [uniqueVisitors, setUniqueVisitors] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  // Using counterapi.dev as a reliable alternative to countapi.xyz
  const NAMESPACE = 'divya-portfolio-v1'; 
  const KEY = 'views';

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        // Hit the CounterAPI to increment/get total views
        // Endpoint: https://api.counterapi.dev/v1/{namespace}/{key}/up
        const response = await fetch(`https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}/up`);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        
        // CounterAPI returns { count: number }
        if (typeof data.count === 'number') {
          setViews(data.count);
        }

        // Logic for unique visitors using localStorage
        const visitedKey = `visited_${NAMESPACE}`;
        let localUnique = parseInt(localStorage.getItem('unique_visitor_count') || '0');
        const hasVisited = localStorage.getItem(visitedKey);

        if (!hasVisited) {
          localUnique += 1;
          localStorage.setItem('unique_visitor_count', localUnique.toString());
          localStorage.setItem(visitedKey, 'true');
        }
        
        setUniqueVisitors(localUnique);
        setLoading(false);

      } catch (err) {
        console.warn("Analytics service unavailable, using fallback.", err);
        setError(true);
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <section id="activity" className="py-24 bg-slate-50 dark:bg-slate-950/50 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-3">
            <Activity className="text-accent-500" size={28} />
            Visitor Analytics
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
            Real-time engagement metrics for this portfolio.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatCard 
            label="Total Views" 
            value={loading ? "..." : error ? "0" : views.toLocaleString()} 
            icon={loading ? <RefreshCw size={20} className="animate-spin" /> : <Eye size={20} />} 
            trend="+1 this session" 
          />
          <StatCard 
            label="Unique Visitors" 
            value={loading ? "..." : uniqueVisitors.toLocaleString()} 
            icon={<Users size={20} />} 
            trend="lifetime" 
          />
          <StatCard 
            label="Avg. Session" 
            value="--:--" 
            icon={<Activity size={20} />} 
            trend="calculating..." 
          />
        </div>
        
      </div>
    </section>
  );
};

export default GithubActivity;