import Navigation from '@/sections/Navigation';
import Hero from '@/sections/Hero';
import Dashboard from '@/sections/Dashboard';
import CaseStudies from '@/sections/CaseStudies';
import Charts from '@/sections/Charts';
import Lessons from '@/sections/Lessons';
import RCATypes from '@/sections/RCATypes';
import SafetyTech from '@/sections/SafetyTech';
import Footer from '@/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      <Hero />
      <Dashboard />
      <CaseStudies />
      <Charts />
      <Lessons />
      <RCATypes />
      <SafetyTech />
      <Footer />
    </div>
  );
}
