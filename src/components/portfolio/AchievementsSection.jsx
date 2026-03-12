import { motion } from 'framer-motion';
import { Trophy, Award, Medal, Star, Flame, Zap } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import SectionHeading from './SectionHeading';

const achievements = [
  {
    icon: Trophy,
    title: 'Kaggle Competitions',
    description: 'Ranked in Top 5% globally in multiple Kaggle ML competitions including image classification and NLP tasks.',
    color: 'from-amber-400 to-orange-500',
  },
  {
    icon: Award,
    title: 'ML Specialization Certificate',
    description: 'Completed the Stanford Machine Learning Specialization and Deep Learning Specialization by Andrew Ng.',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    icon: Flame,
    title: 'AI Hackathon Winner',
    description: 'First place at the Global AI Hackathon 2023 — built an AI-powered medical diagnosis assistant in 48 hours.',
    color: 'from-red-400 to-pink-500',
  },
  {
    icon: Star,
    title: 'Research Publication',
    description: 'Published peer-reviewed paper on efficient transformer architectures at NeurIPS 2023 conference.',
    color: 'from-purple-400 to-violet-500',
  },
  {
    icon: Medal,
    title: 'TensorFlow Developer Certificate',
    description: 'Google-certified TensorFlow Developer with expertise in building and deploying ML models at scale.',
    color: 'from-green-400 to-emerald-500',
  },
  {
    icon: Zap,
    title: 'Open Source Contributor',
    description: 'Active contributor to PyTorch and Hugging Face Transformers with 500+ GitHub stars on personal projects.',
    color: 'from-yellow-400 to-amber-500',
  },
];

export default function AchievementsSection() {
  return (
    <SectionWrapper id="achievements">
      <SectionHeading
        label="Achievements"
        title="Recognition & Awards"
        subtitle="Milestones and accomplishments along my AI/ML journey."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass rounded-2xl p-6 group hover:border-white/10 cursor-default transition-all duration-500 relative overflow-hidden"
          >
            {/* Glow on hover */}
            <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 blur-3xl transition-opacity duration-700`} />

            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
              <item.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-base font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
            <p className="text-sm text-white/35 leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
