import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink, Sparkles, BrainCircuit } from 'lucide-react';

export default function HeroSection() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-purple-600/10 blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-cyan-500/5 to-purple-600/5 blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-cyan-500/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-white/60">Available for opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
          >
            <span className="text-white">Hi, I'm</span>
            <br />
            <span className="neon-text">Alex Chen</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-4 flex items-center gap-3"
          >
            <BrainCircuit className="w-5 h-5 text-cyan-400" />
            <span className="text-lg md:text-xl font-medium text-white/70">AI / ML Engineer</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-base md:text-lg text-white/40 leading-relaxed max-w-lg"
          >
            Building intelligent systems with Artificial Intelligence and Machine Learning.
            Transforming data into actionable insights and creating AI solutions that push boundaries.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollTo('#projects')}
              className="px-7 py-3.5 rounded-xl btn-gradient text-white font-semibold text-sm flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              View Projects
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="px-7 py-3.5 rounded-xl btn-outline-glow text-white/80 font-semibold text-sm flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Contact Me
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex items-center gap-6"
          >
            {[
              { value: '50+', label: 'Projects' },
              { value: '3+', label: 'Years Exp.' },
              { value: '10+', label: 'Publications' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-xl font-bold neon-text">{stat.value}</div>
                <div className="text-xs text-white/30 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right - Profile visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:flex justify-center items-center"
        >
          <div className="relative">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-600/20 blur-2xl animate-pulse-slow" />
            <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-cyan-500/10 to-purple-600/10 border border-white/5 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[#12121a] to-[#1a1a2e] border border-white/10 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <BrainCircuit className="w-20 h-20 text-cyan-400/60 mx-auto mb-3" />
                  <span className="text-white/30 text-sm font-mono">AI.Engineer</span>
                </div>
              </div>
            </div>
            {/* Floating badges */}
            {[
              { label: 'PyTorch', top: '10%', right: '-10%', delay: 0 },
              { label: 'TensorFlow', top: '60%', right: '-15%', delay: 0.5 },
              { label: 'Python', top: '80%', left: '5%', delay: 1 },
              { label: 'NLP', top: '5%', left: '-5%', delay: 1.5 },
            ].map((badge) => (
              <motion.div
                key={badge.label}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: badge.delay }}
                className="absolute glass rounded-lg px-3 py-1.5 text-xs font-mono text-cyan-400/80"
                style={{ top: badge.top, right: badge.right, left: badge.left }}
              >
                {badge.label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('#about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 hover:text-white/40 transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </section>
  );
}
