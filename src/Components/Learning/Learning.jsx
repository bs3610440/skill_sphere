import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Clock, PlayCircle, Star, Search } from 'lucide-react'; // Optional: Lucid icons for better UI

const Learning = () => {
  const stats = [
    { label: "Courses in Progress", value: "4", icon: <BookOpen className="text-cyan-400" /> },
    { label: "Completed Lessons", value: "28", icon: <Star className="text-yellow-400" /> },
    { label: "Learning Hours", value: "12h 30m", icon: <Clock className="text-blue-400" /> },
  ];

  const courses = [
    { id: 1, title: "Cybersecurity & Ethical Hacking", author: "Dr. Smith", progress: 75, category: "Security", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=300&q=80" },
    { id: 2, title: "MERN Stack Development", author: "Prof. Sarah", progress: 40, category: "Development", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=300&q=80" },
    { id: 3, title: "UI/UX Design Masterclass", author: "Alex Rivera", progress: 90, category: "Design", image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&w=300&q=80" },
  ];

  const upcomingClasses = [
    { id: 1, time: "10:30 AM", subject: "Database Management", teacher: "Ms. Gupta" },
    { id: 2, time: "02:00 PM", subject: "React Hooks Deep Dive", teacher: "Prof. Sarah" },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 p-4 md:p-10 font-sans selection:bg-cyan-500/30">
      
      {/* 1. Top Navigation / Search Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Student Workspace</h1>
          <p className="text-slate-400">Knowledge is power. Keep growing, Simran!</p>
        </div>
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-3 text-slate-500 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search courses, lessons..." 
            className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
          />
        </div>
      </div>

      {/* 2. Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/5 backdrop-blur-xl flex items-center gap-5"
          >
            <div className="p-3 bg-white/5 rounded-lg">{stat.icon}</div>
            <div>
              <p className="text-sm text-slate-400 uppercase tracking-wider font-semibold">{stat.label}</p>
              <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* 3. Main Content: Course Cards (Takes 3 columns) */}
        <div className="lg:col-span-3 space-y-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <PlayCircle className="text-cyan-500" /> Continue Learning
            </h2>
            <button className="text-cyan-400 hover:underline text-sm font-medium">View All</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                whileHover={{ y: -8 }}
                className="group bg-[#0f172a] rounded-2xl overflow-hidden border border-white/5 hover:border-cyan-500/50 transition-all shadow-2xl"
              >
                <div className="h-40 overflow-hidden relative">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-cyan-600/90 text-white text-[10px] px-2 py-1 rounded-full font-bold uppercase">
                    {course.category}
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="font-bold text-lg leading-tight mb-2 group-hover:text-cyan-400 transition-colors">{course.title}</h3>
                  <p className="text-sm text-slate-400 mb-4">By {course.author}</p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-medium">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${course.progress}%` }}
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 4. Sidebar: Schedule & Teachers */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white/5 rounded-3xl p-6 border border-white/10 shadow-xl backdrop-blur-md">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Clock className="text-blue-500 w-5 h-5" /> Schedule
            </h2>
            <div className="space-y-6">
              {upcomingClasses.map((item) => (
                <div key={item.id} className="relative pl-6 border-l-2 border-slate-700 hover:border-cyan-500 transition-colors group">
                  <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-slate-700 group-hover:bg-cyan-500" />
                  <p className="text-xs text-cyan-400 font-bold mb-1">{item.time}</p>
                  <h4 className="font-semibold text-white text-sm">{item.subject}</h4>
                  <p className="text-xs text-slate-500">{item.teacher}</p>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-sm font-semibold">
              Full Schedule
            </button>
          </div>

          {/* Quick Support / Teacher Link */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-900/40 to-cyan-900/40 border border-cyan-500/20">
            <h3 className="font-bold text-white mb-2">Need Help?</h3>
            <p className="text-xs text-slate-300 mb-4">Chat with your instructors or join the student forum.</p>
            <button className="px-4 py-2 bg-white text-[#020617] rounded-lg text-xs font-bold hover:bg-cyan-100 transition-colors">
              Contact Support
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Learning;