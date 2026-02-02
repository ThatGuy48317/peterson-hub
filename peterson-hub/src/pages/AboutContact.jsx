import React from 'react';
import { Mail, Bike, Tent } from 'lucide-react';

export default function AboutContact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("This is where the API call happens!");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-16 mb-24">
        <div>
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-6">About Me</h1>
          <div className="prose prose-slate text-lg text-slate-600 leading-relaxed space-y-4">
            <p>
              I am an IT professional with over a decade of experience managing enterprise identity systems and cloud infrastructure. Currently, I am pursuing my Doctorate, researching the intersection of **Artificial Intelligence** and **System Administration**.
            </p>
            <p>
              My work focuses on practical automation—taking the repetitive, complex tasks of IT management and streamlining them through modern tooling and AI agents.
            </p>
            <div className="pt-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Offline Interests</h3>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
                  <Tent size={16} /> Bushcraft
                </div>
                <div className="flex items-center gap-2 bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
                  <Bike size={16} /> Cycling
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Updated for Tailwind v4: min-h-[300px] -> min-h-75 */}
        <div className="bg-slate-100 rounded-2xl min-h-75 flex items-center justify-center border-2 border-dashed border-slate-300">
          <span className="text-slate-400 font-medium">Headshot / Action Shot Placeholder</span>
        </div>
      </div>

      <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-serif font-bold mb-4">Let's Connect</h2>
          <p className="text-slate-400">Have a question about my research or want to discuss a project? Drop me a message.</p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Name</label>
              <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Jane Doe" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
              <input type="email" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="jane@example.com" required />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1">Message</label>
            <textarea rows="4" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="How can I help?" required></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2">
            <Mail size={18} /> Send Message
          </button>
        </form>
      </div>
    </div>
  );
}