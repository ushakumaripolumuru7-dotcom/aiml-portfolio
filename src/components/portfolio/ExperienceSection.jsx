import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import SectionHeading from './SectionHeading';

const experiences = [
  {
    title: 'AI/ML Engineer',
    company: 'DeepMind Research Lab',
    period: 'Jan 2024 — Present',
    description: 'Leading development of large-scale language models and reinforcement learning systems. Building production ML pipelines processing millions of data points daily.',
    tech: ['PyTorch', 'Kubernetes', 'GCP', 'Transformers'],
  },
  {
    title: 'ML Research Intern',
    company: 'Google Brain',
    period: 'Jun 2023 — Dec 2023',
    description: 'Conducted research on efficient neural architecture search and model compression techniques. Published findings at NeurIPS with 15% improvement in inference speed.',
    tech: ['TensorFlow', 'JAX', 'Python', 'AutoML'],
  },
  {
    title: 'AI/ML Intern',
    company: 'OpenAI',
    period: 'Jan 2023 — May 2023',
    description: 'Worked on building machine learning models and data pipelines for safety research. Contributed to alignment techniques for large language models.',
    tech: ['Python', 'PyTorch', 'RLHF', 'Docker'],
  },
  {
    title: 'Data Science Research Assistant',
    company: 'Stanford AI Lab',
    period: 'Sep 2021 — Dec 2022',
    description: 'Researched novel approaches for few-shot learning in computer vision. Developed data augmentation strategies that improved model accuracy by 12%.',
    tech: ['Python', 'OpenCV', 'Scikit-Learn', 'Jupyter'],
  },
];

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading
        label="Experience"
        title="Professional Journey"
        subtitle="Building expertise through impactful roles in AI research and engineering."
      />

      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px timeline-line md:-translate-x-px" />

        {experiences.map((exp, i) => (
          <motion.div
            key={exp.title + exp.company}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`relative flex flex-col md:flex-row items-start gap-8 mb-12 ${
              i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 -translate-x-[5px] md:-translate-x-[6px] mt-6 z-10">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 animate-ping opacity-30" />
            </div>

            {/* Card */}
            <div className={`ml-6 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pr-0' : 'md:pl-0'}`}>
              <div className="glass rounded-2xl p-6 group hover:border-white/10 transition-all duration-500">
                <div className="flex items-center gap-2 mb-3">
                  <Briefcase className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-semibold text-cyan-400">{exp.company}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{exp.title}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-3.5 h-3.5 text-white/25" />
                  <span className="text-xs text-white/30 font-mono">{exp.period}</span>
                </div>
                <p className="text-sm text-white/40 leading-relaxed mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-white/35 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
