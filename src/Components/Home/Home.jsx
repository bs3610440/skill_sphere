import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion";
import { 
  FaGraduationCap, FaMapMarkerAlt, FaQuoteLeft, 
  FaCode, FaChartLine, FaStar, FaLaptopCode,
  FaDatabase, FaMobileAlt, FaLock, FaEnvelope, FaPhoneAlt, FaArrowRight,
  FaShieldAlt, FaUsers, FaAward, FaRegBuilding, FaPlay, FaCheckCircle,
  FaBrain, FaCloudUploadAlt
} from "react-icons/fa";

export default function HartronHomepage() {
  const allCoursesList = [
    { 
      title: "Web Development", 
      icon: <FaCode />, 
      students: "1,200+", 
      duration: "6 Months", 
      description: "Full-stack mastery with React, Node.js & MongoDB. Build modern web applications.",
      badge: "Most Popular"
    },
    { 
      title: "Cyber Security", 
      icon: <FaLock />, 
      students: "850+", 
      duration: "8 Months", 
      description: "Ethical hacking, network defense & SOC analysis. Become a certified security expert.",
      badge: "High Demand"
    },
    { 
      title: "Data Science", 
      icon: <FaDatabase />, 
      students: "750+", 
      duration: "6 Months", 
      description: "Python, Pandas, Machine Learning & Tableau. Master data-driven decision making.",
      badge: "New Batch"
    },
    { 
      title: "Artificial Intelligence", 
      icon: <FaBrain />, 
      students: "620+", 
      duration: "8 Months", 
      description: "TensorFlow, Neural Networks, NLP & Computer Vision. Build intelligent systems.",
      badge: "Emerging Tech"
    },
    { 
      title: "Digital Marketing", 
      icon: <FaChartLine />, 
      students: "1,050+", 
      duration: "4 Months", 
      description: "SEO, Social Media, Google Ads & Analytics. Become a certified digital marketer.",
      badge: "Weekend Batch"
    },
    { 
      title: "App Design", 
      icon: <FaMobileAlt />, 
      students: "1,100+", 
      duration: "4 Months", 
      description: "UI/UX, Flutter & cross-platform development. Create stunning mobile experiences.",
      badge: "Most Popular"
    },
    { 
      title: "Cloud Computing", 
      icon: <FaCloudUploadAlt />, 
      students: "540+", 
      duration: "6 Months", 
      description: "AWS, Azure & DevOps. Master cloud architecture and deployment strategies.",
      badge: "New"
    }
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleCourses = showAll ? allCoursesList : allCoursesList.slice(0, 4);

  const courses = allCoursesList.slice(0, 4);

  // Roadmap steps
  const roadmapSteps = [
    { title: "Enrollment", desc: "Select your career path and register with personalized counseling.", icon: <FaGraduationCap /> },
    { title: "Foundation", desc: "Deep dive into core technical concepts with industry experts.", icon: <FaLaptopCode /> },
    { title: "Project Lab", desc: "Building scalable real-world apps in collaborative environment.", icon: <FaCode /> },
    { title: "Placement", desc: "Interviews with top industry partners & career support.", icon: <FaChartLine /> }
  ];

  // Testimonials
  const testimonials = [
    { name: "Karan Singh", role: "Software Dev @ TCS", rating: 5, text: "Hartron's practical approach is what sets it apart. The mentorship here helped me land my dream job within 2 months of course completion.", initial: "KS" },
    { name: "Simran Jindal", role: "Cyber Analyst", rating: 5, text: "High-quality infrastructure and peaceful environment for learning. The cyber security lab is top-notch with real-time scenarios.", initial: "SJ" },
    { name: "Rahul Sharma", role: "Full Stack Dev", rating: 5, text: "The trainers are very supportive and the curriculum is up-to-date. Got placed in a MNC with great package. Highly recommended!", initial: "RS" }
  ];

  // Stats data
  const stats = [
    { value: "98%", label: "Placement Rate", icon: <FaChartLine />, desc: "Within 6 months" },
    { value: "50+", label: "Recruiters", icon: <FaRegBuilding />, desc: "Top MNCs & Startups" },
    { value: "4500+", label: "Alumni", icon: <FaUsers />, desc: "Across 20+ states" },
    { value: "15+", label: "Certifications", icon: <FaAward />, desc: "Industry recognized" }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden selection:bg-blue-100">
      
      {/* ========== 1. HERO SECTION - PREMIUM SWIPER ========== */}
      <section className="relative h-screen w-full overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: false }}
          loop={true}
          speed={1200}
          className="h-full w-full"
        >
          {[
            { 
              url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070", 
              tag: "GOVT. APPROVED SKILL CENTER",
              titleLine1: "Shape Your",
              titleLine2: "Digital Future",
              cta: "Apply Now"
            },
            { 
              url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070", 
              tag: "100% PLACEMENT ASSISTANCE",
              titleLine1: "Code Your",
              titleLine2: "Dream Career",
              cta: "View Courses"
            },
            { 
              url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070", 
              tag: "LIVE PROJECTS & MENTORSHIP",
              titleLine1: "Learn From",
              titleLine2: "Industry Experts",
              cta: "Get Brochure"
            }
          ].map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative h-full w-full">
                <div className="absolute inset-0">
                  <img src={slide.url} className="w-full h-full object-cover scale-105" alt="Hero" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0A1128] via-[#0A1128]/80 to-[#1A2A6C]/60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                
                <div className="absolute top-1/4 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "0.7s" }} />
                
                <div className="relative z-10 flex items-center h-full px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
                  <div className="max-w-4xl">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      className="mb-8 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
                    >
                      <FaShieldAlt className="text-green-400 text-sm" />
                      <span className="text-white/90 text-sm font-semibold tracking-wider">{slide.tag}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping" />
                    </motion.div>
                    
                    <motion.h1 
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.8 }}
                      className="font-black leading-[1.1] mb-6"
                    >
                      <span className="text-white">{slide.titleLine1}<br /></span>
                      <span className="bg-gradient-to-r from-[#60A5FA] via-[#34D399] to-[#22D3EE] bg-clip-text text-transparent">
                        {slide.titleLine2}
                      </span>
                    </motion.h1>
                    
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      className="text-white/80 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
                    >
                      HARTRON Skill Centre, Cheeka — Govt. registered IT training hub with job-ready programs, 
                      expert mentorship, and <span className="text-yellow-300 font-bold">98% placement record</span>.
                    </motion.p>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }} 
                      transition={{ delay: 0.7, duration: 0.6 }} 
                      className="flex flex-col sm:flex-row gap-5"
                    >
                      
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.9 }}
                      className="mt-12 flex flex-wrap gap-6 text-white/60 text-sm"
                    >
                      <div className="flex items-center gap-2"><FaCheckCircle className="text-green-400" /> Govt. Registered</div>
                      <div className="flex items-center gap-2"><FaCheckCircle className="text-green-400" /> ISO Certified</div>
                      <div className="flex items-center gap-2"><FaCheckCircle className="text-green-400" /> NSDC Partner</div>
                      <div className="flex items-center gap-2"><FaCheckCircle className="text-green-400" /> 24/7 Lab Access</div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <style>{`
          .swiper-pagination-bullet {
            width: 40px !important;
            height: 4px !important;
            border-radius: 4px !important;
            background: rgba(255,255,255,0.4) !important;
            opacity: 1 !important;
          }
          .swiper-pagination-bullet-active {
            background: #3B82F6 !important;
            width: 60px !important;
          }
          .swiper-pagination {
            bottom: 30px !important;
          }
        `}</style>
      </section>

      {/* ========== 2. STATS BANNER - TRANSPARENT PREMIUM DESIGN ========== */}
      <section className="relative -mt-20 z-20 px-6 max-w-7xl mx-auto">
        <div className="bg-transparent rounded-3xl p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-2xl text-blue-600 shadow-md">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-slate-800 to-slate-900 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-slate-800 font-bold text-lg mt-2">{stat.label}</div>
              <div className="text-slate-500 text-sm mt-1">{stat.desc}</div>
              {i < stats.length - 1 && (
                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-px h-12 bg-slate-300/50 hidden md:block" />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========== 3. MODERN BENTO LIST SECTION ========== */}
      <section className="py-32 bg-[#020617] relative overflow-hidden mt-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 mb-6">
              <span className="text-slate-300 text-xs font-bold uppercase tracking-widest">Premium Programs</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white italic">LIMITLESS <span className="text-blue-500">POTENTIAL.</span></h2>
          </div>

          <div className="flex flex-col gap-4">
            <AnimatePresence mode="popLayout">
              {visibleCourses.map((course, i) => (
                <motion.div
                  layout
                  key={course.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group relative"
                >
                  <div className="relative bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-500">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                      <div className="flex items-center gap-8">
                        <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center text-3xl text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                          {course.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-1 flex-wrap">
                            <h3 className="text-2xl font-bold text-white">{course.title}</h3>
                            <span className="text-[10px] font-black text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-md border border-cyan-400/20 uppercase">{course.badge}</span>
                          </div>
                          <p className="text-slate-400">{course.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-8">
                        <div className="hidden lg:block text-right">
                          <p className="text-[10px] text-slate-500 font-bold uppercase">Duration</p>
                          <p className="text-white font-mono">{course.duration}</p>
                        </div>
                        <motion.button whileHover={{ x: 5 }} className="bg-white text-slate-950 px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-blue-500 hover:text-white transition-all">
                          Enroll Now <FaArrowRight />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-16 text-center">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="px-10 py-5 rounded-full border border-slate-700 text-slate-300 font-bold hover:bg-white hover:text-black transition-all"
            >
              {showAll ? "Show Less" : "View All 7+ Programs"}
            </button>
          </div>
        </div>
      </section>

      {/* ========== 4. ROADMAP & QUOTE SECTION ========== */}
      <section className="py-28 bg-gradient-to-br from-slate-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-300 text-sm font-bold tracking-wider uppercase">Learning Journey</span>
            <h2 className="text-4xl md:text-5xl font-black mt-2 mb-8 leading-tight">Your Path to <br/> <span className="text-cyan-300">Career Success.</span></h2>
            <div className="space-y-8 relative">
              {roadmapSteps.map((step, idx) => (
                <div key={idx} className="relative flex gap-5 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-xl text-cyan-300 group-hover:bg-cyan-500/20 transition">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">{step.title}</h4>
                    <p className="text-slate-300 text-sm mt-1 leading-relaxed">{step.desc}</p>
                  </div>
                  {idx !== roadmapSteps.length - 1 && (
                    <div className="absolute left-5 top-12 w-0.5 h-12 bg-gradient-to-b from-cyan-400/40 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-3xl blur-2xl" />
            <div className="relative bg-white rounded-3xl p-10 shadow-2xl">
              <FaQuoteLeft className="text-blue-100 text-7xl absolute top-6 left-6 opacity-40" />
              <p className="relative z-10 text-2xl md:text-3xl font-medium italic text-slate-700 leading-relaxed">
                "Technical education is the most powerful weapon which you can use to change your career trajectory."
              </p>
              <div className="mt-8 flex items-center gap-5 border-t pt-8 border-slate-100">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-800 to-indigo-900 flex items-center justify-center text-white font-black text-xl shadow-lg">H</div>
                <div>
                  <p className="text-lg font-black text-slate-800">Hartron Skill Centre</p>
                  <p className="text-blue-600 text-sm font-semibold uppercase tracking-wide">Cheeka Center | Est. 2012</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== 5. TESTIMONIALS SECTION ========== */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-black text-slate-900 mb-3">Student <span className="text-blue-600">Success Stories</span></h2>
          <p className="text-slate-500 max-w-xl mx-auto">Our alumni working at top companies across India & abroad.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/60 border border-slate-100"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => <FaStar key={i} className="text-yellow-400" />)}
              </div>
              <p className="text-slate-600 italic leading-relaxed mb-6">"{item.text}"</p>
              <div className="flex items-center gap-4 border-t pt-5 border-slate-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">{item.initial}</div>
                <div>
                  <p className="font-black text-slate-800">{item.name}</p>
                  <p className="text-xs text-blue-600 font-semibold">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========== 6. CTA BANNER ========== */}
      <section className="px-6 max-w-7xl mx-auto pb-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-blue-700 to-indigo-800 rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070')] bg-cover bg-center opacity-10" />
          <div className="relative p-12 md:p-16 text-center md:text-left md:flex justify-between items-center gap-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-3">Ready to Start Your Journey?</h3>
              <p className="text-blue-100 text-lg">Limited seats for upcoming batch. Get career counseling now.</p>
            </div>
            <div className="mt-6 md:mt-0 flex gap-4 justify-center">
              <button className="bg-white text-blue-800 px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all hover:scale-105">
                Apply Now
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition">
                Talk Counselor
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ========== 7. LOCATION & CONTACT + FOOTER ========== */}
      <section className="bg-slate-50 pt-20 pb-0">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 shadow-xl border border-slate-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <FaMapMarkerAlt className="text-blue-600 text-2xl" />
              <h3 className="text-2xl font-black text-slate-800">Visit Our Campus</h3>
            </div>
            <div className="space-y-6">
              <p className="text-slate-700 text-lg leading-relaxed">
                <strong className="font-black">HARTRON Skill Centre</strong><br />
                Near Bus Stand, Main Road, Cheeka,<br />
                Kaithal District, Haryana - 136034
              </p>
              <div className="flex flex-col gap-3 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3"><FaPhoneAlt className="text-blue-600" /> <span className="font-medium">+91 99912 34567</span></div>
                <div className="flex items-center gap-3"><FaEnvelope className="text-blue-600" /> <span className="font-medium">info@hartroncheeka.ac.in</span></div>
              </div>
              <div className="pt-4">
                <p className="text-xs text-slate-400 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Office Hours: Mon-Sat (9 AM – 6 PM)</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.456789!2d76.2234!3d30.0654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910a5c2e8b9f7d5%3A0x7b4f5e2d1a8c3b9e!2sCheeka%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Cheeka Map Location"
              className="grayscale-[20%] hover:grayscale-0 transition"
            ></iframe>
          </motion.div>
        </div>
        
        
      </section>
    </div>
  );
}