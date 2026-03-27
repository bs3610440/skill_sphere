import React, { useState, useEffect, useRef } from "react";
import { 
  Send, Users, Calendar, FileText, Download, 
  Play, Maximize2, MessageCircle, Info, Radio, Zap
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function LiveClasses() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    { text: "Sir, will you share the code?", user: "Rahul", time: "10:05 AM" },
    { text: "Yes, after the session!", user: "Teacher", isTeacher: true, time: "10:06 AM" },
  ]);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    const now = new Date();
    const timeString = now.getHours() + ":" + now.getMinutes();
    setChat([...chat, { text: message, user: "You", time: timeString }]);
    setMessage("");
  };

  const upcomingClasses = [
    { title: "React Basics", teacher: "John Sir", time: "Today 5:00 PM", tag: "Beginner" },
    { title: "JavaScript Advanced", teacher: "Emily Ma'am", time: "Tomorrow 6:30 PM", tag: "Pro" },
  ];

  const materials = [
    { name: "Lecture Notes PDF", size: "2.4 MB" },
    { name: "Practice Questions", size: "1.1 MB" },
    { name: "Assignment File", size: "0.8 MB" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-12">
      {/* --- HEADER --- */}
      {/* <header className="bg-white border-b px-8 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="bg-red-500 w-3 h-3 rounded-full animate-pulse" />
          <h1 className="text-xl font-black tracking-tight flex items-center gap-2 text-slate-800">
            LIVE <span className="text-indigo-600">CLASSROOM</span>
          </h1>
        </div>
        <div className="flex items-center gap-4 text-sm font-bold text-slate-500">
          <div className="flex items-center gap-1 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full">
            <Users size={16} /> 245 Students
          </div>
        </div>
      </header> */}

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid lg:grid-cols-4 gap-6">
          
          {/* ================= LEFT: VIDEO PLAYER ================= */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl relative group">
              {/* Fake Video Player UI */}
              <div className="aspect-video flex items-center justify-center relative bg-gradient-to-br from-slate-800 to-black">
                <div className="text-center">
                  <Play className="w-16 h-16 text-indigo-500 fill-current opacity-50 mb-4 mx-auto" />
                  <p className="text-white font-medium opacity-60">Connecting to Live Stream...</p>
                </div>
                
                {/* Control Bar Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                        <button className="text-white hover:text-indigo-400"><Play size={24} /></button>
                        <span className="text-white text-sm font-mono self-center">10:24 / 45:00</span>
                    </div>
                    <button className="text-white hover:text-indigo-400"><Maximize2 size={24} /></button>
                  </div>
                </div>
              </div>
            </div>

            {/* CLASS INFO */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-black text-slate-800 mb-1">M03: Mastering Modern React Hooks</h2>
                <p className="text-slate-500 flex items-center gap-2">
                  <Zap size={16} className="text-amber-500" /> Advanced React Course • Module 3
                </p>
              </div>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-2xl font-bold transition-all shadow-lg shadow-indigo-200">
                Raise Hand 👋
              </button>
            </div>

            {/* UPCOMING & MATERIALS GRID */}
            <div className="grid md:grid-cols-2 gap-6">
                {/* UPCOMING */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                   <h3 className="text-lg font-black mb-4 flex items-center gap-2">
                     <Calendar size={20} className="text-indigo-600" /> Schedule
                   </h3>
                   <div className="space-y-3">
                     {upcomingClasses.map((cls, i) => (
                       <div key={i} className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all">
                         <div>
                            <p className="font-bold text-slate-800">{cls.title}</p>
                            <p className="text-xs text-slate-400">{cls.teacher}</p>
                         </div>
                         <span className="text-[10px] bg-slate-100 px-2 py-1 rounded font-black text-slate-500 uppercase">{cls.time}</span>
                       </div>
                     ))}
                   </div>
                </div>

                {/* MATERIALS */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                   <h3 className="text-lg font-black mb-4 flex items-center gap-2">
                     <FileText size={20} className="text-indigo-600" /> Resources
                   </h3>
                   <div className="space-y-3">
                     {materials.map((item, i) => (
                       <div key={i} className="flex items-center justify-between p-3 rounded-2xl bg-indigo-50/50">
                         <div>
                            <p className="font-bold text-indigo-900 text-sm">{item.name}</p>
                            <p className="text-[10px] text-indigo-400 font-bold">{item.size}</p>
                         </div>
                         <button className="bg-white p-2 rounded-xl text-indigo-600 shadow-sm hover:scale-110 transition-transform">
                            <Download size={18} />
                         </button>
                       </div>
                     ))}
                   </div>
                </div>
            </div>
          </div>

          {/* ================= RIGHT: CHAT PANEL ================= */}
          <div className="lg:col-span-1 flex flex-col h-[calc(100vh-140px)] sticky top-24">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 flex flex-col h-full overflow-hidden">
              <div className="p-4 border-b flex items-center justify-between bg-white/50 backdrop-blur-sm">
                <h2 className="font-black text-slate-800 flex items-center gap-2 uppercase tracking-tighter">
                  <MessageCircle size={18} className="text-indigo-600" /> Discussion
                </h2>
                <div className="flex gap-2">
                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                </div>
              </div>

              {/* MESSAGES AREA */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
                {chat.map((msg, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    key={i} 
                    className={`flex flex-col ${msg.user === "You" ? "items-end" : "items-start"}`}
                  >
                    <span className="text-[10px] font-bold text-slate-400 mb-1 mx-2">{msg.user} • {msg.time}</span>
                    <div className={`max-w-[85%] px-4 py-2 rounded-2xl text-sm shadow-sm ${
                      msg.isTeacher 
                      ? "bg-indigo-600 text-white rounded-tl-none" 
                      : msg.user === "You" 
                        ? "bg-white text-slate-800 rounded-tr-none border border-slate-200"
                        : "bg-slate-200 text-slate-800 rounded-tl-none"
                    }`}>
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
                <div ref={chatEndRef} />
              </div>

              {/* INPUT AREA */}
              <form onSubmit={sendMessage} className="p-4 bg-white border-t">
                <div className="flex items-center gap-2 bg-slate-100 p-2 rounded-2xl border border-slate-200 focus-within:border-indigo-500 focus-within:bg-white transition-all">
                  <input
                    type="text"
                    placeholder="Ask a question..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none px-2 text-sm font-medium"
                  />
                  <button
                    type="submit"
                    className="bg-indigo-600 text-white p-2 rounded-xl hover:bg-indigo-700 transition-all"
                  >
                    <Send size={18} />
                  </button>
                </div>
                <p className="text-[10px] text-center text-slate-400 mt-3 font-medium tracking-wide italic">
                  Be respectful to teachers and peers
                </p>
              </form>
            </div>
            
            {/* Quick Poll Section */}
            <div className="mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-4 text-white">
                <p className="text-[10px] font-black uppercase tracking-widest opacity-80 mb-1">Quick Poll</p>
                <p className="text-sm font-bold mb-3">Understanding the Hook concept?</p>
                <div className="flex gap-2">
                    <button className="flex-1 bg-white/20 hover:bg-white/30 py-1.5 rounded-xl text-xs font-bold transition-all">Yes 👍</button>
                    <button className="flex-1 bg-white/20 hover:bg-white/30 py-1.5 rounded-xl text-xs font-bold transition-all">Need Info ❓</button>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}