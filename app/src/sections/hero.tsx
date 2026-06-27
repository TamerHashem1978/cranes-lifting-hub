import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, AlertTriangle, TrendingUp, BookOpen } from 'lucide-react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/hero-bg.jpg"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-transparent to-slate-950/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 pt-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-medium mb-8 animate-fade-in">
          <AlertTriangle className="w-4 h-4" />
          Global Analysis Report 2025
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
          Overhead Crane Incidents
          <br />
          <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            in Steel Plants
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          Comprehensive root cause analysis of <strong className="text-white">107 fatalities</strong> and{' '}
          <strong className="text-white">1,053 injuries</strong> from overhead crane operations worldwide.
          Evidence-based insights from 10 major incident case studies across 6 countries.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 h-12 text-base font-semibold shadow-lg shadow-orange-500/25"
            asChild
          >
            <a href="#dashboard">
              <TrendingUp className="w-5 h-5 mr-2" />
              View Analysis
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 px-8 h-12 text-base"
            asChild
          >
            <a href="#lessons">
              <BookOpen className="w-5 h-5 mr-2" />
              Lessons Learned
            </a>
          </Button>
        </div>

        {/* Key Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { value: '107', label: 'Fatalities (2005-2024)', color: 'text-red-400' },
            { value: '1,053', label: 'Lost Time Injuries', color: 'text-orange-400' },
            { value: '9.84', label: 'LTI-to-Fatality Ratio', color: 'text-yellow-400' },
            { value: '97%', label: 'Preventable Rate', color: 'text-emerald-400' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass-card p-4 md:p-5 hover-lift"
            >
              <div className={`text-2xl md:text-3xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-xs md:text-sm text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#dashboard"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-orange-400 transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
