import React from 'react';
import { ExternalLink, Github, Linkedin, Mail } from 'lucide-react';

// 1. Easy to maintain list of projects
// When you build the Recipe App, you just add it here!
const projects = [
  {
    title: "Stock Market Screener",
    description: "Real-time NASDAQ scanner with volatility safety filters and Gemini AI technical analysis.",
    tags: ["Python", "Streamlit", "Azure", "AI"],
    link: "https://stocks.petersonhub.com", // Subdomain link
    status: "Live"
  },
  {
    title: "Smart Recipe Manager",
    description: "AI-powered meal planner that generates shopping lists based on your inventory.",
    tags: ["React", "FastAPI", "PostgreSQL"],
    link: "#",
    status: "In Development"
  },
  {
    title: "Azure Entra ID Tool",
    description: "Automation scripts for managing user identities and security groups.",
    tags: ["PowerShell", "Azure", "Security"],
    link: "#",
    status: "Planned"
  }
];

// 2. Reusable "Card" Component
const ProjectCard = ({ project }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all hover:-translate-y-1">
    <div className="flex justify-between items-start mb-4">
      <span className={`px-2 py-1 rounded text-xs font-semibold ${
        project.status === 'Live' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
      }`}>
        {project.status}
      </span>
      <ExternalLink className="w-5 h-5 text-slate-400" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
    <p className="text-slate-600 mb-4 h-20">{project.description}</p>
    <div className="flex flex-wrap gap-2 mt-auto">
      {project.tags.map(tag => (
        <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md">
          {tag}
        </span>
      ))}
    </div>
    <a href={project.link} className="block mt-6 text-center w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
      View Project
    </a>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Hero Section */}
      <header className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">
            Peterson Hub
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A portfolio of intelligent tools and research by an IT Professional & Doctoral Student.
          </p>
          
          <div className="flex justify-center gap-6 mt-8">
            <a href="#" className="p-2 hover:text-blue-400 transition-colors"><Github /></a>
            <a href="#" className="p-2 hover:text-blue-400 transition-colors"><Linkedin /></a>
            <a href="#" className="p-2 hover:text-blue-400 transition-colors"><Mail /></a>
          </div>
        </div>
      </header>

      {/* Projects Grid */}
      <main className="max-w-5xl mx-auto px-4 py-16 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </main>

      <footer className="text-center py-8 text-slate-400 text-sm">
        © 2026 Peterson Hub. Built with React & Azure.
      </footer>
    </div>
  );
}