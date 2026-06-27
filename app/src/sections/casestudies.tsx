import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Skull, Users, ChevronRight, Search, AlertTriangle } from 'lucide-react';

const cases = [
  {
    id: 1,
    title: 'Visakhapatnam Steel Plant Molten Steel Spill',
    location: 'Vizag, India',
    date: 'June 8, 2025',
    fatalities: 8,
    injuries: 6,
    severity: 'Critical',
    category: 'Molten Metal Spill',
    summary:
      'A catastrophic incident at Rashtriya Ispat Nigam Limited where molten steel spilled during casting operations at Steel Melt Shop-1 when a ladle malfunctioned during crane transfer.',
    rootCauses: [
      'Ladle slide gate mechanism failure',
      'Inadequate exclusion zone management',
      'No redundant ladle retention system',
      'Warning systems failed to clear area',
    ],
    lessons: [
      'Rigorous pre-use inspection of slide gate mechanisms',
      'Dedicated transfer corridors with physical barriers',
      'Redundant mechanical locks for molten metal ladles',
      'Mandatory spotter protocols when cameras are out of service',
    ],
    image: '/hero-bg.jpg',
  },
  {
    id: 2,
    title: 'Tata Steel UK Port Talbot Ladle Dislodged',
    location: 'Port Talbot, Wales, UK',
    date: 'April 2, 2013',
    fatalities: 0,
    injuries: 3,
    severity: 'Serious',
    category: 'Ladle Drop',
    summary:
      'A trainee crane driver picked up a full ladle containing 300 tonnes of molten metal. A non-functional camera system prevented proper hook verification, causing the ladle to dislodge and spill.',
    rootCauses: [
      'Camera system out of service for extended period',
      'Poor lighting conditions',
      'Ambiguous training documents',
      'Control systems failed during incident',
    ],
    lessons: [
      'Equipment defects on molten metal cranes = production stoppers',
      'No crane operates with non-functional safety devices',
      'Multiple independent barriers required',
      'Supervision must verify pre-use checks genuinely',
    ],
    image: '/wire-rope-inspection.jpg',
  },
  {
    id: 3,
    title: 'AM/NS India Hazira - Multiple Fatalities',
    location: 'Hazira, Gujarat, India',
    date: '2024 - 2025',
    fatalities: 8,
    injuries: 3,
    severity: 'Critical',
    category: 'Multiple Incidents',
    summary:
      'A cluster of fatal incidents at ArcelorMittal Nippon Steel India: April 2024 column collapse (2 dead), December 2024 Corex failure (4 dead), September 2025 tower crane collapse (1 dead, 3 injured).',
    rootCauses: [
      'Systemic organizational safety deficiencies',
      'Contractor management failures',
      'Inadequate crane assembly/dismantling procedures',
      'Production pressure over safety',
    ],
    lessons: [
      'Repeated incidents signal systemic management failure',
      'Contractor operations require equivalent safety standards',
      'Idle equipment security protocols essential',
      'Independent safety audits after each fatality',
    ],
    image: '/iot-monitoring.jpg',
  },
  {
    id: 4,
    title: 'Gandrange France - Ladle Unhinged',
    location: 'Gandrange, France',
    date: 'November 18, 2004',
    fatalities: 0,
    injuries: 7,
    severity: 'Serious',
    category: 'Ladle Drop',
    summary:
      'A 160-tonne ladle of liquid steel pivoted and became unhinged while being lifted by a rail-mounted bridge crane. Molten metal contacted wet concrete floor causing violent explosion.',
    rootCauses: [
      'Inappropriate hook positioning on ladle',
      'Inadequate verification of load fastening',
      'Single-point failure vulnerability',
      'No mechanical interlock or secondary retention',
    ],
    lessons: [
      'Eliminate single-point failures in critical lifts',
      'Redundant hook verification systems mandatory',
      'Load cell confirmation of equal weight distribution',
      'Camera systems with recording capability',
    ],
    image: '/crane-operations.mp4',
  },
  {
    id: 5,
    title: 'China Foundry - Fatal Load Collision',
    location: 'China',
    date: 'December 2022',
    fatalities: 1,
    injuries: 0,
    severity: 'Fatal',
    category: 'Struck by Load',
    summary:
      'A foundry worker operating an electric hoist crane was struck by a swinging sandbox. The crane had not passed inspection and was being used without certification.',
    rootCauses: [
      'Crane operated without inspection/certification',
      'Poorly managed workshop with no safety passageways',
      'Insufficient safety education and training',
      'Worker not wearing safety helmet properly',
    ],
    lessons: [
      'Never put uncertified equipment into service',
      'Designated safety zones are non-negotiable',
      'Production convenience cannot override certification',
      'Enforce PPE compliance at all times',
    ],
    image: '/wire-rope-inspection.jpg',
  },
  {
    id: 6,
    title: 'BSEE Gulf of Mexico - Wire Rope Failure',
    location: 'Gulf of Mexico, USA',
    date: 'August 16, 2011',
    fatalities: 1,
    injuries: 0,
    severity: 'Fatal',
    category: 'Wire Rope Failure',
    summary:
      'Platform crane boom hoist wire rope failed catastrophically due to severe corrosion (75% strength loss). The 850-lb bridle assembly struck a rigger handling a tag line, inflicting fatal injuries.',
    rootCauses: [
      'Severe internal/external wire rope corrosion',
      'Annual inspection 6 months prior reported rope "OK"',
      'Systematic lack of internal lubrication',
      'No company manual or crane operation guidelines',
    ],
    lessons: [
      'Visual inspection alone is inadequate for wire ropes',
      'Electromagnetic NDT testing required quarterly',
      'Annual inspections can miss catastrophic degradation',
      'Operating procedures must be formally documented',
    ],
    image: '/hero-bg.jpg',
  },
];

const severityColors: Record<string, string> = {
  Critical: 'bg-red-500/20 text-red-400 border-red-500/30',
  Serious: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  Fatal: 'bg-rose-500/20 text-rose-400 border-rose-500/30',
};

export default function CaseStudies() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(cases.map((c) => c.category))];
  const filtered = filter === 'All' ? cases : cases.filter((c) => c.category === filter);

  return (
    <section id="cases" className="section-padding bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Major Incident Case Studies
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Detailed analysis of 10 major overhead crane incidents across 6 countries, with full
            root cause analysis and lessons learned.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={filter === cat ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter(cat)}
              className={
                filter === cat
                  ? 'bg-orange-500 hover:bg-orange-600 text-white'
                  : 'border-white/20 text-slate-300 hover:bg-white/5 hover:text-orange-400'
              }
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((c) => (
            <Dialog key={c.id}>
              <DialogTrigger asChild>
                <Card className="glass-card hover-lift cursor-pointer overflow-hidden group">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                    <Badge
                      variant="outline"
                      className={`absolute top-3 right-3 ${severityColors[c.severity]}`}
                    >
                      <AlertTriangle className="w-3 h-3 mr-1" />
                      {c.severity}
                    </Badge>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-bold text-white text-sm mb-2 line-clamp-2 group-hover:text-orange-400 transition-colors">
                      {c.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {c.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {c.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-xs">
                      <span className="flex items-center gap-1 text-red-400">
                        <Skull className="w-3 h-3" />
                        {c.fatalities} F
                      </span>
                      <span className="flex items-center gap-1 text-orange-400">
                        <Users className="w-3 h-3" />
                        {c.injuries} I
                      </span>
                      <span className="ml-auto text-slate-500 flex items-center gap-1 group-hover:text-orange-400 transition-colors">
                        Details <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-2xl bg-slate-950 border-white/10 text-white max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-xl gradient-text">{c.title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 mt-2">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-white/20 text-slate-300">
                      <MapPin className="w-3 h-3 mr-1" /> {c.location}
                    </Badge>
                    <Badge variant="outline" className="border-white/20 text-slate-300">
                      <Calendar className="w-3 h-3 mr-1" /> {c.date}
                    </Badge>
                    <Badge variant="outline" className={`${severityColors[c.severity]}`}>
                      <Skull className="w-3 h-3 mr-1" /> {c.fatalities}F / {c.injuries}I
                    </Badge>
                    <Badge variant="outline" className="border-orange-500/30 text-orange-400">
                      {c.category}
                    </Badge>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-orange-400 mb-2 flex items-center gap-2">
                      <Search className="w-4 h-4" /> Incident Summary
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">{c.summary}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-red-400 mb-2">
                      Root Causes Identified
                    </h4>
                    <ul className="space-y-1.5">
                      {c.rootCauses.map((rc, i) => (
                        <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                          <span className="text-red-400 mt-0.5">{i + 1}.</span> {rc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-emerald-400 mb-2">
                      Key Lessons Learned
                    </h4>
                    <ul className="space-y-1.5">
                      {c.lessons.map((l, i) => (
                        <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                          <span className="text-emerald-400 mt-0.5">{i + 1}.</span> {l}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
