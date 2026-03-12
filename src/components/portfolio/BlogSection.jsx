import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, BookOpen } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import SectionHeading from './SectionHeading';

const articles = [
  {
    title: 'Introduction to Neural Networks: From Perceptrons to Deep Learning',
    excerpt: 'A comprehensive guide exploring the evolution of neural networks, from single-layer perceptrons to modern deep learning architectures.',
    date: 'Mar 2025',
    readTime: '8 min',
    tag: 'Deep Learning',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80',
  },
  {
    title: 'How Transformers Work: The Architecture Behind GPT and BERT',
    excerpt: 'Breaking down the self-attention mechanism and positional encoding that make transformers the foundation of modern NLP.',
    date: 'Feb 2025',
    readTime: '12 min',
    tag: 'NLP',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',
  },
  {
    title: "AI Trends 2025: What's Next for Machine Learning",
    excerpt: 'Exploring emerging trends in AI including multimodal models, AI agents, edge computing, and the democratization of machine learning.',
    date: 'Jan 2025',
    readTime: '10 min',
    tag: 'Industry',
    image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=600&q=80',
  },
];

export default function BlogSection() {
  return (
    <SectionWrapper id="blog">
      <SectionHeading
        label="Blog & Research"
        title="Latest Articles"
        subtitle="Sharing knowledge and insights about AI, ML, and emerging technologies."
      />

      <div className="grid md:grid-cols-3 gap-6">
        {articles.map((article, i) => (
          <motion.article
            key={article.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group glass rounded-2xl overflow-hidden hover:border-white/10 cursor-pointer transition-all duration-500"
          >
            <div className="relative h-40 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
              <span className="absolute bottom-3 left-4 px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-cyan-500/20 text-cyan-400 border border-cyan-500/20">
                {article.tag}
              </span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3 text-xs text-white/25">
                <span>{article.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </span>
              </div>
              <h3 className="text-base font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                {article.title}
              </h3>
              <p className="text-sm text-white/30 leading-relaxed line-clamp-2 mb-4">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-1 text-sm text-cyan-400/60 group-hover:text-cyan-400 transition-colors">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Read article</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
