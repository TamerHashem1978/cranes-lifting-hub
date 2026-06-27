import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Shield, FileDown } from 'lucide-react';

const navLinks = [
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Case Studies', href: '#cases' },
  { label: 'Analysis Charts', href: '#charts' },
  { label: 'Lessons Learned', href: '#lessons' },
  { label: 'RCA Types', href: '#rca' },
  { label: 'Safety Tech', href: '#safetytech' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-lg border-b border-white/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 group">
          <Shield className="w-7 h-7 text-orange-500 group-hover:text-orange-400 transition-colors" />
          <span className="font-bold text-lg tracking-tight text-white">
            Crane<span className="text-orange-500">Safe</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-slate-300 hover:text-orange-400 transition-colors rounded-lg hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            className="hidden md:flex border-orange-500/50 text-orange-400 hover:bg-orange-500/10 hover:text-orange-300"
            asChild
          >
            <a href="/report.md" download>
              <FileDown className="w-4 h-4 mr-1.5" />
              Report
            </a>
          </Button>
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-slate-950 border-white/10">
              <div className="flex flex-col gap-2 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="px-4 py-3 text-slate-300 hover:text-orange-400 hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="/report.md"
                  download
                  className="mt-4 px-4 py-3 text-orange-400 border border-orange-500/50 rounded-lg hover:bg-orange-500/10 transition-colors flex items-center gap-2"
                >
                  <FileDown className="w-4 h-4" />
                  Download Report
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
