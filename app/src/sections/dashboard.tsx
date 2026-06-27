import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  AlertTriangle,
  TrendingDown,
  Skull,
  BarChart3,
  Globe,
  Activity,
  Clock,
  DollarSign,
} from 'lucide-react';

const stats = [
  {
    icon: Skull,
    title: 'Total Fatalities',
    value: '107',
    sub: 'Global steel industry 2005-2024',
    trend: 'Critical Risk',
    trendColor: 'text-red-400',
    bgColor: 'bg-red-500/5 border-red-500/10',
  },
  {
    icon: Activity,
    title: 'Lost Time Injuries',
    value: '1,053',
    sub: 'LTIs from overhead crane ops',
    trend: '9.84 LTI/Fatality',
    trendColor: 'text-yellow-400',
    bgColor: 'bg-yellow-500/5 border-yellow-500/10',
  },
  {
    icon: AlertTriangle,
    title: 'Severity Ratio',
    value: '9.84',
    sub: 'Low ratio = more deadly',
    trend: 'High Fatality Risk',
    trendColor: 'text-orange-400',
    bgColor: 'bg-orange-500/5 border-orange-500/10',
  },
  {
    icon: TrendingDown,
    title: 'Preventable Rate',
    value: '97%',
    sub: 'Of crane incidents preventable',
    trend: 'Action Required',
    trendColor: 'text-emerald-400',
    bgColor: 'bg-emerald-500/5 border-emerald-500/10',
  },
  {
    icon: Globe,
    title: 'Countries Covered',
    value: '6+',
    sub: 'India, UK, France, USA, China, Netherlands',
    trend: 'Cross-Regional',
    trendColor: 'text-blue-400',
    bgColor: 'bg-blue-500/5 border-blue-500/10',
  },
  {
    icon: BarChart3,
    title: 'Case Studies',
    value: '10',
    sub: 'Major incidents with full RCA',
    trend: 'Fully Documented',
    trendColor: 'text-purple-400',
    bgColor: 'bg-purple-500/5 border-purple-500/10',
  },
  {
    icon: Clock,
    title: 'Study Period',
    value: '20 Years',
    sub: '2005 - 2024 data analysis',
    trend: 'Comprehensive',
    trendColor: 'text-cyan-400',
    bgColor: 'bg-cyan-500/5 border-cyan-500/10',
  },
  {
    icon: DollarSign,
    title: 'Avg. Fatality Cost',
    value: '$4M+',
    sub: 'Direct & indirect losses',
    trend: 'Per Incident',
    trendColor: 'text-rose-400',
    bgColor: 'bg-rose-500/5 border-rose-500/10',
  },
];

export default function Dashboard() {
  return (
    <section id="dashboard" className="section-padding bg-slate-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Global Statistics Dashboard
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Key metrics from the World Steel Association Safety Report 2025, OSHA, and international
            safety board investigations across 20 years of data.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <Card
              key={s.title}
              className={`${s.bgColor} hover-lift group`}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <s.icon className="w-5 h-5 text-slate-400 group-hover:text-orange-400 transition-colors" />
                  <span className={`text-xs font-medium ${s.trendColor}`}>{s.trend}</span>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-3xl font-bold text-white mb-1">{s.value}</CardTitle>
                <p className="text-sm text-slate-300 font-medium">{s.title}</p>
                <p className="text-xs text-slate-500 mt-1">{s.sub}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
