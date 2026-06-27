import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Wifi,
  ShieldCheck,
  Weight,
  Wind,
  Eye,
  Activity,
  BarChart3,
  Cpu,
} from 'lucide-react';

const technologies = [
  {
    icon: Wifi,
    title: 'IoT Sensor Monitoring',
    layer: 'L1-L7 Architecture',
    description:
      'Continuous real-time monitoring of wire rope, brakes, gearbox, load, structure, alignment, and electrical integrity.',
    metrics: ['30% downtime reduction', '$850K annual savings', '92% predictive accuracy'],
    color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  },
  {
    icon: ShieldCheck,
    title: 'Anti-Collision Systems',
    layer: 'RTLS Technology',
    description:
      'Real-Time Location System with 20cm accuracy creating protective digital envelopes around cranes and personnel.',
    metrics: ['20cm positioning accuracy', 'Auto slow-down & stop', 'Swing dynamics compensation'],
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  },
  {
    icon: Weight,
    title: 'Automatic Overload Protection',
    layer: 'Load Cell Integration',
    description:
      'Precision load cells with automatic lockout prevent lifting beyond rated capacity. Physically impossible to override.',
    metrics: ['100% override-proof', 'Load cycle logging', 'Automatic lockout at SWL'],
    color: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
  },
  {
    icon: Wind,
    title: 'Anti-Sway Control',
    layer: 'Motion Damping',
    description:
      'Sensors measure sway angle in real-time with algorithms that dampen pendulum motion for molten metal ladle handling.',
    metrics: ['Real-time sway angle sensing', 'Coordinated trolley movement', 'Liquid load optimization'],
    color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  },
  {
    icon: Eye,
    title: 'Electromagnetic NDT (MRT)',
    layer: 'Wire Rope Testing',
    description:
      'Magnetic Rope Testing detects internal broken wires, cross-section loss, and corrosion invisible to visual inspection.',
    metrics: ['Internal defect detection', '75% strength loss caught', 'Quarterly testing schedule'],
    color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  },
  {
    icon: Activity,
    title: 'Brake Condition Monitoring',
    layer: 'Predictive Analytics',
    description:
      'Continuous monitoring of brake disc wear, torque output, response time, and temperature for predictive maintenance.',
    metrics: ['125% holding verification', 'Trend-based alerts', 'Planned outage scheduling'],
    color: 'text-red-400 bg-red-500/10 border-red-500/20',
  },
  {
    icon: BarChart3,
    title: 'Predictive Maintenance Analytics',
    layer: 'Machine Learning',
    description:
      'ML models trained on operational data achieve 92% predictive accuracy for component failures before they occur.',
    metrics: ['92% prediction accuracy', 'MTBF 52 to 96 days', '11-month ROI achieved'],
    color: 'text-pink-400 bg-pink-500/10 border-pink-500/20',
  },
  {
    icon: Cpu,
    title: 'Control System Redundancy',
    layer: 'Fail-Safe Design',
    description:
      'Fail-safe PLC systems with continuous self-testing ensure component failures produce safe state (crane lockout).',
    metrics: ['Continuous self-testing', 'Fail-safe by design', 'Safe state on any failure'],
    color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  },
];

export default function SafetyTech() {
  return (
    <section id="safetytech" className="section-padding bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Safety Technologies
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Eight proven technologies that transform crane safety from reactive to predictive,
            with documented ROI and performance metrics from real-world implementations.
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-12 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-orange-500/5">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-64 md:h-80 object-cover"
            poster="/iot-monitoring.jpg"
          >
            <source src="/crane-operations.mp4" type="video/mp4" />
          </video>
          <div className="bg-slate-900/90 p-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-white">Steel Plant Crane Operations</p>
              <p className="text-xs text-slate-400">Real-time monitoring of overhead crane fleet</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-emerald-400">Live Monitoring Active</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {technologies.map((tech) => (
            <Card
              key={tech.title}
              className={`border ${tech.color.split(' ')[2]} bg-transparent hover-lift`}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-lg ${tech.color.split(' ')[1]}`}>
                    <tech.icon className={`w-5 h-5 ${tech.color.split(' ')[0]}`} />
                  </div>
                  <span className={`text-xs font-medium ${tech.color.split(' ')[0]}`}>
                    {tech.layer}
                  </span>
                </div>
                <CardTitle className="text-sm font-bold text-white mt-2">{tech.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-xs text-slate-400 leading-relaxed mb-3">{tech.description}</p>
                <div className="space-y-1">
                  {tech.metrics.map((m, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs">
                      <div className={`w-1 h-1 rounded-full ${tech.color.split(' ')[1].replace('bg-', 'bg-').replace('/10', '')}`} />
                      <span className="text-slate-300">{m}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
