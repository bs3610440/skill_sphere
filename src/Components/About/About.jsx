import React from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  FiChevronRight, FiPlus, FiMinus, FiShield, FiCpu, FiGlobe, FiTarget, 
  FiAward, FiUsers, FiClock, FiTrendingUp, FiHeart, FiStar, FiBriefcase,
  FiCode, FiCloud, FiSmartphone, FiDatabase, FiLock, FiZap, FiActivity
} from 'react-icons/fi';

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

export default function About() {
  const statsRef = React.useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const journeyRef = React.useRef(null);
  const journeyInView = useInView(journeyRef, { once: true, margin: "-100px" });

  const [activeFaq, setActiveFaq] = React.useState(0);
  const [activeTab, setActiveTab] = React.useState(0);

  const roadmapImages = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bbda48658a7d?q=80&w=2340&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581291518655-95245be17da1?q=80&w=2340&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2340&auto=format&fit=crop"
  ];

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
  };

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-blue-600/10 selection:text-blue-600 overflow-x-hidden">
      
      {/* 1. PREMIUM HERO SECTION */}
      <section className="relative pt-7 pb-20 overflow-hidden">
        {/* Animated Abstract Background */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-48 -right-48 w-[600px] h-[600px] bg-gradient-to-br from-blue-100/40 to-indigo-100/40 rounded-full blur-[140px]" 
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], x: [0, 50, 0] }}
            transition={{ duration: 15, repeat: Infinity, delay: 2 }}
            className="absolute top-1/2 -left-48 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{ scale: [1, 1.1, 1], y: [0, -30, 0] }}
            transition={{ duration: 18, repeat: Infinity, delay: 1 }}
            className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-100/30 rounded-full blur-[100px]" 
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px- py-1.5 rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-slate-100 mb-10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.2em]">Innovating Since 2015</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-black text-slate-900 mb-8 tracking-[-0.04em] leading-[0.95]"
            >
              We Architect <br />
              <span className="relative inline-block text-blue-600">
                Digital Empires
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 358 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9C118.957 4.47226 235.043 4.47226 355 9" stroke="#2563EB" strokeWidth="6" strokeLinecap="round"/>
                </svg>
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-slate-500 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed mb-12 font-medium"
            >
            Hartron is an elite tech collective dedicated to building high-performance digital ecosystems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-blue-600 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* 2. STATS - GRID OVERLAY */}
      <section className="relative -mt-32 pb-10 px-6">
        <div ref={statsRef} className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { v: "500+", l: "Projects Deployed", icon: <FiCpu />, color: "text-blue-600", bg: "bg-blue-50" },
            { v: "150+", l: "Global Partners", icon: <FiGlobe />, color: "text-indigo-600", bg: "bg-indigo-50" },
            { v: "99.9%", l: "Client Retention", icon: <FiShield />, color: "text-emerald-600", bg: "bg-emerald-50" },
            { v: "24/7", l: "Expert Support", icon: <FiTarget />, color: "text-rose-600", bg: "bg-rose-50" }
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-500"
            >
              <div className={`text-2xl ${s.color} ${s.bg} w-12 h-12 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform`}>
                {s.icon}
              </div>
              <div className="text-5xl font-black text-slate-900 mb-2 mt-6 tracking-tighter">{s.v}</div>
              <div className="text-slate-400 text-xs font-bold uppercase tracking-[0.15em]">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. MISSION & VISION SECTION */}
      <section className=" bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-12"
          >
            <motion.div variants={fadeInLeft} className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent rounded-3xl" />
              <div className="relative bg-white rounded-3xl p-10 border border-slate-100 shadow-xl">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-600/20">
                  <FiTarget className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  To empower businesses with intelligent technology solutions that solve complex challenges, 
                  streamline operations, and create sustainable growth in an increasingly digital world. 
                  We bridge the gap between visionary ideas and scalable execution.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="absolute inset-0 bg-gradient-to-l from-indigo-600/5 to-transparent rounded-3xl" />
              <div className="relative bg-white rounded-3xl p-10 border border-slate-100 shadow-xl">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-indigo-600/20">
                  <FiGlobe className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Vision</h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  To be the most trusted technology partner for forward-thinking enterprises, 
                  recognized globally for innovation, reliability, and exceptional client outcomes. 
                  We envision a world where technology serves humanity seamlessly.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. STRATEGIC ROADMAP WITH SWIPER */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[120px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-white text-5xl font-black mb-8 leading-tight">A Roadmap to <br/> Technical Dominance</h2>
              <div className="space-y-8">
                {[
                  { step: "01", title: "Discovery & Audit", desc: "Deep dive into your existing infrastructure and goals." },
                  { step: "02", title: "Architecture Design", desc: "Building a scalable, secure, and future-proof blueprint." },
                  { step: "03", title: "Rapid Deployment", desc: "Agile sprints focused on high-impact feature delivery." },
                  { step: "04", title: "Continuous Evolution", desc: "Monthly audits and scaling based on real-time data." }
                ].map((item, idx) => (
                  <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} key={idx} className="flex gap-6 group">
                    <span className="text-blue-500 font-black text-2xl opacity-40 group-hover:opacity-100 transition-opacity">{item.step}</span>
                    <div>
                      <h4 className="text-white text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-slate-500">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* SWIPER IMAGE CARD */}
            <div className="relative group">
              <div className="aspect-[4/5] md:aspect-square bg-slate-800 rounded-[4rem] overflow-hidden shadow-2xl border border-white/10 rotate-2 group-hover:rotate-0 transition-transform duration-700">
                <Swiper
                  modules={[Autoplay, EffectFade, Pagination]}
                  effect="fade"
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  pagination={{ clickable: true, dynamicBullets: true }}
                  className="h-full w-full"
                >
                  {roadmapImages.map((img, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative h-full w-full">
                        <img src={img} alt="Roadmap Step" className="h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                        <div className="absolute bottom-12 left-12 right-12 p-8 backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl">
                          <FiActivity className="text-blue-400 text-3xl mb-4" />
                          <p className="text-white font-bold text-xl uppercase tracking-widest">Stage {index + 1} Visualization</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-10 -left-10 bg-blue-600 p-8 rounded-3xl shadow-2xl z-20 max-w-[200px]">
                <p className="text-white font-black text-3xl mb-1">Live</p>
                <p className="text-blue-100 text-xs font-bold uppercase tracking-widest">System Monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. JOURNEY TIMELINE */}
      <section ref={journeyRef} className=" bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={journeyInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-4 py-1.5 rounded-full inline-block mb-4">
              Our Journey
            </span>
            <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">The Path to Excellence</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              From humble beginnings to industry leadership — our story of growth and innovation.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px w-0.5 h-full bg-gradient-to-b from-blue-300 via-blue-500 to-blue-300 hidden md:block" />
            
            {[
              { year: "2015", title: "The Beginning", desc: "Started with 3 passionate founders in a small studio", icon: "🚀", color: "blue" },
              { year: "2017", title: "First Major Client", desc: "Secured our first enterprise partnership", icon: "🏆", color: "indigo" },
              { year: "2019", title: "Global Expansion", desc: "Opened offices in 3 countries", icon: "🌍", color: "blue" },
              { year: "2021", title: "Innovation Hub", desc: "Launched our AI research division", icon: "💡", color: "indigo" },
              { year: "2023", title: "100+ Team Members", desc: "Grew to a team of exceptional talents", icon: "👥", color: "blue" },
              { year: "2025", title: "The Future", desc: "Setting new standards in tech", icon: "✨", color: "indigo" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                animate={journeyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center mb-12 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="md:w-1/2 text-center md:text-left px-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-slate-100">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <span className="text-2xl font-bold text-blue-600">{item.year}</span>
                    <h3 className="font-bold text-slate-900 text-xl mt-2">{item.title}</h3>
                    <p className="text-slate-500 mt-2">{item.desc}</p>
                  </div>
                </div>
                <div className="hidden md:block w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full border-4 border-white shadow-md z-10" />
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SERVICES / EXPERTISE TABS */}
      <section className=" bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-4 py-1.5 rounded-full inline-block mb-4">
              Our Expertise
            </span>
            <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">What We Do Best</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your business needs.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["Web Development", "Mobile Apps", "Cloud Solutions", "AI & ML", "Cybersecurity", "UI/UX Design"].map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === idx 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-12 border border-slate-100"
            >
              {activeTab === 0 && (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20">
                      <FiCode className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">Web Development</h3>
                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                      We build fast, scalable, and secure web applications using cutting-edge technologies. 
                      From custom websites to complex enterprise platforms, we deliver exceptional digital experiences.
                    </p>
                    <ul className="space-y-3">
                      {["React/Next.js Development", "Node.js & Python Backend", "E-commerce Solutions", "CMS Integration"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700">
                          <FiChevronRight className="text-blue-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
                    <div className="text-6xl mb-4">💻</div>
                    <p className="text-lg">Powering businesses with robust web solutions that drive growth and engagement.</p>
                  </div>
                </div>
              )}
              {activeTab === 1 && (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20">
                      <FiSmartphone className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">Mobile Applications</h3>
                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                      Native and cross-platform mobile apps that deliver seamless user experiences across iOS and Android.
                    </p>
                    <ul className="space-y-3">
                      {["React Native Development", "Flutter & Swift", "App Store Optimization", "Push Notifications"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700">
                          <FiChevronRight className="text-blue-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
                    <div className="text-6xl mb-4">📱</div>
                    <p className="text-lg">Reach your customers wherever they are with powerful mobile experiences.</p>
                  </div>
                </div>
              )}
              {activeTab === 2 && (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20">
                      <FiCloud className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">Cloud Solutions</h3>
                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                      Scalable cloud infrastructure and migration services that optimize performance and reduce costs.
                    </p>
                    <ul className="space-y-3">
                      {["AWS/Azure/GCP", "Cloud Migration", "DevOps & CI/CD", "Serverless Architecture"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700">
                          <FiChevronRight className="text-blue-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
                    <div className="text-6xl mb-4">☁️</div>
                    <p className="text-lg">Future-proof your business with enterprise-grade cloud infrastructure.</p>
                  </div>
                </div>
              )}
              {activeTab === 3 && (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20">
                      <FiCpu className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">AI & Machine Learning</h3>
                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                      Leverage the power of artificial intelligence to gain insights and automate processes.
                    </p>
                    <ul className="space-y-3">
                      {["Predictive Analytics", "Computer Vision", "NLP Solutions", "Custom AI Models"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700">
                          <FiChevronRight className="text-blue-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
                    <div className="text-6xl mb-4">🧠</div>
                    <p className="text-lg">Transform data into actionable intelligence with cutting-edge AI.</p>
                  </div>
                </div>
              )}
              {activeTab === 4 && (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20">
                      <FiLock className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">Cybersecurity</h3>
                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                      Protect your digital assets with comprehensive security solutions and best practices.
                    </p>
                    <ul className="space-y-3">
                      {["Security Audits", "Penetration Testing", "Compliance Solutions", "24/7 Monitoring"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700">
                          <FiChevronRight className="text-blue-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
                    <div className="text-6xl mb-4">🔒</div>
                    <p className="text-lg">Stay secure with enterprise-grade protection and proactive monitoring.</p>
                  </div>
                </div>
              )}
              {activeTab === 5 && (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20">
                      <FiStar className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">UI/UX Design</h3>
                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                      Create beautiful, intuitive interfaces that users love and remember.
                    </p>
                    <ul className="space-y-3">
                      {["User Research", "Wireframing", "Prototyping", "Usability Testing"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700">
                          <FiChevronRight className="text-blue-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
                    <div className="text-6xl mb-4">🎨</div>
                    <p className="text-lg">Design experiences that captivate users and drive engagement.</p>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 7. TESTIMONIALS SECTION */}
      <section className=" bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-4 py-1.5 rounded-full inline-block mb-4">
              Testimonials
            </span>
            <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">What Our Clients Say</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Trusted by industry leaders worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", role: "CTO, TechCorp", text: "Mumuje Hartron transformed our digital infrastructure. Their expertise and dedication are unmatched.", rating: 5 },
              { name: "Michael Chen", role: "CEO, InnovateLabs", text: "The team delivered beyond our expectations. Highly recommended for any tech project.", rating: 5 },
              { name: "Emily Rodriguez", role: "Product Head, ScaleUp", text: "Professional, innovative, and results-driven. A true partnership that added immense value.", rating: 5 }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-4 py-1.5 rounded-full inline-block mb-4">
              FAQ
            </span>
            <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">Expertise Clarified</h2>
            <p className="text-slate-500 text-lg">Everything you need to know about partnering with us.</p>
          </div>

          <div className="space-y-4">
            {[
              { q: "What makes Hartron unique?", a: "We utilize a proprietary 'Squad-Hybrid' model that pairs enterprise stability with startup agility. This ensures fast delivery without compromising on quality or security." },
              { q: "What is the typical project timeline?", a: "Standard MVP development takes 6-8 weeks. Enterprise solutions may take 3-6 months depending on complexity." },
              { q: "How do you ensure data security?", a: "We follow ISO 27001 standards and implement bank-grade encryption for all client data." },
              { q: "Do you offer post-launch support?", a: "Yes, we offer 24/7 technical support, monthly optimization cycles, and dedicated account managers." }
            ].map((f, i) => (
              <div 
                key={i} 
                className={`group border rounded-[2rem] p-8 cursor-pointer transition-all duration-500 ${activeFaq === i ? 'border-blue-600/30 bg-white shadow-xl shadow-blue-900/5' : 'border-slate-100 hover:border-slate-200'}`}
                onClick={() => setActiveFaq(i)}
              >
                <div className="flex justify-between items-center">
                  <h4 className={`font-bold text-xl transition-colors ${activeFaq === i ? 'text-blue-600' : 'text-slate-900'}`}>{f.q}</h4>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${activeFaq === i ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'}`}>
                    {activeFaq === i ? <FiMinus size={20} /> : <FiPlus size={20} />}
                  </div>
                </div>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }} 
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-6 text-slate-500 text-lg leading-relaxed border-t border-slate-50 pt-6">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      

    </div>
  );
}