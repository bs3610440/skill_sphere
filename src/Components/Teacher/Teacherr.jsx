import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// --- Swiper Imports ---
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { 
  Brain, Globe, Shield, BarChart3, Clock, Users, Award,
  ArrowRight, Star, PlayCircle, Quote, Laptop, Video, Library, Zap, GraduationCap
} from "lucide-react";

// --- COURSE CARD COMPONENT (Same as before) ---
const CourseCard = ({ course, index }) => {
  const IconComponent = course.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -12 }}
      className="group relative bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100"
    >
      <div className="relative h-48 overflow-hidden">
        <img src={course.image} alt={course.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
        <div className="absolute bottom-4 left-4 flex items-center">
          <div className="p-2 rounded-lg bg-indigo-600/40 backdrop-blur-md border border-white/30">
            <IconComponent className="w-5 h-5 text-white" />
          </div>
          <span className="ml-2 text-white font-bold text-[10px] uppercase tracking-widest">Masterclass</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-black text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">{course.name}</h3>
        <p className="text-slate-500 text-sm mb-4 line-clamp-2">{course.description}</p>
        <div className="grid grid-cols-2 gap-2 mb-6 bg-slate-50 p-3 rounded-xl">
          <div className="flex items-center text-slate-600 text-[10px] font-bold">
            <Clock className="w-3 h-3 mr-1 text-indigo-600" /> {course.duration}
          </div>
          <div className="flex items-center text-slate-600 text-[10px] font-bold">
            <Users className="w-3 h-3 mr-1 text-purple-600" /> {course.students} Learners
          </div>
        </div>
        <Link to={`/course/${course.id}`}>
          <button className={`w-full bg-gradient-to-r ${course.gradient} text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center hover:shadow-lg transition-all`}>
            ENROLL NOW <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default function ThreeMonthMasterclass() {
  const heroImages = [
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2104"
  ];

  const courses = [
    { id: 1, name: "AI & Future Pedagogy", icon: Brain, image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800", gradient: "from-indigo-600 to-blue-700", description: "Learn GPT-4, Midjourney and AI curriculum design.", topics: ["Generative AI", "Custom GPTs"], duration: "3 Months", students: "1.2k+" },
    { id: 2, name: "Full-Stack EdTech", icon: Globe, image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800", gradient: "from-teal-500 to-emerald-600", description: "Build your own LMS and teaching apps from scratch.", topics: ["React", "NodeJS"], duration: "3 Months", students: "950+" },
    { id: 3, name: "Cyber Armor", icon: Shield, image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800", gradient: "from-orange-500 to-red-600", description: "Secure your digital classroom and student data.", topics: ["Encryption", "Safety"], duration: "3 Months", students: "800+" },
    { id: 4, name: "Data Science Ed", icon: BarChart3, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800", gradient: "from-violet-600 to-fuchsia-600", description: "Analyze student performance with Python & PowerBI.", topics: ["Analytics", "Python"], duration: "3 Months", students: "1.1k+" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* --- HERO SECTION WITH SWIPER --- */}
      <section className="relative h-screen">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          className="h-full w-full"
        >
          {heroImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full">
                <img src={img} className="absolute inset-0 w-full h-full object-cover" alt="slide" />
                <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center text-center px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl"
          >
            <span className="bg-indigo-600 text-white px-6 py-2 rounded-full text-xs font-black tracking-widest uppercase mb-6 inline-block">
              Admission Open 2026
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-none tracking-tighter">
              ELITE TEACHER <br/> <span className="text-indigo-400">MASTERCLASS</span>
            </h1>
            <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-medium">
              A 90-day intensive journey to transform traditional educators into digital-first leaders.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-10 py-5 bg-white text-indigo-900 rounded-2xl font-black hover:scale-105 transition-transform">
                Apply for Batch
              </button>
              <button className="px-10 py-5 bg-indigo-600/20 backdrop-blur-md border border-white/30 text-white rounded-2xl font-black hover:bg-white/10 transition-all flex items-center">
                <PlayCircle className="mr-2" /> View Syllabus
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- COURSE GRID (Static) --- */}
      <section className="py-32 container mx-auto px-6">
        <div className="mb-16">
            <h2 className="text-4xl font-black text-slate-900">Advanced 3-Month Tracks</h2>
            <div className="w-20 h-2 bg-indigo-600 mt-4 rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => <CourseCard key={course.id} course={course} index={index} />)}
        </div>
      </section>

      {/* --- TESTIMONIALS SWIPER (Attractive Slide) --- */}
      <section className="bg-slate-50 py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-4xl font-black mb-16">What Our Graduates Say</h2>
          
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
            }}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            className="pb-16"
          >
            {[1, 2, 3, 4].map((i) => (
              <SwiperSlide key={i}>
                <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 relative h-full">
                  <Quote className="absolute top-8 right-8 text-indigo-100 w-16 h-16" />
                  <div className="flex text-yellow-400 mb-6">
                    {[...Array(5)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-lg text-slate-600 italic mb-8 relative z-10">
                    "This 90-day program changed how I think about education. I now use AI tools to save 10+ hours a week on grading and lesson planning."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">TR</div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Teacher Rajesh</h4>
                      <p className="text-indigo-600 text-[10px] font-black uppercase tracking-widest">High School Lead</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <footer className="py-20 bg-indigo-950 text-white text-center">
        <h2 className="text-3xl font-black mb-6">Ready to upgrade your career?</h2>
        <button className="bg-indigo-500 hover:bg-indigo-400 px-12 py-4 rounded-2xl font-bold transition-all shadow-xl">
          Contact Admissions
        </button>
      </footer>
    </div>
  );
}