import { motion } from 'framer-motion';
import { GraduationCap, MapPin, BrainCircuit, Eye, MessageSquare, Database, BarChart3 } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import SectionHeading from './SectionHeading';

const interests = [
  { icon: BrainCircuit, label: 'Machine Learning' },
  { icon: Database, label: 'Deep Learning' },
  { icon: MessageSquare, label: 'NLP' },
  { icon: Eye, label: 'Computer Vision' },
  { icon: BarChart3, label: 'Data Science' },
];

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        label="About Me"
        title="Passionate About AI"
        subtitle="Driven by curiosity and a desire to build intelligent systems that solve real-world problems."
      />

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Main about text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 glass rounded-2xl p-8 md:p-10"
        >
          <h3 className="text-xl font-semibold text-white mb-4">My Story</h3>
          <div className="space-y-4 text-white/45 leading-relaxed">
            <p>
              I'm an AI/ML Engineer passionate about leveraging artificial intelligence to create
              impactful solutions. My journey started with a fascination for how machines can learn
              and adapt, and it has evolved into a career dedicated to pushing the boundaries of
              what's possible with AI.
            </p>
            <p>
              With expertise spanning machine learning, deep learning, natural language processing,
              and computer vision, I build end-to-end intelligent systems—from data preprocessing
              and model architecture to deployment and optimization.
            </p>
            <p>
              I believe in the power of AI to transform industries and improve lives. Whether it's
              developing a recommendation engine, building a conversational AI, or training models
              for medical imaging, I approach every project with rigor, creativity, and a commitment
              to excellence.
            </p>
          </div>

          {/* Education */}
          <div className="mt-8 pt-8 border-t border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              <h4 className="font-semibold text-white">Education</h4>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                <div>
                  <p className="text-white/70 font-medium">M.S. in Artificial Intelligence</p>
                  <p className="text-white/30 text-sm">Stanford University — 2023</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                <div>
                  <p className="text-white/70 font-medium">B.S. in Computer Science</p>
                  <p className="text-white/30 text-sm">MIT — 2021</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2 text-white/25 text-sm">
            <MapPin className="w-4 h-4" />
            San Francisco, CA
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-2 space-y-4"
        >
          <h3 className="text-lg font-semibold text-white mb-6">Areas of Interest</h3>
          {interests.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="glass glass-hover rounded-xl p-5 flex items-center gap-4 cursor-default group transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/15 to-purple-500/15 flex items-center justify-center group-hover:from-cyan-500/25 group-hover:to-purple-500/25 transition-all">
                <item.icon className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="font-medium text-white/70 group-hover:text-white/90 transition-colors">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
