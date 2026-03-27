import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Lock, ShieldCheck, ArrowRight, Github } from 'lucide-react';

const Signup = () => {
  // Animation variants for smooth entrance
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Dynamic Background Glows */}
      <div className="absolute top-[-5%] right-[-5%] w-[350px] h-[350px] bg-cyan-600/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-[5%] left-[-5%] w-[300px] h-[300px] bg-blue-700/10 blur-[100px] rounded-full" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-lg"
      >
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          
          {/* Header */}
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-extrabold text-white mb-2 tracking-tight">Create Account</h1>
            <p className="text-slate-400">Join our community of developers & learners</p>
          </div>

          <form className="space-y-4">
            {/* Full Name Field */}
            <motion.div variants={itemVariants} className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-400 ml-1">Full Name</label>
              <div className="relative group">
                <User className="absolute left-4 top-3.5 text-slate-500 group-focus-within:text-cyan-400 transition-colors w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Simran ..."
                  className="w-full bg-slate-900/40 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/40 transition-all placeholder:text-slate-600"
                />
              </div>
            </motion.div>

            {/* Email Field */}
            <motion.div variants={itemVariants} className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-400 ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-3.5 text-slate-500 group-focus-within:text-cyan-400 transition-colors w-5 h-5" />
                <input 
                  type="email" 
                  placeholder="example@gmail.com"
                  className="w-full bg-slate-900/40 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/40 transition-all placeholder:text-slate-600"
                />
              </div>
            </motion.div>

            {/* Password Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div variants={itemVariants} className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-400 ml-1">Password</label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-3.5 text-slate-500 group-focus-within:text-cyan-400 transition-colors w-5 h-5" />
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    className="w-full bg-slate-900/40 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/40 transition-all"
                  />
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-400 ml-1">Confirm</label>
                <div className="relative group">
                  <ShieldCheck className="absolute left-4 top-3.5 text-slate-500 group-focus-within:text-cyan-400 transition-colors w-5 h-5" />
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    className="w-full bg-slate-900/40 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/40 transition-all"
                  />
                </div>
              </motion.div>
            </div>

            {/* Privacy Checkbox */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 py-2">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-700 bg-slate-900 text-cyan-500 focus:ring-cyan-500/40" />
              <p className="text-xs text-slate-400">I agree to the <span className="text-cyan-400 cursor-pointer">Terms of Service</span> and <span className="text-cyan-400 cursor-pointer">Privacy Policy</span>.</p>
            </motion.div>

            {/* Register Button */}
            <motion.button 
              variants={itemVariants}
              whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 rounded-2xl mt-4 flex items-center justify-center gap-2 group shadow-xl transition-all"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </form>

          {/* Social Connect */}
          <motion.div variants={itemVariants} className="mt-8">
            <div className="relative flex items-center justify-center mb-6">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10"></div></div>
              <span className="relative px-4 bg-[#0a1122] text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">Rapid Signup</span>
            </div>
            
            <button className="w-full flex items-center justify-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 py-3 rounded-2xl text-sm font-bold transition-all">
              <Github className="w-5 h-5" /> Continue with GitHub
            </button>
          </motion.div>

          <p className="text-center text-slate-400 text-sm mt-8">
            Already have an account? 
            <a href="/login" className="text-cyan-400 font-bold ml-1 hover:underline underline-offset-4">Log In</a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;