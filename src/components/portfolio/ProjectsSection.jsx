import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import SectionHeading from './SectionHeading';

const projects = [
  {
    title: 'Movie Recommendation System',
    description: 'A collaborative filtering and content-based recommendation engine that analyzes user preferences and movie metadata to suggest personalized film recommendations.',
    tech: ['Python', 'Scikit-Learn', 'Pandas', 'Flask'],
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&q=80',
    github: '#',
    demo: '#',
  },
  {
    title: 'Fake News Detection (NLP)',
    description: 'NLP pipeline leveraging transformer-based models to classify news articles as real or fake with 97% accuracy using advanced text analysis techniques.',
    tech: ['Python', 'BERT', 'TensorFlow', 'NLTK'],
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168d5c?w=600&q=80',
    github: '#',
    demo: '#',
  },
  {
    title: 'AI Chatbot with Transformers',
    description: 'An intelligent conversational AI chatbot built using transformer architecture, capable of context-aware multi-turn dialogue with knowledge retrieval.',
    tech: ['PyTorch', 'Transformers', 'FastAPI', 'React'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',
    github: '#',
    demo: '#',
  },
  {
    title: 'Image Classification (CNN)',
    description: 'Deep convolutional neural network for multi-class image classification with data augmentation, achieving state-of-the-art accuracy on custom datasets.',
    tech: ['TensorFlow', 'Keras', 'OpenCV', 'NumPy'],
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80',
    github: '#',
    demo: null,
  },
  {
    title: 'Sentiment Analysis (BERT)',
    description: 'Fine-tuned BERT model for real-time sentiment analysis of social media posts and product reviews with multi-language support and emotion detection.',
    tech: ['Python', 'BERT', 'HuggingFace', 'Docker'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    github: '#',
    demo: '#',
  },
  {
    title: 'Autonomous Drone Navigation',
    description: 'Reinforcement learning-based system for autonomous drone navigation in complex environments with obstacle avoidance and path planning capabilities.',
    tech: ['Python', 'PyTorch', 'ROS', 'OpenCV'],
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&q=80',
    github: '#',
    demo: null,
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group glass rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-500"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Floating links */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          {project.github && (
            <a href={project.github} className="w-9 h-9 rounded-lg glass flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all">
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.demo && (
            <a href={project.demo} className="w-9 h-9 rounded-lg glass flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all">
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
            {project.title}
          </h3>
          <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-cyan-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
        <p className="text-sm text-white/35 leading-relaxed mb-5 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-white/5 text-white/40 border border-white/5"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading
        label="Projects"
        title="Featured Work"
        subtitle="A selection of AI/ML projects showcasing practical applications of cutting-edge technologies."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
