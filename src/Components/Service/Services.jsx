import React from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  FiChevronRight, FiCode, FiSmartphone, FiCloud, FiCpu, FiLock, FiStar,
  FiDatabase, FiTrendingUp, FiShield, FiZap, FiGlobe, FiTarget, FiAward,
  FiBarChart2, FiUsers, FiClock, FiMail, FiMapPin, FiPhone, FiCheckCircle,
  FiArrowRight, FiPlay, FiBookOpen, FiBriefcase, FiCompass, FiHeart
} from 'react-icons/fi';

export default function Services() {
  const [activeFilter, setActiveFilter] = React.useState("all");
  const [hoveredCard, setHoveredCard] = React.useState(null);
  const statsRef = React.useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, type: "spring", stiffness: 100 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const floatAnimation = {
    y: [0, -12, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  };

  const services = [
    {
      id: 1,
      category: "development",
      icon: <FiCode className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom web applications built with cutting-edge technologies for scalable, secure, and high-performance digital experiences.",
      features: ["React/Next.js", "Node.js/Python", "E-commerce", "CMS Integration"],
      price: "Custom Pricing",
      color: "from-blue-500 to-cyan-500",
      gradient: "blue",
      popular: true
    },
    {
      id: 2,
      category: "development",
      icon: <FiSmartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps that deliver seamless user experiences across iOS and Android devices.",
      features: ["React Native", "Flutter", "iOS/Android", "App Store Optimization"],
      price: "Custom Pricing",
      color: "from-indigo-500 to-purple-500",
      gradient: "indigo",
      popular: false
    },
    {
      id: 3,
      category: "cloud",
      icon: <FiCloud className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services that optimize performance and reduce operational costs.",
      features: ["AWS/Azure/GCP", "Cloud Migration", "DevOps & CI/CD", "Serverless"],
      price: "Custom Pricing",
      color: "from-blue-500 to-indigo-500",
      gradient: "blue",
      popular: true
    },
    {
      id: 4,
      category: "ai",
      icon: <FiCpu className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Leverage the power of artificial intelligence to gain insights, automate processes, and drive innovation.",
      features: ["Predictive Analytics", "Computer Vision", "NLP Solutions", "Custom AI Models"],
      price: "Custom Pricing",
      color: "from-purple-500 to-pink-500",
      gradient: "purple",
      popular: true
    },
    {
      id: 5,
      category: "security",
      icon: <FiLock className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and ensure business continuity.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "24/7 Monitoring"],
      price: "Custom Pricing",
      color: "from-red-500 to-orange-500",
      gradient: "red",
      popular: false
    },
    {
      id: 6,
      category: "design",
      icon: <FiStar className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love, backed by research and user-centered design principles.",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
      price: "Custom Pricing",
      color: "from-green-500 to-emerald-500",
      gradient: "green",
      popular: false
    },
    {
      id: 7,
      category: "data",
      icon: <FiDatabase className="w-8 h-8" />,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with advanced analytics and business intelligence solutions.",
      features: ["Big Data", "Business Intelligence", "Data Visualization", "Real-time Analytics"],
      price: "Custom Pricing",
      color: "from-teal-500 to-cyan-500",
      gradient: "teal",
      popular: false
    },
    {
      id: 8,
      category: "consulting",
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "IT Consulting",
      description: "Strategic technology consulting to align your IT infrastructure with business goals and drive growth.",
      features: ["Digital Transformation", "Tech Strategy", "Architecture Review", "Roadmap Planning"],
      price: "Custom Pricing",
      color: "from-blue-500 to-purple-500",
      gradient: "blue",
      popular: true
    },
    {
      id: 9,
      category: "support",
      icon: <FiShield className="w-8 h-8" />,
      title: "Managed IT Services",
      description: "End-to-end IT management and support to keep your business running smoothly 24/7.",
      features: ["24/7 Support", "Proactive Monitoring", "Backup & Recovery", "IT Infrastructure"],
      price: "Custom Pricing",
      color: "from-orange-500 to-red-500",
      gradient: "orange",
      popular: false
    }
  ];

  const filteredServices = activeFilter === "all" 
    ? services 
    : services.filter(s => s.category === activeFilter);

  const categories = [
    { id: "all", label: "All Services", icon: <FiZap />, count: services.length },
    { id: "development", label: "Development", icon: <FiCode />, count: services.filter(s => s.category === "development").length },
    { id: "cloud", label: "Cloud", icon: <FiCloud />, count: services.filter(s => s.category === "cloud").length },
    { id: "ai", label: "AI/ML", icon: <FiCpu />, count: services.filter(s => s.category === "ai").length },
    { id: "security", label: "Security", icon: <FiLock />, count: services.filter(s => s.category === "security").length },
    { id: "design", label: "Design", icon: <FiStar />, count: services.filter(s => s.category === "design").length },
    { id: "consulting", label: "Consulting", icon: <FiTrendingUp />, count: services.filter(s => s.category === "consulting").length }
  ];

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-blue-600/10 selection:text-blue-600 overflow-x-hidden">
      
      {/* Hero Section with Parallax */}
      <section className="relative pt-10 pb-20 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -top-48 -right-48 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-[140px]" 
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], x: [0, 80, 0], y: [0, 50, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 -left-48 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{ scale: [1, 1.1, 1], y: [0, -50, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-300/20 rounded-full blur-[100px]" 
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-lg border border-slate-100 mb-8"
            >
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative flex h-2 w-2"
              >
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </motion.span>
              <span className="text-slate-600 text-xs font-bold uppercase tracking-wider">Enterprise-Grade Solutions</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl  font-black text-slate-900 mb-8 tracking-tight leading-tight"
            >
              Transform Your
              <span className="relative inline-block ml-4">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Carrer
                </span>
                <motion.svg 
                  animate={{ width: ["0%", "100%"] }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="absolute -bottom-3 left-0 w-full" 
                  viewBox="0 0 358 12" 
                  fill="none"
                >
                  <path d="M3 9C118.957 4.47226 235.043 4.47226 355 9" stroke="#2563EB" strokeWidth="6" strokeLinecap="round"/>
                </motion.svg>
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              We deliver cutting-edge technology solutions that drive growth, enhance efficiency, 
              and create exceptional digital experiences for your customers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
            >
              
            </motion.div>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        >
          <div className="w-7 h-12 border-2 border-slate-300 rounded-full flex justify-center">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-blue-600 rounded-full mt-2" 
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section with Counter Animation */}
      <section className="relative -mt-20 pb-20 px-6 z-20">
        <div ref={statsRef} className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { v: "500+", l: "Projects Delivered", icon: <FiCode />, color: "from-blue-500 to-cyan-500", delay: 0 },
            { v: "150+", l: "Happy Clients", icon: <FiUsers />, color: "from-indigo-500 to-purple-500", delay: 0.1 },
            { v: "99%", l: "Success Rate", icon: <FiAward />, color: "from-emerald-500 to-green-500", delay: 0.2 },
            { v: "24/7", l: "Support Available", icon: <FiClock />, color: "from-rose-500 to-orange-500", delay: 0.3 }
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={statsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: s.delay, duration: 0.6, type: "spring" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white rounded-2xl p-6 text-center shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className={`text-3xl bg-gradient-to-br ${s.color} bg-clip-text text-transparent mb-3`}
              >
                {s.icon}
              </motion.div>
              <motion.div 
                className="text-4xl font-black text-slate-900"
                initial={{ scale: 0 }}
                animate={statsInView ? { scale: 1 } : {}}
                transition={{ delay: s.delay + 0.2, type: "spring" }}
              >
                {s.v}
              </motion.div>
              <div className="text-slate-500 text-sm mt-2 font-medium">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Filter Section with Animated Tabs */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`relative flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 overflow-hidden ${
                  activeFilter === cat.id
                    ? 'text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {activeFilter === cat.id && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <span className="relative z-10 text-sm">{cat.icon}</span>
                <span className="relative z-10">{cat.label}</span>
                {cat.count > 0 && activeFilter !== cat.id && (
                  <span className="relative z-10 text-xs bg-white/50 px-1.5 py-0.5 rounded-full">
                    {cat.count}
                  </span>
                )}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid with Stagger Animation */}
      <section className="py-12 pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 20 }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredServices.map((service, idx) => (
                <motion.div
                  key={service.id}
                  variants={fadeInUp}
                  whileHover={{ y: -12 }}
                  onHoverStart={() => setHoveredCard(service.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="group relative cursor-pointer"
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute -top-3 -right-3 z-20"
                    >
                      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        Most Popular
                      </div>
                    </motion.div>
                  )}
                  
                  <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                    <div className={`bg-gradient-to-br ${service.color} p-8 text-white relative overflow-hidden`}>
                      <motion.div 
                        animate={hoveredCard === service.id ? { scale: 1.5, opacity: 0.2 } : { scale: 1, opacity: 0.1 }}
                        className="absolute -right-8 -top-8 w-32 h-32 bg-white rounded-full blur-2xl"
                      />
                      <div className="relative z-10">
                        <motion.div 
                          animate={hoveredCard === service.id ? { rotate: 360, scale: 1.1 } : { rotate: 0, scale: 1 }}
                          transition={{ duration: 0.5 }}
                          className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-5 backdrop-blur-sm"
                        >
                          {service.icon}
                        </motion.div>
                        <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                      </div>
                    </div>
                    <div className="p-7">
                      <p className="text-slate-600 leading-relaxed mb-5">{service.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.features.map((feature, i) => (
                          <motion.span 
                            key={i} 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full"
                          >
                            {feature}
                          </motion.span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-5 border-t border-slate-100">
                        <span className="text-sm text-slate-400">{service.price}</span>
                        <motion.button 
                          whileHover={{ x: 5 }}
                          className="text-blue-600 font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                        >
                          Learn More <FiChevronRight className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Process Section with Animated Steps */}
      <section className="py-28 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-5 py-2 rounded-full inline-block mb-5">
              Our Process
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-5 tracking-tight">How We Bring Ideas to Life</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              A proven methodology that ensures exceptional results every time
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Deep dive into your goals and requirements", icon: "🔍", color: "from-blue-500 to-cyan-500" },
              { step: "02", title: "Strategy", desc: "Crafting a tailored solution blueprint", icon: "📋", color: "from-indigo-500 to-purple-500" },
              { step: "03", title: "Development", desc: "Agile execution with regular updates", icon: "⚡", color: "from-purple-500 to-pink-500" },
              { step: "04", title: "Launch & Support", desc: "Seamless deployment and ongoing care", icon: "🚀", color: "from-blue-500 to-indigo-500" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -8 }}
                className="relative text-center group"
              >
                <div className="relative">
                  <div className={`w-24 h-24 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-4xl">{item.icon}</span>
                  </div>
                  {idx < 3 && (
                    <motion.div 
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="hidden md:block absolute -right-6 top-10 text-2xl text-slate-300"
                    >
                      →
                    </motion.div>
                  )}
                </div>
                <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us with Floating Elements */}
      <section className=" bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-5 py-2 rounded-full inline-block mb-5">
                  Why Choose Us
                </span>
                <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">Why Businesses Trust Mumuje Hartron</h2>
                <p className="text-slate-500 text-lg mb-10 leading-relaxed">
                  We combine technical excellence with a client-first approach to deliver solutions that drive real business value.
                </p>
              </motion.div>
              <div className="space-y-5">
                {[
                  { icon: <FiUsers />, title: "Expert Team", desc: "Industry veterans with deep technical expertise", color: "blue" },
                  { icon: <FiClock />, title: "Timely Delivery", desc: "Agile methodology ensuring on-time project completion", color: "indigo" },
                  { icon: <FiShield />, title: "Security First", desc: "Enterprise-grade security in every solution", color: "purple" },
                  { icon: <FiGlobe />, title: "Global Standards", desc: "Following international best practices and standards", color: "emerald" }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex gap-5 p-5 rounded-2xl hover:bg-slate-50 transition-all duration-300 cursor-pointer group"
                  >
                    <div className={`w-14 h-14 bg-${item.color}-50 rounded-xl flex items-center justify-center text-${item.color}-600 flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h3>
                      <p className="text-slate-500">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <motion.div
                animate={floatAnimation}
                className="absolute -top-10 -left-10 w-56 h-56 bg-blue-600/10 rounded-full blur-3xl"
              />
              <motion.div
                animate={pulseAnimation}
                className="absolute -bottom-10 -right-10 w-48 h-48 bg-indigo-600/10 rounded-full blur-3xl"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: "spring" }}
                whileHover={{ scale: 1.02, rotate: 2 }}
                className="relative bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-10 text-white text-center shadow-2xl"
              >
                <motion.div 
                  animate={floatAnimation}
                  className="text-7xl mb-6"
                >
                  💡
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
                <p className="text-blue-100 mb-8 leading-relaxed">Let's discuss how we can help you achieve your goals with our cutting-edge solutions.</p>
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-3.5 rounded-full font-bold shadow-xl inline-flex items-center gap-2 group"
                >
                  Schedule a Consultation
                  <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section with Flow Animation & Glow Effects */}
      <section className="py-28 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, rgba(37,99,235,0.1) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-sm font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-5 py-2 rounded-full inline-block mb-5 shadow-sm"
            >
              Technologies We Use
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-5 tracking-tight">
              Cutting-Edge{" "}
              <span className="relative inline-block">
                Tech Stack
                <motion.div 
                  animate={{ width: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                />
              </span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              We leverage the latest technologies to build future-ready solutions that scale with your business
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "from-cyan-400 to-blue-500", glow: "cyan" },
              { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "from-gray-600 to-gray-900", glow: "gray" },
              { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "from-green-500 to-emerald-600", glow: "green" },
              { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "from-blue-500 to-yellow-500", glow: "blue" },
              { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", color: "from-orange-500 to-yellow-500", glow: "orange" },
              { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "from-green-600 to-teal-500", glow: "green" },
              { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", color: "from-cyan-500 to-blue-600", glow: "cyan" },
              { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "from-blue-600 to-indigo-600", glow: "blue" },
              { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", color: "from-pink-500 to-rose-500", glow: "pink" },
              { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "from-blue-400 to-sky-600", glow: "blue" },
              { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", color: "from-blue-600 to-indigo-700", glow: "blue" },
              { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", color: "from-purple-500 to-pink-500", glow: "purple" },
              { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", color: "from-green-500 to-emerald-500", glow: "green" },
              { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", color: "from-red-500 to-rose-600", glow: "red" },
              { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", color: "from-yellow-500 to-orange-500", glow: "yellow" },
              { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "from-blue-500 to-indigo-600", glow: "blue" },
              { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", color: "from-red-500 to-red-700", glow: "red" },
              { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "from-orange-500 to-red-500", glow: "orange" }
            ].map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.02, type: "spring", stiffness: 100 }}
                whileHover={{ y: -12, scale: 1.08 }}
                className="group cursor-pointer relative"
              >
                {/* Glow Effect Background */}
                <motion.div 
                  animate={{ 
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: idx * 0.1 }}
                  className={`absolute -inset-1 bg-gradient-to-r ${tech.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                
                <div className="relative bg-white rounded-2xl p-6 text-center border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Animated Border */}
                  <motion.div 
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: idx * 0.05 }}
                    className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                  />
                  
                  {/* Icon Container with Animation */}
                  <motion.div 
                    animate={{ 
                      rotateY: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: idx * 0.2 }}
                    className="relative"
                  >
                    <div className={`w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br ${tech.color} rounded-2xl p-3 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                      <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain filter brightness-0 invert" />
                    </div>
                  </motion.div>
                  
                  {/* Tech Name with Glow */}
                  <motion.div 
                    animate={{ 
                      textShadow: [
                        "0 0 0px rgba(37,99,235,0)",
                        "0 0 10px rgba(37,99,235,0.5)",
                        "0 0 0px rgba(37,99,235,0)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.1 }}
                    className="text-slate-800 font-bold text-base mt-3 group-hover:text-blue-600 transition-colors duration-300"
                  >
                    {tech.name}
                  </motion.div>
                  
                  {/* Experience Badge */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.02 + 0.3 }}
                    className="mt-3"
                  >
                    <span className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded-full group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors duration-300">
                      Expert Level
                    </span>
                  </motion.div>
                  
                  {/* Animated Pulse Dot */}
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.1 }}
                    className="absolute bottom-3 right-3 w-2 h-2 bg-green-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Floating Particles Animation */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: Math.random() * window.innerWidth, y: -100, opacity: 0 }}
                animate={{ 
                  y: window.innerHeight + 100,
                  opacity: [0, 0.5, 0],
                  x: Math.random() * window.innerWidth
                }}
                transition={{ 
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  delay: Math.random() * 10,
                  ease: "linear"
                }}
                className="absolute w-1 h-1 bg-blue-400 rounded-full"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with Enhanced Animations */}
      <section className=" bg-white relative overflow-hidden">
        {/* Animated Background Waves */}
        <div className="absolute inset-0 opacity-5">
          <svg className="absolute bottom-0 w-full h-64" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#2563EB" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,170,1056,179,1152,165.3C1248,151,1344,117,1392,101.3L1440,85L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-sm font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-5 py-2 rounded-full inline-block mb-5 shadow-sm"
            >
              Testimonials
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-5 tracking-tight">
              What Our{" "}
              <span className="relative inline-block">
                Clients Say
                <motion.div 
                  animate={{ scaleX: [0, 1, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full origin-left"
                />
              </span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Real success stories from businesses we've helped transform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", role: "CTO, TechCorp", text: "The team at Mumuje Hartron delivered beyond our expectations. Their technical expertise and dedication are unmatched. They truly care about our success.", rating: 5, icon: "👩‍💼", color: "from-blue-500 to-cyan-500" },
              { name: "Michael Chen", role: "CEO, InnovateLabs", text: "Working with them has been a game-changer for our business. Highly recommended for any tech project. Their agile methodology kept us informed at every step.", rating: 5, icon: "👨‍💼", color: "from-indigo-500 to-purple-500" },
              { name: "Emily Rodriguez", role: "Product Head, ScaleUp", text: "Professional, innovative, and results-driven. A true partnership that added immense value to our product roadmap.", rating: 5, icon: "👩‍💻", color: "from-purple-500 to-pink-500" }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="relative group"
              >
                {/* Glow Effect */}
                <motion.div 
                  animate={{ 
                    opacity: [0.2, 0.5, 0.2],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: idx * 0.3 }}
                  className={`absolute -inset-1 bg-gradient-to-r ${testimonial.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                
                <div className="relative bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Quote Icon */}
                  <motion.div 
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: idx * 0.5 }}
                    className="absolute top-6 right-6 text-6xl opacity-10 text-slate-400 font-serif"
                  >
                    "
                  </motion.div>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`w-16 h-16 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center text-3xl text-white shadow-lg`}
                    >
                      {testimonial.icon}
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">{testimonial.name}</h4>
                      <p className="text-slate-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay: idx * 0.1 + i * 0.08, type: "spring" }}
                      >
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: idx * 0.1 + i * 0.1 }}
                        >
                          <FiStar className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.p 
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-slate-600 leading-relaxed"
                  >
                    "{testimonial.text}"
                  </motion.p>
                  
                  {/* Animated Border Bottom */}
                  <motion.div 
                    animate={{ width: ["0%", "100%", "0%"] }}
                    transition={{ duration: 4, repeat: Infinity, delay: idx * 0.5 }}
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="text-slate-400 text-sm mb-4">Trusted by innovative companies worldwide</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              {["Google", "Microsoft", "Amazon", "Meta", "Netflix"].map((company, i) => (
                <motion.span 
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="text-slate-500 font-semibold text-lg"
                >
                  {company}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section with Accordion Animation */}
      <section className="py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-5 py-2 rounded-full inline-block mb-5">
              FAQ
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-5 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Everything you need to know about our services and process
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              { q: "What is your typical project timeline?", a: "Project timelines vary based on complexity. A typical MVP takes 8-12 weeks, while enterprise solutions may take 3-6 months. We provide detailed timelines during the discovery phase and keep you updated throughout the development process." },
              { q: "Do you provide ongoing support?", a: "Yes, we offer comprehensive post-launch support including 24/7 monitoring, regular maintenance, security updates, and dedicated support teams to ensure your solution runs smoothly." },
              { q: "How do you handle data security?", a: "We follow industry best practices including end-to-end encryption, regular security audits, penetration testing, and compliance with standards like GDPR, HIPAA, and ISO 27001." },
              { q: "Can you work with our existing team?", a: "Absolutely! We collaborate seamlessly with in-house teams, providing additional expertise, resources, and guidance as needed. Our flexible engagement models ensure smooth integration." }
            ].map((faq, idx) => {
              const [isOpen, setIsOpen] = React.useState(false);
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <motion.div 
                    className={`bg-white rounded-2xl border transition-all duration-300 cursor-pointer ${isOpen ? 'border-blue-600 shadow-xl' : 'border-slate-100 hover:shadow-md'}`}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <div className="p-6 flex justify-between items-center">
                      <h3 className="font-bold text-slate-900 text-lg">{faq.q}</h3>
                      <motion.div 
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${isOpen ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'}`}
                      >
                        <FiChevronRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="px-6 pb-6 text-slate-500 leading-relaxed border-t border-slate-100 pt-4">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      

    </div>
  );
}