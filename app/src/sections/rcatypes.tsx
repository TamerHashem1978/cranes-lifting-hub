import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import {
  GitFork,
  Search,
  TreePine,
  Layers,
  ShieldAlert,
  FileQuestion,
  CheckCircle2,
  XCircle,
} from 'lucide-react';

const rcaMethods = [
  {
    name: '5 Whys',
    type: 'Simple Linear',
    bestFor: 'Quick, simple incidents (minor injury)',
    strengths: ['Easy to learn', 'Fast execution', 'No training needed'],
    limitations: ['Linear thinking misses multiple causes', 'Stops at symptoms', 'Investigator bias'],
    time: '1-2 hours',
  },
  {
    name: 'Fishbone (Ishikawa)',
    type: 'Visual / Brainstorming',
    bestFor: 'Team brainstorming, visual overview',
    strengths: ['Visual', 'Inclusive', 'Covers multiple categories'],
    limitations: ['No causal relationships', 'Can become cluttered'],
    time: '2-3 hours',
  },
  {
    name: 'Fault Tree Analysis (FTA)',
    type: 'Top-Down Logic',
    bestFor: 'Complex technical failures, equipment systems',
    strengths: ['Rigorous', 'Handles multi-cause', 'Can be quantified'],
    limitations: ['Complex', 'Requires specialist knowledge'],
    time: '1-3 days',
  },
  {
    name: 'ICAM',
    type: 'Systemic (4 Layers)',
    bestFor: 'Serious incidents, fatalities, systemic failures',
    strengths: ['Addresses org root causes', 'Swiss Cheese Model', 'Legally defensible'],
    limitations: ['Requires trained facilitator', 'Time-intensive'],
    time: '1-4 weeks',
  },
  {
    name: 'TapRooT',
    type: 'Proprietary Tree',
    bestFor: 'High-consistency environments, high-volume investigations',
    strengths: ['Consistent results', 'Built-in corrective actions', 'Expert system'],
    limitations: ['Proprietary (licensing)', 'Can feel rigid'],
    time: '1-3 days',
  },
  {
    name: 'HFACS',
    type: 'Aviation-focused',
    bestFor: 'Aviation, transportation, human-factor-dominant',
    strengths: ['Excellent for human factors', 'Standardized'],
    limitations: ['Focus on errors only', 'No quantitative measures'],
    time: '2-4 days',
  },
];

const unsafeActs = [
  'Operating equipment without authority',
  'Removal of safety devices / bypassing interlocks',
  'Improper use of equipment / exceeding rated capacity',
  'Erroneous loading/unloading technique',
  'Inadequate communication / unclear signals',
  'Horseplay / careless act / inattention',
  'Improper work position / standing under load',
  'Failure to wear PPE properly',
  'Use of defective equipment knowingly',
  'Work on running equipment',
  'Operating at unsafe speed',
  'Inadequate implementation of protective measures',
  'Failure to secure / poor housekeeping',
  'Under influence of alcohol/drugs',
];

const unsafeConditions = [
  'Defective equipment / wire rope / brake / limit switch',
  'Inadequate safety devices / guards / interlocks',
  'Bad housekeeping / untidy workspace',
  'Poor illumination / visibility',
  'Extreme temperature / heat exposure',
  'Slippery or rough surface',
  'Tight / narrow workspace',
  'High noise level / communication interference',
  'Dangerous weather conditions',
  'Falling object hazard',
  'Fire or explosion hazards',
  'Inadequate ventilation',
  'Poorly designed controls / ergonomics',
  'Missing safety warning signs / barricades',
  'Hazardous chemical exposure',
  'Lack of planning / no lift plan',
  'Parallel activities creating interference',
  'Insufficient preparedness / no emergency plan',
];

export default function RCATypes() {
  const [activeTab, setActiveTab] = useState('methods');

  return (
    <section id="rca" className="section-padding bg-slate-950 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            RCA Methods & Causation Frameworks
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Comprehensive reference for accident investigation practitioners: RCA methods comparison,
            unsafe acts, and unsafe conditions checklists.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full max-w-2xl mx-auto mb-8 bg-slate-900 border border-white/10">
            <TabsTrigger value="methods" className="flex-1 data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              <GitFork className="w-4 h-4 mr-2" /> RCA Methods
            </TabsTrigger>
            <TabsTrigger value="acts" className="flex-1 data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              <ShieldAlert className="w-4 h-4 mr-2" /> Unsafe Acts
            </TabsTrigger>
            <TabsTrigger value="conditions" className="flex-1 data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              <TreePine className="w-4 h-4 mr-2" /> Unsafe Conditions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="methods">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {rcaMethods.map((method) => (
                <Card key={method.name} className="glass-card hover-lift">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Layers className="w-5 h-5 text-orange-400" />
                        <CardTitle className="text-base font-bold text-white">{method.name}</CardTitle>
                      </div>
                      <Badge variant="outline" className="border-orange-500/30 text-orange-400 text-xs">
                        {method.time}
                      </Badge>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">{method.type}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-slate-300 mb-3">
                      <span className="text-orange-400 font-medium">Best for:</span> {method.bestFor}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <p className="text-xs text-emerald-400 font-medium mb-1">Strengths</p>
                        {method.strengths.map((s, i) => (
                          <div key={i} className="flex items-center gap-1 text-xs text-slate-400">
                            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                            {s}
                          </div>
                        ))}
                      </div>
                      <div>
                        <p className="text-xs text-red-400 font-medium mb-1">Limitations</p>
                        {method.limitations.map((l, i) => (
                          <div key={i} className="flex items-center gap-1 text-xs text-slate-400">
                            <XCircle className="w-3 h-3 text-red-500" />
                            {l}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="acts">
            <Card className="glass-card">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <FileQuestion className="w-5 h-5 text-red-400" />
                  <CardTitle className="text-base text-white">Unsafe Acts Checklist (EIGA Standard)</CardTitle>
                </div>
                <p className="text-xs text-slate-400">
                  Substandard practices that may serve as immediate causes in accident investigations.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {unsafeActs.map((act, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 p-2.5 rounded-lg bg-red-500/5 border border-red-500/10 hover:bg-red-500/10 transition-colors"
                    >
                      <span className="text-red-400 font-bold text-xs mt-0.5 min-w-[24px]">
                        UA-{String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm text-slate-300">{act}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="conditions">
            <Card className="glass-card">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Search className="w-5 h-5 text-yellow-400" />
                  <CardTitle className="text-base text-white">Unsafe Conditions Checklist (EIGA Standard)</CardTitle>
                </div>
                <p className="text-xs text-slate-400">
                  Substandard conditions that may serve as immediate causes in accident investigations.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {unsafeConditions.map((cond, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 p-2.5 rounded-lg bg-yellow-500/5 border border-yellow-500/10 hover:bg-yellow-500/10 transition-colors"
                    >
                      <span className="text-yellow-400 font-bold text-xs mt-0.5 min-w-[24px]">
                        UC-{String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm text-slate-300">{cond}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
