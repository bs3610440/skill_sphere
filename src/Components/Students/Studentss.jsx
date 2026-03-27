import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, CheckCircle, Award, BookOpen, Rocket, Zap, Trophy, 
  TrendingUp, Sparkles, MessageSquare, Bell, Search, 
  ArrowUpRight, Target, Home, Users, Layers, Settings, ChevronRight
} from "lucide-react";

export default function FuturisticLMS() {
  const [activeTab, setActiveTab] = useState("Home");

  const mentors = [
    { name: "Dr. Arsh Ali", role: "AI Head", img: "https://i.pravatar.cc/150?u=a1", color: "from-purple-500 to-indigo-500" },
    { name: "Sarah J.", role: "Security", img: "https://i.pravatar.cc/150?u=a2", color: "from-blue-500 to-cyan-500" },
    { name: "Rohit S.", role: "Architect", img: "https://i.pravatar.cc/150?u=a3", color: "from-orange-500 to-red-500" },
  ];

  return (
    <div className="min-h-screen bg-[#0F1115] text-white font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      
      {/* --- BACKGROUND AMBIENCE --- */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 max-w-[1400px] mx-auto px-6 pt-12 pb-32">
        
        {/* --- TOP HEADER: Minimal & Official --- */}
        <header className="flex justify-between items-center mb-16">
          <div className="group cursor-pointer">
            <h2 className="text-2xl font-black tracking-tighter flex items-center gap-2 italic">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">MASTERY</span>
              <span className="text-white/20 group-hover:text-white/40 transition-colors">360</span>
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl px-4 py-2">
              <Search size={16} className="text-white/40" />
              <input type="text" placeholder="Search Assets..." className="bg-transparent border-none text-xs focus:ring-0 w-40 text-white" />
            </div>
            <button className="relative p-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all">
              <Bell size={18} />
              <span className="absolute top-3 right-3 w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.8)]"></span>
            </button>
            <div className="w-12 h-12 rounded-2xl p-[2px] bg-gradient-to-tr from-indigo-500 to-purple-500">
              <img src="https://i.pravatar.cc/150?u=99" className="w-full h-full rounded-[14px] object-cover border-2 border-[#0F1115]" alt="profile" />
            </div>
          </div>
        </header>

        {/* --- BENTO GRID LAYOUT --- */}
        <div className="grid lg:grid-cols-12 gap-6">
          
          {/* HERO BENTO (Large) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-8 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-[3rem] p-10 relative overflow-hidden group shadow-2xl shadow-indigo-900/20"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="space-y-4">
                <span className="px-4 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest">In Progress</span>
                <h1 className="text-5xl font-black leading-tight max-w-md italic">Unleash Your Potential with AI Labs.</h1>
              </div>
              <div className="pt-12 flex items-center gap-6">
                <button className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform">Start Lab</button>
                <div className="flex -space-x-3">
                   {[1,2,3,4].map(i => <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-10 h-10 rounded-full border-2 border-indigo-700" alt="user" />)}
                   <div className="w-10 h-10 rounded-full bg-indigo-400 border-2 border-indigo-700 flex items-center justify-center text-[10px] font-bold">+12</div>
                </div>
              </div>
            </div>
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-white/20 transition-all duration-700" />
            <Rocket className="absolute bottom-10 right-10 text-white/10 w-40 h-40 -rotate-12 group-hover:scale-110 transition-transform duration-700" />
          </motion.div>

          {/* XP STATS BENTO */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-4 bg-white/5 border border-white/10 backdrop-blur-xl rounded-[3rem] p-8 flex flex-col justify-between"
          >
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-indigo-400">
                <Zap fill="currentColor" size={24} />
              </div>
              <TrendingUp className="text-emerald-400" />
            </div>
            <div>
              <p className="text-5xl font-black">2,840</p>
              <p className="text-xs font-bold text-white/40 uppercase tracking-[0.2em] mt-2">Total Mastery XP</p>
            </div>
            <div className="h-2 w-full bg-white/10 rounded-full mt-4">
              <div className="h-full w-2/3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
            </div>
          </motion.div>

          {/* MENTORS BENTO (Horizontal) */}
          <div className="lg:col-span-12 grid md:grid-cols-3 gap-6">
            {mentors.map((m, i) => (
              <motion.div 
                whileHover={{ y: -5 }} key={i}
                className="bg-white/5 border border-white/10 rounded-[2.5rem] p-6 flex items-center gap-5 hover:bg-white/[0.08] transition-all cursor-pointer"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${m.color} p-[2px]`}>
                  <img src={m.img} className="w-full h-full rounded-[14px] object-cover border-2 border-[#1a1c23]" alt={m.name} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">{m.name}</h4>
                  <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">{m.role}</p>
                </div>
                <ArrowUpRight className="ml-auto text-white/20 group-hover:text-white" size={20} />
              </motion.div>
            ))}
          </div>

          {/* LEADERBOARD & ROADMAP */}
          <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-[3rem] p-8">
            <h3 className="text-xl font-black mb-6 flex items-center gap-2">
               <Trophy className="text-amber-500" size={20} /> Top Agents
            </h3>
            <div className="space-y-4">
              {[1,2,3].map(i => (
                <div key={i} className="flex items-center justify-between p-4 bg-white/[0.03] rounded-2xl border border-white/5 hover:border-white/10 transition-all">
                   <div className="flex items-center gap-4">
                      <span className="text-xs font-black text-white/20">0{i}</span>
                      <div className="w-10 h-10 rounded-xl bg-slate-800" />
                      <p className="text-sm font-bold italic">User_Node_{i*42}</p>
                   </div>
                   <p className="text-xs font-black text-indigo-400">{(4000 / i).toFixed(0)} XP</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 bg-white text-slate-900 rounded-[3rem] p-10 overflow-hidden relative group">
             <div className="relative z-10">
               <div className="flex justify-between items-center mb-10">
                 <h3 className="text-3xl font-black italic">Active Roadmap</h3>
                 <span className="text-[10px] font-black bg-slate-900 text-white px-4 py-1.5 rounded-full uppercase">Month 01</span>
               </div>
               <div className="space-y-6">
                  {['Neural Networks Base', 'Advanced LLM Prompting', 'System Architecture'].map((task, i) => (
                    <div key={i} className="flex items-center gap-4 group/item cursor-pointer">
                      <div className="w-6 h-6 rounded-full border-2 border-slate-900 flex items-center justify-center group-hover/item:bg-slate-900 transition-all">
                        <CheckCircle size={14} className="opacity-0 group-hover/item:opacity-100 text-white" />
                      </div>
                      <p className="text-lg font-black text-slate-700 group-hover/item:text-slate-900">{task}</p>
                    </div>
                  ))}
               </div>
             </div>
             <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full blur-[80px] -mr-32 -mt-32 opacity-50 group-hover:opacity-100 transition-opacity" />
          </div>

        </div>
      </main>

      {/* --- THE FLOATING DOCK (NEW NAVBAR ALTERNATIVE) --- */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-2 p-3 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {[
            { icon: Home, label: "Home" },
            { icon: Layers, label: "Path" },
            { icon: Users, label: "Team" },
            { icon: Target, label: "Quests" },
            { icon: Settings, label: "Config" },
          ].map((btn) => (
            <button 
              key={btn.label}
              onClick={() => setActiveTab(btn.label)}
              className={`group relative p-4 rounded-2xl transition-all duration-300 ${activeTab === btn.label ? 'bg-indigo-600 text-white scale-110 shadow-lg shadow-indigo-600/40' : 'text-white/40 hover:bg-white/5 hover:text-white'}`}
            >
              <btn.icon size={20} />
              {/* Tooltip */}
              <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-slate-900 text-[10px] font-black rounded-lg opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest pointer-events-none">
                {btn.label}
              </span>
            </button>
          ))}
        </div>
      </div>
      
    </div>
  );
}