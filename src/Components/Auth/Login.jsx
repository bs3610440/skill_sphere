import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, Github, Chrome } from 'lucide-react';

const Login = () => {
  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-900/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        {/* Glassmorphic Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
          
          <div className="text-center mb-8">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-block p-3 bg-cyan-500/10 rounded-2xl mb-4"
            >
              <Lock className="text-cyan-400 w-8 h-8" />
            </motion.div>
            <h1 className="text-3xl font-bold text-white tracking-tight">Welcome Back</h1>
            <p className="text-slate-400 mt-2">Sign in to continue your learning journey</p>
          </div>

          <form className="space-y-5">
            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-3 top-3.5 text-slate-500 group-focus-within:text-cyan-400 transition-colors w-5 h-5" />
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all placeholder:text-slate-600"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-medium text-slate-300">Password</label>
                <a href="#" className="text-xs text-cyan-400 hover:underline">Forgot?</a>
              </div>
              <div className="relative group">
                <Lock className="absolute left-3 top-3.5 text-slate-500 group-focus-within:text-cyan-400 transition-colors w-5 h-5" />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all placeholder:text-slate-600"
                />
              </div>
            </div>

            {/* Login Button */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-3 rounded-xl shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 group transition-all"
            >
              Sign In
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4">
            <div className="h-[1px] bg-white/10 flex-grow" />
            <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Or continue with</span>
            <div className="h-[1px] bg-white/10 flex-grow" />
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 py-2.5 rounded-xl text-sm font-medium transition-all">
              <Chrome className="w-4 h-4 text-red-400" /> Google
            </button>
            <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 py-2.5 rounded-xl text-sm font-medium transition-all">
              <Github className="w-4 h-4 text-slate-300" /> Github
            </button>
          </div>

          <p className="text-center text-slate-400 text-sm mt-8">
            Don't have an account? 
            <a href="#" className="text-cyan-400 font-bold ml-1 hover:underline">Sign Up</a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;