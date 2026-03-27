import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCards, Navigation } from "swiper/modules";
import { 
  Play, Users, Star, CheckCircle, Clock, MessageSquare, 
  Download, Award, Calendar, Layout, BookOpen, Settings,
  LogOut, Bell, Search, Zap, Trophy, MousePointer2, TrendingUp,
  ShieldCheck, BrainCircuit, Globe, Database 
} from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

export default function ProfessionalLMS() {
  const [activeDay, setActiveDay] = useState(28);

  const leaderboard = [
    { name: "Aryan Raj", score: "980", rank: 1, img: "https://i.pravatar.cc/100?u=1" },
    { name: "Sneha Kapur", score: "945", rank: 2, img: "https://i.pravatar.cc/100?u=2" },
    { name: "Ishaan Dev", score: "920", rank: 3, img: "https://i.pravatar.cc/100?u=3" },
  ];

  const feedbackData = [
    { user: "Karan", text: "The 45-day roadmap is incredibly structured. Best investment ever!", rating: 5 },
    { user: "Mehak", text: "Live sessions are so interactive, feels like a real classroom.", rating: 5 },
    { user: "Vikram", text: "Technical support is 24/7. Never felt stuck.", rating: 4 },
  ];

  // Naya Courses Data
  const categories = [
    { title: "Artificial Intelligence", icon: BrainCircuit, color: "bg-purple-600", desc: "ML, Deep Learning & NLP" },
    { title: "Cybersecurity", icon: ShieldCheck, color: "bg-red-600", desc: "Ethical Hacking & Network" },
    { title: "Web Development", icon: Globe, color: "bg-blue-600", desc: "React, Next.js & Backend" },
    { title: "Data Analytics", icon: Database, color: "bg-amber-600", desc: "Python, SQL & Tableau" },
  ];

  return (
    <div className="flex min-h-screen bg-[#F4F7FE] font-sans selection:bg-indigo-100">
      
      {/* --- SIDEBAR --- */}
      <aside className="w-72 bg-white border-r border-slate-200 hidden lg:flex flex-col sticky top-0 h-screen p-8">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
            <Zap className="text-white" size={20} />
          </div>
          <span className="text-2xl font-black tracking-tighter text-slate-800">Students classes</span>
        </div>

        <nav className="flex-1 space-y-2">
          {[
            { icon: Layout, label: "Dashboard", active: true },
            { icon: BookOpen, label: "My Courses", active: false },
            { icon: Trophy, label: "Leaderboard", active: false },
            { icon: Calendar, label: "Schedule", active: false },
            { icon: Settings, label: "Settings", active: false },
          ].map((item, i) => (
            <button key={i} className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl font-bold text-sm transition-all ${item.active ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-200' : 'text-slate-400 hover:bg-indigo-50 hover:text-indigo-600'}`}>
              <item.icon size={20} /> {item.label}
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-8 border-t">
          <button className="flex items-center gap-4 px-4 py-2 text-slate-400 font-bold text-sm hover:text-red-500 transition-colors">
            <LogOut size={20} /> Sign Out
          </button>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1">
        
        {/* HEADER */}
        <header className="px-10 py-6 bg-white/50 backdrop-blur-md sticky top-0 z-40 flex justify-between items-center border-b border-slate-200">
          <div className="relative w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input type="text" placeholder="Search lessons..." className="w-full bg-white border border-slate-200 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all" />
          </div>
          <div className="flex items-center gap-6">
            <div className="relative bg-white p-2.5 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50">
              <Bell size={20} className="text-slate-600" />
              <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </div>
            <div className="flex items-center gap-3 pl-4 border-l">
              <div className="text-right">
                <p className="text-sm font-black text-slate-800">John Doe</p>
                <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">Premium Member</p>
              </div>
              <img src="https://i.pravatar.cc/150?u=99" className="w-11 h-11 rounded-2xl border-2 border-white shadow-md" alt="profile" />
            </div>
          </div>
        </header>

        <div className="p-10 space-y-10">
          
          {/* TOP COURSES GRID (NEW SECTION) */}
          <section>
            <h3 className="text-xl font-black text-slate-800 mb-6 uppercase tracking-tight">Explore 45-Day Specializations</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {categories.map((cat, i) => (
                <motion.div whileHover={{ y: -5 }} key={i} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all cursor-pointer group">
                  <div className={`${cat.color} w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                    <cat.icon size={24} />
                  </div>
                  <h4 className="font-bold text-slate-800">{cat.title}</h4>
                  <p className="text-xs text-slate-400 mt-1">{cat.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* VIDEO AREA */}
            <div className="lg:col-span-3">
              <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl relative aspect-video group">
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button whileHover={{ scale: 1.1 }} className="w-20 h-20 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-indigo-500/50">
                      <Play size={32} fill="currentColor" />
                    </motion.button>
                 </div>
                 <div className="absolute bottom-8 left-8 right-8">
                    <h2 className="text-white text-2xl font-black mb-2">Today's Topic: AI Integrated Systems</h2>
                    <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                       <motion.div initial={{ width: 0 }} animate={{ width: "75%" }} className="h-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.8)]" />
                    </div>
                 </div>
              </div>
            </div>

            {/* LEADERBOARD */}
            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
              <h3 className="text-lg font-black text-slate-800 mb-6 flex items-center gap-2">
                <Trophy size={20} className="text-amber-500" /> Top Learners
              </h3>
              <div className="space-y-6">
                {leaderboard.map((user, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img src={user.img} className="w-10 h-10 rounded-xl" alt={user.name} />
                      <div>
                        <p className="text-sm font-black text-slate-800">{user.name}</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{user.score} XP</p>
                      </div>
                    </div>
                    <div className="text-emerald-500"><TrendingUp size={16} /></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ROADMAP SECTION (Updated with AI, Cyber, etc.) */}
          <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm">
             <h3 className="text-2xl font-black text-slate-800 mb-10">45-Day Multi-Skill Roadmap</h3>
             <div className="grid md:grid-cols-2 gap-4">
                {[
                  { day: 1, title: "Web Dev: React Architecture", cat: "Frontend" },
                  { day: 2, title: "AI: Neural Networks Basics", cat: "Artificial Intelligence" },
                  { day: 3, title: "Cyber: Penetration Testing", cat: "Cybersecurity" },
                  { day: 4, title: "DA: Data Visualization SQL", cat: "Data Analytics" },
                ].map((item) => (
                  <div key={item.day} className="flex items-center justify-between p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all group cursor-pointer">
                    <div className="flex items-center gap-5">
                       <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black ${item.day === 4 ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white text-slate-400'}`}>
                         {item.day}
                       </div>
                       <div>
                          <h4 className="font-bold text-slate-800 group-hover:text-indigo-600">{item.title}</h4>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.cat}</p>
                       </div>
                    </div>
                    {item.day < 4 ? <CheckCircle className="text-emerald-500" size={20} /> : <MousePointer2 className="text-slate-300" size={20} />}
                  </div>
                ))}
             </div>
          </div>

          {/* STATS CARDS */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "Course Progress", value: "62%", icon: Zap, color: "text-indigo-600", bg: "bg-indigo-50" },
              { label: "Completed Days", value: "28/45", icon: Calendar, color: "text-purple-600", bg: "bg-purple-50" },
              { label: "Assignments", value: "12/15", icon: CheckCircle, color: "text-emerald-600", bg: "bg-emerald-50" },
              { label: "Student Rating", value: "4.9", icon: Star, color: "text-amber-600", bg: "bg-amber-50" },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-5">
                <div className={`${stat.bg} ${stat.color} p-4 rounded-2xl`}>
                   <stat.icon size={24} />
                </div>
                <div>
                  <p className="text-2xl font-black text-slate-800">{stat.value}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* SWIPER FEEDBACK */}
          <section className="bg-slate-900 rounded-[3rem] p-12 overflow-hidden relative">
             <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-3xl font-black text-white mb-10">Success Stories</h2>
                <Swiper
                  modules={[Autoplay, Pagination]}
                  autoplay={{ delay: 4000 }}
                  pagination={{ clickable: true }}
                  className="pb-12"
                >
                  {feedbackData.map((f, i) => (
                    <SwiperSlide key={i}>
                      <div className="space-y-6">
                        <div className="flex justify-center gap-1 text-amber-400">
                           {[...Array(f.rating)].map((_, i) => <Star key={i} fill="currentColor" size={18} />)}
                        </div>
                        <p className="text-xl text-slate-300 italic max-w-2xl mx-auto">"{f.text}"</p>
                        <p className="text-indigo-400 font-black uppercase tracking-widest">— {f.user}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
             </div>
          </section>

        </div>
      </main>
    </div>
  );
}