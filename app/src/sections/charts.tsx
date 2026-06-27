import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { BarChart3, TrendingUp, ShieldAlert, Clock, Zap, Maximize2 } from 'lucide-react';

const charts = [
  {
    id: 1,
    title: 'Causes of Crane-Related Deaths',
    subtitle: 'U.S. Construction 1992-2006 (632 fatalities)',
    src: '/crane_death_causes.png',
    icon: ShieldAlert,
    description:
      'Electrocution (25%), struck-by-load (21%), and struck-by-equipment (20%) account for two-thirds of all crane fatalities.',
  },
  {
    id: 2,
    title: 'LTI-to-Fatality Ratio by Cause',
    subtitle: 'Global Steel Industry 2005-2024',
    src: '/lti_fatality_ratio.png',
    icon: TrendingUp,
    description:
      'Overhead cranes at 9.84 have a dangerously low ratio, meaning few warning injuries precede each fatality.',
  },
  {
    id: 3,
    title: 'Contributory Factors Severity',
    subtitle: 'Thai Construction Industry Study',
    src: '/contributory_factors.png',
    icon: BarChart3,
    description:
      'Ground support (4.51), equipment malfunction (4.39), and damaged steel structure (4.39) score highest.',
  },
  {
    id: 4,
    title: 'Incident Types & Root Causes',
    subtitle: 'Steel Mill Crane Fatality Analysis',
    src: '/incident_types.png',
    icon: Zap,
    description:
      'Crushed by load (37%) and dropped loads (27%) dominate. Human error accounts for 90-93% of root causes.',
  },
  {
    id: 5,
    title: 'FMEA Risk Priority Analysis',
    subtitle: 'Crane Operational Failure Modes',
    src: '/fmea_rpn.png',
    icon: ShieldAlert,
    description:
      '"Struck by cranes or crane parts" scores highest RPN at 195, followed by crane topple at 100.',
  },
  {
    id: 6,
    title: 'Global Incident Timeline',
    subtitle: 'Major Steel Plant Incidents 2004-2025',
    src: '/incident_timeline.png',
    icon: Clock,
    description:
      'Timeline showing 10 major incidents across 6 countries, with India experiencing a cluster 2024-2025.',
  },
];

export default function Charts() {
  const [activeTab, setActiveTab] = useState('all');
  const filtered = activeTab === 'all' ? charts : charts.slice(0, 3);

  return (
    <section id="charts" className="section-padding bg-slate-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Analysis Charts & Visualizations
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Data-driven visualizations from World Steel Association, BLS, OSHA, and peer-reviewed
            academic research on crane incident patterns.
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-8">
          <Button
            variant={activeTab === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveTab('all')}
            className={activeTab === 'all' ? 'bg-orange-500 hover:bg-orange-600 text-white' : 'border-white/20 text-slate-300 hover:bg-white/5'}
          >
            All Charts
          </Button>
          <Button
            variant={activeTab === 'top' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveTab('top')}
            className={activeTab === 'top' ? 'bg-orange-500 hover:bg-orange-600 text-white' : 'border-white/20 text-slate-300 hover:bg-white/5'}
          >
            Top 3
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((chart) => (
            <Dialog key={chart.id}>
              <DialogTrigger asChild>
                <Card className="glass-card hover-lift cursor-pointer overflow-hidden group">
                  <div className="relative">
                    <img
                      src={chart.src}
                      alt={chart.title}
                      className="w-full h-56 object-contain bg-slate-900/50 p-2 group-hover:scale-[1.02] transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-slate-950/80 p-1.5 rounded-lg">
                        <Maximize2 className="w-4 h-4 text-orange-400" />
                      </div>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <chart.icon className="w-4 h-4 text-orange-400" />
                      <CardTitle className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors">
                        {chart.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-slate-400 mb-2">{chart.subtitle}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{chart.description}</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-5xl bg-slate-950 border-white/10 p-2">
                <img
                  src={chart.src}
                  alt={chart.title}
                  className="w-full rounded-lg"
                />
                <p className="text-center text-sm text-slate-400 mt-2">{chart.subtitle}</p>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
