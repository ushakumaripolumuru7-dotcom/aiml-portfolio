import { motion } from 'framer-motion';

export default function SectionHeading({ label, title, subtitle }) {
  return (
    <div className="text-center mb-16">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 text-cyan-400 mb-4"
      >
        {label}
      </motion.span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
        <span className="text-white">{title.split(' ').slice(0, -1).join(' ')} </span>
        <span className="neon-text">{title.split(' ').slice(-1)}</span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-white/40 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
