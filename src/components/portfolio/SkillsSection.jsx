import { motion } from 'framer-motion';
import { Code2, BrainCircuit, Library, Wrench } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import SectionHeading from './SectionHeading';

const skillCategories = [
  {
    title: 'Programming',
    icon: Code2,
    color: 'from-cyan-400 to-blue-500',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'Java', level: 80 },
      { name: 'C++', level: 75 },
      { name: 'JavaScript', level: 82 },
    ],
  },
  {
    title: 'AI / ML',
    icon: BrainCircuit,
    color: 'from-purple-400 to-pink-500',
    skills: [
      { name: 'Machine Learning', level: 93 },
      { name: 'Deep Learning', level: 90 },
      { name: 'Neural Networks', level: 88 },
      { name: 'NLP', level: 85 },
      { name: 'Computer Vision', level: 82 },
    ],
  },
  {
    title: 'Libraries & Frameworks',
    icon: Library,
    color: 'from-green-400 to-emerald-500',
    skills: [
      { name: 'TensorFlow', level: 90 },
      { name: 'PyTorch', level: 92 },
      { name: 'Scikit-Learn', level: 88 },
      { name: 'Pandas', level: 90 },
      { name: 'NumPy', level: 92 },
      { name: 'OpenCV', level: 80 },
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    color: 'from-orange-400 to-amber-500',
    skills: [
      { name: 'Git', level: 88 },
      { name: 'Docker', level: 78 },
      { name: 'Linux', level: 85 },
      { name: 'Jupyter Notebook', level: 95 },
    ],
  },
];

function SkillBar({ name, level, delay, colorClass }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-white/60">{name}</span>
        <span className="text-xs font-mono text-white/30">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
          className={`h-full rounded-full bg-gradient-to-r ${colorClass}`}
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading
        label="Skills"
        title="Technical Expertise"
        subtitle="A comprehensive toolkit for building intelligent AI systems from concept to deployment."
      />
      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((cat, catIdx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIdx * 0.1 }}
            className="glass rounded-2xl p-6 md:p-8 group hover:border-white/10 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center`}>
                <cat.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">{cat.title}</h3>
            </div>
            <div className="space-y-5">
              {cat.skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={i * 0.05}
                  colorClass={cat.color}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
