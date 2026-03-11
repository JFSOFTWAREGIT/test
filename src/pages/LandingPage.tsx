import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Zap, FlaskConical, Recycle, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export function LandingPage() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50 via-transparent to-transparent opacity-60"></div>
        
        <div className="relative w-full max-w-[1200px] flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative mb-[-8%] z-0"
          >
            <h1 className="font-serif font-bold text-5xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-slate-800 to-slate-400 opacity-90">
              STEP INTO<br/>THE FUTURE
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-full max-w-2xl aspect-[4/3] flex items-center justify-center z-10 animate-float"
          >
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM8u04XyMaETiecA8p34ROrk_wqyRFtOucwYnHLoxSbYbG17e8widTJxTl--YUfzuWcaqO8Ak80ZTCupXZlYNhCnzc27jULsvbMS_nIAEOLfuMToqjy2puCAggYCaNJUi2PEVNtiWkeywsDCM2kOhLar9bT5j3JTfQV6SnN2b-jg_5vi3VGc8IHbLbsvVMftzi_Z9qgh1TDm35_4OhHYgZJUGT7QXEqv53WgSst0xbhPvpeSoA5duBTVfpFAwQgyC4sXNQ4jeKlBw" 
              alt="Floating Sneaker"
              className="w-full h-full object-contain drop-shadow-2xl rotate-[-15deg]"
              referrerPolicy="no-referrer"
            />

            {/* Feature Cards */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute top-1/4 left-0 hidden md:flex glass-panel p-3 rounded-xl items-center gap-3 shadow-lg"
            >
              <div className="bg-primary/10 p-2 rounded-lg text-primary">
                <Recycle className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-800">Eco-Foam</p>
                <p className="text-slate-500">Recycled Materials</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute bottom-1/3 right-0 hidden md:flex glass-panel p-3 rounded-xl items-center gap-3 shadow-lg"
            >
              <div className="bg-primary/10 p-2 rounded-lg text-primary">
                <Zap className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-800">Aerodynamic</p>
                <p className="text-slate-500">Zero Resistance</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center gap-6 mt-8 z-20"
          >
            <p className="text-slate-600 text-lg md:text-xl max-w-md text-center font-light">
              Experience the pinnacle of footwear technology. Designed for those who never stop moving.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <Link to="/collections" className="group relative px-8 py-4 bg-primary text-white text-base font-bold rounded-full overflow-hidden shadow-lg shadow-primary/30 transition-all hover:shadow-primary/50 hover:scale-105 active:scale-95 flex items-center gap-2">
                Shop The Drop <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="px-8 py-4 bg-transparent border border-slate-300 text-slate-800 text-base font-bold rounded-full hover:bg-slate-100 transition-all active:scale-95">
                View Lookbook
              </button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <span className="text-xs font-medium uppercase tracking-widest text-slate-500">Scroll</span>
          <ChevronDown className="w-4 h-4 text-slate-500" />
        </div>
      </header>

      {/* Features Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Reactive Cushioning</h3>
            <p className="text-slate-500 leading-relaxed">
              Our proprietary foam technology adapts to your stride, returning energy with every step you take.
            </p>
          </div>
          <div className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
              <FlaskConical className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Adaptive Materials</h3>
            <p className="text-slate-500 leading-relaxed">
              Smart-mesh upper regulates temperature and molds to your foot for a bespoke fit sensation.
            </p>
          </div>
          <div className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
              <Recycle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Circular Design</h3>
            <p className="text-slate-500 leading-relaxed">
              100% recyclable components. We're committed to closing the loop on footwear waste.
            </p>
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-12 bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="w-full md:w-1/2 h-[400px] relative overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCficyPAgUIOdmb5zkdiuJmXScXKO_og143nv0GmFwlG8o_JuSohF2CrJMsqka1AJyG71JgksJH4pPa9piR3IEuV9NpPba1ZyfjViDsnln6vVYM3FFFMLci2zrI38TUmj09oDLLm4z_RNCLQd-i7BVSysk-g3kb41hQSdDuzPJzVnfJif821rikMfFcIV0RKi5yU04mE9nw9AWdvpI1h2CTcFc5Zhy0lZLR2kHnhc2nvWrTpkSc_h34CTqVqKpHa2Y3s1b54svQRug" 
              alt="Urban Explorer"
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-full md:w-1/2 p-10 md:p-16 text-white">
            <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full mb-4 border border-primary/30">
              NEW COLLECTION
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              Urban Explorer<br/>Series
            </h2>
            <p className="text-slate-300 mb-8 text-lg leading-relaxed max-w-md">
              Designed for the city streets. Waterproof, durable, and unmistakably stylish. The concrete jungle awaits.
            </p>
            <button className="text-white font-bold border-b-2 border-primary pb-1 hover:text-primary transition-colors inline-flex items-center gap-2 group">
              Explore Collection <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
