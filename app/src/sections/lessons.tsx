import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ShieldCheck,
  AlertTriangle,
  Wrench,
  GraduationCap,
  ClipboardCheck,
  Factory,
  Users,
  FileText,
} from 'lucide-react';

const lessons = [
  {
    icon: ShieldCheck,
    title: 'Eliminate Single-Point Failures',
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    content:
      'Every major incident involved at least one single-point barrier failure. Safety-critical crane operations must incorporate redundant, independent barriers so no single equipment defect, human error, or procedural failure can result in a dropped load or personnel injury.',
    actions: [
      'Install redundant hook verification systems',
      'Implement secondary mechanical locks on ladles',
      'Deploy dual limit switches on critical motions',
      'Use camera systems with recording capability',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Treat Defects as Production Stoppers',
    color: 'text-red-400 bg-red-500/10 border-red-500/20',
    content:
      'The Tata Steel camera, the Sallie Knutsen limit switch, and the CMA CGM chain all failed because defects were tolerated to avoid production disruption. Molten metal cranes with non-functional safety devices must be immediately removed from service.',
    actions: [
      'Absolute prohibition on operating with safety device failures',
      'Management authorization required to override',
      'Track mean-time-to-repair for safety defects',
      'Include safety device availability in KPIs',
    ],
  },
  {
    icon: Wrench,
    title: 'Visual Inspection is Inadequate for Wire Ropes',
    color: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
    content:
      'The BSEE investigation showed 75% strength reduction passed an annual inspection 6 months before failure. Electromagnetic non-destructive testing (MRT) is essential for detecting internal broken wires and cross-section loss.',
    actions: [
      'Deploy electromagnetic MRT testing quarterly',
      'Replace time-based with condition-based rope replacement',
      'Track rope degradation trends over time',
      'Train inspectors on MRT equipment interpretation',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Task-Specific Operator Competency',
    color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    content:
      'Ladle crane operators need knowledge beyond basic crane controls: thermal dynamics, slide gate behavior, exclusion zone protocols, and emergency response. Generic certification is insufficient for molten metal operations.',
    actions: [
      'Implement ladle-specific competency verification',
      'Use simulator training for emergency scenarios',
      'Require demonstrated competency on exact crane type',
      'Annual refresher assessment mandatory',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Verify Pre-Use Checks, Do Not Just Perform Them',
    color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    content:
      'Pre-use checks that are paperwork exercises provide false assurance. Organizations must implement random verification by supervision, consequence management for superficial checks, and technology-assisted verification.',
    actions: [
      'Random supervisor verification of pre-use checks',
      'Photo documentation of critical inspection items',
      'Digital checklists with timestamp validation',
      'Consequence management for falsified checks',
    ],
  },
  {
    icon: Factory,
    title: 'Production Pressure Overrides Safety',
    color: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
    content:
      'Organizations that defer maintenance, skip inspections, or assign unqualified personnel to meet production targets create inevitable catastrophe conditions. When safety compromise is cited for production urgency, incident probability is elevated.',
    actions: [
      'Eliminate production bonuses tied to output only',
      'Include safety metrics in all performance reviews',
      'Empower operators to stop unsafe operations',
      'Independent safety audits quarterly',
    ],
  },
  {
    icon: Users,
    title: 'Contractor Operations Require Equal Standards',
    color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    content:
      'The Hazira tower crane collapse involved contractor-operated equipment. Principal employers frequently assume contractors manage their own safety. Unified safety requirements for all crane operations on site must be standard practice.',
    actions: [
      'Unified safety standards for all site operations',
      'Principal employer verification of contractor compliance',
      'Pre-qualification of contractor safety systems',
      'Joint safety inspections with contractors',
    ],
  },
  {
    icon: FileText,
    title: 'Barrier-Based Safety Management',
    color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    content:
      'The low LTI-to-fatality ratio means injury rates provide poor predictive value. Organizations must implement barrier assurance programs verifying the presence and functionality of multiple independent safety barriers.',
    actions: [
      'Weekly barrier assurance audits',
      'Track barrier integrity as leading indicator',
      'Investigate all barrier failures with incident rigor',
      'Report barrier status to executive leadership monthly',
    ],
  },
];

export default function Lessons() {
  return (
    <section id="lessons" className="section-padding bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Lessons Learned
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Eight critical lessons derived from 10 major incident investigations spanning 6 countries
            and 20 years of data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {lessons.map((lesson) => (
            <Card
              key={lesson.title}
              className={`border ${lesson.color.split(' ')[2]} bg-transparent hover-lift`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${lesson.color.split(' ')[1]}`}>
                    <lesson.icon className={`w-5 h-5 ${lesson.color.split(' ')[0]}`} />
                  </div>
                  <CardTitle className="text-base font-bold text-white">{lesson.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-slate-300 leading-relaxed mb-4">{lesson.content}</p>
                <div className="space-y-1.5">
                  {lesson.actions.map((action, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-xs text-slate-400"
                    >
                      <span className={`mt-0.5 min-w-[14px] ${lesson.color.split(' ')[0]}`}>{i + 1}.</span>
                      {action}
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
