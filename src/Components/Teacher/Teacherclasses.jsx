import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Brain, Globe, Shield, BarChart3, Clock, Users, Award,
  ArrowRight, Star, PlayCircle, CheckCircle2, Quote, Mail,
  Laptop, Video, Library, Zap
} from "lucide-react";

// --- COURSE CARD COMPONENT ---
const CourseCard = ({ course, index }) => {
  const IconComponent = course.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -12 }}
      className="group relative bg-white/90 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-white/20"
    >
      <div className="relative h-48 overflow-hidden">
        <img src={course.image} alt={course.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70" />
        <div className="absolute bottom-4 left-4 flex items-center">
          <div className="p-2 rounded-lg bg-blue-600/40 backdrop-blur-md border border-white/30">
            <IconComponent className="w-5 h-5 text-white" />
          </div>
          <span className="ml-2 text-white font-bold text-xs uppercase tracking-tighter">Certified Expert</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-black text-slate-800 mb-2 group-hover:text-blue-600 transition-colors leading-tight">{course.name}</h3>
        <p className="text-slate-500 text-sm mb-4 line-clamp-2 leading-relaxed">{course.description}</p>
        <div className="mb-6">
          <p className="text-[10px] font-black uppercase tracking-[0.15em] text-blue-500 mb-3">Module Highlights:</p>
          <div className="flex flex-wrap gap-2">
            {course.topics.map((topic, i) => (
              <span key={i} className="text-[10px] font-bold bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-100 italic">#{topic}</span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-6 bg-blue-50/50 p-3 rounded-2xl border border-blue-100/50">
          <div className="flex items-center text-slate-600">
            <Clock className="w-3.5 h-3.5 mr-1.5 text-blue-600" />
            <span className="text-xs font-bold">{course.duration}</span>
          </div>
          <div className="flex items-center text-slate-600">
            <Users className="w-3.5 h-3.5 mr-1.5 text-purple-600" />
            <span className="text-xs font-bold">{course.students} Learners</span>
          </div>
        </div>
        <Link to={`/course/${course.id}`}>
          <motion.button whileTap={{ scale: 0.95 }} className={`w-full bg-gradient-to-r ${course.gradient} text-white px-6 py-4 rounded-2xl font-black text-sm flex items-center justify-center shadow-lg hover:shadow-blue-200 transition-all duration-300`}>
            <span>ENROLL NOW</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

// --- STAT CARD ---
const StatCard = ({ icon: Icon, value, label, gradient }) => (
  <motion.div whileHover={{ scale: 1.05 }} className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/40 flex items-center space-x-4">
    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white shadow-lg`}>
      <Icon className="w-7 h-7" />
    </div>
    <div>
      <div className="text-3xl font-black text-slate-900 leading-none mb-1">{value}</div>
      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{label}</div>
    </div>
  </motion.div>
);

// --- BENEFIT CARD ---
const BenefitCard = ({ icon: Icon, title, desc }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white/50 backdrop-blur-sm rounded-3xl border border-white/20">
    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
      <Icon className="w-8 h-8 text-blue-600" />
    </div>
    <h4 className="text-xl font-bold text-slate-800 mb-2">{title}</h4>
    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default function HomePage() {
  const courses = [
    { id: 1, name: "Artificial Intelligence", icon: Brain, image: "https://res.cloudinary.com/ddj2og1rh/image/upload/v1771153394/How-to-report-a-cybercrime_aqh2hw.webp", gradient: "from-blue-600 to-indigo-600", description: "Learn to use ChatGPT, Midjourney, and AI tools for classroom teaching.", topics: ["Prompt Engineering", "LMS AI Tools", "Auto-Grading"], duration: "45 Days", students: "2.5k+", featured: true },
    { id: 2, name: "Web Development", icon: Globe, image: "https://res.cloudinary.com/ddj2og1rh/image/upload/v1771153828/global_aqpkrz.webp", gradient: "from-emerald-500 to-teal-600", description: "Create your own teaching portal and online presence.", topics: ["React Basics", "Digital Branding", "SEO for Teachers"], duration: "45 Days", students: "3.2k+", featured: false },
    { id: 3, name: "Cyber Security", icon: Shield, image: "https://res.cloudinary.com/ddj2og1rh/image/upload/v1771174733/download_r1uefo.jpg", gradient: "from-rose-500 to-red-600", description: "Secure your online classes and student data protection.", topics: ["Data Privacy", "Cyber Hygiene", "Web Defense"], duration: "45 Days", students: "1.8k+", featured: true },
    { id: 4, name: "Data Analysis", icon: BarChart3, image: "https://res.cloudinary.com/ddj2og1rh/image/upload/v1771153167/cybersecurity_yuqqnj.jpg", gradient: "from-violet-600 to-purple-600", description: "Track student performance using data science models.", topics: ["Score Analysis", "Python 101", "Charts & Graphs"], duration: "45 Days", students: "2.1k+", featured: false },
  ];

  const testimonials = [
    { name: "Dr. Ananya Roy", role: "Sr. Professor", text: "The transition to online teaching was tough, but these 45 days made me an expert in digital tools.", img: "https://i.pravatar.cc/150?u=ananya" },
    { name: "Vikram Mehta", role: "School Principal", text: "Our entire staff learned how to secure student data and use AI for better engagement.", img: "https://i.pravatar.cc/150?u=vikram" }
  ];

  const benefits = [
    { icon: Video, title: "Live HD Sessions", desc: "Interact with mentors in real-time with dual-camera setup for clear demonstrations." },
    { icon: Laptop, title: "Hands-on Projects", desc: "Build real educational tools while you learn. Practice makes you a professional teacher." },
    { icon: Library, title: "LMS Lifetime Access", desc: "Get all recordings, notes, and teacher resources for a lifetime in our library." },
    { icon: Zap, title: "Instant Doubt Support", desc: "Our 24/7 WhatsApp community and doubt mentors are always there to help you." }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* GLOBAL BACKGROUND LAYER */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/50" />
      </div>

      {/* --- HERO SECTION FIXED --- */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden z-10 pb-24 md:pb-32">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            poster="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1920"
            className="w-full h-full object-cover"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-his-laptop-34440-large.mp4" type="video/mp4" />
            <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHR4Znl3dzd4Znl3dzd4Znl3dzd4Znl3dzd4Znl3dzd4Znl3dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKSjPqcKGRZaO3u/giphy.gif" alt="teaching" className="w-full h-full object-cover" />
          </video>
          <div className="absolute inset-0 bg-slate-950/65 backdrop-blur-[1px]" />
          {/* Blend Gradient to fix harsh edges at the bottom of hero */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent opacity-30" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center pt-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center px-6 py-2 mb-8 text-xs font-black tracking-[0.3em] text-blue-400 uppercase bg-blue-500/10 border border-blue-400/30 rounded-full backdrop-blur-md">
                Revolutionizing Education 2026
            </span>
            <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter text-white leading-[0.85]">
              TEACHING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 animate-pulse">EVOLVED.</span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-slate-200 mb-12 font-medium drop-shadow-lg">
              Empowering educators with world-class digital skills. Master AI, Web Tools, and Cybersecurity in a 45-day intensive journey.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="px-12 py-6 bg-blue-600 text-white rounded-2xl font-black text-lg shadow-2xl hover:bg-blue-500 transition-all hover:scale-105 active:scale-95">
                Apply for Batch
              </button>
              <button className="px-12 py-6 bg-white/10 backdrop-blur-md text-white border-2 border-white/20 rounded-2xl font-black text-lg flex items-center justify-center hover:bg-white/20 transition-all">
                <PlayCircle className="w-6 h-6 mr-3 text-blue-400" /> Free Preview
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- STATS SECTION FIXED (Relative z-index and spacing) --- */}
      <section className="container mx-auto px-6 -mt-12 md:-mt-20 mb-32 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatCard icon={Users} value="10k+" label="Educators" gradient="from-blue-600 to-blue-400" />
          <StatCard icon={Award} value="98%" label="Success" gradient="from-purple-600 to-purple-400" />
          <StatCard icon={Globe} value="24/7" label="Support" gradient="from-emerald-600 to-emerald-400" />
          <StatCard icon={Star} value="4.9" label="Rating" gradient="from-orange-500 to-yellow-400" />
        </div>
      </section>

      {/* BENEFITS GRID */}
      <section className="container mx-auto px-6 mb-32 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Why Teachers Trust Us?</h2>
          <p className="text-slate-500 font-medium">We provide the ecosystem you need to flourish as an educator.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {benefits.map((b, i) => <BenefitCard key={i} {...b} />)}
        </div>
      </section>

      {/* COURSES GRID */}
      <section className="container mx-auto px-6 pb-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 border-l-8 border-blue-600 pl-8">
          <div>
            <h2 className="text-5xl font-black text-slate-900 mb-2">Teacher Specializations</h2>
            <p className="text-slate-500 text-lg font-medium">Upgrade to the future of education in just 45 days.</p>
          </div>
          <Link to="/courses" className="mt-6 md:mt-0 px-8 py-3 bg-blue-50 text-blue-700 rounded-full font-bold hover:bg-blue-100 transition-all flex items-center">
            Browse All <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {courses.map((course, index) => <CourseCard key={course.id} course={course} index={index} />)}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-slate-950 py-32 text-white relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-5xl font-black mb-6">Voices of Evolution</h2>
            <p className="text-slate-400 text-lg">Hear from educators who transformed their classrooms with us.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div key={i} whileHover={{ scale: 1.02 }} className="bg-slate-900 p-10 rounded-[3rem] relative border border-slate-800">
                <Quote className="absolute top-10 right-10 w-16 h-16 text-slate-800 opacity-50" />
                <div className="flex space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-xl text-slate-300 italic mb-10 leading-relaxed font-light">"{t.text}"</p>
                <div className="flex items-center space-x-5">
                  <img src={t.img} className="w-16 h-16 rounded-2xl object-cover border-2 border-blue-600 shadow-xl" alt={t.name} />
                  <div>
                    <h4 className="text-xl font-black">{t.name}</h4>
                    <p className="text-sm font-bold text-blue-500 uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-32 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl bg-gradient-to-br from-blue-600 to-purple-800 rounded-[3rem] p-16 text-center text-white shadow-2xl relative overflow-hidden">
          <h2 className="text-5xl font-black mb-6">Ready to lead the change?</h2>
          <p className="text-blue-100 mb-10 text-lg opacity-90">Secure your slot for the upcoming 2026 batch today.</p>
          <div className="max-w-md mx-auto flex gap-2 p-2 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
            <input type="email" placeholder="Enter your email" className="bg-transparent border-none flex-1 px-4 text-white outline-none placeholder:text-blue-200" />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all">Join Now</button>
          </div>
        </div>
      </section>

    </div>
  );
}