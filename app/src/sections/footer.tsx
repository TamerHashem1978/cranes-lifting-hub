import { Shield, FileDown, ExternalLink, Mail, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-orange-500" />
              <span className="font-bold text-lg text-white">
                Crane<span className="text-orange-500">Safe</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Comprehensive analysis of overhead crane incidents in steel plants worldwide.
              Evidence-based insights for safer industrial operations.
            </p>
            <Button
              variant="outline"
              size="sm"
              className="border-orange-500/50 text-orange-400 hover:bg-orange-500/10"
              asChild
            >
              <a href="/report.md" download>
                <FileDown className="w-4 h-4 mr-2" />
                Download Full Report
              </a>
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              {[
                { label: 'Statistics Dashboard', href: '#dashboard' },
                { label: 'Case Studies', href: '#cases' },
                { label: 'Analysis Charts', href: '#charts' },
                { label: 'Lessons Learned', href: '#lessons' },
                { label: 'RCA Methods', href: '#rca' },
                { label: 'Safety Technologies', href: '#safetytech' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-orange-400 transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources & References</h3>
            <div className="space-y-2 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-orange-400" />
                <span>World Steel Association Safety Report 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-orange-400" />
                <span>OSHA 29 CFR 1910.179</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-orange-400" />
                <span>UK HSE HSG245 / LOLER 1998</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-orange-400" />
                <span>BS 7121 Code of Practice</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-orange-400" />
                <span>NASA Root Cause Best Practices</span>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <Mail className="w-4 h-4 text-slate-500" />
                <span className="text-slate-500">Data compiled from public safety reports</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            Crane Safety Analytics - Industrial Safety Research Database. Data compiled from World
            Steel Association, OSHA, HSE, and international safety board reports.
          </p>
          <p className="text-xs text-slate-600">
            For informational and educational purposes. Not a substitute for professional safety advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
