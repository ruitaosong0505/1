import React from 'react';
import { motion } from 'motion/react';
import { 
  Bell, 
  ChevronRight, 
  Mountain, 
  Microscope, 
  ScrollText, 
  Sparkles, 
  LayoutDashboard, 
  Compass, 
  BarChart3, 
  TrendingUp,
  Wind
} from 'lucide-react';

const Header = () => (
  <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-8 h-20 bg-white border-b border-outline">
    <div className="flex flex-col">
      <h1 className="text-xl font-bold tracking-tight text-slate-900 leading-none">Breaking the Cocoon</h1>
      <span className="geo-label mt-1">System Node 4.2.0</span>
    </div>
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 bg-slate-100 flex items-center justify-center border border-outline">
        <img 
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150" 
          alt="Profile" 
          className="w-full h-full object-cover grayscale"
        />
      </div>
      <button className="p-2 border border-outline hover:bg-slate-50 transition-colors">
        <Bell size={20} className="text-slate-600" />
      </button>
    </div>
  </nav>
);

const HeroSection = () => (
  <section className="geo-card p-10 flex flex-col md:flex-row items-center gap-10">
    <div className="relative w-48 h-48 flex items-center justify-center border border-outline bg-slate-50">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="z-10 bg-white border border-outline p-6"
      >
        <Wind size={48} className="text-primary" />
      </motion.div>
      <div className="absolute inset-4 border border-dashed border-primary/20 animate-pulse" />
      <div className="absolute top-0 left-0 w-2 h-2 bg-primary" />
      <div className="absolute bottom-0 right-0 w-2 h-2 bg-primary" />
    </div>

    <div className="flex-1 space-y-4">
      <h2 className="text-3xl font-light tracking-tight text-slate-900 uppercase">Active Emergence</h2>
      <div className="space-y-2">
        <div className="flex justify-between items-end">
          <span className="geo-label">Efficiency</span>
          <span className="text-3xl font-mono font-bold text-primary">68%</span>
        </div>
        <div className="h-1 w-full bg-slate-100 overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "68%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-full bg-primary"
          />
        </div>
      </div>
      <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
        Monitored expansion of intellectual horizons. Currently processing 14 new mental silos detected within this cycle.
      </p>
    </div>
  </section>
);

const StatsGrid = () => (
  <div className="grid grid-cols-2 gap-px bg-outline">
    <div className="geo-card border-none p-8 flex flex-col items-start space-y-2">
      <span className="geo-label">Domains Explored</span>
      <span className="text-3xl font-bold text-primary">024</span>
    </div>
    <div className="geo-card border-none p-8 flex flex-col items-start space-y-2">
      <span className="geo-label">Growth Milestones</span>
      <span className="text-3xl font-bold text-slate-900">012</span>
    </div>
  </div>
);

const DomainItem = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <motion.div 
    whileHover={{ x: 4 }}
    className="group geo-card p-6 flex items-center gap-6 cursor-pointer hover:border-primary"
  >
    <div className="w-12 h-12 bg-slate-50 flex items-center justify-center border border-outline group-hover:bg-primary transition-colors">
      <Icon size={20} className="text-slate-600 group-hover:text-white" />
    </div>
    <div className="flex-1">
      <p className="text-sm font-bold text-slate-900 uppercase tracking-tighter">{title}</p>
      <p className="text-xs text-slate-400 mt-1">{desc}</p>
    </div>
    <div className="w-8 h-8 flex items-center justify-center border border-outline">
      <ChevronRight size={14} className="text-slate-400" />
    </div>
  </motion.div>
);

const MilestoneTimeline = () => (
  <section className="space-y-8">
    <div className="flex items-center gap-4">
      <h3 className="text-sm font-bold text-slate-800 uppercase tracking-[0.3em]">Log Report</h3>
      <div className="h-px flex-1 bg-outline"></div>
    </div>
    <div className="space-y-6">
      {/* Milestone 1 */}
      <div className="geo-card p-8 border-l-4 border-l-primary space-y-4">
        <div className="flex justify-between items-start">
          <span className="geo-label text-primary">Event ID: 001-FLIGHT</span>
          <span className="text-[10px] font-mono text-slate-400">TIMESTAMP: 7D_SYNC</span>
        </div>
        <div className="space-y-2">
          <h4 className="text-xl font-bold text-slate-900">The First Flight</h4>
          <p className="text-sm text-slate-500 leading-relaxed">
            Successful cross-pollination across five interest sectors detected for a consecutive 7-day period.
          </p>
        </div>
        <div className="border border-outline p-1 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="h-48 w-full bg-slate-100 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800" 
              alt="Mountain range" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </div>
      
      {/* Milestone 2 */}
      <div className="geo-card p-8 border-l-4 border-l-slate-300 space-y-2">
        <div className="flex justify-between items-start">
          <span className="geo-label">Event ID: 002-BREAKER</span>
          <span className="text-[10px] font-mono text-slate-400">OCT 12, 2023</span>
        </div>
        <h4 className="text-xl font-bold text-slate-900">Silo Breaker</h4>
        <p className="text-sm text-slate-500">
          Neutralized three algorithmic recommendation loops in single session.
        </p>
      </div>
    </div>
  </section>
);

const DiscoveryCTA = () => (
  <section className="bg-secondary p-12 flex flex-col items-center text-center space-y-8">
    <div className="w-16 h-16 border border-white/20 flex items-center justify-center">
      <Sparkles size={32} className="text-white" />
    </div>
    <div className="space-y-3">
      <h4 className="text-2xl font-light text-white tracking-widest uppercase">Horizon Analysis</h4>
      <p className="text-sm text-indigo-300 max-w-sm">
        New isolated knowledge cluster identified. External node connection recommended.
      </p>
    </div>
    <button className="bg-white text-secondary px-10 py-3 font-bold text-xs uppercase tracking-widest hover:bg-indigo-50 transition-colors">
      Connect to Node
    </button>
  </section>
);

const BottomNav = () => (
  <nav className="fixed bottom-0 w-full z-50 flex bg-white border-t border-outline h-24">
    {[
      { icon: LayoutDashboard, label: 'Feed' },
      { icon: Compass, label: 'Explore' },
      { icon: BarChart3, label: 'Analysis' },
      { icon: TrendingUp, label: 'Growth', active: true },
    ].map((item, i) => (
      <a 
        key={i}
        href="#" 
        className={`flex-1 flex flex-col items-center justify-center gap-1.5 transition-all border-r border-outline last:border-r-0 ${
          item.active ? 'bg-slate-50 text-primary' : 'text-slate-400 hover:bg-slate-50'
        }`}
      >
        <item.icon size={20} />
        <span className="geo-label !text-[9px]">{item.label}</span>
        {item.active && <div className="absolute bottom-0 w-full h-1 bg-primary" />}
      </a>
    ))}
  </nav>
);

export default function Dashboard() {
  return (
    <div className="min-h-screen pb-32">
      <Header />
      <main className="mt-24 px-6 max-w-xl mx-auto space-y-12">
        <HeroSection />
        
        <StatsGrid />

        <section className="space-y-6">
          <div className="flex justify-between items-end">
            <h3 className="text-xl font-bold text-slate-900">Newly Explored Domains</h3>
            <button className="text-[10px] font-bold text-secondary tracking-widest uppercase hover:underline">
              View Map
            </button>
          </div>
          <div className="space-y-4">
            <DomainItem 
              icon={Mountain} 
              title="Sub-Saharan Geopolitics" 
              desc="Exposed to 3 non-algorithmic perspectives" 
            />
            <DomainItem 
              icon={Microscope} 
              title="Quantum Ethics" 
              desc="Transcended local information silo" 
            />
            <DomainItem 
              icon={ScrollText} 
              title="Ancient Agrarian Trade" 
              desc="Historical context synthesis active" 
            />
          </div>
        </section>

        <MilestoneTimeline />
        
        <DiscoveryCTA />
      </main>
      <BottomNav />
    </div>
  );
}
