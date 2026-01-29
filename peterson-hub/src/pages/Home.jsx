import React from 'react';
import { Github, Cpu, Sparkles, ArrowRight, ExternalLink, Calendar } from 'lucide-react';

// --- MOCK DATA ---
const buckets = {
  software: [
    { title: "Stock Market Screener", tags: ["Python", "Azure", "AI"], link: "https://stocks.petersonhub.com" },
    { title: "Recipe Manager", tags: ["React", "FastAPI"], link: "#" }
  ],
  research: [
    { title: "AI Integration in Legacy Systems", date: "Jan 2026", type: "White Paper" },
    { title: "Automating Entra ID Security", date: "Nov 2025", type: "Publication" }
  ],
  creative: [
    { title: "3D Printed Drone Frame", image: "https://placehold.co/600x400/e2e8f0/64748b?text=Drone+Build" },
    { title: "ESP32 Home Automation", image: "https://placehold.co/600x400/e2e8f0/64748b?text=Hardware" }
  ],
  ai: [
    { title: "Local LLM RAG Pipeline", status: "Live Demo", description: "Doc analysis on private data." },
    { title: "Voice Agent Interface", status: "Prototype", description: "Real-time voice-to-action." }
  ]
};

// --- CARD COMPONENTS ---

const SoftwareCard = ({ item }) => (
  <a href={item.link} className="group block bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300">
    <div className="flex justify-between items-start mb-4">
      <div className="p-2 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
        <Github size={20} />
      </div>
      <ExternalLink size={16} className="text-slate-300 group-hover:text-blue-400 transition-colors" />
    </div>
    <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
    <div className="flex flex-wrap gap-2">
      {item.tags.map(tag => (
        <span key={tag} className="text-xs font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded-md">
          {tag}
        </span>
      ))}
    </div>
  </a>
);

const ResearchCard = ({ item }) => (
  <div className="group cursor-pointer bg-white p-6 rounded-xl border-l-4 border-slate-200 hover:border-emerald-500 shadow-sm hover:shadow-md transition-all duration-300">
    <div className="flex justify-between items-center mb-3">
      <span className="text-xs font-bold tracking-wider uppercase text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
        {item.type}
      </span>
      <div className="flex items-center text-slate-400 text-xs">
        <Calendar size={12} className="mr-1" />
        {item.date}
      </div>
    </div>
    <h3 className="font-serif font-bold text-xl text-slate-900 leading-snug group-hover:text-emerald-700 transition-colors">
      {item.title}
    </h3>
    <div className="mt-4 flex items-center text-sm font-semibold text-slate-500 group-hover:text-emerald-600 transition-colors">
      Read Abstract <ArrowRight size={16} className="ml-1" />
    </div>
  </div>
);

const CreativeCard = ({ item }) => (
  <div className="group cursor-pointer relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-500">
    <img src={item.image} alt={item.title} className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-700" />
    {/* Updated for Tailwind v4: bg-gradient-to-t -> bg-linear-to-t */}
    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-90" />
    <div className="absolute bottom-0 left-0 p-6">
      <div className="flex items-center gap-2 text-orange-300 mb-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
        <Sparkles size={14} />
        <span className="text-xs font-bold uppercase tracking-wider">Maker Project</span>
      </div>
      <h3 className="text-white font-bold text-lg">{item.title}</h3>
    </div>
  </div>
);

const AICard = ({ item }) => (
  <div className="group bg-slate-900 p-6 rounded-xl text-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
    
    <div className="flex justify-between items-start mb-4 relative z-10">
      <Cpu size={24} className="text-purple-400" />
      <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest border border-purple-500/30 px-2 py-1 rounded-full text-purple-300">
        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
        {item.status}
      </span>
    </div>
    <h3 className="font-bold text-lg mb-2 relative z-10">{item.title}</h3>
    <p className="text-slate-400 text-sm mb-6 relative z-10">{item.description}</p>
    <button className="w-full py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-medium text-sm transition-colors relative z-10">
      Launch Demo
    </button>
  </div>
);

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* HERO SECTION */}
      <section className="mb-24 text-center max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 font-serif mb-6 tracking-tight">
          Adam Peterson
        </h1>
        <p className="text-xl md:text-2xl text-slate-500 leading-relaxed mb-8">
          IT Professional. Doctoral Candidate. Tinkerer. <br />
          <span className="text-slate-400 text-lg">Building bridges between legacy systems and modern AI.</span>
        </p>
      </section>

      {/* BUCKET GRID */}
      <div className="space-y-20">
        
        {/* ROW 1: Software & Research */}
        <div className="grid md:grid-cols-2 gap-12">
          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
              {/* Updated for Tailwind v4: h-[1px] -> h-px */}
              <span className="w-8 h-px bg-slate-300"></span> Software Engineering
            </h2>
            <div className="grid gap-4">
              {buckets.software.map((item, i) => <SoftwareCard key={i} item={item} />)}
            </div>
          </section>

          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-slate-300"></span> Doctoral Studies
            </h2>
            <div className="grid gap-4">
              {buckets.research.map((item, i) => <ResearchCard key={i} item={item} />)}
            </div>
          </section>
        </div>

        {/* ROW 2: Creative & AI */}
        <div className="grid md:grid-cols-2 gap-12">
          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-slate-300"></span> Creative / Hardware
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {buckets.creative.map((item, i) => <CreativeCard key={i} item={item} />)}
            </div>
          </section>

          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-slate-300"></span> AI & Automation
            </h2>
            <div className="grid gap-4">
              {buckets.ai.map((item, i) => <AICard key={i} item={item} />)}
            </div>
          </section>
        </div>

      </div>
    </main>
  );
}